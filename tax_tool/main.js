
function calculateUnravelledIndex(rowIndex, columnIndex, numCols) {
  let linearIndex = rowIndex * numCols + columnIndex;
  return linearIndex;
}

function getCell(band, option) {
  let column;
  if (option == 'main') {
    column = 2
  } else if (option == 'side') {
    column = 3
  } else if (option = 'total') {
    column = 4
  }
  let taxTable = document.getElementById('tax-table');
  linearIndex = calculateUnravelledIndex(band, column, 5);
  let cell = taxTable.children[Number.parseInt(linearIndex)];
  return cell;
}

function processCashAmount(value) {
  let processed = value == 0 ? '-' : '£ ' + Math.round(value);
  return processed;

}

class TaxCalculator {
  personalAllowance = 12570;
  tradingAllowance = 1000;
  taxRate = 0.2;
  messages = [];

  constructor(
    annualSalary,
    additionalIncome,
    taxBands = [
      { name: "personal allowance", lower: 0, upper: 12570, rate: 0 },
      { name: "basic rate", lower: 12571, upper: 50270, rate: 0.2 },
      { name: "higher rate", lower: 50271, upper: 125140, rate: 0.4 },
      { name: "additional rate", lower: 125141, upper: 10000000, rate: 0.45 },
    ]
  ) {
    this.annualSalary = Number.parseInt(annualSalary);
    this.additionalIncome = Number.parseInt(additionalIncome);
    this.taxBands = taxBands;
    this.tradingAllowance = this.tradingAllowance;
  }

  calculateIncomeTax() {
    let taxableAdditionalIncome = Math.max(
      this.additionalIncome - this.tradingAllowance,
      0
    );

    this.messages.push(
      `deducted trading allowance of £${Math.round(
        this.tradingAllowance
      )} from taxable income`
    );

    let totalIncome = this.annualSalary + taxableAdditionalIncome;
    let taxRatio = taxableAdditionalIncome / this.annualSalary;
    let totalTax = 0;
    let cell;

    this.taxBands.forEach(({ name, lower, upper, rate }, index) => {
 
      let amountOverLower = totalIncome - lower;
      let taxableAmountOver =
        amountOverLower < 0 ? 0 : Math.min(amountOverLower, upper - lower);
      let taxForband = taxableAmountOver * rate;

      let additionalIncomeTax = taxForband * taxRatio;
      let annualSalaryTax = taxForband - additionalIncomeTax;

      cell = getCell(index+1, 'main');
      cell.innerText = processCashAmount(annualSalaryTax)
      cell = getCell(index+1, 'side');
      cell.innerText  =processCashAmount(additionalIncomeTax);
      cell = getCell(index+1, 'total');
      cell.innerText  = processCashAmount(taxForband);

      this.messages.push(
        `<p>paid ${Math.round(taxForband)} in tax in tax band <span>${name}</span> at rate ${rate}`
      );
      this.messages.push(`lower and upper limit of band is ${lower} - ${upper}`)
      this.messages.push(`amount to be taxed in band is ${taxableAmountOver}`)
      this.messages.push(`split tax for band across annual and self-employed using ratio ${taxRatio}`)
      this.messages.push(`paid ${Math.round(additionalIncomeTax)} in tax on additional income`)
      this.messages.push(`paid ${Math.round(annualSalaryTax)} in tax on annual salary`)
      this.messages.push("------------------")

      totalTax = totalTax + taxForband;
    });

    let details = {
      totalTax: totalTax,
      totalAdditionalIncomeTax: totalTax * taxRatio,
    };

    return details;
  }

  getMessages() {
    return this.messages;
  }
}


let annualSalaryInput = document.getElementById("annual-salary");
let profitInput = document.getElementById("profit");
let explanationOutput = document.getElementById("workings");
let taxTable = document.getElementById("tax-table");
let showWorkingsButton = document.getElementById('show-workings-button');
let linearIndex;



document.addEventListener("submit", (e) => {
  taxTable.classList.remove("hidden");
  showWorkingsButton.classList.remove('hidden');

  e.preventDefault();

  let annualSalary = annualSalaryInput.value;
  let additionalIncome = profitInput.value;
  let calculator = new TaxCalculator(annualSalary, additionalIncome);
  let { totalTax, totalAdditionalIncomeTax } = calculator.calculateIncomeTax();
  let outputHeading = document.getElementById("output-heading");

  outputHeading.classList.remove("hidden");
  

  explanationOutput.innerHTML = "";

  calculator.getMessages().forEach((element) => {
    let messageOutput = document.createElement("p");
    messageOutput.innerHTML = element;
    explanationOutput.appendChild(messageOutput);
  });
  outputHeading.scrollIntoView({behavior:"smooth"});
});

document.addEventListener('click', (e) => {
  if (e.target.id=='show-workings-button') {
    explanationOutput.classList.toggle('hidden')
    if (e.target.classList.contains('collapsible') ) {
      e.target.classList.toggle('collapsible-closed')
      e.target.classList.toggle('collapsible-open')
    }
    explanationOutput.scrollIntoView({behavior:"smooth"})
  }
})

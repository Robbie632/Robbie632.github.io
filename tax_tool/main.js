
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
      `<p>duducted trading allowance of £${Math.round(
        this.tradingAllowance
      )} from taxable income</p>`
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
        `<p>paid ${Math.round(taxForband)} in tax in tax band <span>${name}</span> at rate ${rate}</p>`
      );
      this.messages.push(`<p>paid ${Math.round(additionalIncomeTax)} in tax on additional income </p>`)
      this.messages.push(`<p>paid ${Math.round(annualSalaryTax)} in tax on annual salary</p>`)
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
let output = document.getElementById("calculation-output");
let output2 = document.getElementById("tax-on-self-employed-output");
let explanationOutput = document.getElementById("workings");
let taxTable = document.getElementById("tax-table");
let linearIndex;



document.addEventListener("submit", (e) => {
  taxTable.classList.replace("tax-table-hidden", "tax-table");

  e.preventDefault();

  let annualSalary = annualSalaryInput.value;
  let additionalIncome = profitInput.value;
  let calculator = new TaxCalculator(annualSalary, additionalIncome);
  let { totalTax, totalAdditionalIncomeTax } = calculator.calculateIncomeTax();
  let outputHeaders = document.getElementsByClassName("output-header");
  for (const element of outputHeaders) {
    element.style.display = "block";
  }

  output.innerText = Math.round(totalTax);
  output2.innerText = Math.round(totalAdditionalIncomeTax);
  explanationOutput.innerHTML = "";

  calculator.getMessages().forEach((element) => {
    let messageOutput = document.createElement("p");
    messageOutput.innerHTML = element;
    explanationOutput.appendChild(messageOutput);
  });
  output.scrollIntoView();
});

document.addEventListener('click', (e) => {
  if (e.target.id=='show-workings-button') {
    explanationOutput.classList.toggle('hidden')
  }
})

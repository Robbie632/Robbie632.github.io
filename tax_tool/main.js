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
    let taxableAdditionalIncome = Math.max(this.additionalIncome - this.tradingAllowance, 0);
          this.messages.push("------------------")
    this.messages.push(`<p>duducted trading allowance of £${Math.round(this.tradingAllowance)} from taxable income</p>`)
    this.messages.push("------------------")
    let totalIncome = this.annualSalary + taxableAdditionalIncome;
    let taxRatio = taxableAdditionalIncome/this.annualSalary;
    
    let totalTax = 0;

    this.taxBands.forEach(({ name, lower, upper, rate }) => {
      let amountOverLower = totalIncome - lower;
      let taxableAmountOver =
        amountOverLower < 0 ? 0 : Math.min(amountOverLower, upper - lower);
      let taxForband = taxableAmountOver * rate;

      let additionalIncomeTax = taxForband * taxRatio;
      let annualSalaryTax =  taxForband - additionalIncomeTax;
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
        totalAdditionalIncomeTax: totalTax*taxRatio
      }

    return details;
  }

  getMessages() {
    return this.messages;
  }
}

class MessageHandler {
  constructor() {
    this.messages = []
  }

  addToBlock() {
    // implement here
  }
  render() {
    // leave blank
  } 
}



let annualSalaryInput = document.getElementById("annual-salary");
let profitInput = document.getElementById("profit");
let output = document.getElementById("calculation-output");
let output2 = document.getElementById("tax-on-self-employed-output");
let explanationOutput = document.getElementById("explanation-output");
let taxTable = document.getElementById('tax-table');
document.addEventListener("submit", (e) => {
  taxTable.classList.replace('tax-table-hidden', 'tax-table')

  e.preventDefault();

  let annualSalary = annualSalaryInput.value;
  let additionalIncome = profitInput.value;
  let calculator = new TaxCalculator(annualSalary, additionalIncome);
  let {totalTax, totalAdditionalIncomeTax} = calculator.calculateIncomeTax();
  let outputHeaders = document.getElementsByClassName('output-header');
  for (const element of outputHeaders) {
    element.style.display='block'
  }

  output.innerText = Math.round(totalTax);
  output2.innerText = Math.round(totalAdditionalIncomeTax)
  explanationOutput.innerHTML = "";

  calculator.getMessages().forEach((element) => {
    let messageOutput = document.createElement("p");
    messageOutput.innerHTML = element;
    explanationOutput.appendChild(messageOutput);
  });
  output.scrollIntoView();
});

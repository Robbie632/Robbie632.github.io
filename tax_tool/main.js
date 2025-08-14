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
  }

  calculateIncomeTax() {
    let taxableAdditionalIncome = Math.max(this.additionalIncome - 1000, 0);
    let totalIncome = this.annualSalary + taxableAdditionalIncome;
    let totalTax = 0;

    this.taxBands.forEach(({ name, lower, upper, rate }) => {
      debugger;
      let amountOverLower = totalIncome - lower;
      let taxableAmountOver =
        amountOverLower < 0 ? 0 : Math.min(amountOverLower, upper - lower);
      let taxForband = taxableAmountOver * rate;
      this.messages.push(
        `paid ${Math.round(taxForband)} in tax in tax band ${name} at rate ${rate}`
      );
      totalTax = totalTax + taxForband;
    });

    return totalTax;
  }

  getMessages() {
    return this.messages;
  }
}

let annualSalaryInput = document.getElementById("annual-salary");
let profitInput = document.getElementById("profit");
let output = document.getElementById("calculation-output");
let explanationOutput = document.getElementById("explanation-output");

document.addEventListener("submit", (e) => {
  e.preventDefault();

  let annualSalary = annualSalaryInput.value;
  let additionalIncome = profitInput.value;
  let calculator = new TaxCalculator(annualSalary, additionalIncome);
  let tax = calculator.calculateIncomeTax();

  output.innerText = Math.round(tax);
  explanationOutput.innerHTML = "";

  calculator.getMessages().forEach((element) => {
    let messageOutput = document.createElement("p");
    messageOutput.innerText = element;
    explanationOutput.appendChild(messageOutput);
  });
  output.scrollIntoView();
});

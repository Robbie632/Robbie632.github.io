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
    let taxRatio = taxableAdditionalIncome/this.annualSalary;
    
    let totalTax = 0;

    this.taxBands.forEach(({ name, lower, upper, rate }) => {
      debugger;
      let amountOverLower = totalIncome - lower;
      let taxableAmountOver =
        amountOverLower < 0 ? 0 : Math.min(amountOverLower, upper - lower);
      let taxForband = taxableAmountOver * rate;

      let additionalIncomeTax = taxForband * taxRatio;
      let annualSalaryTax =  taxForband - additionalIncomeTax;
      this.messages.push(
        `paid ${Math.round(taxForband)} in tax in tax band ${name} at rate ${rate}`
      );
      this.messages.push(`paid ${Math.round(additionalIncomeTax)} in tax on additional income`)
      this.messages.push(`paid ${Math.round(annualSalaryTax)} in tax on annual salary`)
      this.messages.push("------------------")
      totalTax = totalTax + taxForband;
    });
    debugger
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

let annualSalaryInput = document.getElementById("annual-salary");
let profitInput = document.getElementById("profit");
let output = document.getElementById("calculation-output");
let output2 = document.getElementById("tax-on-self-employed-output");
let explanationOutput = document.getElementById("explanation-output");

document.addEventListener("submit", (e) => {
  e.preventDefault();

  let annualSalary = annualSalaryInput.value;
  let additionalIncome = profitInput.value;
  let calculator = new TaxCalculator(annualSalary, additionalIncome);
  let {totalTax, totalAdditionalIncomeTax} = calculator.calculateIncomeTax();

  output.innerText = Math.round(totalTax);
  output2.innerText = Math.round(totalAdditionalIncomeTax)
  explanationOutput.innerHTML = "";

  calculator.getMessages().forEach((element) => {
    let messageOutput = document.createElement("p");
    messageOutput.innerText = element;
    explanationOutput.appendChild(messageOutput);
  });
  output.scrollIntoView();
});

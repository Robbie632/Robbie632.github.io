class TaxCalculator {
  personalAllowance = 12570;
  tradingAllowance = 1000;
  taxRate = 0.2;
  messages = [];

  constructor(annualSalary, additionalIncome) {
    this.annualSalary = Number.parseInt(annualSalary);
    this.additionalIncome = Number.parseInt(additionalIncome);
    this.calculateTaxRate();
  }

  calculateTaxRate() {
    let totalIncome = this.annualSalary + this.additionalIncome;
    this.messages.push(`total income is ${totalIncome}`)
    if (totalIncome <= 12570) {
        this.messages.push("total income less than 12570 so tax rate is 0")
      this.taxRate = 0;
    } else if (totalIncome > 12570 && totalIncome <= 50270) {
      this.taxRate = 0.2;
      this.messages.push("total income is between 12570 and 50270 so tax rate is 0.2")
    } else if (totalIncome > 50270 && totalIncome <= 125140) {
      this.taxRate = 0.4;
      this.messages.push("total income is between 50270 and 125140 so tax rate is 0.4")
    } else if ((totalIncome > 125140)) {
      this.taxRate = 0.5;
            this.messages.push("total income is above 125140 so tax rate is 0.5")
    }
  }

  calculateIncomeTax() {
    let taxableAdditionalIncome = Math.max(this.additionalIncome - 1000, 0);
    this.messages.push(`taxable income is ${taxableAdditionalIncome}`)
    let tax = taxableAdditionalIncome * this.taxRate;
    return tax;
  }

  getMessages() {
    return this.messages;
  }
}

let annualSalaryInput = document.getElementById("annual-salary");
let profitInput = document.getElementById("profit");
let output = document.getElementById("calculation-output");
let explanationOutput = document.getElementById("explanation-output")

document.addEventListener("submit", (e) => {
  e.preventDefault();

  let annualSalary = annualSalaryInput.value;
  let additionalIncome = profitInput.value;
  let calculator = new TaxCalculator(annualSalary, additionalIncome);
  let tax = calculator.calculateIncomeTax();
  
  output.innerText = tax;
  explanationOutput.innerHTML = '';

  calculator.getMessages().forEach(element => {
    let messageOutput = document.createElement('p')
    messageOutput.innerText = element;
    explanationOutput.appendChild(messageOutput);
    
  });
  output.scrollIntoView();

});

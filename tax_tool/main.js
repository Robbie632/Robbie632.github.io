
/* This script calculates the tax and National Insurance (NI) contributions
  for a self-employed tutor in the UK, based on the 2024/2025 tax year rates.
*/
class TaxCalculator{
    
    personalAllowance = 12570;
    tradingAllowance = 1000;
    taxRate = 0.2;
    
    constructor(annualSalary, additionalIncome) {
        this.annualSalary = annualSalary;
        this.additionalIncome = additionalIncome;
    }

    calculateIncomeTax() {
        let taxableAdditionalIncome = Math.max(this.additionalIncome - 1000, 0);
        let tax = taxableAdditionalIncome * this.taxRate;
        return tax;
    } 
}
let annualSalaryInput = document.getElementById('annual-salary');
let profitInput = document.getElementById('profit');
let output = document.getElementById('calculation-output');

document.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let annualSalary = annualSalaryInput.value;
    let additionalIncome = profitInput.value;
    let calculator = new TaxCalculator(annualSalary, additionalIncome);
    let tax = calculator.calculateIncomeTax();
    output.innerText = tax;


})

// function calculateTutorTaxAndNI(earnings) {
//   // Constants for the 2024/2025 tax year
//   const personalAllowance = 12570;
//   const basicRateBand = 50270;
//   const higherRateBand = 125140;

//   // National Insurance rates for self-employed (Class 2 & Class 4)
//   const class2Threshold = 6725;
//   const class4LowerThreshold = 12570;
//   const class4HigherThreshold = 50270;

//   const class4LowerRate = 0.06; // 6%
//   const class4HigherRate = 0.02; // 2%
//   const class2Rate = 3.45; // £3.45 per week

//   let taxPayable = 0;
//   let niPayable = 0;

//   // --- Calculate Income Tax ---
//   let taxableIncome = Math.max(0, earnings - personalAllowance);

//   if (taxableIncome > basicRateBand) {
//     // Higher rate tax
//     let higherRateIncome = taxableIncome - basicRateBand;
//     taxPayable += higherRateIncome * 0.40;
//     taxableIncome = basicRateBand;
//   }
  
//   // Basic rate tax
//   if (taxableIncome > 0) {
//     taxPayable += taxableIncome * 0.20;
//   }

//   // --- Calculate National Insurance ---
//   // Class 4 NI
//   let class4Income = Math.max(0, earnings - class4LowerThreshold);
//   if (class4Income > 0) {
//     if (class4Income > (class4HigherThreshold - class4LowerThreshold)) {
//       niPayable += (class4HigherThreshold - class4LowerThreshold) * class4LowerRate;
//       niPayable += (class4Income - (class4HigherThreshold - class4LowerThreshold)) * class4HigherRate;
//     } else {
//       niPayable += class4Income * class4LowerRate;
//     }
//   }

//   // Class 2 NI (flat rate)
//   if (earnings > class2Threshold) {
//     niPayable += class2Rate * 52; // 52 weeks in a year
//   }

//   return {
//     totalEarnings: earnings,
//     tax: taxPayable,
//     ni: niPayable,
//     totalLiability: taxPayable + niPayable
//   };
// }

// // Example Usage:
// const annualEarnings = 35000;
// const results = calculateTutorTaxAndNI(annualEarnings);

// console.log(`Annual Earnings: £${results.totalEarnings.toFixed(2)}`);
// console.log(`Income Tax Paid: £${results.tax.toFixed(2)}`);
// console.log(`National Insurance Paid: £${results.ni.toFixed(2)}`);
// console.log(`Total Tax & NI Liability: £${results.totalLiability.toFixed(2)}`);

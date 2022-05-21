window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// Get user-inputted values from the inputs
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Put default values in inputs 
function setupInitialValues() {

  // Selectors
  loanAmt = document.getElementById('loan-amount')
  term = document.getElementById('loan-years')
  yearlyRate = document.getElementById('loan-rate')
  monthlyPaymentUI = document.getElementById('monthly-payment')

  // Put default values in inputs 
  const loanInfo = {amount: 10000, years: 8, rate: 5.8};
  loanAmt.value = loanInfo.amount;
  term.value = loanInfo.years
  yearlyRate.value = loanInfo.rate;

  // Calculate monthly payment
  monthlyPaymentUI.innerHTML = calculateMonthlyPayment(loanInfo)
}
 
function calculateMonthlyPayment(loanInfo){
    let monthlyPayment = (loanInfo.amount * ((loanInfo.rate/100) / 12 )) / (1-(Math.pow((1+((loanInfo.rate/100) / 12 )), -(loanInfo.years*12))))
    return monthlyPayment = monthlyPayment.toFixed(2)
}

// Update the monthly payment
function update() {
  loanInfo = getCurrentUIValues()
  calculateMonthlyPayment(loanInfo)
  monthlyPaymentUI.innerHTML = calculateMonthlyPayment(loanInfo)
}


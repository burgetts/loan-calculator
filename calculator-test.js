
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 14000, years: 10, rate: 4.0})).toEqual('141.74')
  expect(calculateMonthlyPayment({amount: 0, years: 100000, rate: 4.678})).toEqual('0.00')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10000, years: 8, rate: 999})).toEqual('8325.00')
});

it('should handle small loan amounts', function() {
  expect(calculateMonthlyPayment({amount: 1, years: 8, rate: 4.3})).toEqual('0.01')
});

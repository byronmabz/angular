/* View independent business logic: Services
  https://code.angularjs.org/1.2.26/docs/guide/concepts
*/

var app = angular.module('invoice2', ['finance2'])
  .controller('InvoiceController', ['currencyConverter',
  function(currencyConverter) {
    this.quantity = 1;
    this.cost = 7.5;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      return currencyConverter.convert(this.quantity * this.cost, this.inCurr,
        outCurr);
    };

    this.pay = function pay() {
      window.alert("Thanks");
    };
}]);

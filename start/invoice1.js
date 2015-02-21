/*
  Adding UI logic: Controllers
  https://code.angularjs.org/1.2.26/docs/guide/concepts
*/

var app = angular.module('invoice1', []);

app.controller('InvoiceController', function() {
    this.quantity = 1;
    this.cost = 7.5;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };

    this.total = function total(outCurr) {
      return this.convertCurrency(this.quantity * this.cost, this.inCurr,
        outCurr);
    }

    this.convertCurrency = function convertCurrency(total, inCurr, outCurr) {
      return total * this.usdToForeignRates[outCurr] /
        this.usdToForeignRates[inCurr];
    }

    this.pay = function pay() {
      window.alert("Thanks");
    }
});

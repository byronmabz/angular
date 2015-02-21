/* View independent business logic: Services
  https://code.angularjs.org/1.2.26/docs/guide/concepts
*/

angular.module('finance2', [])
  .factory('currencyConverter', function() {
    currencies = ['USD', 'EUR', 'CNY'];
    usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };

    var convert = function (total, inCurr, outCurr) {
      return total * usdToForeignRates[outCurr] /
        usdToForeignRates[inCurr];
    };

    return {
      currencies: currencies;
      convert: convert;
    };
});

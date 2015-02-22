var app = angular.module("oddsApp", []);

app.controller("OddsController", function($scope){

  $scope.display = function(format, odds) {

    var string = '';

    if (format === 'decimal') {
      string = format + ': ' + (1 * odds);

      var fractional = getFractionalFromDecimal(odds);

      string += ' Fractional' + ': ' + fractional;
    }
    else {
      var decimal = frac2dec(odds);
      string += ' Decimal' + ': ' + decimal;
    }

    function getFractionalFromDecimal(odds) {
      var myDec = parseFloat(odds).toFixed(4);
      var dec = parseFloat(myDec-1);
      var myBestFrac = Math.round(dec) + "/" + 1;
      var myBestFracVal = Math.round(dec);
      var myBestErr = Math.abs(myBestFracVal - dec);
      for (i = 2; i<=200; i++) {
          var myFracVal = Math.round(dec*i)/i;
          var myErr = Math.abs(myFracVal - dec);
          if (myErr < myBestErr) {
              myBestFrac = Math.round(dec*i) + "/" + i;
              myBestFracVal = myFracVal;
              if (myErr == 0) break;
              myBestErr = myErr;
          }
      }
      return myBestFrac;
    }

    function frac2dec(frac) {
      var myArr = frac.split(/\//);
      myArr[1] = myArr[1] == undefined ? 1 : myArr[1];
      return((myArr[0]/myArr[1] + 1).toFixed(4));
    }

    return string;
  }
});

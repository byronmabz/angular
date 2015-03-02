var app = angular.module('myApp', []);

app.factory("Data", function() {
  return { message: ". I'm data from a Server!"};
});

app.filter("reverse", function(Data) {
  return function(text) {
    return text.split("").reverse().join("") + Data.message;
  }
});

app.controller("FirstCtrl", function($scope, Data) {
  $scope.data = Data;
});

app.controller("SecondCtrl", function($scope, Data) {
  $scope.data = Data;
});

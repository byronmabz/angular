var app = angular.module("superhero", []);

app.directive("superman", function() {
  // E=element,A=attribute,C=class,M=metadata
  return {
    restrict: "A",
    link: function() {
      alert("Stronger");
    }
  }
});

app.directive("flash", function() {
  // E=element,A=attribute,C=class,M=metadata
  return {
    restrict: "C",
    link: function() {
      alert("Faster");
    }
  }
});

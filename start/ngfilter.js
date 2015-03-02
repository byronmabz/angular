var app = angular.module("myApp", []);

app.factory("Avengers", function() {
  var Avengers = {};

  Avengers.cast = [
    {Name: "Robert Downey Jr.",
        Character: "Tony Stark / Iron Man"
    }, {
        Name: "Chris Evans",
        Character: "Steve Rogers / Captain America}"
    }, {
        Name: "Mark Ruffalo",
        Character: "Bruce Banner / The Hulk"
    }, {
        Name: "Chris Hemsworth",
        Character: "Thor"
    }, {
        Name: "Scarlett Johansson",
        Character: "Natasha Romanoff / Black Widow"
    }, {
        Name: "Jeremy Renner",
        Character: "Clint Barton / Hawkeye"
    }, {
        Name: "Tom Hiddleston",
        Character: "Loki"
    }, {
        Name: "Clark Gregg",
        Character: "Agent Phil Coulson"
    }, {
        Name: "Cobie Smulders",
        Character: "Agent Maria Hill"
    }, {
        Name: "Stellan Skarsgard",
        Character: "Selvig"
    }, {
        Name: "Samuel L. Jackson",
        Character: "Nick Fury"
    }, {
        Name: "Gwyneth Paltrow",
        Character: "Pepper Potts"
    }, {
        Name: "Paul Bettany",
        Character: "Jarvis (voice)"
    }, {
        Name: "Alexis Denisof",
        Character: "The Other"
    }, {
        Name: "Tina Benko",
        Character: "NASA Scientist"
    }
  ];
  return Avengers;
});

app.controller("AvengersCtrl", function($scope, Avengers) {
  $scope.avengers = Avengers;
});

let app = angular.module('myApp', [])

app.controller('MainCtrl', function($scope, $http, mathService) {

  //$scope and $http is are core services, mathService a service we made

  $scope.getPokemon = function() {
    let randomNumber = Math.floor(Math.random() * 721)
    $http({
        method: 'GET',
        url: `http://pokeapi.co/api/v2/pokemon/${randomNumber}`
      })
      .then(function successCallback(data, status, headers, config) {
          $scope.pokemon = data.data.name;
          $scope.sprite = data.data.sprites.front_default
          console.log($scope.sprite);
        },
        function errorCallback(data, status, headers, config) {
          $scope.pokemon = 'Sorry, an error occurred.'
        });
  }

  $scope.add = function() {
    $scope.result = mathService.add($scope.number1, $scope.number2)
  }
  $scope.subtract = function() {
    $scope.result = mathService.subtract($scope.number1, $scope.number2)
  }
  $scope.multiply = function() {
    $scope.result = mathService.multiply($scope.number1, $scope.number2)
  }
  $scope.divide = function() {
    $scope.result = mathService.divide($scope.number1, $scope.number2)
  }
})

app.service('mathService', function() {
  return {
    add: function(a, b) {
      return a + b
    },
    subtract: function(a, b) {
      return a - b
    },
    multiply: function(a, b) {
      return a * b
    },
    divide: function(a, b) {
      return a / b
    }
  }
})

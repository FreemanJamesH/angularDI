let app = angular.module('myApp', [])

app.controller('MainController', ['$scope', '$http', 'MathService', function($scope, $http, MathService) {

  $scope.magicCard = 'magicCard'
  $scope.pokePicture = 'http://rs1096.pbsrc.com/albums/g328/PIueto/Etc/pokeball.gif~c200'

  $scope.getCard = function(){
    console.log('getting magicCard');
    let randomNumber = (Math.floor(Math.random() * 100) + 1)
    $http({
      method: 'GET',
      url: `https://api.deckbrew.com/mtg/cards?page=${randomNumber}`
    })
    .then(function successCallback(data, status, headers, config) {
      $scope.magicCard = data.data[0].name
      $scope.picture = data.data[0].editions[0].image_url
    },
    function errorCallback(data, status, headers, config) {

    });
  }

  $scope.result = 'No results...yet.'

  $scope.add = MathService.add()

}])

app.service('MathService', function(){
  return {
    add: function(a,b){
      return a + b
    },
    subtract: function(a,b){
      return a - b
    },
    multiply: function(a,b){
      return a * b
    },
    divide: function(a,b){
      return a / b
    }
  }
})

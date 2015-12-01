angular.module('TheCriminalsApp', [])
  .controller('CriminalCtrl', ['$scope', '$http', function CriminalCtrl ($scope, $http){

    $scope.all = []

    $scope.newCriminal = {};
    $scope.addCriminal = addCriminal;
    $scope.removeCriminal = removeCriminal;
    $scope.showCriminal = showCriminal;
    $scope.updateCriminal = updateCriminal;

    getCriminals()
    function getCriminals() {
      $http
        .get('http:localhost:3000/criminals')
        .success(function(data){
          $scope.all = data.criminals
        })
    }

    function addCriminal() {
      $http
        .post('http://localhost:3000/criminals', $scope.newCriminal)
        .success(function(data){
          getCriminals();
        })
      $scope.newCriminal = {};

      $scope.styles = {
        'status alive': false,
        'status dead': false,
        'status': false
      }

      $scope.statusStyle = function (status) {
        if ( $scope.styles[style] = '') {
        }
      }
    }

    function removeCriminal(id) {
      $http
        .delete('http://localhost:3000/criminals/' + id)
        .success(function(){
          getCriminals()
        })
    }

    function showCriminal(criminal) {
      $scope.editCriminal = criminal
    }

    function updateCriminal(id) {
     $http
      .patch('http://localhost:3000/criminals/', $scope.editCriminal)
      .success (function(){
        getCriminals();
      })
    }

  }])
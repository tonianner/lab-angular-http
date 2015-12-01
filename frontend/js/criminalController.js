var app = angular.module('CriminalApp', [])

app.controller('CriminalCtrl', ['$scope', '$http', function CriminalCtrl($scope, $http){
  $scope.all = [
    {name: 'adam', location: 'china', status: 'alive'}
  ];

}]) // end of CriminalCtrl
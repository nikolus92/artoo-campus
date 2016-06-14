angular.module('artoo').controller('materialCtrl', function ($scope) {
   $scope.minDate = new Date(2016, 5, 17);  // assegnazione data minima


  $scope.filterDate = function(date) {
    var day = date.getDay();
    return day % 2 ===1;
  }
  
});
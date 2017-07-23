(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', function ($scope) {
  
  //initialise
  $scope.maxItems = 3;
  $scope.lunchmenu= '';
  $scope.message = 'Not too much';
  $scope.msgvisible = 'hidden'; //'visible' or 'hidden'
  $scope.msgColour = 'green';

  $scope.listCount = function () {

    if($scope.lunchmenu == '') return 0;

    var menuSplit = $scope.lunchmenu.split(",");

    menuSplit = removeBlanks(menuSplit);

    var numItems = menuSplit.length;

    return numItems;
  };

  $scope.checkIfTooMuch = function () {

    var numItems = $scope.listCount();

    $scope.msgColour = 'green';
    if(numItems > $scope.maxItems)
    {
      $scope.message = 'Too much!!';
      $scope.msgColour = 'red';
    }

    $scope.msgvisible = 'visible';

    return;
  };

  $scope.menuChanged = function () {

    $scope.msgvisible = 'hidden';
    
    return;
  };

  function removeBlanks(menuarr) {
    var arr = menuarr;

    var index = arr.indexOf('');
    while (index >= 0)
    {
      console.log(index);
      arr.splice(index, 1);
      index = arr.indexOf('');
    }

    return arr;
  }

});


})();

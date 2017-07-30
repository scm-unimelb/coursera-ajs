(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  //initialise
  $scope.maxItems = 3;
  $scope.lunchmenu= '';
  $scope.message = '';
  $scope.msgVisible = 'hidden'; //'visible' when checking or 'hidden' when entering
  $scope.msgColour = 'red'; //'green' or 'red' when empty

  $scope.listCount = function () {

    if($scope.lunchmenu == '') return 0;

    var theMenu = $scope.lunchmenu;

    theMenu = theMenu.replace(/ /g,"");

    var menuSplit = theMenu.split(",");

    menuSplit = removeBlanks(menuSplit);

    var numItems = menuSplit.length;

    return numItems;
  };

  $scope.checkIfTooMuch = function () {

    var numItems = $scope.listCount();

    switch (numItems)
    {
      case 0:
        $scope.message = 'Please enter data first';
        $scope.msgColour = 'red';
        break;

      case 1:
      case 2:
      case 3:
        $scope.message = 'Enjoy!';
        $scope.msgColour = 'green';
        break;

      default:
        $scope.message = 'Too much!';
        $scope.msgColour = 'green';
    }

    $scope.msgVisible = 'visible';

    return;
  };

  $scope.menuChanged = function () {

    $scope.msgVisible = 'hidden';
    
    return;
  };

  function removeBlanks(menuarr) {
    var arr = menuarr;

    var index = arr.indexOf('');
    while (index >= 0)
    {
      arr.splice(index, 1);
      index = arr.indexOf('');
    }

    return arr;
  }

}

})();

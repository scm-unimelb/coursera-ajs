(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.lunchmenu= '';

  $scope.listCount = function () {
    var menuitems = 0;
    if($scope.lunchmenu == '') return 0;
    var menusplit = $scope.lunchmenu.split(",");

    menusplit = removeBlanks(menusplit);

    var numitems = menusplit.length;
    return numitems;
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

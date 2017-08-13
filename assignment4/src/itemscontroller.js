(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['catdata'];

function ItemsController( catdata) {
  var menuitems = this;

  menuitems.items = catdata.data.menu_items;

  menuitems.category = 'category X';

  // console.log(menuitems);

}


})();


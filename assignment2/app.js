(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.getToBuyItems();

  tobuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

function AlreadyBoughtController(ShoppingListCheckOffService) {

  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {
      name: "Double bass",
      quantity: "1"
    },
    {
      name: "Cool Amplifier",
      quantity: "1"
    },
    {
      name: "Strings",
      quantity: "4"
    },
    {
      name: "Big car",
      quantity: "1"
    },
    {
      name: "Cookies for Yaakov",
      quantity: "100"      
    }
  ];

  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.buyItem = function (itemIndex) {
    // copy item from toBuyItems to boughtItems
    var item = toBuyItems[itemIndex];
    boughtItems.push(item);

    // remove item from tobuy
    toBuyItems.splice(itemIndex, 1);

    return;
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();



(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundList', FoundListDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundListDirective() {
  var ddo = {
    templateUrl: 'foundList.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundListDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


function FoundListDirectiveController() {
  var menu = this;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchterm = '';

  menu.found = {};
  menu.found.menu_items = [];

  menu.getMatchedMenuItems = function (searchterm) {
    
    if(searchterm)
    {
      var promise = MenuSearchService.getMatchedMenuItems(searchterm);

      promise.then(function (response) {

        // console.log(searchterm);

        menu.found.menu_items.length = 0;

        var list = response.data;
        for (var i = 0; i < list.menu_items.length; i++) {
          var desc = list.menu_items[i].description;
          if (desc.toLowerCase().indexOf(searchterm) > -1) {
            // console.log("Keep: "+desc);
            menu.found.menu_items.push(list.menu_items[i]);
          }
        }

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else
    {
      menu.found = {};
      menu.found.menu_items = [];
    }
  };

  menu.removeItem = function (itemIndex) {
    menu.found.menu_items.splice(itemIndex,1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchterm) {
    // console.log("searchterm = "+searchterm);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
    };
}

})();


(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['menudata'];

function CategoriesController( menudata) {
  var cats = this;

  cats.categories = {};

  cats.categories = menudata.data;

  // console.log(cats);

}


})();


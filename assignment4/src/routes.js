(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home tab if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesController as cats',
      resolve: {
        menudata: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
    }
    })

    .state('items', {
      url: '/items/{menucat}',
      templateUrl: 'templates/items.html',
      controller: 'ItemsController as menuitems',
      resolve: {
        catdata: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.menucat);
        }]
    }
  });
}

})();

(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignupService', 'MenuService', '$q'];
function SignUpController(SignupService, MenuService, $q) {
  var signUpCtrl = this;

  signUpCtrl.user = {firstname:"",lastname:"",email:"",phone:"",favourite:"",favouriteDetails:{}};

  signUpCtrl.success = false;

  signUpCtrl.signUpMsg = '';
  
  signUpCtrl.submit = function (newuser) {

    signUpCtrl.signUpMsg = '';

  	signUpCtrl.user = angular.copy(newuser);

    signUpCtrl.user.favourite = signUpCtrl.user.favourite.toUpperCase();

  	var checkFavPromise = MenuService.getSingleMenuItem(signUpCtrl.user.favourite);

      $q.all([checkFavPromise])
      .then(function (response) {

      console.log(response);

      signUpCtrl.user.favouriteDetails = angular.copy(response);

  		SignupService.setuser(signUpCtrl.user);

      signUpCtrl.success = true;

      signUpCtrl.signUpMsg = 'Success! Your information has been saved';

      })
      .catch(function (errorResponse) {
        // console.log(" ERROR ");
        signUpCtrl.signUpMsg = "No such menu number exists ('"+signUpCtrl.user.favourite+"')";
      });
  };
}

})();

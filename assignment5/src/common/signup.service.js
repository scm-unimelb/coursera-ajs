(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {

	var service = this;
	
	service.user = {firstname:"",lastname:"",email:"",phone:"",favourite:""};

	service.setuser = function (user) {

		service.user = user;

		console.log("service setting user.. "+user);
		return 1;
    };

	service.getuser = function () {
		console.log("service supplying user...");
		return service.user;
    };

  };

})();
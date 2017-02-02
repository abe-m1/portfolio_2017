(function(module) {

  "use strict";
  var LoginCtrl;
  LoginCtrl.$inject = [];



  function LoginCtrl() {
    
   

    var vm = this;
    console.log('i am hooked up')
  

  }


  module.controller('LoginCtrl', LoginCtrl);

})(angular.module('MyPortfolio.Controllers'));
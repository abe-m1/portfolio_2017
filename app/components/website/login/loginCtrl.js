(function(module) {

  "use strict";
  var LoginCtrl;
  LoginCtrl.$inject = [];



  function LoginCtrl() {
    
   

    var vm = this;
    vm.loginData = {
      email: '',
      password: ''
    }
    vm.error = ""

    vm.login = function() {

      

      vm.data = { 'email': vm.loginData.email, 'password': vm.loginData.password };
      authService.logIn(vm.data)
        .then(function(token) {
            console.log('here 1')

          tokenService.store(TOKEN_HASH, token.data);
          return userService.getUser(token.data);
        })
        .then(function(user) {
          console.log('here2')
        

        })
        .catch(function(err) {
          
        })
    }
  

  }


  module.controller('LoginCtrl', LoginCtrl);

})(angular.module('MyPortfolio.Controllers'));
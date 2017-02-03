(function(module) {

  "use strict";
  var LoginCtrl;
  LoginCtrl.$inject = ['authService'];



  function LoginCtrl(authService) {
    
   console.log('login running')

    var vm = this;
    vm.loginData = {
      email: '',
      password: ''
    }
    vm.error = ""
    vm.hello = 'hello'
    vm.login = function() {
        console.log('button pressed')
      

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
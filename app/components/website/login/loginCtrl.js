(function(module) {

  "use strict";
  var LoginCtrl;
  LoginCtrl.$inject = ['authService', 'tokenService', 'TOKEN_HASH' , '$state'];



  function LoginCtrl(authService, tokenService, TOKEN_HASH, $state) {
    
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
      console.log('login data', vm.data)
      authService.logIn(vm.data)
        .then(function(data) {
            console.log(data.data.token)
            console.log('here 1')

          tokenService.store(TOKEN_HASH, data.data.token);
        //   return userService.getUser(data.data.token);
        })
        .then(function(user) {
          console.log('here2')
          $state.go('dashboard');
        

        })
        .catch(function(err) {
          
        })
    }
  

  }


  module.controller('LoginCtrl', LoginCtrl);

})(angular.module('MyPortfolio.Controllers'));
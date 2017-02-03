(function(module) {
  var tokenSigningService;
  tokenSigningService.$inject = ['tokenService', '$log']

  function tokenSigningService(tokenService, $log) {

      function request(config){
          if (tokenService.retrieve('portfolio_token')){
              config.headers['x-portfolio-user-session-key'] = tokenService.retrieve('portfolio_token')
          }

          return config
      }

      return {
          request: request
      }

  }
  module.factory('tokenSigningService', tokenSigningService);
}(angular.module("MyPortfolio.Services")));
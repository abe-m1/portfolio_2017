(function (module) {

  httpInterceptor.$inject = ['$httpProvider'];
  function httpInterceptor($httpProvider) {
    console.log("pushing interceptors")
    // $httpProvider.defaults.headers.common['X-MC-User-Session-Key'] = '*';
    $httpProvider.interceptors.push('jsonApplicationTypeService');
    $httpProvider.interceptors.push('tokenSigningService');
  }
  module.config(httpInterceptor);
}(angular.module('MyPortfolio.Configs')));
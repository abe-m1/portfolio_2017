(function(module) {
  var loaderService;
  loaderService.$inject = ['$rootScope'];

  function loaderService($rootScope) {

      var exports = {
          showLoader: showLoader,
          hideLoader: hideLoader
      }

      function hideLoader(){
          $rootScope.$broadcast('loaderHide')
      }

      function showLoader(){
          $rootScope.$broadcast('loaderShow')
      }

      return exports
  }

  module.factory('loaderService', loaderService);
}(angular.module("MyPortfolio.Services")));
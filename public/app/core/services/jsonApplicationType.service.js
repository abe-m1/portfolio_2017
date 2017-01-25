(function (module) {
  var jsonApplicationTypeService;
  jsonApplicationTypeService.$inject = ['$log']
  function jsonApplicationTypeService ($log) {

    var exports = {
      request:request
    }

    var request = function(config){
        config.headers['Content-Type'] = "application/json";
        return config
    }

    return exports
  }
   module.factory('jsonApplicationTypeService', jsonApplicationTypeService);
}(angular.module("Yobs.Services")));
(function (module){
    urlFactory.$inject = []

    function urlFactory(){
        return "http://localhost:5000"
    }

    module.factory('urlFactory', urlFactory)
}(angular.module('MyPortfolio.Services')))
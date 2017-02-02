(function (module){
    urlFactory.$inject = []

    function urlFactory(){
        return "https://localhost:5000"
    }

    module.factory('urlFactory', urlFactory)
}(angular.module('MyPortfolio.Services')))
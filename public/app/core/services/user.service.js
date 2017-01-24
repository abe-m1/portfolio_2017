(function(module){
    'use strict'

    var userService;
    userService.$inject = ['tokenService', 'TOKEN_HASH', 'CURRENT_USER', 'urlFactory', '$log', '$http', 'alertingService', '$state'];

    function userService(tokenService, TOKEN_HASH, CURRENT_USER, urlFactory, $log, $http, alertingService, $state) {

        var exports = {
            signup: signup,
            getUser: getUser
            
        }

        function signup(data){
            return $http({
                method: 'POST',
                url: urlFactory + '/user/register',
                data: data
            })
        }

        function getUser(){
            return $http({
                method: 'GET',
                url: urlFactory + '/user/current'
            })
        }

        return exports
    }

    module.factory("userService", userService)
})(angular.module('MyPorfolio.Services'))
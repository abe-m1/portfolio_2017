(function(module){
    'use strict'
    var authService;

    authService.$inject = ['tokenService', 'TOKEN_HASH', 'CURRENT_USER', 'urlFactory', '$log', '$http'];

    function authService(tokenService, TOKEN_HASH, CURRENT_USER, urlFactory, $log, $http) {
        var exports = {
            logIn: logIn,
            isLoggedIn: isLoggedIn,
            logOut: logOut,
            refreshToken: refereshToken,
            getCurrentUser: getCurrentUser
        }

        function logIn(data){
            $log.info('auth service : attempting login', urlFactory + '/user/login)
            return $http({
                method: 'POST',
                url: urlFactory + '/user/login',
                data: data
            })
        }

        function getCurrentUser(){
            var user_token = tokenService.retrieve(CURRENT_USER);
            var token = tokenService.retrieve(TOKEN_HASH)

            if (user_token && token) {
                return user_token
            }
        }

        function isLoggedIn(){
            return (tokenService.retrieve(TOKEN_HASH) != null && tokenService.retrieve(CURRENT_USER) != null);
        }

        function logOut(){
            tokenService.destory(CURRENT_USER)
            tokenService.destory(TOKEN_HASH)
            $log.debug('logged out')
        }

        function refreshToken(){
            var promise = $http({
                method: 'POST',
                url: urlFactory + '/token/refresh'
            })
            .then(function(res){
                tokenService.store(res.data.token)
                return token.decode()
            })

            return promise
        }

        return exports;
    }
    module.factory('authService', authService)
})(angular.module('MyPortfolio.Services'))
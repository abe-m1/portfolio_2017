(function (module){
    var tokenService;
    tokenService.$inject = ['localStorageManager'];
    function tokenService(localStorageManager) {

        var exports = {
            store: store,
            retrieve: retrieve,
            decode: decode,
            destroy: destroy
        }

        function store(key, token) {
            return localStorageManager.store(key, token)
        }

        function retrieve(key){
            return localStorageManager.retrieve(key)
        }

        function decode(key) {
            return localStorageManager.decode(key)
        }

        function destroy(key){
            localStorageManager.destroy(key)
        }

        return exports
    }

    module.factory("tokenService", tokenService)
}(angular.module('MyPortfolio.Services')))
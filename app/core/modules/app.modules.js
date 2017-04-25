(function() {
  'use strict'

  angular
    .module('MyPortfolio', ['MyPortfolio.Controllers',
      'MyPortfolio.Services',
      'MyPortfolio.Configs',
      'MyPortfolio.Directives',
      'MyPortfolio.Constants',
      'MyPortfolio.Filters',
      'ui.router',
      'ui.bootstrap'
    ])

  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams, $state) {
      // console.log('Traveling to ' + toState.url, toState);
      // $rootScope.contentTitle = ;


      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        event.preventDefault();
        //   console.log("your state error", error)
      })
    })
  })

})();
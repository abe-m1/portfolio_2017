      (function () {
        'use strict';

        angular
          .module('MyPortfolio.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          .state('dashboard', {
          url: '/dashboard',
            views: {
             "": { templateUrl: 'components/crm/dashboard.html'},

            // the child views will be defined here (absolutely named)
            'columnOne@dashboard': { templateUrl: 'components/crm/crm.html' }            
            }
        })

         .state('website', {
           url: '/website',
            templateUrl: 'components/website/website.html',
        //    controller: 'websiteCtrl as websiteCtrl'
        })

        .state('login', {
           url: '/login',
            templateUrl: 'components/website/login.html'
        })


        
        $urlRouterProvider.otherwise('/website');
        }


      })();

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
            'columnOne@dashboard': { templateUrl: 'components/crm/crm.html' },
            'columnTwo@dashboard': { templateUrl: 'components/crm/home.html' }             
            }
        })

         .state('website', {
           url: '/website',
            templateUrl: 'components/website/website.html',
            controller: 'WebsiteCtrl'
        })

        .state('login', {
           url: '/login',
            templateUrl: 'components/website/login.html'
        })


        
        $urlRouterProvider.otherwise('/website');
        }


      })();

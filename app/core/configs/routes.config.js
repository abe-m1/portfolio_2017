      (function () {
        'use strict';

        angular
          .module('MyPortfolio.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          .state('dashboard', {
          url: '/dashboard',
          controller: 'DashboardCtrl',
            views: {
             "": { templateUrl: 'components/dashboard/dashboard.html'},

            // the child views will be defined here (absolutely named)
            'columnOne@dashboard': { templateUrl: 'components/dashboard/crm.html' },
            'columnTwo@dashboard': { templateUrl: 'components/dashboard/home.html' }             
            }
        })

         .state('website', {
           url: '/website',
            templateUrl: 'components/website/website.html',
            controller: 'WebsiteCtrl'
        })

        .state('website', {
           url: '/contact',
            templateUrl: 'components/website/contact.html',
            
        })

        .state('login', {
           url: '/login',
            templateUrl: 'components/website/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl'
        })


        
        $urlRouterProvider.otherwise('/website');
        }


      })();

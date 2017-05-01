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

        .state('contact', {
           url: '/contact',
            templateUrl: 'components/website/contact.html',
            
        })

        .state('recent', {
           url: '/recent',
            templateUrl: 'components/website/recent.html',
            
        })

        .state('skills', {
           url: '/skills',
            templateUrl: 'components/website/skills.html',
            controller: 'WebsiteCtrl',
            controllerAs: 'websiteCtrl'
            
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

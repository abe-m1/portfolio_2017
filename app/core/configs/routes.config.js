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
        //    template: '<h1> why dont you work </h1>'
            templateUrl: 'components/website/website.html',
        //    controller: 'websiteCtrl as websiteCtrl'
          
         })


        
        //   $urlRouterProvider.otherwise('/website');
        }


      })();

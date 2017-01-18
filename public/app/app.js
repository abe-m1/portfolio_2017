angular.module('userApp', [
  'ui.router',
  'ui.bootstrap',
  'website.controller',
  'crm.controller',
  'ngAnimate',
  'alert.controller'
  ])

  .controller('mainController', function(){
    var vm = this
    console.log('this works')
  })



.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {



    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        
         .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/views/crm/dashboard.html',
          
        })

         .state('website', {
           url: '/website',
           templateUrl: 'app/views/website/website.html',
           controller: 'websiteCtrl as websiteCtrl'
          
         })
        
        // .state('website.crm', {
        //   url: '/crm',
        //   templateUrl: 'app/views/crm/crm.html',
        //   controller: 'CrmCtrl as CrmCtrl'
        // })

        // .state('website.home', {
        //   url: '/home',
        //   templateUrl: 'app/views/website/home.html',
        //   controller: 'websiteCtrl as websiteCtrl'
        // })

        // .state('dashboard', {
        //   url: '/dashboard',
        //   templateUrl: 'app/views/crm/dashboard.html',
        //   controller: 'websiteCtrl'
        // })

        
      

        // .state('website.login', {
        //     url: '/login',
        //     templateUrl: 'app/views/website/login.html',
        //     controller: 'websiteCtrl as websiteCtrl'
        // })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        $urlRouterProvider.otherwise('/website/crm');
    //get rid of the hash in the URL
     // $locationProvider.html5Mode(true)
  }])

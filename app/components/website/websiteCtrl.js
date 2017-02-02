angular.module('website.controller', [])
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 200;   // always scroll by 50 extra pixels
  }])

  .controller('websiteCtrl', function($scope, $http, $location, $rootScope, $log,$anchorScroll, $state, $stateParams){
    console.log('website controller')
    var vm = this





})






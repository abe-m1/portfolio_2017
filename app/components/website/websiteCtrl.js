(function(module) {

  "use strict";
  var WebsiteCtrl;
  WebsiteCtrl.$inject = [];



  function WebsiteCtrl() {
    
  


    var vm = this;
    console.log('i am hooked up')
  
     vm.myInterval = 5000;
  vm.slides = [
    {
      image: '../../assets/images/green_screen.png'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
  }


  module.controller('WebsiteCtrl', WebsiteCtrl);

})(angular.module('MyPortfolio.Controllers'));






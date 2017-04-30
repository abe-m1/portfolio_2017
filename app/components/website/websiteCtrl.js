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

 
  $(document).ready(function(){
   $('.slider').slick({
    dots: true,
  infinite: true,
  speed: 50,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  adaptiveHeight: true
});
console.log('hello there')
});

  }


  module.controller('WebsiteCtrl', WebsiteCtrl);

})(angular.module('MyPortfolio.Controllers'));






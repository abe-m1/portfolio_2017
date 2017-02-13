(function(module) {

  "use strict";
  var CrmCtrl;
  CrmCtrl.$inject = [];



  function CrmCtrl() {
    
   

    var vm = this;
    console.log('i am hooked up')
  

  }


  module.controller('CrmCtrl', CrmCtrl);

})(angular.module('MyPortfolio.Controllers'));


angular.module('website.controller', [])
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 200;   // always scroll by 50 extra pixels
  }])

  .controller('websiteCtrl', function($scope, $http, $location, $rootScope, $log,$anchorScroll, $state, $stateParams){
    console.log('website controller')
    var vm = this


    $scope.sendEmail = function(h){
      console.log('this works')
      console.log('h', $scope.help)
      if (h === undefined) {
        window.localStorage.email = "E-mail address"
        $anchorScroll()
      } else {
      window.localStorage.email = $scope.help
      $anchorScroll()
      }
    }

    

    $scope.hello2 = window.localStorage.email
    // console.log( 'loc', $location.search())
    // $scope.thankAmount = $location.search()
    $scope.id = $stateParams.id
    $scope.amount = $stateParams.amount

    $scope.specialValue = 50


    vm.country = "US"

//this snippet pauses the carousel when modal is open

$('.modal').on('shown.bs.modal', function (e) {
    $('.carousel').carousel('pause');
})



   // $('#other1').click(function(){ 
   //   // $('#inlineCheckbox4').trigger('click');
   //   $('#inlineCheckbox4').trigger('click');
   // });

   $('#other1').keyup(function(){ 
     // $('#inlineCheckbox4').trigger('click');
     $('#inlineCheckbox4').trigger('click');
   });


var paypalButton = document.querySelector('#my-button')
if (paypalButton) {
   paypalButton.addEventListener('click', function (event) {
  event.preventDefault();
  checkout.paypal.initAuthFlow();
}, false);
 }


//THis code here uses the vimeo API to stop the video when bootstrap modal is closed
  var iframe = document.getElementById('video');
  // $f == Froogaloop
  var player = $f(iframe);



  var pauseButton = document.getElementById("pause-button");
  if (pauseButton) {
    pauseButton.addEventListener("click", function() {
    console.log('clicked')
  player.api("pause");
    })
  }



//     $('#carousel-example-generic').carousel({
//   interval: 5000,
//   cycle: true
// });
$scope.bonjour = false
$scope.allo = function() {
        console.log('oui oui')
        $scope.bonjour = true
    }


    $scope.scrollTop = function() {
        $anchorScroll()
        if ( window.innerWidth < 769 ) {
          vm.toggleNav()
        }
    }

	$scope.pages = {}
    function getImages() {
      $http( {
        method: "GET",
        // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
        url: '/api/page',
        headers: {
        'x-access-token': window.localStorage.token
        },
       } ).then( function( res ) {
          $scope.hello = res.data
          console.log('a', $scope.hello)

		  for ( var i in res.data ) {
			  var arr = res.data[ i ]
        console.log(arr.positions)
			  $scope.pages[ arr.name ] = arr.positions
		  }

        })
      }
      getImages()


  function getHeadlines() {
      $http( {
        method: "PUT",
        // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
        url: 'http://localhost:3000/api/blog',
        headers: {
        'x-access-token': window.localStorage.token
        },
       } ).then( function( res ) {
        
          $scope.good = res.data
          console.log('a', $scope.good)
          // res.data.posts[0].summary
      for ( var i in res.data ) {
        var arr = res.data[ i ]
        console.log(arr)
      }

        })
      }
      getHeadlines()



  $scope.doLogin = function() {
    $http( {
      method: "POST",
      url: "/api/login",
      data: {

            username: $scope.loginData.username,
            password: $scope.loginData.password

      }
    } ).then( function( response ) {
        console.log('here is response',response)
        if (response.data.message == "That user does not exist.") {
          console.log(response, "no users!")
          vm.noUser = true
        } else if (response.data.status == 404) {
            console.log(response)
            console.log("failed first")
            vm.badCreds = true
        } else if (response.data.status == 401) {
          console.log(response, "invalid credentials")
          vm.badCreds = true
        } else if (response.data.message = "Successfully Logged In! Take this token") {
            console.log( response, "USER SUCCESSFULLY LOGGED IN" )
            window.localStorage.username = response.data.user
            window.localStorage.user_id = response.data.id
            window.localStorage.token = response.data.token
            vm.username = response.data.user
            vm.badCreds = false
            vm.logged = true
            $location.path('/website/crm')
        } else {
            console.log("nope")
        }
    } )
  }

  console.log('amount', vm.amount)

  
    $scope.getToken = function () {
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/donation/token'
      }).success(function (data) {

         console.log(data.client_token);

        braintree.setup(data.client_token, "custom", {
        id: "my-sample-form",
        paypal: {
      container: "paypal-container",
      headless: true,
      // amount: vm.amount,
      // singleUse: true,
      // currency: 'USD',
      onSuccess: function(nonce, email){
      console.log(nonce)
      console.log('logged paypal')
      console.log('email', email)
      $http({
               method: 'POST',
               url: 'http://localhost:3000/api/donation/process',
               data: {
                 amount: vm.amount,
                 firstname: vm.firstname,
                 lastname: vm.lastname,
                 email: email,
                 phone:  vm.phone,
                 streetAddress: vm.address,
                 extendedAddress: vm.apt,
                 locality: vm.city,
                 region: vm.state,
                 postalCode: vm.zipcode,
                 countryCodeAlpha2: vm.country,
                 recurring: vm.recurring,
                 honor: vm.inhonorof,
                 keepinformed: vm.keepinformed,
                 sponsor: vm.sponsor,
                 payment_method_nonce: nonce
               },
               payment_method_nonce: nonce
             })
          .success(
            function (data) {

            if (data.success === true) {
            // $state.go('website.thankyou', {id: data, amount: completeDate})
            // $anchorScroll()
            var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
              ];
            console.log('braintree response',data)
            console.log('date', data.transaction.createdAt)
            var date = new Date(data.transaction.createdAt)
            var month = date.getMonth()
            var day = date.getDate()
            var year = date.getFullYear()
            var completeDate = monthNames[month] + ' ' + day + ', ' + year
            console.log(completeDate)
            $state.go('website.thankyou', {id: data, amount: completeDate})
            $anchorScroll()

            // vm.finally = data
            // $scope.amountP = data.transaction.amount
            // $scope.customerP = data.transaction.customer.id
          } else {
            console.log('there has been an error', data.message)
            vm.payError = data.message
            console.log('payError', vm.payError)

          }


            

        })
    }
      
    },
    

    onReady: function (integration) {
    checkout = integration;
  },
  
  onPaymentMethodReceived: function (obj) {
      // doSomethingWithTheNonce(obj.nonce);


    
  },
        hostedFields: {
          styles: {
            "input": {
              "font-size": "20px",
              "font-family": "Helvetica",
              "color": "#3A3A3A"
    }
          },
          number: {
            selector: "#card-number",
            placeholder: "Card Number"

          },
             cvv: {
                selector: "#cvv",
                placeholder: "CCV"
              },
           expirationMonth: {
             selector: "#expiration-month",
             placeholder: "MM"

           },
           
           expirationYear: {
             selector: "#expiration-year",
             placeholder: "YY"

           },
        },
        onError: function(error){
          console.log('e', error)
          // $scope.errors = error.message
          // console.log('scope', $scope.errors)
          $anchorScroll()
            
            $scope.$apply(function() {
    $scope.errors = "please enter a valid credit card number";
});
        },
        onPaymentMethodReceived: function(nonce){
          if (vm.amount == undefined) {

            $anchorScroll()
            
            $scope.$apply(function() {
    $scope.missing = "Please enter an amount";
});
            
          } 
          else if (vm.firstname == undefined) {
            $anchorScroll()
            
            $scope.$apply(function() {
    $scope.missing = "Please enter a first name";
            })
          }

          else {
          $http({
               method: 'POST',
               url: 'http://localhost:3000/api/donation/process',
               data: {
                 amount: vm.amount,
                 firstname: vm.firstname,
                 lastname: vm.lastname,
                 email: vm.emailAddress,
                 phone:  vm.phone,
                 streetAddress: vm.address,
                 extendedAddress: vm.apt,
                 locality: vm.city,
                 region: vm.state,
                 postalCode: vm.zipcode,
                 countryCodeAlpha2: vm.country,
                 recurring: vm.recurring,
                 honor: vm.inhonorof,
                 keepinformed: vm.keepinformed,
                 sponsor: vm.sponsor,
                 payment_method_nonce: nonce
               }
             })
          .success(
            function (data) {

            if (data.success === true) {
            // $state.go('website.thankyou', {id: data, amount: completeDate})
            // $anchorScroll()
            var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
              ];
            console.log('braintree response',data)
            console.log('date', data.transaction.createdAt)
            var date = new Date(data.transaction.createdAt)
            var month = date.getMonth()
            var day = date.getDate()
            var year = date.getFullYear()
            var completeDate = monthNames[month] + ' ' + day + ', ' + year
            console.log(completeDate)
            $state.go('website.thankyou', {id: data, amount: completeDate})
            $anchorScroll()

            // vm.finally = data
            // $scope.amountP = data.transaction.amount
            // $scope.customerP = data.transaction.customer.id
          } else {
            console.log('there has been an error', data.message)
            vm.payError = data.message
            console.log('payError', vm.payError)

          }


            

        })
        }
        }
        
    })

})
}

    $scope.getToken();

    
    $scope.sendMail = function(){
      console.log($scope.email)
      console.log('clicked')
      
      $http( {
      method: "POST",
      url: "http://localhost:3000/api/donation/mail",
      data: {
          
             email: $scope.hello2,
             firstname: $scope.firstNameHelp,
             lastname: $scope.lastNameHelp,
             phone: $scope.phoneHelp   ,
             title: 'request for help'
        
      }
    } ).success( function(data) {
        console.log('help', data)
        window.localStorage.email = ''
        $state.go('website.thankyouhelp')
        $anchorScroll()

        
        
    })
    $scope.help = ""




  }


})






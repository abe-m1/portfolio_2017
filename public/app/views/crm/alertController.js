angular.module('alert.controller', [])


.controller(
      "PromptModalController",
      function( $scope, modals, $http , $rootScope) {

        console.log('in 2nd controller', modals.user_id)

        $http( {
      method: "GET",
      // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
      url: 'http://localhost:3000/blog',
      headers: {
        'x-access-token': window.localStorage.token
      },
    } ).then( function( res) {
        console.log('res coming back', res.data)

          $scope.modalPics= res.data
          console.log('inthe modal', $scope.modalPics)

          
        })


        // Setup defaults using the modal params.
        $scope.message = ( modals.params().message || "Give me." );
        // Setup the form inputs (using modal params).
        $scope.form = {
          input: ( modals.params().placeholder || "" )
        };
        $scope.errorMessage = null;
        // ---
        // PUBLIC METHODS.
        // ---
        // Wire the modal buttons into modal resolution actions.
        $scope.cancel = modals.reject;

        $scope.htmml = ['img1', 'img2', 'img3']



        $scope.setImage = function(a){
          console.log(a._id)
          console.log('getting everything', a)
          // console.log(a.details.image)
          // console.log(a.details.index)
          

          // a.details.position = 1
          // console.log(a.details.position)
          // $scope.index = a.details.index
          // $scope.image_url = a.details.image
          // console.log($scope.image_url)
          // console.log('being passed or not', cava)

    //       $http( {
    //   method: "PUT",
    //   // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
      
    //   url: 'http://localhost:3000/blog/' + a._id,
    //   data: { pos: modals.user_id },
    //   headers: {
    //     'x-access-token': window.localStorage.token
    //   }
    // } )
  if (modals.page === 'whoweare'){
    $http( {
      method: "POST",
      // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
      
      url: 'http://localhost:3000/change',
      data: { page: modals.position_id,
              blog: a._id
               },
      headers: {
        'x-access-token': window.localStorage.token
      }
    } )

          .then( function( res) {
        console.log('res coming back', res)
          // for (blog in res.data){
          //   var hey = res.data[blog].blog
          //    for(url in hey) {
          //      console.log(url[hey])
          //    }
          //   console.log(hey)
          // }
          modals.resolve()

          // $scope.modalPics= res.data
          // console.log('in the modal --=-=--=', $scope.modalPics)
          $rootScope.$broadcast('some', [1,2,3]);          
        })

  } else if (modals.page === 'teambios'){
    $http( {
      method: "POST",
      // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
      
      url: 'http://localhost:3000/change',
      data: { page: modals.position_id,
              blog: a._id
               },
      headers: {
        'x-access-token': window.localStorage.token
      }
    } )

          .then( function( res) {
        console.log('res coming back', res)
          // for (blog in res.data){
          //   var hey = res.data[blog].blog
          //    for(url in hey) {
          //      console.log(url[hey])
          //    }
          //   console.log(hey)
          // }
          modals.resolve()

          // $scope.modalPics= res.data
          // console.log('in the modal --=-=--=', $scope.modalPics)
          $rootScope.$broadcast('some', [1,2,3]);          
        })


  } else {
   $http( {
      method: "POST",
      // url: "http://api.tumblr.com/v2/blog/abestbet1/info?api_key=TMxUxDwGV1PwQHke5KvLQTx6krAwQYvR5vVd7r8rfJaXSorodo",
      
      url: 'http://localhost:3000/change',
      data: { page: modals.position_id,
              blog: a._id

               },
      headers: {
        'x-access-token': window.localStorage.token
      }
    } )

          .then( function( res) {
        console.log('res coming back', res)
          // for (blog in res.data){
          //   var hey = res.data[blog].blog
          //    for(url in hey) {
          //      console.log(url[hey])
          //    }
          //   console.log(hey)
          // }
          modals.resolve()

          // $scope.modalPics= res.data
          // console.log('in the modal --=-=--=', $scope.modalPics)
          $rootScope.$broadcast('some', [1,2,3]);          
        })
      }

          
          
          
          


        }
        // I process the form submission.
        $scope.submit = function() {
          // If no input was provided, show the user an error message.
          if ( ! $scope.form.input ) {
            return( $scope.errorMessage = "Please provide something!" );
          }
          modals.resolve( [$scope.image_url, $scope.index]);
          // getImages()
        };
      }
    );
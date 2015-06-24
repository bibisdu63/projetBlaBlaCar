  angular.module('starter.controllers', [])

 .controller('reservationCtrl', function($scope, $ionicModal, trajetsFact, $timeout){

$scope.reservedTrajets = [];
$scope.trajets = trajetsFact.all();
$scope.connectedUser=trajetsFact.getConnexion();

$timeout(function(){
   $scope.getConnectedUserBookedTrajets();
  },1000)

$scope.getConnectedUserBookedTrajets = function() {
    var bookedTrajets = [] ;
    
    $scope.trajets.forEach(function(trajet) {
      if(trajet.passagers.indexOf($scope.connectedUser.id) != -1 || trajet.chauffeur == $scope.connectedUser.id) {
        bookedTrajets.push(trajet);
      }
    });
    
    $scope.reservedTrajets=bookedTrajets;
  };

 })

.controller('ProfilCtrl', function($scope, $ionicModal, trajetsFact, $cordovaCamera){

 $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
 

 })

.controller('trajetCtrl', function($scope, $ionicModal, trajetsFact) {
  
  $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
    $scope.connectModal = modal;
  }, {scope:$scope, animation:'slide-in-up'});

   $scope.lolz = 69 ;

//attention : aucun user à zéro
   $scope.users = [

   {
    id : 1,
    nom : "Bastien",
    login : "bibis63",
    mdp : "1234"
  },
   {
    id : 2,
    nom : "Jordan",
    login : "jojo63",
    mdp : "1234"
  }
  ];

  $scope.connectedUser = trajetsFact.getConnexion();
  $scope.test = {};
  $scope.searchInputDate = ''; 
  $scope.matchingTrajets = [];
  $scope.reservedTrajets = [];

  $scope.reservedTrajets = [
  {depart :'clermont',arrive:'paris',date:'15/02/2015',id:'1'},
  {depart :'clermont',arrive:'romagnat',date:'14/08/2015',id:'2'},
  ];

  $scope.trajets = trajetsFact.all();

  $scope.fillMatchingTrajets = function () {
          //On vide le tableau de résultats
          $scope.matchingTrajets.length = 0 ;
          
          $scope.trajets.forEach(function(trajet) {
              //On vérifie le départ
              var departMatched = false;
              var destinationMatched = false;
              var tst = $scope.test.searchInputStart;
              var tsta = $scope.test.searchInputDestination;
              
              if(trajet.depart.toUpperCase().indexOf(tst.toUpperCase()) != -1) {
                departMatched = true ;
              }
              
              if(trajet.arrive.toUpperCase().indexOf(tsta.toUpperCase()) != -1) {
                destinationMatched = true ;
              }
              
              if(departMatched && destinationMatched) {
                $scope.matchingTrajets.push(trajet);
                console.log("Matched !");
              }
              
            }, this);
        };  //fin fonction fillMatching Trajets          

//reservation d'un trajet

        $scope.book = function(idTrajet) {
          if ($scope.connectedUser == null) {
            $scope.showConnect();
            return;
          }
          var bookedTrajet = null ;

          $scope.trajets.forEach(function(trajet) {
            if (trajet.id == idTrajet) {
              bookedTrajet = trajet ;
            }
          });

          if(bookedTrajet == null) {
            return ;
          };

          if (bookedTrajet.passagers.length==bookedTrajet.nbPlace ) {
            return;
          };

          if (bookedTrajet.passagers.indexOf($scope.connectedUser.id) === -1) {
            trajetsFact.setPassager($scope.connectedUser.id, idTrajet);
          }

        };

$scope.getConnectedUserBookedTrajets = function() {
    var bookedTrajets = [] ;
    
    $scope.trajets.forEach(function(trajet) {
      if(trajet.passagers.indexOf($scope.connectedUser.id) != -1 || trajet.chauffeur == $scope.connectedUser.id) {
        bookedTrajets.push(trajet);
      }
    });
    
    $scope.reservedTrajets=bookedTrajets ;
  };

  //////////////////////////////////////////
    //Fonctions de connection/déconnection
    //////////////////////////////////////////
    $scope.checkUserExists = function (plogin, pmdp) {
      var foundUser = null ;
      $scope.users.forEach(function(user) {
        if (user.login == plogin && user.mdp == pmdp){
         foundUser = user;
       }
     });
      return foundUser;
    };
    
    $scope.closeConnect = function () {
      $scope.connectModal.hide();
    };
    
    $scope.connectUser = function (credentials) {
      var user = $scope.checkUserExists(credentials.username, credentials.password);
      if (user != null) {
        $scope.loginError = false ;
        trajetsFact.setConnexion(user);
        $scope.connectedUser = user;
        $scope.closeConnect() ;
      }
      else {
        $scope.loginError = true ;
      }
    };
    
    $scope.deconnectUser = function(){
      $scope.connectedUser = null ;
    };
    
    $scope.showConnect = function() {
      $scope.connectModal.show();
    };


  }); //fin ligne 44

  
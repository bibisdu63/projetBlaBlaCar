// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'trajetCtrl'
  })

  .state('app.rechercher', {
    url: "/rechercher",
    views: {
      'menuContent': {
        templateUrl: "templates/rechercher.html",
        controller: 'trajetCtrl'
      }
    }
  })

  .state('app.mesTrajets', {
    url: "/mesTrajets",
    views: {
      'menuContent': {
        templateUrl: "templates/mesTrajets.html",
        controller: 'trajetCtrl'
      }
    }
  })
    .state('app.accueil', {
      url: "/accueil",
      views: {
        'menuContent': {
          templateUrl: "templates/accueil.html",
          controller: ''
        }
      }
    })
    .state('app.mesReservations', {
      url: "/mesReservations",
      views: {
        'menuContent': {
          templateUrl: "templates/mesReservations.html",
          controller: 'reservationCtrl'
        }
      }
    })
     .state('app.profil', {
      url: "/profil",
      views: {
        'menuContent': {
          templateUrl: "templates/profil.html",
          controller: 'ProfilCtrl'
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/accueil');
});

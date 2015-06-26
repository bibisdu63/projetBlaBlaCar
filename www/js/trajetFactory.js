angular.module('starter.services', [])

.factory('trajetsFact', function() {


  var trajets = [
  {depart :'clermont',arrive:'paris',date:'15/02/2015',id:'1',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'clermont',arrive:'romagnat',date:'14/08/2015',id:'2',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'paris',arrive:'clermont',date:'05/10/2016',id:'3',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'aubiere',arrive:'lyon',date:'08/02/2016',id:'4',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'lyon',arrive:'auxerre',date:'27/06/2015',id:'5',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'monaco',arrive:'cannes',date:'13/07/2015',id:'6',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'paris',arrive:'aubiere',date:'15/07/2015',id:'7',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'auxerre',arrive:'nantes',date:'15/07/2015',id:'8',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'clermont',arrive:'paris',date:'16/02/2015',id:'9',chauffeur:'',prix:'20€',nbPlace:'0',passagers:[]},
  {depart :'clermont',arrive:'paris',date:'17/02/2015',id:'10',chauffeur:'',prix:'20€',nbPlace:'1',passagers:[]},
  {depart :'clermont',arrive:'paris',date:'18/02/2015',id:'11',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'clermont',arrive:'paris',date:'19/02/2015',id:'12',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  {depart :'clermont',arrive:'paris',date:'20/02/2015',id:'13',chauffeur:'',prix:'20€',nbPlace:'4',passagers:[]},
  ];


  var connectedUser = null


  return {
    all: function() {
      return trajets;
    },

    getConnexion: function(){
    	return connectedUser;
    },

    setConnexion: function(user){
    	connectedUser=user;
    },

    setPassager: function(idPassager, idTrajet){

      trajets.forEach(function(trajet) {
        if (trajet.id == idTrajet) {
          trajet.passagers.push(idPassager);
        };
      })
    },
  };
});
angular.module('artoo').service('PlayerSrv', function (){
   var dictionary = {
       fight: 'Il player attacca',
       position: 'Posizione del player',
   };
   
   var logs = [];
   
   this.log = (code) => {
       var text = dictionary[code] || 'Nessuna azione specificata';
       var date = new Date();
       logs.push({text: text, date: date});
   };
   
   this.getLogs = () => {
      return logs;  
   };
});
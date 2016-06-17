angular.module('artoo').service('UsersSrv', function ($resource){
   var Users = $resource('/api/users', {}, {}); 
   
   this.query = () => {
     return Users.query().$promise;  
   };
   
   this.create = () => {
     return new Users(); 
   };
});
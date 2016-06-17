angular.module('artoo').controller('UsersCtrl', function ($scope, UsersSrv){
   
    UsersSrv.query().then((users) => {
       console.log(users); 
    });
    
    var newUsers = UsersSrv.create();
    newUsers.name = 'Gabry';
    newUsers.$save().then().catch((err) => {
         console.error(err);  
    });
});
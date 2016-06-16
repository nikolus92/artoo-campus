angular.module('artoo').controller('UserCtrl', function ($scope, UsersSrv){
    
    $scope.loading = true;
    
    UsersSrv.query().then((data) =>{
        $scope.loading = false;
        $scope.users = data;
    }).catch((err) => {
        console.error(err);
    }); // then ritorna con la promessa - catch non ritorna 
    
    
    $scope.getDetails = (id) => {
        $scope.loading = true;
        UsersSrv.get({id: id}).then((data) => {
            $scope.loading = false;
            $scope.userDetails = data;
            $scope.user = data;
            
        });
    };
    
    $scope.user = UsersSrv.create();
    
    $scope.save = (user, form) => {
        $scope.loading = true;
        user.createdAt = new Date ();
        user.$save().then((data) =>{
                $scope.user = UsersSrv.create();
                form.$setPristine();
                $scope.loading = false;
        }).catch();
    };
    
    $scope.remove = (user) => {
      user.$remove({id: user.id}).then((data) => {
          console.info(data);
          $scope.loading = false;
      }).catch(); 
    };
});
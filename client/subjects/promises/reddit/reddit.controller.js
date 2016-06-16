angular.module('artoo').controller('RedditCtrl', function ($scope, RedditSrv){
    

    $scope.query = (search) => {
        $scope.loading = true;
        RedditSrv.query(search).then((data) => {
            $scope.loading = false;
        $scope.reddits = data && data.data && data.data.children;     // sfrutto un API esterna per trovare dei valori
    }).catch();
    };
    
});
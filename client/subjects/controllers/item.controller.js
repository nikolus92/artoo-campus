// create a controller for the items
angular.module('artoo').controller('ItemsCtrl', function ($scope) {
    console.log('ItemsCtrl runs');
    
                             
    var item = {       //$scope.item
        name: 'Ascia bipenne',
        description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
        slots: 3,
        image: 'http://khazalidgrungron.altervista.org/axes/05.png',
    };
    $scope.item = item;             //  lo scope é un oggetto
    
    $scope.dispose = function () {
        $scope.item = undefined;
    };
    
    $scope.toggleDescription = function () {
        $scope.visibleDescription = !$scope.visibleDescription; // scope é definito all'inizio undefined, il suo opposto é true
        
    };
    
 
    
});




// attach the following data to it

/*
 * Ascia bipenne
 * L’ascia bipenne è una scure a due lame, simbolo del potere minoico.
 * Spazio occupato: 3 slots
 * http://khazalidgrungron.altervista.org/axes/05.png
 */

// attach some behaviours to the controller: read-description, check-if-fits, dispose

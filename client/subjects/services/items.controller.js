angular.module('artoo').controller('ItemsSrv', function ($scope, ItemsSrv){
 //   $scope.items = ItemsSrv.get();  // passo la lista al items -- espongo i dati
                                    // la lista non si aggiorna nella view perché la funzione 
                                    // viene invocata solo quando viene runnato il controller
    
 //   $scope.getItems = ItemsSrv.get;    // espongo una funzione
    
    $scope.ItemsSrv = ItemsSrv;   // passo tutto il service e espongo tutte le funzioni
});
angular.module('artoo').component('item',{
   bindings: {
     data: '<',  
   },
   controller: 'ItemCtrl',
   controllerAs: 'ItemCtrl',
   templateUrl: 'subjects/components/item/item.html', 
});

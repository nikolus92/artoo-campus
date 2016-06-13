angular.module('artoo').component('items', {
   bindings:{
     typology: '@',  
   },
   templateUrl: 'subjects/components/items/items.html', 
  /* template: '<div class="item.css"> Item </div>', PERMETTE DI CREARE UN TEMPLATE INLINE*/
  controller: 'ItemsCtrls',
  controllerAs: 'ItemsCtrls', // default scope = $ctrl
});
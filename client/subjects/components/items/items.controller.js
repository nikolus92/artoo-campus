angular.module('artoo').controller('ItemsCtrls', function (ItemsSrv){
    
  /*  this.color = 'red';  il $scope si toglie perchè in angula 2 verrà tolto 
                        si usa questo perché il this ha una visibilità più limitata 
    console.info('commento:' + this.comment); */
    
    
    this.ItemsSrv = ItemsSrv;
    this.typology = "weapons";
});
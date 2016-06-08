angular.module('artoo').controller('PlayerCtrl', function ($scope) {
   $scope.player = {
     name: 'Legolas',
     hp: '100',
     exp: 17,
     level: 2,
     race: 'elf',
   };
});

    // take damage
    $scope.takeDamage = function (damage) {
        $scope.player.hp = ($scope.player.hp <= damage) ? 0 : $scope.player.hp - damage;
    };
    
    $scope.isDead = function () {
      return ($scope.player.hp) ? 'No' : 'Yes' ;  
    };
    
    $scope.levelUp = function (){
        $scope.player.level +=1;
    };
    // level up
    // gain exp
    
   
        
     $scope.gainExp =  function (exp) {
         
         var totalExp = $scope.player.exp + exp;
         
         if(totalExp >= 100){
             $scope.levelUp();
             totalExp -= 100;
         }
     } ; 
 
 
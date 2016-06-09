angular.module('artoo').service('PlayerSrv', function (){
    var player = {
        name: 'legolas',
        hp: 100,
        exp: 17,
        level: 2,
        race: 'elf',
    };
    
    this.levelUp = function (){
        return player.level += 1;
    };
    
    this.drinkPosition = function (){
        
    };
    
    this.getStatus = function (){
        
    };
    
    this.takeHit = function (damage){
        
        this.danno = player.hp - damage;
        player.hp = (hp > 0) ? danno : 0;
        
    };
    
    this.gainExp = function (){
        
    };
    
    this.respawn = function (){
        
        if(isDead() == true) 
           return player.hp = 20;
        
    };
    
    this.die = function (){
      return player.hp = 0; 
    };
    
    this.level = function (){
        
    };
    
    this.get = function (){
        return player;
    };
    
    this.isDead = function (){
        
       vita = false;
       ( player.hp > 0 ) ?  vita = true : vita;
    };
});
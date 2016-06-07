// define app module
// define a run function

angular  // setter
    .module('artooInit', [])
    .run(function(){
        console.info('setter');
    });
    
var app = angular  // get
    .module('artooInit')       // concatenazione funzioni
    .run(function (){
            console.info('getter');
    });
    
    app.run(function(){
         console.info('run var');   // esecuzione variabile
    });

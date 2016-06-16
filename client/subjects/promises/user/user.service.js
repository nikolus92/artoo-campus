angular.module('artoo').service('UsersSrv', function ($resource){
    
    var users = $resource('http://jsonplaceholder.typicode.com/:typology/:id', {
        typology: 'users',    // valore di dafault in caso di mancata promessa
    }, {
       /* retrieve: {   // metodi nostri
            isArray: true,
            method: 'Get',  // verbi http
            params: {
                typology: 'posts',
            }
        } */
    });
    
    this.create = () => {
      return new users();  
    };
    
    this.get = (params) => {
      return users.get(params).$promise;    
    };
    
    this.query = () => {
      return users.query().$promise; // al posto del metodo query uso un metodo da me creato nel retrieve  
    };
});
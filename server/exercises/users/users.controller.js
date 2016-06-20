module.exports = function () {
  
  var User = require('./users.model');
  function query(req, res){
     // res.status(200).send([{name: 'david', email: 'xx@wdasaad.it'}]);
    User.find().exec().then((users) => {
      res.status(200).json('users');
    }).catch((err) => {
      res.status(500).send('nessun file nel db');
    });
  }
  
  function create (req, res) {
    var newUser = new User (req.body); // i parametri vengono presi nel body generale 
    newUser.save().the(() =>{
      res.status(200).send('utente creato');
    }).catch(err => res.status(500).send('utente non salvato'));
  }
  
  function remove (req, res){
  
    User.remove({name: req.params.name})
    .then(()=> res.status(200).send('utente rimosso'))
    .catch(() => res.status(500).send('utente non rimosso'));
  }
  
  
  function update (req, res){
    User.findByIdAndUpdate(req.params.id, $set {req.body.name})
    .then(()=> res.status(200).send('utente rimosso'))
    .catch(() => res.status(500).send('utente non rimosso'));
  }
 
 
 /* function save(req, res){
    var users = req.body
    users.id = 11;
   
    res.status(201).send(users);
  };
  
  function quey(req, res){
   res.send([{name: 'Niki', email: 'xxx@xxx.xx'}]);
   
   // res.send(404, 'qua qua qquaaa');
  }; */
  
  // public API
  return {
    query: query,
    create: create,
    remove, remove,
  };
};
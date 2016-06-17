module.exports = function () {
  function query(req, res){
      res.status(200).send([{name: 'david', email: 'xx@wdasaad.it'}]);
      
  }; 
  
  function save(req, res){
    var users = req.body
    users.id = 11;
   
    res.status(201).send(users);
  };
  
  function quey(req, res){
   res.send([{name: 'Niki', email: 'xxx@xxx.xx'}]);
   
   // res.send(404, 'qua qua qquaaa');
  };
  
  return {
    query: query,  
    save: save,
  };
};
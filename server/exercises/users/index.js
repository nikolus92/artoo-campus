var express = require('express');      // creo il modulo router al quale collegare i verbi
var users= express.Router();
var controller = require('./users.controller')();

var router = express.Router();

router.get('/', controller.query);
router.post('/', controller.create);
router.delete('/:name', controller.remove);

module.exports = {
    name: 'users router',
    version: '1.0.0',
    router: router,
    create: create,
    remove: remove,
};
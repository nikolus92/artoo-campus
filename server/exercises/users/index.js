var express = require('express');      // creo il modulo router al quale collegare i verbi
var users= express.Router();
var controller = require('./users.controller')();

var router = express.Router();

router.get('/', controller.query);
router.post('/', controller.save);

module.exports = {
    name: 'users router',
    version: '1.0.0',
    router: router,
};
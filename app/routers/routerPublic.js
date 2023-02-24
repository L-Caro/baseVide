const express = require('express');
const mainController = require('../controllers/mainController.js');
const controller2 = require('../controllers/controller2.js');
const controllers3 = require('../controllers/controller3.js');
// ...

const routerPublic = express.Router();

routerPublic.get('/', mainController.homePage);



module.exports = routerPublic;

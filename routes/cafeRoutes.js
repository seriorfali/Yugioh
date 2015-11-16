var cafesController = require('../controllers/cafes_controller.js');
var express = require("express");
var cafeRoutes = express.Router();

cafeRoutes.route("/")
  .get(cafesController.index);

module.exports = cafeRoutes;

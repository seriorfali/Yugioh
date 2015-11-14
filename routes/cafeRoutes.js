var cafesController = require('../controllers/cafes_controller.js');
var express = require("express");
var cafeRoutes = express.Router();

cafeRoutes.route("/")
  .get(cafesController.index)
  .post()
userRoutes.route("/:cafe_id")
  .get()
  .put()
  .delete()

module.exports(cafeRoutes);

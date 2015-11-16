var cafesController = require('../controllers/cafes_controller.js');
var express = require("express");
var cafeRoutes = express.Router();

cafeRoutes.route("/")
  .get(cafesController.index)
  .post(cafesController.add)

cafeRoutes.route("/:cafe_id")
  .get(cafesController.show)
  .put(cafesController.update)
  .delete(cafesController.destroy)

module.exports = cafeRoutes;

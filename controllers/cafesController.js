var Cafe = require('../models/cafe.js');

function index(req, res) {
  Cafe.find({}, function(err, cafes) {
    if (err) throw err;
    res.json(cafes);
  });
}

module.exports = {
  index: index
};

var Cafe = require('../models/cafe.js');

function index(req, res) {
  Cafe.find({}, function(err, cafes) {
    if (err) res.send(err);
    res.json(cafes);
  });
}

function show(req, res) {
  Cafe.findById{req.params.id}, function(err, cafe) {
    if (err) res.send(err);
    res.json(cafe);
  });
}

function add(req, res) {
  Cafe.create(req.body, function(err, cafe) {
    if (err) res.send(err);
    res.json({success: true, message: cafe.name + "has been added."});
  });
}

function update(req, res) {
  Cafe.findOneAndUpdate({id: req.params.id}, req.body, {new: true}, function(err, cafe) {
    if (err) res.send(err);
    res.json({success: true, message: cafe.name + "has been updated."});
  });
}

function destroy(req, res) {
  Cafe.findOneAndRemove({id: req.params.id}, function(err, cafe) {
    if (err) console.log(err);
    res.json({success: true, message: cafe.name + "has been deleted."});
  });
}

module.exports = {
  index: index,
  show: show,
  add: add,
  update: update,
  destroy: destroy
};

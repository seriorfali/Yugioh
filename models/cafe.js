var mongoose = require('mongoose')

var cafeSchema = new mongoose.Schema({
	name: String,
	website: String,
  country: String,
  state: String,
	city: String,
  neighborhood: String
})

var Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema(
  {
     brand: {type: String, required: true, maxlength: 200},
     color: {type: String, required: true, maxlength: 200},
     model: {type: String, required: true, maxlength: 200},
     
     year: {type: String, required: true}
  }
);
//Export model
module.exports = mongoose.model('Car', CarSchema);
// Require mongoose to create a model.
var mongoose = require('mongoose');

// Create a schema of your model
var fishSchema = new mongoose.Schema({
  name:    String,
  category:   String
});

// Create the model using your schema.
var Fish = mongoose.model('Fish', fishSchema);

// Export the model of the Fish.
module.exports = Fish;

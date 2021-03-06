var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  notes: {
    type: String
  },
  emergencyContact: {
    type: String,
    required: true
  },
  emergencyNumber: {
    type: Number,
    required: true
  },
  sessions: {
    type: Schema.Types.ObjectId,
    ref: "Sessions"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Client = mongoose.model("Client", ClientSchema);

// Export the Article model
module.exports = Client;

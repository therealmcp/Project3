var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  client: {
    type: Boolean,
    required: true
  },
  sessions: {
    type: Schema.Types.ObjectId,
    ref: "Sessions"
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;

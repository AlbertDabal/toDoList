const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  status: {
    type: Boolean,
    default: true,
  },
  name: String,
  type: String,
  project: String,
  piority: String,
});

module.exports = mongoose.model("todo", TodoSchema);

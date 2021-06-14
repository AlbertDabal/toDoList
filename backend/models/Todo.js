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
  description: String,
  date: Date,
});

module.exports = mongoose.model("todo", TodoSchema);

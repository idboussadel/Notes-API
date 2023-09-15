const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "the title is required"],
    unique: [true, "the title must be unique"],
  },
  content: {
    type: String,
    required: [true, "the content is required"],
  },
  tags: {
    type: [String],
  },
});

module.exports = mongoose.model("Notes", noteSchema);

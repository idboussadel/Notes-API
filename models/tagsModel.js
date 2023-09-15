const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "the name is required"],
    unique: [true, "the name must be unique"],
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notes",
    },
  ],
});

module.exports = mongoose.model("Tags", tagSchema);

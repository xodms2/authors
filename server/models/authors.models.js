const mongoose = require("mongoose");
const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Author name is required"],
    minLength: [3, "Author name should be 3 characters or longer"],
  },
});

module.exports = mongoose.model("Author", AuthorSchema);

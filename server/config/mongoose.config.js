const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to mongodb"))
  .catch((err) => console.log("Error: ", err));

const express = require("express");
const cors = require("cors");
const app = express();
require("./config/mongoose.config");
const port = 8000;
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/authors.routes")(app);

app.listen(port, console.log("Listening on port: ", port));
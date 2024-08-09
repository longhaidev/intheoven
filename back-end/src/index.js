const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const route = require("./routes/route");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
route(app);

mongoose
  .connect(process.env.MONGODBCONNECT)
  .then(() => {
    console.log("Connect DB success");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("server is running on port", +port);
});

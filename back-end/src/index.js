require("module-alias/register");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const route = require("./routes/route");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
//  CONFIG APP
dotenv.config();
const app = express();
app.use(bodyParser.json());
// ROUTE
route(app);
//  CONNECT TO MONGODB
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

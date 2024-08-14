const authRoute = require("./auth");
const userRoute = require("./UserRouter");

// main route redirect to
const route = (app) => {
  app.use("/v1/auth", authRoute);
  app.use("/v1/user", userRoute);
};

module.exports = route;

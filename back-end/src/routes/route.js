const UserRouter = require("./UserRouter");
// main route redirect to
const route = (app) => {
  app.use("/api/user", UserRouter);
};

module.exports = route;

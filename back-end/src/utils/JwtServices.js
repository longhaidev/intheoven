const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "30s" }
  );
  return access_token;
};

const generateRefreshToken = (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: "3d" }
  );
  return refresh_token;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};

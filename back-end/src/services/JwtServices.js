const jwt = require("jsonwebtoken");

const generateAccessToken = async (payload) => {
  console.log("payload:", payload);
  const access_token = jwt.sign(
    {
      payload,
    },
    "access_token",
    { expiresIn: "1h" }
  );
  return access_token;
};

const generateRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    "refresh_token",
    { expiresIn: "3d" }
  );
  return refresh_token;
};
module.exports = generateAccessToken;
module.exports = generateRefreshToken;

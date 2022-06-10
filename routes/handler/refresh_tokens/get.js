const jwt = require("jsonwebtoken");
const {
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;

const { RefreshToken } = require("../../../models");

module.exports = async (req, res) => {
  const refreshToken = req.query.refreshToken;
  const token = await RefreshToken.findOne({
    where: { token: refreshToken },
  });
  const email = req.body.email;

  if (!token) {
    return res.status(400).json({
      status: "error",
      message: "invalid token",
    });
  }

  jwt.verify(refreshToken, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        status: "error",
        message: err.message,
      });
    }

    if (email !== decoded.data.email) {
      return res.status(400).json({
        status: "error",
        message: "email is not valid",
      });
    }

    const newToken = jwt.sign({ data: decoded.data }, JWT_SECRET, {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
    });
    return res.json({
      status: "success",
      data: {
        refreshToken,
        newToken,
      },
    });
  });

  // return res.json({
  //   status: "success",
  //   token,
  // });
};

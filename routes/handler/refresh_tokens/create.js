const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");
const v = new Validator();

const { JWT_SECRET, JWT_SECRET_REFRESH_TOKEN, JWT_ACCESS_TOKEN_EXPIRED } =
  process.env;

const { RefreshToken } = require("../../../models");

module.exports = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  const email = req.body.email;

  const schema = {
    refreshToken: "string",
    email: "email",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const token = await RefreshToken.findOne({
    where: { token: refreshToken },
  });

  if (!token || !email) {
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
};

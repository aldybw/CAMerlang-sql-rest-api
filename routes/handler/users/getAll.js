const { User } = require("../../../models/");

module.exports = async (req, res) => {
  const userIds = req.query.userIds || [];
  const userNames = req.query.userNames || [];
  const userAges = req.query.userAges || [];
  const userProfessions = req.query.userProfessions || [];
  const userRoles = req.query.userRoles || [];
  const userEmails = req.query.userEmails || [];

  const sqlOptions = {
    attributes: [
      "id",
      "name",
      "age",
      "profession",
      "currentStatus",
      "role",
      "email",
      "createdAt",
      "updatedAt",
    ],
  };

  if (userIds.length) {
    sqlOptions.where = {
      id: userIds,
    };
  }
  if (userNames.length) {
    sqlOptions.where = {
      name: userNames,
    };
  }
  if (userAges.length) {
    sqlOptions.where = {
      age: userAges,
    };
  }
  if (userAges.length) {
    sqlOptions.where = {
      age: userAges,
    };
  }
  if (userProfessions.length) {
    sqlOptions.where = {
      profession: userProfessions,
    };
  }
  if (userRoles.length) {
    sqlOptions.where = {
      role: userRoles,
    };
  }
  if (userEmails.length) {
    sqlOptions.where = {
      email: userEmails,
    };
  }

  const users = await User.findAll(sqlOptions);

  if (users.length === 0) {
    return res.json({
      status: "success",
      message: "There is no user data",
    });
  }

  const mappedUser = users.map((u) => {
    u = {
      id: u.id,
      image: u.image,
      name: u.name,
      brand: u.brand,
      is_popular: u.isPopular,
      created_at: u.createdAt,
      updated_at: u.updatedAt,
    };
    return u;
  });

  return res.json({
    status: "success",
    data: mappedUser,
  });
};

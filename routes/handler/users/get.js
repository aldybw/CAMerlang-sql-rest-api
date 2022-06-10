const { User } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
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
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  const specifiedSkincareProduct = {
    id: user.id,
    name: user.name,
    age: user.age,
    profession: user.profession,
    current_status: user.currentStatus,
    role: user.role,
    email: user.email,
    created_at: user.createdAt,
    updated_at: user.updatedAt,
  };

  return res.json({
    status: "success",
    data: specifiedSkincareProduct,
  });
};

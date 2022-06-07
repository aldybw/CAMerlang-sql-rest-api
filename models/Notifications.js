module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define("notification", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("general", "tips", "reminder"),
      allowNull: false,
    },
    messageHeader: {
      field: "message_header",
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageContent: {
      field: "message_content",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Notification;
};

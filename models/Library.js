module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define("library", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bodyType: {
      field: "body_type",
      type: DataTypes.STRING,
      allowNull: false,
    },
    problemSeverity: {
      field: "problem_severity",
      type: DataTypes.ENUM(
        "light",
        "moderate",
        "serious",
        "severe",
        "critical",
        "various"
      ),
      allowNull: false,
    },
    contentHeader: {
      field: "content_header",
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
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

  return Library;
};

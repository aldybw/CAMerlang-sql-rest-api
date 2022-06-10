module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("tips", "news", "people", "list", "review"),
        allowNull: false,
      },
      readDuration: {
        field: "read_duration",
        type: DataTypes.STRING,
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
      expertImage: {
        field: "expert_image",
        type: DataTypes.STRING,
        allowNull: false,
      },
      expertName: {
        field: "expert_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      expertSpecialization: {
        field: "expert_specialization",
        type: DataTypes.STRING,
        allowNull: false,
      },
      expertVerificationDate: {
        field: "expert_verification_date",
        type: DataTypes.STRING,
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
    },
    {
      tableName: "articles",
      timestamps: true,
    }
  );

  return Article;
};

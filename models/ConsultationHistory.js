module.exports = (sequelize, DataTypes) => {
  const ConsultationHistory = sequelize.define(
    "ConsultationHistory",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acneResult: {
        field: "acne_result",
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      comedoResult: {
        field: "comedo_result",
        type: DataTypes.FLOAT,
        allowNull: true,
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
      tableName: "consultation_histories",
      timestamps: true,
    }
  );

  return ConsultationHistory;
};

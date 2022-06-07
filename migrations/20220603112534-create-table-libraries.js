"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    return queryInterface.createTable("libraries", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      problem_severity: {
        type: Sequelize.ENUM(
          "light",
          "moderate",
          "serious",
          "severe",
          "critical",
          "various"
        ),
        allowNull: false,
      },
      content_header: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      expert_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expert_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expert_specialization: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expert_verification_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.dropTable("libraries");
  },
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notifications",
      [
        {
          type: "general",
          message_header: "Don't forget to apply your treatment product.",
          message_content:
            "You have passed two days of your determined treatment product usage. Please use it to minimalize your concern.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: "tips",
          message_header: "Don't forget to apply your treatment product.",
          message_content:
            "You have passed two days of yourdetermined treatment product usage. Please use it to minimalize your concern.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: "reminder",
          message_header: "Don't forget to apply your treatment product.",
          message_content:
            "You have passed two days of yourdetermined treatment product usage. Please use it to minimalize your concern.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notifications", null, {});
  },
};

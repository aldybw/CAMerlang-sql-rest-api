"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notification_categories",
      [
        {
          name: "general",
          description:
            "General notifikasi adalah notifikasi-notifikasi yang bersifat general",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "tips",
          description:
            "Tips notifikasi adalah notifikasi-notifikasi yang bersifat tips",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "reminder",
          description:
            "Reminder notifikasi adalah notifikasi-notifikasi yang bersifat reminder",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notification_categories", null, {});
  },
};

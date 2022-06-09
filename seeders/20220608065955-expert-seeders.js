"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "experts",
      [
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/experts/expert-1.jpg",
          name: "dr. Marianti",
          specialization: "Dokter Umum di RS. Cipto Kesehatan",
          score: 4.8,
          status: "verified",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/experts/expert-2.jpg",
          name: "dr. Merry Dame Cristy Pane",
          specialization: "Dokter Umum di RSUD Sukadana",
          score: 4.4,
          status: "verified",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/experts/expert-3.jpg",
          name: "dr. Sienny Agustin",
          specialization: "Dokter Umum di RS Merdeka Bandung",
          score: 4.6,
          status: "verified",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("experts", null, {});
  },
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "skincare_products",
      [
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/skincare-products/skincare-product-images/image-product-1.jpg",
          name: "Skin Dewi Avocado Shower Balm",
          brand:
            "https://storage.googleapis.com/camerlang-images-bucket/skincare-products/brand-images/brand-1.jpg",
          is_popular: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/skincare-products/skincare-product-images/image-product-2.jpg",
          name: "Skin Dewi Bamboo Cleansing Oil",
          brand:
            "https://storage.googleapis.com/camerlang-images-bucket/skincare-products/brand-images/brand-1.jpg",
          is_popular: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/skincare-products/skincare-product-images/image-product-3.jpg",
          name: "Skin Dewi Temulawak Balancing Facial Emulsion",
          brand:
            "https://storage.googleapis.com/camerlang-images-bucket/skincare-products/brand-images/brand-1.jpg",
          is_popular: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("skincare_products", null, {});
  },
};

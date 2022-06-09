"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "problem_images",
      [
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne/problem-image-1.jpg",
          type: "Acne",
          description: "Deskripsi problem images tentang Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne/problem-image-2.jpg",
          type: "Acne",
          description: "Deskripsi problem images tentang Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne/problem-image-3.jpg",
          type: "Acne",
          description: "Deskripsi problem images tentang Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne/problem-image-4.jpg",
          type: "Acne",
          description: "Deskripsi problem images tentang Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne-vulgaris/problem-image-1.jpg",
          type: "Acne Vulgaris",
          description: "Deskripsi problem images tentang Acne Vulgaris",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne-vulgaris/problem-image-2.jpg",
          type: "Acne Vulgaris",
          description: "Deskripsi problem images tentang Acne Vulgaris",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/acne-vulgaris/problem-image-3.jpg",
          type: "Acne Vulgaris",
          description: "Deskripsi problem images tentang Acne Vulgaris",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedonal-acne/problem-image-1.jpg",
          type: "Comedonal Acne",
          description: "Deskripsi problem images tentang Comedonal Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedonal-acne/problem-image-2.jpg",
          type: "Comedonal Acne",
          description: "Deskripsi problem images tentang Comedonal Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedonal-acne/problem-image-3.jpg",
          type: "Comedonal Acne",
          description: "Deskripsi problem images tentang Comedonal Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedonal-acne/problem-image-4.jpg",
          type: "Comedonal Acne",
          description: "Deskripsi problem images tentang Comedonal Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedonal-acne/problem-image-5.jpg",
          type: "Comedonal Acne",
          description: "Deskripsi problem images tentang Comedonal Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedonal-acne/problem-image-6.jpg",
          type: "Comedonal Acne",
          description: "Deskripsi problem images tentang Comedonal Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedo-naevus/problem-image-1.jpg",
          type: "Comedo Naevus",
          description: "Deskripsi problem images tentang Comedo Naevus",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedo-naevus/problem-image-2.jpg",
          type: "Comedo Naevus",
          description: "Deskripsi problem images tentang Comedo Naevus",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/comedo-naevus/problem-image-3.jpg",
          type: "Comedo Naevus",
          description: "Deskripsi problem images tentang Comedo Naevus",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/elastosis/problem-image-1.jpg",
          type: "Elastosis",
          description: "Deskripsi problem images tentang Elastosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/elastosis/problem-image-2.jpg",
          type: "Elastosis",
          description: "Deskripsi problem images tentang Elastosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/elastosis/problem-image-3.jpg",
          type: "Elastosis",
          description: "Deskripsi problem images tentang Elastosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/elastosis/problem-image-4.jpg",
          type: "Elastosis",
          description: "Deskripsi problem images tentang Elastosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/elastosis/problem-image-5.jpg",
          type: "Elastosis",
          description: "Deskripsi problem images tentang Elastosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/elastosis/problem-image-6.jpg",
          type: "Elastosis",
          description: "Deskripsi problem images tentang Elastosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-1.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-2.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-3.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-4.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-5.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-6.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-7.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-8.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/facial-psoriasis/problem-image-9.jpg",
          type: "Facial Psoriasis",
          description: "Deskripsi problem images tentang Facial Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/nodulocystic-acne/problem-image-1.jpg",
          type: "Nodulocystic Acne",
          description: "Deskripsi problem images tentang Nodulocystic Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/nodulocystic-acne/problem-image-2.jpg",
          type: "Nodulocystic Acne",
          description: "Deskripsi problem images tentang Nodulocystic Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/nodulocystic-acne/problem-image-3.jpg",
          type: "Nodulocystic Acne",
          description: "Deskripsi problem images tentang Nodulocystic Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/nodulocystic-acne/problem-image-4.jpg",
          type: "Nodulocystic Acne",
          description: "Deskripsi problem images tentang Nodulocystic Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/nodulocystic-acne/problem-image-5.jpg",
          type: "Nodulocystic Acne",
          description: "Deskripsi problem images tentang Nodulocystic Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/nodulocystic-acne/problem-image-6.jpg",
          type: "Nodulocystic Acne",
          description: "Deskripsi problem images tentang Nodulocystic Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/paediatric-psoriasis/problem-image-1.jpg",
          type: "Paediatric Psoriasis",
          description: "Deskripsi problem images tentang Paediatric Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/paediatric-psoriasis/problem-image-2.jpg",
          type: "Paediatric Psoriasis",
          description: "Deskripsi problem images tentang Paediatric Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/paediatric-psoriasis/problem-image-3.jpg",
          type: "Paediatric Psoriasis",
          description: "Deskripsi problem images tentang Paediatric Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/paediatric-psoriasis/problem-image-4.jpg",
          type: "Paediatric Psoriasis",
          description: "Deskripsi problem images tentang Paediatric Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/paediatric-psoriasis/problem-image-5.jpg",
          type: "Paediatric Psoriasis",
          description: "Deskripsi problem images tentang Paediatric Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/paediatric-psoriasis/problem-image-6.jpg",
          type: "Paediatric Psoriasis",
          description: "Deskripsi problem images tentang Paediatric Psoriasis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/solar-comedo/problem-image-1.jpg",
          type: "Solar Comedo",
          description: "Deskripsi problem images tentang Solar Comedo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/solar-comedo/problem-image-2.jpg",
          type: "Solar Comedo",
          description: "Deskripsi problem images tentang Solar Comedo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/solar-comedo/problem-image-3.jpg",
          type: "Solar Comedo",
          description: "Deskripsi problem images tentang Solar Comedo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/solar-comedo/problem-image-4.jpg",
          type: "Solar Comedo",
          description: "Deskripsi problem images tentang Solar Comedo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/solar-comedo/problem-image-5.jpg",
          type: "Solar Comedo",
          description: "Deskripsi problem images tentang Solar Comedo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/solar-comedo/problem-image-6.jpg",
          type: "Solar Comedo",
          description: "Deskripsi problem images tentang Solar Comedo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/steroid-acne/problem-image-1.jpg",
          type: "Steroid Acne",
          description: "Deskripsi problem images tentang Steroid Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/steroid-acne/problem-image-2.jpg",
          type: "Steroid Acne",
          description: "Deskripsi problem images tentang Steroid Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/steroid-acne/problem-image-3.jpg",
          type: "Steroid Acne",
          description: "Deskripsi problem images tentang Steroid Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/steroid-acne/problem-image-4.jpg",
          type: "Steroid Acne",
          description: "Deskripsi problem images tentang Steroid Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/steroid-acne/problem-image-5.jpg",
          type: "Steroid Acne",
          description: "Deskripsi problem images tentang Steroid Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image:
            "https://storage.googleapis.com/camerlang-images-bucket/problem-images/steroid-acne/problem-image-6.jpg",
          type: "Steroid Acne",
          description: "Deskripsi problem images tentang Steroid Acne",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("problem_images", null, {});
  },
};

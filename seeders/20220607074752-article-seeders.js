"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/articles/article-images/article-1.jpg",
          title: "Rahasia Ahli Kulit Sehat dalam Menjaga Kesehatan Kulit",
          type: "news",
          read_duration: "5 minutes",
          content_header:
            "Menjaga kesehatan kulit merupakan kunci kulit cantik alami. Kenali rahasia ahli kulit sehat dalam mendapatkan kulit cantik, bersih, dan sehat. ",
          content:
            "Tahukah Anda? Kulit kita memiliki siklus regenerasi setiap 27 hari dan menyebabkan penumpukan sel kulit mati yang perlu dibersihkan secara teratur dan dijaga kesehatannya. Pasalnya, jika tidak dibersihkan, sel kulit mati yang bercampur dengan keringat, debu, polusi, paparan ac, paparan sinar matahari, dan kotoran dapat memperburuk kondisi kulit Anda. Hasilnya, kulit dapat terlihat kusam dan tidak sehat. Kenali Cara Tepat Menjaga Kesehatan Kulit Jangan biarkan aktivitas sehari-hari merusak kesehatan kulit Anda. Di bawah ini adalah beberapa cara yang dapat Anda lakukan untuk menjaga kesehatan kulit. Bersihkan wajah dua kali sehari. Membersihkan kulit wajah merupakan hal yang sangat penting guna menghilangkan bakteri dan kotoran, serta menjaga kesehatan kulit. Terlebih lagi setelah aktivitas seharian dan menggunakan kosmetik. Jaga kelembapan kulit Anda. Menjaga kelembapan kulit tidak kalah penting dengan membersihkan wajah. Pelembap dapat membantu dalam menjaga kulit agar tidak kering dan melindunginya dari cuaca atau faktor lingkungan yang dapat merusak kulit Anda. Selain itu, ahli kulit sehat juga menyatakan bahwa memberikan pelembap pada wajah juga dapat membantu kulit mempertahankan tingkat kelembapan alaminya. Berikan kulit Anda perlindungan terhadap matahari. Melindungi kulit dari sinar matahari merupakan hal yang sangat penting, sekalipun Anda tidak beraktivitas di bawah matahari terik. Penting diketahui, sinar matahari dapat merusak lapisan kulit Anda dan dapat membuatnya terlihat kusam, keriput, dan masalah kulit lainnya. Gunakan krim pelindung sinar matahari atau tabir surya, meski saat cuaca mendung, setidaknya dengan SPF 15. Setidaknya, gunakan tabir surya 15-20 menit sebelum Anda keluar ruangan, juga dua jam sesudahnya bila Anda masih terekspos di bawah sinar matahari. Rahasia Ahli Kulit Sehat Ada Pada Kandungan Perawatan Kulit Anda Guna menjaga kesehatan kulit, Anda tidak hanya perlu membersihkan kulit secara teratur. Anda juga perlu memerhatikan kandungan yang ada pada produk perawatan kulit Anda. Ahli kulit sehat menyatakan bahwa pembersih dan perawatan kulit yang baik adalah yang tidak merusak kondisi kulit Anda dan dapat mengembalikan kelembapan alami kulit. Menjaga kesehatan kulit bukanlah hal yang sulit, asalkan kita melakukannya dengan teratur dan tahu kandungan produk perawatan kulit yang kita butuhkan. Kini, Anda sudah tahu apa saja rahasia ahli kulit sehat dalam menjaga kulit tetap sehat, cantik, dan bebas kusam, bukan? Yuk, praktikkan beberapa cara di atas dan dapatkan kulit segar dan sehat idaman kita semua. Source: https://www.alodokter.com/rahasia-ahli-kulit-sehat-dalam-menjaga-kesehatan-kulit",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/articles/expert-images/expert-1.jpg",
          expert_name: "dr. Marianti",
          expert_specialization: "Dokter Umum di RS. Cipto Kesehatan",
          expert_verification_date: "10 April 2022",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/articles/article-images/article-2.jpg",
          title: "Berkenalan dengan Panthenol, Bahan Aktif Pelembap Kulit",
          type: "news",
          read_duration: "5 minutes",
          content_header:
            "Panthenol merupakan salah satu kandungan yang bisa ditemui dalam produk skin care. Zat aktif ini cukup diandalkan untuk membuat kulit menjadi lembap dan sehat. Tak hanya itu, panthenol juga bermanfaat bagi kesehatan rambut dan kuku. ",
          content:
            "Panthenol adalah senyawa kimia yang merupakan turunan dari asam pantotenat atau vitamin B5. Secara alami, panthenol bisa ditemukan pada beberapa jenis makanan, seperti daging-dagingan, susu, telur, alpukat, dan nasi merah. Selain itu, panthenol juga bisa ditemukan dalam produk perawatan kulit, kosmetik, produk perawatan rambut dan kuku, serta suplemen. Pada kemasan produk, panthenol bisa dikenali dengan nama lain, yaitu dexpanthenol, D-pantotenil alcohol, butanamide, alcohol analog of pantothenic acid, atau provitamin B-5.Berbagai Manfaat Panthenol. Panthenol yang ada di dalam produk perawatan kulit, rambut, maupun kuku tergolong zat yang aman. Saat digunakan di kulit, panthenol secara alami akan diubah oleh tubuh menjadi vitamin B5. Beberapa manfaat yang bisa didapatkan melalui penggunaannya secara rutin adalah sebagai berikut: 1. Melembapkan kulit Skin care dengan kandungan panthenol dapat membuat kulit menjadi lebih lembap dan halus, serta meningkatkan elastisitas kulit. Selain itu, bahan ini juga bisa melindungi skin barrier dari kerusakan akibat paparan zat kimia, polusi, dan sinar UV. Produk perawatan kulit yang mengandung panthenol bisa terkandung di dalam pelembap, sunscreen, toner, krim mata, serum, essence, losion, make up remover, atau sabun. 2. Mengatasi iritasi kulit. Panthenol juga memiliki efek antiperadangan yang bisa meredakan kemerahan atau iritasi pada kulit. Selain itu, bahan ini juga diyakini bisa membantu penyembuhan luka dan mengurangi gejala eksim. 3. Menjaga rambut tetap sehat dan berkilau. Untuk mewujudkan rambut yang sehat, kamu bisa menggunakan sampo, kondisioner, serum rambut, atau gel rambut yang mangandung panthenol. Pasalnya, senyawa ini bisa membantu rambut tampak berkilau, lembut, dan lebih kuat. Tak hanya itu, produk perawatan rambut yang mengandung panthenol juga mampu melindungi rambut dari kerusakan akibat proses pemanasan saat styling. 4. Mencegah kerusakan kuku. Produk perawatan kuku, seperti vitamin kuku, minyak kultikula, atau krim tangan yang mengandung panthenol dapat membantu kuku tetap terhidrasi dan mencegahnya rusak. Kuku juga akan tampak lebih mengkilap dan kuat. Melihat banyaknya manfaat di atas, mungkin kamu bisa pertimbangkan untuk memakai produk perawatan kulit, rambut, atau kuku yang mengandung panthenol. Meski begitu, sebelum menggunakannya, sebaiknya lakukan uji tempel terlebih dahulu, ya. Caranya, oleskan sedikit produk tersebut di lengan, kemudian tunggu hingga 48 jam. Bila tidak mengalami efek samping, kamu bisa menggunakan produk tersebut. Namun, jika muncul gejala tertentu akibat reaksi alergi, seperi kemerahan, bengkak, atau rasa gatal, sebaiknya hentikan penggunaan produk. Sejauh ini, efek samping berbahaya akibat panthenol, seperti dermatitis kontak, tergolong jarang terjadi. Namun, jika ragu atau memiliki kondisi kesehatan tertentu, kamu bisa berkonsultasi terlebih dahulu dengan dokter untuk mendapatkan jenis perawatan kulit yang aman dan sesuai dengan kondisimu. Source: https://www.alodokter.com/berkenalan-dengan-panthenol-bahan-aktif-pelembap-kulit.",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/articles/expert-images/expert-2.jpg",
          expert_name: "dr. Merry Dame Cristy Pane",
          expert_specialization: "Dokter Umum di RSUD Sukadana",
          expert_verification_date: "24 April 2022",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/articles/article-images/article-3.jpg",
          title: "Beragam Cara Menghilangkan Bekas Jerawat",
          type: "tips",
          read_duration: "5 minutes",
          content_header:
            "Menghilangkan bekas jerawat bukanlah perkara mudah. Namun, Anda tidak perlu khawatir, karena ada beberapa jenis perawatan yang dapat dilakukan untuk menghilangkan atau menyamarkan bekas jerawat yang muncul. ",
          content:
            "Bekas jerawat dapat berupa kerutan, lubang, atau cekungan pada kulit. Salah satu jenis jerawat yang paling sering menimbulkan bekas adalah jerawat nodul dan kista. Namun, bekas jerawat umumnya muncul akibat kebiasaan memencet jerawat. Menghilangkan bekas jerawat dapat dilakukan dengan berbagai metode yang harus disesuaikan dengan jenis kulit dan tingkat kerusakannya. Namun, pada bekas jerawat yang membandel, diperlukan kombinasi lebih dari satu metode perawatan agar lebih efektif.Berbagai Jenis Perawatan untuk Menghilangkan Bekas Jerawat. Untuk menghilangkan bekas jerawat, sebaiknya Anda berkonsultasi dengan dokter kulit guna menentukan jenis perawatan yang tepat. Berikut ini adalah beberapa perawatan untuk menghilangkan bekas jerawat: 1. Laser; Metode laser umumnya digunakan untuk menghilangkan bekas jerawat ringan hingga sedang. Ada dua jenis perawatan laser yang dapat dilakukan, yaitu: Laser ablatif, untuk membuat permukaan kulit lebih halus; Laser nonablatif, untuk merangsang produksi kolagen sehingga dapat memperbaiki kerusakan kulit akibat bekas jerawat. Perawatan ini dilakukan dengan cara menembakkan sinar laser ke area bekas jerawat. Selain itu, metode laser juga dapat mengobati bekas luka dengan aman dan efektif. 2. Suntikan filler (filler injection); Suntikan filler dilakukan dengan cara mengisi cekungan bekas jerawat dengan kolagen, lemak, atau zat pengisi lainnya. Meski demikian, metode ini tidak bisa digunakan untuk mengatasi bekas jerawat yang berbentuk lubang. Suntikan filler dapat bersifat sementara atau permanen. Filler yang bersifat sementara dapat bertahan 6–18 bulan. Namun, untuk mendapatkan hasil terbaik, suntikan harus dilakukan secara berulang. 3. Dermabrasi; Prosedur dermabrasi bertujuan untuk mengelupas lapisan paling atas kulit dan mengangkat sel-sel kulit mati. Metode ini menggunakan alat khusus atau laser dan biasanya dilakukan untuk menghilangkan bekas jerawat yang parah. Prosedur ini umumnya menggunakan bius lokal atau umum. Setelah perawatan, wajah akan tampak memerah dan bengkak selama beberapa hari. Namun, bekas jerawat pada kulit wajah akan tersamarkan. 4. Teknik punch; Teknik punch paling tepat dilakukan untuk menghilangkan bekas jerawat yang berbentuk lubang atau cekungan. Untuk bekas jerawat yang bersifat ringan, teknik ini dilakukan dengan membuat sayatan kecil untuk mengangkat bekas jerawat, lalu menutupnya. Setelah sembuh, kulit baru akan tumbuh lebih halus dan rata. Sementara, untuk bekas jerawat yang cukup parah dan dalam, dokter tetap melakukan pengangkatan terhadap bekas jerawat. Namun, selanjutnya luka akan ditutup dengan sampel kulit dari bagian tubuh, seperti bagian belakang telinga. 5. Subcision; Teknik subcision dapat digunakan untuk menghilangkan bekas jerawat yang berbentuk kerutan. Lapisan kulit teratas akan diangkat dari jaringan bawah bekas jerawat, sehingga menimbulkan luka dan memungkinkan darah berkumpul di area tersebut. Gumpalan darah kemudian akan membentuk jaringan ikat dan membantu mendorong bekas luka agar sejajar dengan permukaan kulit lainnya. Subscision biasanya diikuti dengan perawatan lain, seperti dermabrasi dan perawatan laser. Perlu diingat bahwa semua metode perawatan untuk menghilangkan bekas jerawat ini merupakan operasi kecantikan dan harus dilakukan oleh dokter kulit. Source: https://www.alodokter.com/sederet-cara-menghilangkan-bekas-jerawat.",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/articles/expert-images/expert-3.jpg",
          expert_name: "dr. Sienny Agustin",
          expert_specialization: "Dokter Umum di RS Merdeka Bandung",
          expert_verification_date: "29 Maret 2021",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("articles", null, {});
  },
};

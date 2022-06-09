"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "libraries",
      [
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-1.jpg",
          name: "Acne",
          body_type: "Facial",
          problem_severity: "light",
          content_header:
            "Acne is a common skin condition that affects most people at some point. It causes spots, oily skin and sometimes skin that's hot or painful to touch. ",
          content:
            "Although acne cannot be cured, it can be controlled with treatment. If you develop mild acne, it's a good idea to speak to a pharmacist for advice. Several creams, lotions and gels for treating spots are available to buy from pharmacies. Products containing a low concentration of benzoyl peroxide may be recommended, but be careful as this can bleach clothing. If your acne is severe or appears on your chest and back, it may need to be treated with antibiotics or stronger creams that are only available on prescription. If you have mild acne, speak to a pharmacist about medicines to treat it. If these do not control your acne, or it's making you feel very unhappy, see a GP. You should see a GP if you have moderate or severe acne or you develop nodules or cysts, as they need to be treated properly to avoid scarring. Try to resist the temptation to pick or squeeze the spots, as this can lead to permanent scarring. Treatments can take up to 3 months to work, so do not expect results overnight. Once they do start to work, the results are usually good. Source: https://www.nhs.uk/conditions/acne/",
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
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-2.jpg",
          name: "Acne Vulgaris",
          body_type: "Facial",
          problem_severity: "moderate",
          content_header:
            "Acne vulgaris is the common form of acne, characterised by a mixed eruption of inflammatory and non-inflammatory skin lesions. ",
          content:
            "Nearly all of us have acne at some time or another. Acne affects both sexes and all races. Although acne mainly affects adolescents, it can affect a wide age range. Acne most often affects the face, but it may spread to involve the neck, chest and back, and sometimes even more extensively over the body. Individual lesions are centred on the pilosebaceous unit, ie the hair follicle and its associated oil gland. Several types of acne spots occur, often at the same time. They may be inflammatory papules, pustules and nodules; or non-inflamed comedones and pseudocysts. Individual acne lesions usually last less than 2 weeks but the deeper papules and nodules may persist for months. Many acne patients also have oily skin (seborrhoea). All characteristic lesions of acne vulgaris can occur in skin of colour, but it usually presents with less discernible redness and more postinflammatory hyperpigmentation (pigmented macules) which persists long after the acne lesion has gone. Post-inflammatory hyperpigmentation is often the major reason for seeking medical attention, causing significant psychological effects. Pomade acne occurs more commonly in people with skin of colour due to cultural practices with hair styling products in African American and Hispanic populations. The use of greasy hair products leads to follicular plugging and comedones along the hairline. Keloid scarring is more common in skin of colour following acne lesions, particularly along the jawline, chest, and upper back. Source: https://dermnetnz.org/topics/acne-vulgaris",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/expert-images/expert-2.jpg",
          expert_name: "dr. Merry Dame Cristy Pane",
          expert_specialization: "Dokter Umum di RSUD Sukadana",
          expert_verification_date: "24 April 2022",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-3.jpg",
          name: "Comedonal Acne",
          body_type: "Facial",
          problem_severity: "light",
          content_header:
            "Comedones are the skin-coloured, small bumps (papules) frequently found on the forehead and chin of those with acne. A single lesion is a comedo. ",
          content:
            'Comedonal acne is a pattern of acne in which most lesions are comedones. Comedonal acne most often affects the forehead and chin. Comedones arise when cells lining the sebaceous duct proliferate (cornification), and there is increased sebum production. A comedo is formed by the debris blocking the sebaceous duct and hair follicle. It is now known that comedones also involve inflammation (see causes of acne). If you have comedonal acne, choose oil-free cosmetics and wash twice daily with a mild soap and water. It is best to stop smoking and to have a diet that is low in sugar, fat and dairy products. Choose "comedolytic" topical medications. These should be applied once or twice daily as a thin smear to the entire area affected. It may take several weeks to months before worthwhile improvement occurs. Treatment needs to be continued long-term (sometimes for many years. Source: https://dermnetnz.org/topics/comedonal-acne',
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/expert-images/expert-2.jpg",
          expert_name: "dr. Sienny Agustin",
          expert_specialization: "Dokter Umum di RS Merdeka Bandung",
          expert_verification_date: "29 Maret 2021",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-6.jpg",
          name: "Comedo Naevus",
          body_type: "Facial",
          problem_severity: "light",
          content_header:
            "A comedo naevus (comedo nevus), also known as naevus comedonicus, is a rare, benign, cutaneous anomaly consisting of grouped, dilated follicular openings containing soft, dark keratin that resemble comedones. ",
          content:
            "Some authorities consider it to be a hamartoma arising from pilosebaceous follicles; others consider it to be an epidermal naevus involving hair follicles. They are usually solitary but may be part of a comedo naevus syndrome with associated skeletal, central nervous system, ocular, and other cutaneous abnormalities. This epidermal naevus is rare. The true incidence is unknown but there are no sex or ethnic differences. Approximately 50% of cases present at birth and the remainder usually present before 10 years of age. Adult onset is also described, even as late as the 7th decade, usually following trauma or a dermatosis such as herpes zoster, lichen planus, and pyoderma. Comedo naevus is a mosaic disorder (some cells have the abnormal gene whilst others do not) resulting from somatic mutations in embryonic development. Mutations in FGFR2 are thought to be important, with increased expression of IL-1 alpha. Recently, somatic mutations in the NEK9 gene have been described. This leads to activation of NEK9 kinase and disruption of normal follicular differentiation. Whilst these DNA changes have been found in follicular and non-follicular tissue, a follicle- specific effect of NEK9 has been hypothesised in the pathogenesis of comedo nevi. More recently, upregulation of ABCA12 has been described. Germline mosaicism has also been postulated, where the earlier the errors occur in development, the more comedo naevi an individual is likely to develop. Source: https://dermnetnz.org/topics/comedo-naevus",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/expert-images/expert-2.jpg",
          expert_name: "dr. Merry Dame Cristy Pane",
          expert_specialization: "Dokter Umum di RSUD Sukadana",
          expert_verification_date: "24 April 2022",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-8.jpg",
          name: "Elastosis",
          body_type: "Facial",
          problem_severity: "critical",
          content_header:
            "Elastosis refers to degenerative changes in the dermal tissue with increased deposition of elastin material. ",
          content:
            "Elastosis is a prominent feature of several skin conditions. They are distinguished by clinical features and histopathological features seen on skin biopsy. In solar elastosis (also called actinic elastosis), the skin appears skin appears yellow and thickened with bumps or furrowing as a result of sun damage. Favre-Racouchot syndrome is also known as 'nodular elastosis'. It is characterised by cysts and comedone formation in sun-damaged skin, often prominent under and around the eyes or on the back of the neck. Linear focal elastosis is an uncommon dermal elastosis that usually affects the back or trunk but can involve the thighs, arms and breast. It presents as asymptomatic, palpable or atrophic, yellow lines or striae (stretch marks). Linear focal elastosis is an uncommon dermal elastosis that usually affects the back or trunk but can involve the thighs, arms and breast. It presents as asymptomatic, palpable or atrophic, yellow lines or striae (stretch marks). Elastosis perforans serpiginosa (EPS) is a rare skin disorder in which abnormal elastic tissue passes from the papillary dermis to the epidermis, appearing as small groups of red bumps often in a snake-like pattern. EPS may be idiopathic, reactive or drug induced. Source: https://dermnetnz.org/topics/elastosis",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/expert-images/expert-2.jpg",
          expert_name: "dr. Sienny Agustin",
          expert_specialization: "Dokter Umum di RS Merdeka Bandung",
          expert_verification_date: "29 Maret 2021",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          thumbnail:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-9.jpg",
          name: "Facial Psoriasis",
          body_type: "Facial",
          problem_severity: "various",
          content_header:
            "Facial psoriasis is a chronic skin condition in which there are one or more, persistent, thickened, red and dry patches on the face. ",
          content:
            "Psoriasis is a common chronic inflammatory skin disease that may affect any skin site. Facial involvement occurs at some time in about half those affected by psoriasis. Although it is usually mild, facial psoriasis is occasionally very extensive involving the hairline, forehead, neck, ears and facial skin. It is extremely rare to have psoriasis occurring solely on the face. Most patients also have scalp psoriasis and they may also have moderate to severe psoriasis at other sites. Patients with facial psoriasis often suffer from psychosocial problems due to the presence of unsightly red, scaly plaques on highly visible areas. Facial involvement presents as a therapeutic challenge because facial skin is thin, sensitive and more complicated to treat. Source: https://dermnetnz.org/topics/facial-psoriasis",
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
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-5.jpg",
          name: "Nodulocystic Acne",
          body_type: "Facial",
          problem_severity: "serious",
          content_header:
            "Nodulocystic acne is a severe form of acne affecting the face and upper trunk, characterised by nodules and cysts that typically resolve with scarring. ",
          content:
            "Nodulocystic acne is usually a disorder of adolescence and early adult life seen most commonly in males. However there is a rare juvenile form with onset before 6 years of age, also with a male predominance. No studies have shown an increased incidence in specific racial groups. Nodulocystic acne is associated with other follicular occlusion disorders particularly hidradenitis suppurativa. The acne conglobata variant of nodulocystic acne is the 'A' in a number of syndromes including: SAPHO, PASH, PASS, and PAPA. The pathogenesis of acne is believed to be multifactorial involving increased sebaceous gland activity, abnormal keratinisation of follicles, the action of microorganisms, and subsequent inflammation. Source: https://dermnetnz.org/topics/nodulocystic-acne",
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
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-9.jpg",
          name: "Paediatric Psoriasis",
          body_type: "Facial",
          problem_severity: "various",
          content_header:
            "Psoriasis is a chronic skin condition that occurs in children and adults. The typical appearance is of red, thickened, scaly patches on the skin (plaques). ",
          content:
            "These plaques can vary in size and distribution from person to person. In some people, it may affect small areas of skin while others may have large areas covering their body. Psoriasis has a strong genetic component and is due to abnormal processes involved in the regulation of the immune system. Individuals may have flares of psoriasis in response to stress, injury, medications and infections (particularly streptococcal tonsillitis). Psoriasis is not contagious, therefore, affected children do not need to be isolated from other children. The diagnosis of psoriasis is usually made clinically. This involves a doctor examining the skin and making the diagnosis based on the appearance of the affected areas. Source: https://dermnetnz.org/topics/paediatric-psoriasis",
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
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-7.jpg",
          name: "Solar Comedo",
          body_type: "Facial",
          problem_severity: "severe",
          content_header:
            "A solar or senile comedo (plural comedones) is a small skin coloured papule found on the face of a middle-aged or older person. Solar comedones affect areas that have been exposed to sunlight over a long period of time. ",
          content:
            "The comedones may be open (blackheads) or closed (whiteheads). They do not usually become inflamed. Solar comedones are not related to acne vulgaris. Solar comedones and larger pseudocysts occur in association with solar elastosis, which causes yellowish, leathery skin and deep furrows. This appearance is also known as Favre-Racouchot syndrome. It may affect the skin around the eyes, the temples and the neck. Favre-Racouchot syndrome is thought to be due to a combination of sun exposure and heavy smoking. Source: https://dermnetnz.org/topics/solar-comedo",
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
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/library-images/library-4.jpg",
          name: "Steroid Acne",
          body_type: "Chest",
          problem_severity: "various",
          content_header:
            "Steroid acne is the name given to an acne-like skin condition that occurs in people with high levels of circulating corticosteroids. They may have Cushing disease or they may be undergoing treatment with systemic steroid medications. ",
          content:
            "Steroid acne most often affects adolescent or adult patients who have been taking moderate or high doses of oral steroids such as prednisone or dexamethasone for several weeks. They can have a variety of underlying medical conditions. Steroid acne most often occurs on the chest but may also develop on the face, neck, back and arms. The steroids may aggravate a prior tendency to acne. It may affect any site prone to acne (eg face). The lesions tend to be more uniform in appearance than is usual with acne. In many patients, steroid acne is the same condition as Malassezia folliculitis. It is due to a proliferation of malassezia yeasts (also known as pityrosporum). It presents with itchy superficial papules and pustules on the chest and back. In malassezia folliculitis, unlike acne vulgaris, most of the lesions are the same size. Comedones are not usually seen. Steroid acne may clear despite continuing the steroid medication. It usually, however, persists until the steroid medication is discontinued. Source: https://dermnetnz.org/topics/steroid-acne",
          expert_image:
            "https://storage.googleapis.com/camerlang-images-bucket/libraries/expert-images/expert-2.jpg",
          expert_name: "dr. Merry Dame Cristy Pane",
          expert_specialization: "Dokter Umum di RSUD Sukadana",
          expert_verification_date: "24 April 2022",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("libraries", null, {});
  },
};

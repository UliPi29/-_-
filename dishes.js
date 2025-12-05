// Массив с данными о блюдах
const dishes = [
    // Супы
    {
      keyword: 'gaspacho',
      name: 'Гаспачо',
      price: 195,
      category: 'soup',
      kind: 'veg',
      count: '350 г',
      image: 'https://avatars.mds.yandex.net/i?id=208f710776c225d32192952ebb884efc4ca1526e-5239620-images-thumbs&n=13'
    },
    {
      keyword: 'norwegian_soup',
      name: 'Норвежский суп',
      price: 270,
      category: 'soup',
      kind: 'fish',
      count: '400 мл',
      image: 'https://avatars.mds.yandex.net/i?id=21825f020be425f752f2789120557b67d6faa7d1-4451123-images-thumbs&n=13'
    },
    {
      keyword: 'chicken_noodle_soup',
      name: 'Куриный суп с лапшой',
      price: 220,
      category: 'soup',
      kind: 'meat',
      count: '380 мл',
      image: 'https://avatars.mds.yandex.net/i?id=a42a0f22327114a36b8d3591c1d2db461d8e84d6-16401677-images-thumbs&n=13'
    },
    {
      keyword: 'mushroom_cream_soup',
      name: 'Грибной крем-суп',
      price: 240,
      category: 'soup',
      kind: 'veg',
      count: '350 мл',
      image: 'https://yandex-images.clstorage.net/56aHh0v86/9c6207ln1L/_yWsbx_6CsA7ThPpVxSiG2V7gE-Bxf9J4IuNJG0msaHH9_9v_YheK6J6kJCVIaE78PQu5wy9SUK-rZRWHYpqH-8h7iNUuR2VbQ4MvV8Xpxl4JsNenZ_7FPrJ3n9vIIyYsoGJUdPsIVveV97EmnbzdbqxYt5i-wlpsv3YHgz8B0LeHLxDAMJT2zJ5TddeLqAKSjCnQruO_wTMmOMWKEGgn4O6om3R9ApS1VLswbVx4mbfmVXyXpwGeb7GwR480QJL3RKvfi_-Rcsda1P6YTOvEXQarVOXvtoZ6qrFFA56kai9lZNH3v0bUdBM3tKkZ_1I8I507ne_GkKv0_YsMPwxRfwrqEgZyEbuMGxO308OkjVpGZdcsZDkBcK86QMaZIWFiqSnfs7zIHTWTtXfvmfUYeaPedFWugVKlebsAh38KkHDAZZoPsF04Rd0UsBYKLANegetULSH-SfEjMYkDVi6oLW0p1jpyiBP_UDA4pBl4VfTonDibbk5ZY3z9jQj4DNQ4AupbQHEcdkvRW36QxaOKnkvjEuMp_Mc-LXFCR9HoLGBj5lL9tULWtlS9-GNSv9hx4BO41OZNVOC88ghMc4ZaPoBnU8k30PZPFJe5H05iCZ-GatAuKX3OOut4jYfcZ-CooqtW8zLLl7FVO3EhmXyW926WMlkjSZFruXaLjzYNUX-Cq5CBOZzwTxSd_hfEYwqZRGXZ4G-4SfZoPUwOFGEjoCjpWzqxDxezW_984xW0EvWu3XbSrAxaJLT1yQ80DFy4guCdDzmcf4QZVf0fDOzP1gNlGm-g9wX8IL1FjJDh7C4kIFl3_wCa_BwzuCCYvhZ3LV70kmiFGmV8ecDMe0LYf01n3wm3k37EH9w9k8_pTlsBoV4kovTL-uIxjgPUr2SoqSHWs_ZGWv6WOnjhnv5dNGJYvVtkiZrt93HBDz1BF_NKaJ_Hv1z2yV5R_JvC7IUUQO8Tr6QzC_8pOEEHXI'
    },
    {
      keyword: 'borscht',
      name: 'Борщ с говядиной',
      price: 200,
      category: 'soup',
      kind: 'meat',
      count: '400 мл',
      image: 'https://avatars.mds.yandex.net/i?id=087210ea9b2c126eb1716dc0c59bd9bca01c78c1-8483432-images-thumbs&n=13'
    },
    {
      keyword: 'uxa_soup',
      name: 'Уха из семги',
      price: 320,
      category: 'soup',
      kind: 'fish',
      count: '400 мл',
      image: 'https://avatars.mds.yandex.net/i?id=9e91041ba2925ce1c3b63a7a0fe96185c2388339-12538603-images-thumbs&n=13'
    },
    
    // Главные блюда
    {
      keyword: 'forel',
      name: 'Запеченная форель',
      price: 385,
      category: 'main_course',
      kind: 'fish',
      count: '300 г',
      image: 'https://avatars.mds.yandex.net/i?id=b9f9028ab8ae53d92738e1c7b3c85f18fbd585aa-4730430-images-thumbs&n=13'
    },
    {
      keyword: 'ragu',
      name: 'Овощное рагу',
      price: 190,
      category: 'main_course',
      kind: 'veg',
      count: '350 г',
      image: 'https://avatars.mds.yandex.net/i?id=de4884cb8e5e31c8640c16a5b3007ac33b349e6d-5235404-images-thumbs&n=13'
    },
    {
      keyword: 'fried_potatoes',
      name: 'Жареная картошка с грибами',
      price: 150,
      category: 'main_course',
      kind: 'veg',
      count: '280 г',
      image: 'https://avatars.mds.yandex.net/i?id=a5967399c02b99169d8931197a5d372bd6ca1bac-5427052-images-thumbs&n=13'
    },
    {
      keyword: 'salmon_steak',
      name: 'Стейк лосося с овощами',
      price: 420,
      category: 'main_course',
      kind: 'fish',
      count: '320 г',
      image: 'https://avatars.mds.yandex.net/i?id=915c29f196040318cb3ce1e6f6ab57fe6b9c647b-4755642-images-thumbs&n=13'
    },
    {
      keyword: 'pasta_carbonara',
      name: 'Паста Карбонара',
      price: 320,
      category: 'main_course',
      kind: 'meat',
      count: '300 г',
      image: 'https://avatars.mds.yandex.net/i?id=d34e1c9346dfc9bbb35f8e862ace44de58212934-12932370-images-thumbs&n=13'
    },
    {
      keyword: 'plov',
      name: 'Плов с бараниной',
      price: 280,
      category: 'main_course',
      kind: 'meat',
      count: '350 г',
      image: 'https://avatars.mds.yandex.net/i?id=cce11e8407bc3f0e44d70227f1bc60e65408c810-7013372-images-thumbs&n=13'
    },
    
    // Напитки
    {
      keyword: 'berry_fruit_drink',
      name: 'Морс ягодный',
      price: 120,
      category: 'drink',
      kind: 'cold',
      count: '330 мл',
      image: 'https://yandex-images.clstorage.net/uP9h74n15/cc988baIE/_10ZZYaNhUNkWj-uDM45UmaHRm6ZFZP9KMbnH3_nfDNzhM750I5ANtlWVwJc5xCW73Unw01ugyLDss30xUHfPaMNBTy3gIE2MSsjwz3-JXZ2-mobuRSPjGDqu3IigjVqxikTLAkjnaM4r77vcaJtz6pNQ45Jnnt6_sPMUJjQE1xb3RUxXhGsa5ACujKM3q0mMjq6nt3Y-2RMxpY6C_somrYBW0gNhwn7IANaky223Yu6RMf69f5GTvr_XMiAyEdspxFZjR4hqB-0QiqSzEK1qr5KYg4tVPdIhC7uplM39LqaebtM2RfFA_Q_fhOhev1v8oxXFknyAn72wyigYDgvrN9dQWXihQxXwI4uprRmmU5ucnba5ST7RFxaegrHxzy2qtEnQFl_sfPU69Z3Dap9m6IQY_4B2kpyzqdUQICkw-hvnU3pDt1MuzhixpqklulWOqZ2jr3AE2SUZt5GT_vY7gLB07QtuyXvDOtatylC4YPiqLfKiUpOTk7TLFCgCP_c85F9fbKdoD_oAkYyYJ4R1iJK-h45fG8ItCoiCos3TL5q8T8wzU_FM8yHWsfZLjVjXgTf-pnaHl5yR1wAiCgDKBvJxYnq9eCvlOLe3ljmPUo67h7CqaTP0OxOfkYjb3hC3j3HQB3vaUuIL6qLgWY9H24o726B9mLC7kc81Cyol_DPLVXltt14q7QeZiZIhknuxrLW8h2kH0wA8tZis8voHmqJDziJa22v3AfOBym6XUvaJG8mAf6W0oJngECsrBu0p9Utfc6VVP-QZvau8Hap6uJq6lLdbA9cjOqmuoev_CKm4a-wRTd9W7TrrgMFjkHTYvhrUgkqDhLu3wAYzDwvHKMhQYkq7QxzwNqiRnRqld5qMq7-AdwnbEhS8lIfwzSemp0DHEkTJTvYk77jUaoBgx6kP671PlqqEr_4CNiYu1jjqb0t6oEQY7iiklKsFsEO0vbu_smgI7Bw9np-z2fA'
    },
    {
      keyword: 'orange_juice',
      name: 'Сок апельсиновый',
      price: 100,
      category: 'drink',
      kind: 'cold',
      count: '330 мл',
      image: 'https://avatars.mds.yandex.net/i?id=4fe2ce58c0e427373efd5ba9f6434857537a8956-12631997-images-thumbs&n=13'
    },
    {
      keyword: 'homemade_lemonade',
      name: 'Домашний лимонад',
      price: 150,
      category: 'drink',
      kind: 'cold',
      count: '400 мл',
      image: 'https://avatars.mds.yandex.net/i?id=b256cae70e509edf3214887a4ac6cd1ac7e775ea-12615842-images-thumbs&n=13'
    },
    {
      keyword: 'tea',
      name: 'Чай черный/зеленый',
      price: 80,
      category: 'drink',
      kind: 'hot',
      count: '300 мл',
      image: 'https://yandex-images.clstorage.net/DTM4j9250/27040dn1XIW4/CIY-_pEEwcHbk3WXtjtBGuFrAg5sODZdimXSUqE_7fw3-k_E8P_yz0Idus5NqnUNbl5OGjEDIqw6604dMbmkuEmC-lqQsZS1ykY1F4ZrYM81WhPLzH3n-a-gZtIUmmi8VDyIg5L5ZRkFqthprF9FuEtPmp5wQJQtTbvc7kF85_s59k3P5UQhMi0wZOXlCoMPY2sTCM_8tp39coX3h9ytyOadOfGzWYZKBBs6Sh18FGjqDq9_E4H2W-zr_g1irkf4KdZPvPWW4fGsUraE9soyTyAL8GgcD5R_3PClhqRe3Nk2zzuDEXpWaFcoa-psbwc5KXxv7HBBxam_i01eUA3mqDhlr09lhjDSPPPk1yS7MqwTasLq3_5mbv4gF0XVLYy5B22oYLJotYoEajn7ba4mWHqczrzzYSZbrctsX7HOZXj7RE_99ZTD8s1SF9RGq9DMUNhSy8__ZW6v0-d0BCzcqzbPKjPQGldYtbormzyPJRjZPZ9MMYLG-25bHH2xPEbq6oW9rTf3UfO_o_U1RzqBnLCq0NhcjoXfbxDV57TOv0pV_apxkXr2ejRouOltvyUIWH98jsHTdpk_OSxdQW3WG7n3bHz2tbHwfYB296d6IczgGgI4bQ72bKzARydE_X6Lp-74UyAb1chmOPjrvmwU-Etcv9-wUzdaX8oe_qNsFdg5lU3tV1eS432TxpTG6YIdkLtgGf-ep92uwJZ0pl7MC8Xd-BKB6KWYF4uKegzP1dr4vs5sEnMUWVyrPbyAvjeYawaNLJZ28yD_0Gf151iC35NZY3hf7wYOvPDGRdacjuuHP-mBQKvGqufJqMu9_TTJek-OjMPCZ7jsax8MMiy2Cisnj8zlNvMyzDDVdTb7w72hSkP4Da6HXb9wZNT0LM4KV-8asdO4dagGOZmp3S73qqvu7R4BcMT578rtXTA8RCg79a1P1Rcz4Y8D1QYE66OeEUhgaAx8thz_AhaXw'
    },
    {
      keyword: 'latte',
      name: 'Кофе латте',
      price: 140,
      category: 'drink',
      kind: 'hot',
      count: '200 мл',
      image: 'https://avatars.mds.yandex.net/i?id=2d18aac77d15dd05b79a0fd05ea73c81fddb0baf-11378374-images-thumbs&n=13'
    },
    {
      keyword: 'cocoa',
      name: 'Какао с шоколадом',
      price: 130,
      category: 'drink',
      kind: 'hot',
      count: '300 мл',
      image: 'https://yandex-images.clstorage.net/DTM4j9250/27040dn1XIW4/CIY-_pEEwcHbk3WXtjtBGuFrAg5sODZdimXyt8F_nflS2u_Ela_3r3JI-rttinBIW0srClRm8ql66ysIIekR-Eni-orgYQTl2hY1F4ZrYM81WhPLzH3n-a9VYsKXjE-7deyIYqJI5XjGqLobDZ7RuSpN7YtTU8UKDysNHiGc9shZZh9tZ6aQ4lwDdhY0m1DcUtojGq5v9O3sE6e2JS3-yVRMazGj-Qdbd4vry6zf5FhJjI_98gPn6Sz5rR0xvPS7SbTfrubEQoNPw8dWd_uzvIEpAfiP7dScz5HWp_V__Lv2b7sT8MpW-waY-JpvrSTLKky8D6FjVLoeWgxNIA8USNmkDo12ZRDQnbLHtUSagT5C2PPprT1mX77ihsfE3W9YVX1Y8aOIBOoHWdn7PE2Fm6lsX_2zI3W7_5mPneMu9PpJtv2th8Tj0_-iJdUHKBEfUtnw6fzOlm5v49bV9X_tCzcPuiMSWBaKVnjau5_s1Gtrj79dcLMFmf9rrA_y7waqi9VvrPU1ATL-M3SF51qTDMGoEFg8DaT93wG1NJZNbUl2bxsBk4qF-AdI2qserjepm94PPyHRNbkPOjz-oZ3Xe0qXj683FoLwHnPU1bfqQezwKGPr_902PS8ydPVkXj9rxw44s8HaxfrUm-tbDY30-OpeTvxBIgca7Tv_PSH_9urrday8NwUyk3_gdwTHSyPNYrgyWv3d527NkcZ1Bm0_Kmb9SOOwabdrZjgqeb5vhUtIfm3_QkMkWM7p3X1zbDYrKlTNf7VGk_JeUXfGxKkgrMLJk4nv7bdfvVOElUSPLrmnvivRQCuV2tcKy2o8nsWrmc8eHvKDBuh8e1zvM000y1kUzW2GpiFyj_I2pPa6ACyQiBLa7G0Vzp_jxHSUX92JNK2Y06HbpLi32QgJ7T-mOVt9vV_xIvS5fmuuzSOfFkhpNQ2-xZUhAb3iVodGuCO8kVojm6wfZ42s0JSXk'
    },
    // Салаты
    {
      keyword: 'tuna',
      name: 'Салат с тунцом',
      category: 'salad',
      kind: 'fish',
      price: 280,
      count: '250 г',
      image:'https://avatars.mds.yandex.net/i?id=1039a4493bc1ea4a9074fc79be0b3d4e71b02d92-4017487-images-thumbs&n=13'
    },
    {
      keyword: 'crab',
      name: 'Крабовый салат',
      category: 'salad',
      kind: 'fish',
      price: 250,
      count: '210 г',
      image:'https://avatars.mds.yandex.net/i?id=a6a53ce5802bbb42bb1e056491f5d2c837a0cd26-5227258-images-thumbs&n=13'
    },
    {
      keyword: 'cesar',
      name: 'Салат Цезарь с курицей',
      category: 'salad',
      kind: 'meat',
      price: 320,
      count: '300 г',
      image:'https://avatars.mds.yandex.net/i?id=f0be8e5723ea09c5763d36384ee82a457a4f9930-4268363-images-thumbs&n=13'
    },
    {
      keyword: 'greak',
      name: 'Греческий салат',
      category: 'salad',
      kind: 'veg',
      price: 240,
      count: '280 г',
      image:'https://avatars.mds.yandex.net/i?id=0a7fafe60c69c17a1c67f5528f189a73cdc817f8-9051257-images-thumbs&n=13'
    },
    {
      keyword: 'pineapple',
      name: 'Ананасовый салат',
      category: 'salad',
      kind: 'meat',
      price: 230,
      count: '250 г',
      image:'https://avatars.mds.yandex.net/i?id=12044956031df2d4aabdadf1a8e79ec9198d512b-5231885-images-thumbs&n=13'
    },
    {
      keyword: 'mozzarella',
      name: 'Салат с моцареллой',
      category: 'salad',
      kind: 'veg',
      price: 200,
      count: '290 г',
      image:'https://avatars.mds.yandex.net/i?id=76a189e1a1a65ac5ed62d84035cc56a6d3c94de1-5252229-images-thumbs&n=13'
    },
    // Десерты
    {
      keyword: 'apple',
      name: 'Яблочный пирог',
      category: 'dessert',
      kind: 'large',
      price: 380,
      count: '500 г',
      image:'https://avatars.mds.yandex.net/i?id=84be1472ecdc86b5e89d6e9b32b6638db76f31aa-5100139-images-thumbs&n=13'
    },
    {
      keyword: 'fruit',
      name: 'Фруктовая тарелка',
      category: 'dessert',
      kind: 'large',
      price: 350,
      count: '400 г',
      image:'https://i.pinimg.com/originals/9b/cf/e7/9bcfe7a919ad52fc496cc664354a1822.jpg'
    },
    {
      keyword: 'cheesecake',
      name: 'Чизкейк',
      category: 'dessert',
      kind: 'medium',
      price: 250,
      count: '230 г',
      image:'https://avatars.mds.yandex.net/i?id=892b83cd32fc48fcd98c866f8f3a48043fe46250-5151057-images-thumbs&n=13'
    },
    {
      keyword: 'donut',
      name: 'Пончик',
      category: 'dessert',
      kind: 'small',
      price: 140,
      count: '100 г',
      image:'https://avatars.mds.yandex.net/i?id=36d1b660202f7f04f5b8f71097fba1184b0b95d3-8438956-images-thumbs&n=13'
    },
    {
      keyword: 'chocolate_cake',
      name: 'Шоколадный торт',
      category: 'dessert',
      kind: 'medium',
      price: 220,
      count: '200 г',
      image:'https://avatars.mds.yandex.net/i?id=568f5ff937775b5aceb2ef6499024514f224b8ca-4526725-images-thumbs&n=13'
    },
    {
      keyword: 'ice_cream',
      name: 'Карамельное мороженое с орехами',
      category: 'dessert',
      kind: 'small',
      price: 160,
      count: '140 г',
      image:'https://i.pinimg.com/474x/b7/73/7d/b7737d0cb050a0835bf13e3a7de26487.jpg'
    }
  ];
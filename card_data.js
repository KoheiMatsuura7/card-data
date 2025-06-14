const allCards = [
    {
        "name": "リーリエ(SM1M-066)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 200000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/910512b0-2a6d-013e-45f2-0a58a9feac02/035622_T_RIRIE.jpg"
    },
    {
        "name": "リーリエのピッピex",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 25000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/3ae31580-2a6d-013e-45e4-0a58a9feac02/047246_P_RIRIENOPIPPIEX.jpg"
    },
    {
        "name": "リーリエの全力",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 50000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/3ae017b0-2a6d-013e-45e3-0a58a9feac02/037178_T_RIRIENOZENRYOKU.jpg"
    },
    {
        "name": "ピカチュウ＆ゼクロムGX 【SA】",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 50000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30b68c0-2a69-013e-eba9-0a58a9feac02/036206_P_PIKACHUUZEKUROMUGX.jpg"
    },
    {
        "name": "ピカチュウ＆ゼクロムGX",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 200000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30f23a0-2a69-013e-4569-0a58a9feac02/036205_P_PIKACHUUZEKUROMUGX.jpg"
    },
    {
        "name": "Pikachu with Grey Felt Hat",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 40000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1738a700-2a6d-013e-45db-0a58a9feac02/20231010_701f57.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(208/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 800000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bd60f60-2a6a-013e-4577-0a58a9feac02/031641_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(207/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bf5b5a0-2a6a-013e-4579-0a58a9feac02/031640_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(231/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bd5e050-2a6a-013e-4576-0a58a9feac02/032192_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(230/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bd67bb0-2a6a-013e-4578-0a58a9feac02/032191_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(037/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4127690-2a6c-013e-45cd-0a58a9feac02/033400_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(038/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b41521c0-2a6c-013e-45ce-0a58a9feac02/033401_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(275/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/e3aa7b60-2a6c-013e-45d5-0a58a9feac02/032311_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(274/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/e3aa4a80-2a6c-013e-45d4-0a58a9feac02/032310_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(227/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 114000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30cb190-2a69-013e-ebaa-0a58a9feac02/039954_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウVMAX(223/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 9980,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/87032ae0-2a69-013e-d715-0a58a9feac02/041054_P_PIKACHIXYUUVMAX.jpg"
    },
    {
        "name": "ピカチュウ(208/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 9000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30d3f30-2a69-013e-ebab-0a58a9feac02/039914_P_PIKACHUU.jpg"
    },
    {
        "name": "スカル団ごっこピカチュウ",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bcf9610-2a6a-013e-4573-0a58a9feac02/033288_P_SUKARUDANGOKKOPIKACHUU.jpg"
    },
    {
        "name": "コイキングごっこピカチュウ",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bd2c7d0-2a6a-013e-4574-0a58a9feac02/031162_P_KOIKINGUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "マリオピカチュウ(294/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/0ab5a350-2a6c-013e-45b3-0a58a9feac02/032349_P_MARIOPIKACHUU.jpg"
    },
    {
        "name": "マリオピカチュウ(293/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/0ab690d0-2a6c-013e-45b5-0a58a9feac02/032348_P_MARIOPIKACHUU.jpg"
    },
    {
        "name": "ルイージピカチュウ(296/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/0ab5d850-2a6c-013e-45b4-0a58a9feac02/032351_P_RUIJIPIKACHUU.jpg"
    },
    {
        "name": "ルイージピカチュウ(295/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/0ab75b10-2a6c-013e-45b6-0a58a9feac02/032350_P_RUIJIPIKACHUU.jpg"
    },
    {
        "name": "ピカチュウEX",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 600000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30f5b80-2a69-013e-456a-0a58a9feac02/035866_P_PIKACHUUEX.jpg"
    },
    {
        "name": "メガトウキョーのピカチュウ",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/ab91dee0-2a6d-013e-45f7-0a58a9feac02/030810_P_MEGATOUKYONOPIKACHUU.jpg"
    },
    {
        "name": "ギャラドスごっこピカチュウ",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bd54eb0-2a6a-013e-4575-0a58a9feac02/031163_P_GYARADOSUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "コイキングごっこピカチュウ",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/1bd2c7d0-2a6a-013e-4574-0a58a9feac02/031162_P_KOIKINGUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(400/SM-P)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 158000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/c83fbe40-2a6d-013e-45f9-0a58a9feac02/037439_P_PIKACHUU.jpg"
    },
    {
        "name": "ミミッキュVMAX",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 158000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/86e012c0-2a69-013e-4205-0a58a9feac02/041062_P_MIMIKKIXYUVMAX.jpg"
    },
    {
        "name": "ピカチュウ(ムンク)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 130000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30f0a40-2a69-013e-ebad-0a58a9feac02/035894_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウV(001/015)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/f30e1d30-2a69-013e-ebac-0a58a9feac02/041664_P_PIKACHIXYUUV.jpg"
    },
    {
        "name": "ブラッキーex(217/187)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/c02d1800-2b2e-013e-4c74-0a58a9feac02/047138_P_BURAKKIEX.jpg"
    },
    {
        "name": "ブラッキーVMAX",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/87035e40-2a69-013e-d714-0a58a9feac02/041073_P_BURAKKIVMAX.jpg"
    },
    {
        "name": "ブラッキーV",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/86e15000-2a69-013e-4206-0a58a9feac02/041072_P_BURAKKIV.jpg"
    },
    {
        "name": "ブラッキー&ダークライGX(182/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/c0338800-2b2e-013e-4c75-0a58a9feac02/037450_P_BURAKKIDAKURAIGX.jpg"
    },
    {
        "name": "アローラの仲間たち(401/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/c0284270-2b2e-013e-4c73-0a58a9feac02/037440_T_ARORANONAKAMATACHI.jpg"
    },
    {
        "name": "ギラティナV【SA】(111/100)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4dbd970-2b2e-013e-4c71-0a58a9feac02/042086_P_GIRATEINAV.jpg"
    },
    {
        "name": "ロケット団参上！(278/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4bca000-2b2e-013e-4c69-0a58a9feac02/032337_T_ROKETTODANSANJOU.jpg"
    },
    {
        "name": "アセロラ(395/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4bf2000-2b2e-013e-4c6e-0a58a9feac02/037191_T_ASERORA.jpg"
    },
    {
        "name": "MサチコEX(298/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4bfb3a0-2b2e-013e-4c6f-0a58a9feac02/032353_P_MSACHIKOEX.jpg"
    },
    {
        "name": "アセロラ(056/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4c21670-2b2e-013e-4c70-0a58a9feac02/035646_T_ASERORA.jpg"
    },
    {
        "name": "アセロラの予感(255/184)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4bdd660-2b2e-013e-4c6b-0a58a9feac02/041083_T_ASERORANOYOKAN.jpg"
    },
    {
        "name": "レックウザVMAX(252/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4bef640-2b2e-013e-4c6d-0a58a9feac02/041080_P_REKKUUZAVMAX.jpg"
    },
    {
        "name": "ロイヤルマスク(085/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 400000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4bcd0f0-2b2e-013e-4c6a-0a58a9feac02/034074_T_ROIYARUMASUKU.jpg"
    },
    {
        "name": "レックウザV【SA】(076/067)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4be1c90-2b2e-013e-4c6c-0a58a9feac02/039945_P_REKKUUZAV.jpg"
    },
    {
        "name": "ラティアス&ラティオス【SA】(105/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/b4b9fee0-2b2e-013e-4c68-0a58a9feac02/036210_P_RATEIASURATEIOSUGX.jpg"
    },
    {
        "name": "ニンフィアVMAX(232/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/86e3c170-2a69-013e-d710-0a58a9feac02/041060_P_NINFUIAVMAX.jpg"
    },
    {
        "name": "スターミーV(083/067)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/86e42fc0-2a69-013e-d712-0a58a9feac02/041511_P_SUTAMIV.jpg"
    },
    {
        "name": "ジャローダV(084/068)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/86e46570-2a69-013e-d713-0a58a9feac02/042206_P_JIXYARODAV.jpg"
    },
    {
        "name": "ナンジャモ(091/071)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/58ae6d70-2a69-013e-dda1-0a58a9feac02/043659_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモ(350/190)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/58b18660-2a69-013e-dda3-0a58a9feac02/045136_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモ(096/071)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/58b06330-2a69-013e-dda2-0a58a9feac02/043664_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモのハラバリーex(125/100)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/58b1b220-2a69-013e-41fb-0a58a9feac02/047245_P_NANJIXYAMONOHARABARIEX.jpg"
    },
    {
        "name": "ハイパーボール(126/100)",
        "category": "ポケカ",
        "subcategory": "UR",
        "price": 35000,
        "imgSrc": "https://cdn.peraichi.com/userData/577d7af7-4e20-4459-b45d-21ac0a00005c/img/a1203430-2a69-013e-d71b-0a58a9feac02/044861_T_HAIPABORU.jpg"
    }
];
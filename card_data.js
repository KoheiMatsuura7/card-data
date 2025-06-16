const allCards = [
    {
        "name": "MサチコEX(298/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1500000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032353_P_MSACHIKOEX.jpg"
    },
    {
        "name": "N(180/171)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 170000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035881_T_.jpg"
    },
    {
        "name": "Pikachu with Grey Felt Hat(085/SV-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 48000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/20231010_701f57.jpg"
    },
    {
        "name": "アセロラ(056/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035646_T_ASERORA.jpg"
    },
    {
        "name": "アセロラ(395/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037191_T_ASERORA.jpg"
    },
    {
        "name": "アセロラの予感(255/184)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 7500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041083_T_ASERORANOYOKAN.jpg"
    },
    {
        "name": "アルセウス&ディアルガ&パルキア【SA】(100/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 45000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037382_P_ARUSEUSUDEIARUGAPARUKIAGX.jpg"
    },
    {
        "name": "アローラの仲間たち(401/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 260000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037440_T_ARORANONAKAMATACHI.jpg"
    },
    {
        "name": "イーブイGX【SA】(188/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 26000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037456_P_IBUIGX.jpg"
    },
    {
        "name": "オカルトマニア(181/171)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 340000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035882_T_OKARUTOMANIA.jpg"
    },
    {
        "name": "カリン(183/171)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 130000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035884_T_KARIN.jpg"
    },
    {
        "name": "ギャラドスごっこピカチュウ(151/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/031163_P_GYARADOSUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "ギラティナV【SA】(111/100)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 95000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/042086_P_GIRATEINAV.jpg"
    },
    {
        "name": "ゲンガー&ミミッキュGX【SA】(103/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 85000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036208_P_GENGAMIMIKKYUGX.jpg"
    },
    {
        "name": "コイキングごっこピカチュウ(150/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/031162_P_KOIKINGUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "コダック(286/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 90000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035892_P_KODAKKU.jpg"
    },
    {
        "name": "サーナイト&ニンフィアGX【SA】(061/055)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 47000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036317_P_SANAITONINFIAGX.jpg"
    },
    {
        "name": "サカキの計画(277/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032336_T_SAKAKINOKEIKAKU.jpg"
    },
    {
        "name": "サンダースVMAX【SA】(188/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039912_P_SANDASUVMAX.jpg"
    },
    {
        "name": "ジャローダV(084/068)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 3000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/042206_P_JIXYARODAV.jpg"
    },
    {
        "name": "シャワーズVMAX【SA】(187/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039911_P_SHAWAZUVMAX.jpg"
    },
    {
        "name": "スカル団ごっこピカチュウ(013/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/033288_P_SUKARUDANGOKKOPIKACHUU.jpg"
    },
    {
        "name": "スターミーV(083/067)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 12000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041511_P_SUTAMIV.jpg"
    },
    {
        "name": "ソルガレオ&ルナアーラGX【SA】(063/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 47000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037173_P_SORUGAREORUNAARAGX.jpg"
    },
    {
        "name": "トゲピー&ピィ&ププリンGX【SA】(186/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 32000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037454_P_TOGEPIPIIPUPURINGX.jpg"
    },
    {
        "name": "ナンジャモ(091/071)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 8500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/043659_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモ(096/071)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 50000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/043664_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモ(350/190)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 11000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/045136_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモのハラバリーex(125/100)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 10000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/047245_P_NANJIXYAMONOHARABARIEX.jpg"
    },
    {
        "name": "ニンフィアVMAX(232/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 4500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041060_P_NINFUIAVMAX.jpg"
    },
    {
        "name": "エーフィVMAX【SA】(189/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 25000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039913_P_EFIVMAX.jpg"
    },
    {
        "name": "ハイパーボール(126/100)",
        "category": "ポケカ",
        "subcategory": "UR",
        "price": 6500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/044861_T_HAIPABORU.jpg"
    },
    {
        "name": "ピカチュウ＆ゼクロムGX(100/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 6700,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036205_P_PIKACHUUZEKUROMUGX.jpg"
    },
    {
        "name": "ピカチュウ＆ゼクロムGX 【SA】(101/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 110000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036206_P_PIKACHUUZEKUROMUGX.jpg"
    },
    {
        "name": "ピカチュウ(208/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 8300,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039914_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(227/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 95000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039954_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(400/SM-P)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 130000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037439_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(288/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 450000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035894_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウEX(094/087)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 250000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035866_P_PIKACHUUEX.jpg"
    },
    {
        "name": "ピカチュウV(001/015)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 42000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041664_P_PIKACHIXYUUV.jpg"
    },
    {
        "name": "ピカチュウVMAX(223/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 9000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041054_P_PIKACHIXYUUVMAX.jpg"
    },
    {
        "name": "ファイヤー&サンダー&フリーザー【SA】(060/054)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 77000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036878_P_FAIYASANDAFURIZAGX.jpg"
    },
    {
        "name": "ブースターVMAX【SA】(186/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039910_P_BUSUTAVMAX.jpg"
    },
    {
        "name": "フウロ(164/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 55000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/031466_T_FUURO.jpg"
    },
    {
        "name": "ブラッキー&ダークライGX(182/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037450_P_BURAKKIDAKURAIGX.jpg"
    },
    {
        "name": "ブラッキーex(217/187)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 32000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/047138_P_BURAKKIEX.jpg"
    },
    {
        "name": "ブラッキーV(244/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 3000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041072_P_BURAKKIV.jpg"
    },
    {
        "name": "ブラッキーVMAX(245/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 7500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041073_P_BURAKKIVMAX.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(037/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/033400_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(038/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/033401_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(207/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 950000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/031640_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(208/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 700000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/031641_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(230/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032191_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(231/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032192_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(274/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 210000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032310_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(275/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 210000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032311_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "マリオピカチュウ(293/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032348_P_MARIOPIKACHUU.jpg"
    },
    {
        "name": "マリオピカチュウ(294/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 950000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032349_P_MARIOPIKACHUU.jpg"
    },
    {
        "name": "ミミッキュ(289/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 480000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035895_P_MIMIKKYU.jpg"
    },
    {
        "name": "ミミッキュVMAX(234/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 4500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041062_P_MIMIKKIXYUVMAX.jpg"
    },
    {
        "name": "ミュウツー&ミュウGX【SA】(098/094)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 80000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036978_P_MYUUTSUMYUUGX.jpg"
    },
    {
        "name": "メガトウキョーのピカチュウ(098/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 75000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/030810_P_MEGATOUKYONOPIKACHUU.jpg"
    },
    {
        "name": "ラティアス&ラティオス【SA】(105/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 180000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036210_P_RATEIASURATEIOSUGX.jpg"
    },
    {
        "name": "リーリエ(066/060)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035622_T_RIRIE.jpg"
    },
    {
        "name": "リーリエのピッピex(126/100)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 20000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/047246_P_RIRIENOPIPPIEX.jpg"
    },
    {
        "name": "リーリエの全力(068/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 47000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037178_T_RIRIENOZENRYOKU.jpg"
    },
    {
        "name": "ルイージピカチュウ(295/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 220000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032350_P_RUIJIPIKACHUU.jpg"
    },
    {
        "name": "ルイージピカチュウ(296/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 650000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032351_P_RUIJIPIKACHUU.jpg"
    },
    {
        "name": "ルギアV【SA】(110/098)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 53000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/042542_P_RUGIAV.jpg"
    },
    {
        "name": "ルザミーネ(055/050)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 120000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035674_T_RUZAMINE.jpg"
    },
    {
        "name": "ルザミーネ(120/114)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 120000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035680_T_RUZAMINE.jpg"
    },
    {
        "name": "レシラム&リザードンGX【SA】(097/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036645_P_RESHIRAMURIZADONGX.jpg"
    },
    {
        "name": "レックウザV【SA】(076/067)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 45000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/039945_P_REKKUUZAV.jpg"
    },
    {
        "name": "レックウザVMAX(252/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 4000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/041080_P_REKKUUZAVMAX.jpg"
    },
    {
        "name": "ロイヤルマスク(085/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3800000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/034074_T_ROIYARUMASUKU.jpg"
    },
    {
        "name": "ロケット団参上！(278/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032337_T_ROKETTODANSANJOU.jpg"
    },
    {
        "name": "20周年記念 ピカチュウ純金製カード",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 5000000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/jyunkmin.png"
    },
    {
        "name": "リーリエ(397/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3500000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/037193_T_RIRIE.jpg"
    },
    {
        "name": "リーリエ(119/114)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 700000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/035679_T_RIRIE.jpg"
    },
    {
        "name": "メガトウキョーのピカチュウ(204/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 500000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/031639_P_MEGATOUKYONOPIKACHUU.jpg"
    },
    {
        "name": "リザードンEX(276/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 280000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032317_P_RIZADONEX.jpg"
    },
    {
        "name": "ピカチュウ(279/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1300000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/032387_P_PIKACHUU.jpg"
    },
    {
        "name": "ミュウツーGX(364/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1100000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036997_P_MYUUTSUGX.jpg"
    },
    {
        "name": "ミュウツーGX(363/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 145000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/036996_P_MYUUTSUGX.jpg"
    },
    {
        "name": "Black・Magician",
        "category": "遊戯王",
        "subcategory": "UR",
        "price": 450000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/Black%20Magician.png"
    },
    {
        "name": "変化の仮面",
        "category": "ポケカ",
        "subcategory": "未開封BOX",
        "price": 7000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/71SyXDvePnL._UF894,1000_QL80_.jpg"
    }
];
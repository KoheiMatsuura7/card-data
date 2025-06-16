const allCards = [
    {
        "name": "MサチコEX(298/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1500000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4bfb3a0-2b2e-013e-4c6f-0a58a9feac02/032353_P_MSACHIKOEX.jpg"
    },
    {
        "name": "N(180/171)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 170000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97bc38b0-2b59-013e-110e-0a58a9feac02/035881_T_.jpg"
    },
    {
        "name": "Pikachu with Grey Felt Hat(085/SV-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 48000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1738a700-2a6d-013e-45db-0a58a9feac02/20231010_701f57.jpg"
    },
    {
        "name": "アセロラ(056/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4c21670-2b2e-013e-4c70-0a58a9feac02/035646_T_ASERORA.jpg"
    },
    {
        "name": "アセロラ(395/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4bf2000-2b2e-013e-4c6e-0a58a9feac02/037191_T_ASERORA.jpg"
    },
    {
        "name": "アセロラの予感(255/184)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 7500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4bdd660-2b2e-013e-4c6b-0a58a9feac02/041083_T_ASERORANOYOKAN.jpg"
    },
    {
        "name": "アルセウス&ディアルガ&パルキア【SA】(100/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 45000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97db17b0-2b59-013e-1112-0a58a9feac02/037382_P_ARUSEUSUDEIARUGAPARUKIAGX.jpg"
    },
    {
        "name": "アローラの仲間たち(401/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 260000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/c0284270-2b2e-013e-4c73-0a58a9feac02/037440_T_ARORANONAKAMATACHI.jpg"
    },
    {
        "name": "イーブイGX【SA】(188/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 26000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a2fb80-2b59-013e-1105-0a58a9feac02/037456_P_IBUIGX.jpg"
    },
    {
        "name": "オカルトマニア(181/171)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 340000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a26250-2b59-013e-1104-0a58a9feac02/035882_T_OKARUTOMANIA.jpg"
    },
    {
        "name": "カリン(183/171)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 130000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97bcebb0-2b59-013e-110f-0a58a9feac02/035884_T_KARIN.jpg"
    },
    {
        "name": "ギャラドスごっこピカチュウ(151/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bd54eb0-2a6a-013e-4575-0a58a9feac02/031163_P_GYARADOSUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "ギラティナV【SA】(111/100)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 95000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4dbd970-2b2e-013e-4c71-0a58a9feac02/042086_P_GIRATEINAV.jpg"
    },
    {
        "name": "ゲンガー&ミミッキュGX【SA】(103/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 85000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a50a2c30-2b59-013e-1117-0a58a9feac02/036208_P_GENGAMIMIKKYUGX.jpg"
    },
    {
        "name": "コイキングごっこピカチュウ(150/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bd2c7d0-2a6a-013e-4574-0a58a9feac02/031162_P_KOIKINGUGOKKOPIKACHUU.jpg"
    },
    {
        "name": "コダック(286/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 90000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86c007f0-2b59-013e-1108-0a58a9feac02/035892_P_KODAKKU.jpg"
    },
    {
        "name": "サーナイト&ニンフィアGX【SA】(061/055)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 47000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97bd6ef0-2b59-013e-1111-0a58a9feac02/036317_P_SANAITONINFIAGX.jpg"
    },
    {
        "name": "サカキの計画(277/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86c0d890-2b59-013e-1109-0a58a9feac02/032336_T_SAKAKINOKEIKAKU.jpg"
    },
    {
        "name": "サンダースVMAX【SA】(188/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a054c0-2b59-013e-1100-0a58a9feac02/039912_P_SANDASUVMAX.jpg"
    },
    {
        "name": "ジャローダV(084/068)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 3000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86e46570-2a69-013e-d713-0a58a9feac02/042206_P_JIXYARODAV.jpg"
    },
    {
        "name": "シャワーズVMAX【SA】(187/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a18f00-2b59-013e-1102-0a58a9feac02/039911_P_SHAWAZUVMAX.jpg"
    },
    {
        "name": "スカル団ごっこピカチュウ(013/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bcf9610-2a6a-013e-4573-0a58a9feac02/033288_P_SUKARUDANGOKKOPIKACHUU.jpg"
    },
    {
        "name": "スターミーV(083/067)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 12000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86e42fc0-2a69-013e-d712-0a58a9feac02/041511_P_SUTAMIV.jpg"
    },
    {
        "name": "ソルガレオ&ルナアーラGX【SA】(063/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 47000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97bb7440-2b59-013e-110d-0a58a9feac02/037173_P_SORUGAREORUNAARAGX.jpg"
    },
    {
        "name": "トゲピー&ピィ&ププリンGX【SA】(186/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 32000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97b94fd0-2b59-013e-110c-0a58a9feac02/037454_P_TOGEPIPIIPUPURINGX.jpg"
    },
    {
        "name": "ナンジャモ(091/071)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 8500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/58ae6d70-2a69-013e-dda1-0a58a9feac02/043659_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモ(096/071)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 50000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/58b06330-2a69-013e-dda2-0a58a9feac02/043664_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモ(350/190)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 11000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/58b18660-2a69-013e-dda3-0a58a9feac02/045136_T_NANJIXYAMO.jpg"
    },
    {
        "name": "ナンジャモのハラバリーex(125/100)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 10000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/58b1b220-2a69-013e-41fb-0a58a9feac02/047245_P_NANJIXYAMONOHARABARIEX.jpg"
    },
    {
        "name": "ニンフィアVMAX(232/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 4500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86e3c170-2a69-013e-d710-0a58a9feac02/041060_P_NINFUIAVMAX.jpg"
    },
    {
        "name": "エーフィVMAX【SA】(189/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 25000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/97bd2420-2b59-013e-1110-0a58a9feac02/039913_P_EFIVMAX.jpg"
    },
    {
        "name": "ハイパーボール(126/100)",
        "category": "ポケカ",
        "subcategory": "UR",
        "price": 6500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a1203430-2a69-013e-d71b-0a58a9feac02/044861_T_HAIPABORU.jpg"
    },
    {
        "name": "ピカチュウ＆ゼクロムGX(100/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 6700,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30f23a0-2a69-013e-4569-0a58a9feac02/036205_P_PIKACHUUZEKUROMUGX.jpg"
    },
    {
        "name": "ピカチュウ＆ゼクロムGX 【SA】(101/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 110000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30b68c0-2a69-013e-eba9-0a58a9feac02/036206_P_PIKACHUUZEKUROMUGX.jpg"
    },
    {
        "name": "ピカチュウ(208/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 8300,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30d3f30-2a69-013e-ebab-0a58a9feac02/039914_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(227/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 95000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30cb190-2a69-013e-ebaa-0a58a9feac02/039954_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(400/SM-P)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 130000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/c83fbe40-2a6d-013e-45f9-0a58a9feac02/037439_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウ(288/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 450000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30f0a40-2a69-013e-ebad-0a58a9feac02/035894_P_PIKACHUU.jpg"
    },
    {
        "name": "ピカチュウEX(094/087)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 250000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30f5b80-2a69-013e-456a-0a58a9feac02/035866_P_PIKACHUUEX.jpg"
    },
    {
        "name": "ピカチュウV(001/015)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 42000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/f30e1d30-2a69-013e-ebac-0a58a9feac02/041664_P_PIKACHIXYUUV.jpg"
    },
    {
        "name": "ピカチュウVMAX(223/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 9000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/87032ae0-2a69-013e-d715-0a58a9feac02/041054_P_PIKACHIXYUUVMAX.jpg"
    },
    {
        "name": "ファイヤー&サンダー&フリーザー【SA】(060/054)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 77000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a507f780-2b59-013e-1114-0a58a9feac02/036878_P_FAIYASANDAFURIZAGX.jpg"
    },
    {
        "name": "ブースターVMAX【SA】(186/S-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a3ddd0-2b59-013e-1107-0a58a9feac02/039910_P_BUSUTAVMAX.jpg"
    },
    {
        "name": "フウロ(164/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 55000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a50b0910-2b59-013e-111a-0a58a9feac02/031466_T_FUURO.jpg"
    },
    {
        "name": "ブラッキー&ダークライGX(182/173)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/c0338800-2b2e-013e-4c75-0a58a9feac02/037450_P_BURAKKIDAKURAIGX.jpg"
    },
    {
        "name": "ブラッキーex(217/187)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 32000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/c02d1800-2b2e-013e-4c74-0a58a9feac02/047138_P_BURAKKIEX.jpg"
    },
    {
        "name": "ブラッキーV(244/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 3000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86e15000-2a69-013e-4206-0a58a9feac02/041072_P_BURAKKIV.jpg"
    },
    {
        "name": "ブラッキーVMAX(245/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 7500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/87035e40-2a69-013e-d714-0a58a9feac02/041073_P_BURAKKIVMAX.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(037/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4127690-2a6c-013e-45cd-0a58a9feac02/033400_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(038/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b41521c0-2a6c-013e-45ce-0a58a9feac02/033401_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(207/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 950000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bf5b5a0-2a6a-013e-4579-0a58a9feac02/031640_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(208/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 700000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bd60f60-2a6a-013e-4577-0a58a9feac02/031641_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(230/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bd67bb0-2a6a-013e-4578-0a58a9feac02/032191_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(231/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1bd5e050-2a6a-013e-4576-0a58a9feac02/032192_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(274/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 210000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/e3aa4a80-2a6c-013e-45d4-0a58a9feac02/032310_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "ポンチョを着たピカチュウ(275/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 210000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/e3aa7b60-2a6c-013e-45d5-0a58a9feac02/032311_P_PONCHOWOKITAPIKACHUU.jpg"
    },
    {
        "name": "マリオピカチュウ(293/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 300000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/0ab690d0-2a6c-013e-45b5-0a58a9feac02/032348_P_MARIOPIKACHUU.jpg"
    },
    {
        "name": "マリオピカチュウ(294/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 950000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/0ab5a350-2a6c-013e-45b3-0a58a9feac02/032349_P_MARIOPIKACHUU.jpg"
    },
    {
        "name": "ミミッキュ(289/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 480000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a36380-2b59-013e-1106-0a58a9feac02/035895_P_MIMIKKYU.jpg"
    },
    {
        "name": "ミミッキュVMAX(234/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 4500,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86e012c0-2a69-013e-4205-0a58a9feac02/041062_P_MIMIKKIXYUVMAX.jpg"
    },
    {
        "name": "ミュウツー&ミュウGX【SA】(098/094)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 80000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a508f9f0-2b59-013e-1116-0a58a9feac02/036978_P_MYUUTSUMYUUGX.jpg"
    },
    {
        "name": "メガトウキョーのピカチュウ(098/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 75000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/ab91dee0-2a6d-013e-45f7-0a58a9feac02/030810_P_MEGATOUKYONOPIKACHUU.jpg"
    },
    {
        "name": "ラティアス&ラティオス【SA】(105/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 180000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4b9fee0-2b2e-013e-4c68-0a58a9feac02/036210_P_RATEIASURATEIOSUGX.jpg"
    },
    {
        "name": "リーリエ(066/060)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 400000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/910512b0-2a6d-013e-45f2-0a58a9feac02/035622_T_RIRIE.jpg"
    },
    {
        "name": "リーリエのピッピex(126/100)",
        "category": "ポケカ",
        "subcategory": "SAR",
        "price": 20000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/3ae31580-2a6d-013e-45e4-0a58a9feac02/047246_P_RIRIENOPIPPIEX.jpg"
    },
    {
        "name": "リーリエの全力(068/049)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 47000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/3ae017b0-2a6d-013e-45e3-0a58a9feac02/037178_T_RIRIENOZENRYOKU.jpg"
    },
    {
        "name": "ルイージピカチュウ(295/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 220000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/0ab75b10-2a6c-013e-45b6-0a58a9feac02/032350_P_RUIJIPIKACHUU.jpg"
    },
    {
        "name": "ルイージピカチュウ(296/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 650000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/0ab5d850-2a6c-013e-45b4-0a58a9feac02/032351_P_RUIJIPIKACHUU.jpg"
    },
    {
        "name": "ルギアV【SA】(110/098)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 53000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a50a8730-2b59-013e-1119-0a58a9feac02/042542_P_RUGIAV.jpg"
    },
    {
        "name": "ルザミーネ(055/050)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 120000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a0c300-2b59-013e-1101-0a58a9feac02/035674_T_RUZAMINE.jpg"
    },
    {
        "name": "ルザミーネ(120/114)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 120000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/86a1e7a0-2b59-013e-1103-0a58a9feac02/035680_T_RUZAMINE.jpg"
    },
    {
        "name": "レシラム&リザードンGX【SA】(097/095)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 70000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/a50a5aa0-2b59-013e-1118-0a58a9feac02/036645_P_RESHIRAMURIZADONGX.jpg"
    },
    {
        "name": "レックウザV【SA】(076/067)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 45000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4be1c90-2b2e-013e-4c6c-0a58a9feac02/039945_P_REKKUUZAV.jpg"
    },
    {
        "name": "レックウザVMAX(252/184)",
        "category": "ポケカ",
        "subcategory": "CSR",
        "price": 4000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4bef640-2b2e-013e-4c6d-0a58a9feac02/041080_P_REKKUUZAVMAX.jpg"
    },
    {
        "name": "ロイヤルマスク(085/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3800000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4bcd0f0-2b2e-013e-4c6a-0a58a9feac02/034074_T_ROIYARUMASUKU.jpg"
    },
    {
        "name": "ロケット団参上！(278/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 550000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/b4bca000-2b2e-013e-4c69-0a58a9feac02/032337_T_ROKETTODANSANJOU.jpg"
    },
    {
        "name": "20周年記念 ピカチュウ純金製カード",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 5000000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/6160c3f0-2b85-013e-872b-0a58a9feac02/jyunkmin.png"
    },
    {
        "name": "リーリエ(397/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 3500000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/91062dd0-2a6d-013e-45f3-0a58a9feac02/037193_T_RIRIE.jpg"
    },
    {
        "name": "リーリエ(119/114)",
        "category": "ポケカ",
        "subcategory": "SR",
        "price": 700000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/9103b140-2a6d-013e-45f1-0a58a9feac02/035679_T_RIRIE.jpg"
    },
    {
        "name": "メガトウキョーのピカチュウ(204/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 500000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/07aab370-2b86-013e-8731-0a58a9feac02/031639_P_MEGATOUKYONOPIKACHUU.jpg"
    },
    {
        "name": "リザードンEX(276/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 280000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/db3f4330-2b86-013e-8734-0a58a9feac02/032317_P_RIZADONEX.jpg"
    },
    {
        "name": "ピカチュウ(279/XY-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1300000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/1fbbf140-2b87-013e-8736-0a58a9feac02/032387_P_PIKACHUU.jpg"
    },
    {
        "name": "ミュウツーGX(364/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 1100000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/8736cdd0-2b87-013e-8738-0a58a9feac02/036997_P_MYUUTSUGX.jpg"
    },
    {
        "name": "ミュウツーGX(363/SM-P)",
        "category": "ポケカ",
        "subcategory": "プロモ",
        "price": 145000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/87369ed0-2b87-013e-8737-0a58a9feac02/036996_P_MYUUTSUGX.jpg"
    },
    {
        "name": "Black・Magician",
        "category": "遊戯王",
        "subcategory": "UR",
        "price": 450000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/7841c180-2b31-013e-8430-0a58a9feac02/Black%20Magician.png"
    },
    {
        "name": "変化の仮面",
        "category": "ポケカ",
        "subcategory": "未開封BOX",
        "price": 7000,
        "imgSrc": "https://koheimatsuura7.github.io/card-data/img/3f8383f0-2c0a-013e-f186-0a58a9feac02/71SyXDvePnL._UF894,1000_QL80_.jpg"
    }
];
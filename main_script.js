// 価格取得ユーティリティ
function getPrice(card) {
    return card.price;
}

// カード表示関数
function displayCards(cards) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // 既存のカードをクリア

    const storedQuantities = JSON.parse(localStorage.getItem('selectedCards') || '{}'); // 保存された数量を読み込む

    cards.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';

        // 保存された数量があればそれを取得、なければ0
        const currentQty = storedQuantities[card.name] ? storedQuantities[card.name].qty : 0;

        cardItem.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p>買取価格: ¥${card.price.toLocaleString()}</p>
            <div class="qty-wrapper">
                <button class="qty-minus" data-name="${card.name}">-</button>
                <input type="number" class="qty-input" value="${currentQty}" min="0" data-name="${card.name}">
                <button class="qty-plus" data-name="${card.name}">+</button>
            </div>
        `;
        cardContainer.appendChild(cardItem);
    });
    updateTotal(); // 表示後に合計金額を更新 (この呼び出しは変わらない)
}

// 合計金額の更新と選択状態の保存
function updateTotal() {
    let total = 0;
    const qtyInputs = document.querySelectorAll('.qty-input');
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '{}'); // ローカルストレージから既存のデータを読み込む

    // 現在の表示中の入力値に基づいてselectedCardsオブジェクトを更新
    qtyInputs.forEach(input => {
        const name = input.dataset.name;
        const qty = parseInt(input.value);
        if (qty > 0) {
            const card = allCards.find(c => c.name === name);
            if (card) {
                selectedCards[name] = { // カード名でキーを作成
                    qty: qty,
                    price: card.price,
                    imgUrl: card.imgSrc,
                    name: card.name // カード名も保存しておくと便利
                };
            }
        } else {
            // 数量が0になった場合はselectedCardsから削除
            if (selectedCards[name]) {
                delete selectedCards[name];
            }
        }
    });

    // selectedCardsオブジェクトに基づいて合計金額を計算
    for (const name in selectedCards) {
        total += selectedCards[name].qty * selectedCards[name].price;
    }

    document.getElementById('total-display').textContent = `合計買取金額: ¥${total.toLocaleString()}`;

    // 更新されたselectedCardsオブジェクトをローカルストレージに保存
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
}

// カテゴリとサブカテゴリの動的生成
function populateCategories() {
    const categorySelect = document.getElementById('categorySelect');
    const subcategorySelect = document.getElementById('subcategorySelect');
    const allCategories = [...new Set(allCards.map(card => card.category))];
    const allSubcategories = {};

    allCards.forEach(card => {
        if (!allSubcategories[card.category]) {
            allSubcategories[card.category] = new Set();
        }
        allSubcategories[card.category].add(card.subcategory);
    });

    categorySelect.innerHTML = '<option value="">すべてのカテゴリ</option>';
    allCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        subcategorySelect.innerHTML = '<option value="">すべてのサブカテゴリ</option>';
        if (selectedCategory && allSubcategories[selectedCategory]) {
            subcategorySelect.style.display = 'inline-block';
            [...allSubcategories[selectedCategory]].sort().forEach(sub => {
                const option = document.createElement('option');
                option.value = sub;
                option.textContent = sub;
                subcategorySelect.appendChild(option);
            });
        } else {
            subcategorySelect.style.display = 'none';
        }
        applyFiltersAndSort();
    });

    subcategorySelect.addEventListener('change', applyFiltersAndSort);
}

// フィルターとソートの適用
function applyFiltersAndSort() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categorySelect = document.getElementById('categorySelect').value;
    const subcategorySelect = document.getElementById('subcategorySelect').value;
    const sortSelect = document.getElementById('sortSelect').value;

    let filteredCards = allCards.filter(card => {
        const matchesSearch = card.name.toLowerCase().includes(searchInput);
        const matchesCategory = categorySelect === '' || card.category === categorySelect;
        const matchesSubcategory = subcategorySelect === '' || card.subcategory === subcategorySelect;
        return matchesSearch && matchesCategory && matchesSubcategory;
    });

    if (sortSelect === 'price-desc') {
        filteredCards.sort((a, b) => b.price - a.price);
    } else if (sortSelect === 'price-asc') {
        filteredCards.sort((a, b) => a.price - b.price);
    } else if (sortSelect === 'name-asc') {
        filteredCards.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    }

    displayCards(filteredCards);
}

// モーダル表示 (この関数は以前のコードとほぼ同じですが、確認のために掲載)
function showSelected() {
    const selectedList = document.getElementById('selectedList');
    const modalTotal = document.getElementById('modalTotal');
    const selectedModal = document.getElementById('selectedModal');
    selectedList.innerHTML = ''; // クリア

    // ここでローカルストレージから読み込む
    const selectedItems = JSON.parse(localStorage.getItem('selectedCards') || '{}');
    let total = 0;
    let printContent = ''; // 印刷用コンテンツ

    for (const name in selectedItems) {
        const item = selectedItems[name];
        if (item.qty > 0) { // 数量が0より大きいアイテムのみ処理
            const li = document.createElement('div');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.marginBottom = '8px';

            const img = document.createElement('img');
            img.src = item.imgUrl;
            img.alt = item.name;
            img.style.maxWidth = '40px';
            img.style.maxHeight = '56px';
            img.style.marginRight = '10px';
            img.style.borderRadius = '4px';
            img.style.objectFit = 'contain';

            const textSpan = document.createElement('span');
            textSpan.textContent = `${item.name} × ${item.qty} → ¥${(item.qty * item.price).toLocaleString()}`;

            li.appendChild(img);
            li.appendChild(textSpan);
            selectedList.appendChild(li);

            total += item.qty * item.price;

            printContent += `<img src="${item.imgUrl}" style="max-width:20px;max-height:28px;margin-right:10px;border-radius:4px;object-fit:contain;">${item.name} × ${item.qty} → ¥${(item.qty * item.price).toLocaleString()}<br>`;
        }
    }

    if (Object.keys(selectedItems).length === 0 || total === 0) { // 選択アイテムがないか合計が0の場合
        selectedList.innerHTML = '<p>選択されたカードはありません。</p>';
    }

    modalTotal.textContent = `¥${total.toLocaleString()}`;
    selectedModal.style.display = 'block';
    selectedModal.setAttribute('aria-hidden', 'false');

    localStorage.setItem('printContent', printContent + `<br>合計金額: ¥${total.toLocaleString()}`);
}

// モーダルを閉じる
function closeModal() {
    const selectedModal = document.getElementById('selectedModal');
    selectedModal.style.display = 'none';
    selectedModal.setAttribute('aria-hidden', 'true');
}

// 印刷処理
function printModal() {
    const printContent = localStorage.getItem('printContent');
    if (!printContent) return;

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>選択されたカード一覧</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(`
        body { font-family: 'Segoe UI', Tahoma, Verdana, sans-serif; margin: 20px; }
        h2 { text-align: center; margin-bottom: 20px; }
        img { vertical-align: middle; }
        span { display: inline-block; margin-left: 5px; }
    `);
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h2>選択されたカード一覧</h2>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}


// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', () => {
    populateCategories(); // カテゴリ選択肢を生成
    applyFiltersAndSort(); // 初期表示

    // イベントリスナーをカードコンテナに委譲
    document.getElementById('cardContainer').addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('qty-minus') || target.classList.contains('qty-plus')) {
            const name = target.dataset.name;
            const input = document.querySelector(`.qty-input[data-name="${name}"]`);
            let qty = parseInt(input.value);

            if (target.classList.contains('qty-minus')) {
                qty = Math.max(0, qty - 1);
            } else if (target.classList.contains('qty-plus')) {
                qty += 1;
            }
            input.value = qty;
            updateTotal();
        }
    });

    document.getElementById('searchInput').addEventListener('input', applyFiltersAndSort);
    document.getElementById('sortSelect').addEventListener('change', applyFiltersAndSort);
    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('categorySelect').value = '';
        document.getElementById('subcategorySelect').innerHTML = '<option value="">すべてのサブカテゴリ</option>';
        document.getElementById('subcategorySelect').style.display = 'none'; // サブカテゴリを非表示に
        // !!!ここが追加または変更!!!
    localStorage.removeItem('selectedCards'); // ローカルストレージをクリア
    document.querySelectorAll('.qty-input').forEach(input => input.value = 0); // 表示されている数量も0にリセット

    applyFiltersAndSort(); // フィルターとソートを再適用して表示を更新
});
});
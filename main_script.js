// 価格取得ユーティリティ
function getPrice(card) {
    return card.price;
}

// カード表示関数
function displayCards(cards) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // 既存のカードをクリア

    cards.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        cardItem.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p>買取価格: ¥${card.price.toLocaleString()}</p>
            <div class="qty-wrapper">
                <button class="qty-minus" data-name="${card.name}">-</button>
                <input type="number" class="qty-input" value="0" min="0" data-name="${card.name}">
                <button class="qty-plus" data-name="${card.name}">+</button>
            </div>
        `;
        cardContainer.appendChild(cardItem);
    });
    updateTotal(); // 表示後に合計金額を更新
}

// 合計金額の更新
function updateTotal() {
    let total = 0;
    const qtyInputs = document.querySelectorAll('.qty-input');
    const cardNames = {}; // カード名と数量を保持するオブジェクト

    qtyInputs.forEach(input => {
        const name = input.dataset.name;
        const qty = parseInt(input.value);
        if (qty > 0) {
            const card = allCards.find(c => c.name === name);
            if (card) {
                total += card.price * qty;
                cardNames[name] = { qty: qty, price: card.price, imgUrl: card.imgSrc, name: card.name };
            }
        }
    });

    document.getElementById('total-display').textContent = `合計買取金額: ¥${total.toLocaleString()}`;

    // 選択されたカードをローカルストレージに保存
    localStorage.setItem('selectedCards', JSON.stringify(cardNames));
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

// モーダル表示
function showSelected() {
    const selectedList = document.getElementById('selectedList');
    const modalTotal = document.getElementById('modalTotal');
    const selectedModal = document.getElementById('selectedModal');
    selectedList.innerHTML = ''; // クリア

    const selectedItems = JSON.parse(localStorage.getItem('selectedCards') || '{}');
    let total = 0;
    let printContent = ''; // 印刷用コンテンツ

    for (const name in selectedItems) {
        const item = selectedItems[name];
        if (item.qty > 0) {
            const li = document.createElement('div');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.marginBottom = '8px';

            const img = document.createElement('img');
            img.src = item.imgUrl;
            img.alt = item.name;
            img.style.maxWidth = '40px'; // モーダル内の画像サイズを調整
            img.style.maxHeight = '56px'; // モーダル内の画像サイズを調整
            img.style.marginRight = '10px';
            img.style.borderRadius = '4px';
            img.style.objectFit = 'contain';

            const textSpan = document.createElement('span');
            textSpan.textContent = `${item.name} × ${item.qty} → ¥${(item.qty * item.price).toLocaleString()}`;

            li.appendChild(img);
            li.appendChild(textSpan);
            selectedList.appendChild(li);

            total += item.qty * item.price;

            // 印刷用コンテンツに追加
            printContent += `<img src="${item.imgUrl}" style="max-width:20px;max-height:28px;margin-right:10px;border-radius:4px;object-fit:contain;">${item.name} × ${item.qty} → ¥${(item.qty * item.price).toLocaleString()}<br>`;
        }
    }

    if (Object.keys(selectedItems).length === 0 || total === 0) {
        selectedList.innerHTML = '<p>選択されたカードはありません。</p>';
    }

    modalTotal.textContent = `¥${total.toLocaleString()}`;
    selectedModal.style.display = 'block';
    selectedModal.setAttribute('aria-hidden', 'false');

    // 印刷用コンテンツをローカルストレージに保存
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
        document.querySelectorAll('.qty-input').forEach(input => input.value = 0);
        localStorage.removeItem('selectedCards'); // ローカルストレージをクリア
        applyFiltersAndSort();
    });
});
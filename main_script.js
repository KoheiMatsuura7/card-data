// card_data.js から allCards がロードされることを想定

// グローバル変数
let currentPage = 1;
const itemsPerPage = 8; // 1ページあたりの表示アイテム数
let filteredCards = [];
let quantities = {}; // { cardId: quantity } の形式で選択されたカードの数量を保持

// DOMContentLoaded イベントで初期化
document.addEventListener('DOMContentLoaded', () => {
    // ページロード時に表示を更新
    filterAndSortCards();

    // イベントリスナーの設定
    document.getElementById('searchInput').addEventListener('input', filterAndSortCards);
    document.getElementById('categorySelect').addEventListener('change', filterAndSortCards);
    document.getElementById('sortSelect').addEventListener('change', filterAndSortCards);
    document.getElementById('resetButton').addEventListener('click', resetAll);

    // サブカテゴリの動的な表示/非表示（HTML側のstyle="display:none;"に対応）
    document.getElementById('categorySelect').addEventListener('change', () => {
        const category = document.getElementById('categorySelect').value;
        const subcategorySelect = document.getElementById('subcategorySelect');
        if (category === "ポケカ") {
            subcategorySelect.style.display = "block"; // ポケカ選択時のみ表示
            populateSubcategories(category);
        } else {
            subcategorySelect.style.display = "none"; // その他のカテゴリでは非表示
            subcategorySelect.innerHTML = '<option value="">すべてのサブカテゴリ</option>';
        }
        filterAndSortCards(); // カテゴリ変更後にフィルタリングを再実行
    });

    document.getElementById('subcategorySelect').addEventListener('change', filterAndSortCards);
});

// サブカテゴリの選択肢を動的に生成
function populateSubcategories(category) {
    const subcategorySelect = document.getElementById('subcategorySelect');
    subcategorySelect.innerHTML = '<option value="">すべてのサブカテゴリ</option>'; // デフォルトオプション

    if (category === "ポケカ") {
        const subcategories = [...new Set(allCards
            .filter(card => card.category === "ポケカ")
            .map(card => card.subcategory)
        )].sort(); // 重複を排除し、ソート

        subcategories.forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subcategorySelect.appendChild(option);
        });
    }
}


// カードのフィルタリングとソート
function filterAndSortCards() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;
    const subcategory = document.getElementById('subcategorySelect').value;
    const sortOrder = document.getElementById('sortSelect').value;

    filteredCards = allCards.filter(card => {
        const matchesSearch = card.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === "" || card.category === category;
        const matchesSubcategory = subcategory === "" || card.subcategory === subcategory;
        return matchesSearch && matchesCategory && matchesSubcategory;
    });

    // ソートロジック
    if (sortOrder === "price-desc") {
        filteredCards.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "price-asc") {
        filteredCards.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "name-asc") {
        filteredCards.sort((a, b) => a.name.localeCompare(b.name, 'ja', { sensitivity: 'base' }));
    }
    // "default" の場合は元の順序（CSV/JSONの順序）を維持

    currentPage = 1; // フィルタリング・ソート時にページをリセット
    renderCards();
    renderPagination();
    updateTotal(); // 合計金額を更新
}

// カードの表示
function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // 既存のカードをクリア

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cardsToDisplay = filteredCards.slice(startIndex, endIndex);

    if (cardsToDisplay.length === 0) {
        cardContainer.innerHTML = '<p style="text-align: center; width: 100%; margin-top: 50px; font-size: 1.2rem; color: #555;">条件に合うカードが見つかりませんでした。</p>';
        return;
    }

    cardsToDisplay.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        cardItem.setAttribute('data-id', card.id); // カードIDをデータ属性として追加

        cardItem.innerHTML = `
            <img src="${card.image}" alt="${card.name}" onerror="this.onerror=null;this.src='https://placehold.co/150x200/cccccc/000000?text=No+Image';" />
            <h3>${card.name}</h3>
            <p>買取価格: ¥${card.price.toLocaleString()}</p>
            <div class="qty-wrapper">
                <button class="qty-minus" data-id="${card.id}">-</button>
                <input type="number" class="qty-input" value="${quantities[card.id] || 0}" min="0" data-id="${card.id}" aria-label="${card.name}の数量">
                <button class="qty-plus" data-id="${card.id}">+</button>
            </div>
        `;
        cardContainer.appendChild(cardItem);
    });

    // 数量入力フィールドとボタンにイベントリスナーを設定
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', updateQuantityInput);
        input.addEventListener('input', updateQuantityInput); // リアルタイム更新
    });
    document.querySelectorAll('.qty-minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    document.querySelectorAll('.qty-plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
}

// ページネーションの表示
function renderPagination() {
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = ''; // 既存のボタンをクリア

    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

    if (totalPages <= 1) {
        return; // 1ページしかない場合はページネーションを表示しない
    }

    const maxPageButtons = 5; // 表示するページボタンの最大数 (例: 1 2 3 4 5)
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // 末尾にボタンが少ない場合の調整
    if (endPage - startPage + 1 < maxPageButtons) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    // 「前へ」ボタン
    const prevButton = document.createElement('button');
    prevButton.textContent = '前へ';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCards();
            renderPagination();
        }
    });
    paginationContainer.appendChild(prevButton);

    // 最初のページへのリンクと「...」
    if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.textContent = '1';
        firstPageButton.addEventListener('click', () => {
            currentPage = 1;
            renderCards();
            renderPagination();
        });
        paginationContainer.appendChild(firstPageButton);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.margin = '0 5px';
            paginationContainer.appendChild(ellipsis);
        }
    }

    // 中心となるページ番号ボタン
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = currentPage === i ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            renderCards();
            renderPagination();
        });
        paginationContainer.appendChild(button);
    }

    // 最後のページへのリンクと「...」
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.margin = '0 5px';
            paginationContainer.appendChild(ellipsis);
        }
        const lastPageButton = document.createElement('button');
        lastPageButton.textContent = totalPages;
        lastPageButton.addEventListener('click', () => {
            currentPage = totalPages;
            renderCards();
            renderPagination();
        });
        paginationContainer.appendChild(lastPageButton);
    }

    // 「次へ」ボタン
    const nextButton = document.createElement('button');
    nextButton.textContent = '次へ';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderCards();
            renderPagination();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// 数量変更（インクリメント）
function increaseQuantity(event) {
    const cardId = parseInt(event.target.dataset.id);
    quantities[cardId] = (quantities[cardId] || 0) + 1;
    document.querySelector(`.qty-input[data-id="${cardId}"]`).value = quantities[cardId];
    updateTotal();
}

// 数量変更（デクリメント）
function decreaseQuantity(event) {
    const cardId = parseInt(event.target.dataset.id);
    if ((quantities[cardId] || 0) > 0) {
        quantities[cardId]--;
        document.querySelector(`.qty-input[data-id="${cardId}"]`).value = quantities[cardId];
        updateTotal();
    }
}

// 数量入力フィールドからの更新
function updateQuantityInput(event) {
    const cardId = parseInt(event.target.dataset.id);
    let value = parseInt(event.target.value);
    if (isNaN(value) || value < 0) {
        value = 0; // 不正な値や負の値を0に設定
    }
    quantities[cardId] = value;
    updateTotal();
}

// 合計金額の更新
function updateTotal() {
    let total = 0;
    for (const cardId in quantities) {
        const quantity = quantities[cardId];
        if (quantity > 0) {
            const card = allCards.find(c => c.id === parseInt(cardId));
            if (card) {
                total += card.price * quantity;
            }
        }
    }
    document.getElementById('total-display').textContent = `合計買取金額: ¥${total.toLocaleString()}`;
}

// 全てリセット
function resetAll() {
    quantities = {}; // 数量をリセット
    document.getElementById('searchInput').value = ''; // 検索バーをリセット
    document.getElementById('categorySelect').value = ''; // カテゴリ選択をリセット
    document.getElementById('sortSelect').value = 'default'; // ソート順をリセット
    document.getElementById('subcategorySelect').value = ''; // サブカテゴリ選択をリセット
    document.getElementById('subcategorySelect').style.display = "none"; // サブカテゴリ選択を非表示に
    filterAndSortCards(); // 全て再描画
    updateTotal(); // 合計金額を更新
}

// 選択されたカードをモーダルで表示
function showSelected() {
    const selectedList = document.getElementById('selectedList');
    selectedList.innerHTML = '';
    let modalTotal = 0;

    const selectedCards = Object.keys(quantities)
        .filter(id => quantities[id] > 0)
        .map(id => {
            const card = allCards.find(c => c.id === parseInt(id));
            if (card) {
                return { card, quantity: quantities[id] };
            }
            return null;
        })
        .filter(item => item !== null);

    if (selectedCards.length === 0) {
        selectedList.innerHTML = '<p>選択されたカードはありません。</p>';
    } else {
        selectedCards.forEach(item => {
            const listItem = document.createElement('p');
            const subtotal = item.card.price * item.quantity;
            listItem.textContent = `${item.card.name} x ${item.quantity} = ¥${subtotal.toLocaleString()}`;
            selectedList.appendChild(listItem);
            modalTotal += subtotal;
        });
    }

    document.getElementById('modalTotal').textContent = `¥${modalTotal.toLocaleString()}`;
    document.getElementById('selectedModal').style.display = 'block';
    document.getElementById('selectedModal').setAttribute('aria-hidden', 'false');
}

// モーダルを閉じる
function closeModal() {
    document.getElementById('selectedModal').style.display = 'none';
    document.getElementById('selectedModal').setAttribute('aria-hidden', 'true');
}

// モーダルの内容を印刷
function printModal() {
    const modalContent = document.querySelector('#selectedModal > div').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>選択されたカード一覧</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; }');
    printWindow.document.write('h2 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }');
    printWindow.document.write('p { margin: 5px 0; font-size: 1rem; }');
    printWindow.document.write('strong { font-size: 1.2rem; display: block; margin-top: 20px; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(modalContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}


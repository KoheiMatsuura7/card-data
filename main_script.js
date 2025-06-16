// Global variables for pagination
let currentPage = 1; // Current page
let itemsPerPage; // Items to display per page (dynamic)
let totalPages = 0; // Total number of pages

// Function to set itemsPerPage based on window width
function setItemsPerPage() {
    // 画面幅に応じてアイテム数を切り替え (タブレット/モバイルは2列、PCは4列表示に対応)
    if (window.innerWidth <= 768) {
        itemsPerPage = 10; // 768px以下（タブレット・スマホ）では10個
    } else {
        itemsPerPage = 20; // 768px超（PC）では20個
    }
}

// 価格取得ユーティリティ (Price retrieval utility)
function getPrice(card) {
    return card.price;
}

// カード表示関数 (Card display function) - Modified for pagination
function displayCards(cardsToPaginate) { // Renamed parameter to clarify its purpose
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    const storedQuantities = JSON.parse(localStorage.getItem('selectedCards') || '{}'); // Load stored quantities

    // Calculate pagination range
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCards = cardsToPaginate.slice(startIndex, endIndex); // Get cards for the current page

    if (paginatedCards.length === 0) {
        cardContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">該当するカードがありません。</p>';
        renderPagination(cardsToPaginate.length); // Still render pagination even if no cards for current view
        updateTotal(); // Update total even if no cards
        return;
    }

    paginatedCards.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';

        // Get stored quantity if available, otherwise 0
        const currentQty = storedQuantities[card.name] ? storedQuantities[card.name].qty : 0;

        cardItem.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.name}" loading="lazy">
            <h3>${card.name}</h3>
            <p>買取価格: ¥${card.price.toLocaleString()}</p>
            <div class="qty-wrapper">
                <button class="qty-minus" data-name="${card.name}">-</button>
                <input type="number" class="qty-input" value="${currentQty}" min="0" data-name="${card.name}" inputmode="numeric" pattern="[0-9]*" aria-label="${card.name}の数量" readonly>
                <button class="qty-plus" data-name="${card.name}">+</button>
            </div>
        `;
        cardContainer.appendChild(cardItem);
    });

    updateTotal(); // Update total after displaying cards
    renderPagination(cardsToPaginate.length); // Render pagination UI
}

// 合計金額の更新と選択状態の保存 (Update total amount and save selected state)
function updateTotal() {
    // まずローカルストレージから既存の選択済みカードデータを読み込みます。
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '{}');

    // 画面に表示されている入力フィールドの値に基づいて、その selectedCards オブジェクトを更新します。
    // これにより、現在表示されているカードの数量変更が selectedCards に反映されます。
    const qtyInputs = document.querySelectorAll('.qty-input');
    qtyInputs.forEach(input => {
        const name = input.dataset.name;
        const qty = parseInt(input.value);
        // allCardsはグローバル変数として定義されていると仮定します。
        const card = allCards.find(c => c.name === name);

        if (qty > 0 && card) {
            // 数量が0より大きい場合は、selectedCardsにカード情報を追加または更新
            selectedCards[name] = {
                qty: qty,
                price: card.price,
                imgUrl: card.imgSrc,
                name: card.name
            };
        } else {
            // 数量が0の場合、またはカードが見つからない場合はselectedCardsから削除
            if (selectedCards[name]) {
                delete selectedCards[name];
            }
        }
    });

    // selectedCards オブジェクト全体を使って合計金額を計算します。
    // これにより、表示中のカードも、他のページにあり現在表示されていないが以前に選択されたカードも、
    // すべて正確に合計に反映されるようになります。
    let total = 0;
    for (const name in selectedCards) {
        const item = selectedCards[name];
        total += item.qty * item.price;
    }

    document.getElementById('total-display').textContent = `合計買取金額: ¥${total.toLocaleString()}`;

    // 更新された selectedCards オブジェクトをローカルストレージに保存
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
}

// ページネーションUIの生成と更新 (Generate and update pagination UI)
function renderPagination(totalItems) {
    totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById('paginationContainer');

    // Ensure paginationContainer exists before proceeding
    if (!paginationContainer) {
        console.error("Pagination container not found. Please add <div id='paginationContainer'></div> to your HTML.");
        return;
    }

    paginationContainer.innerHTML = ''; // Clear existing pagination buttons

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none'; // Hide if only one page
        return;
    }

    paginationContainer.style.display = 'flex'; // Show if more than one page

    // "Prev" button
    const prevButton = document.createElement('button');
    prevButton.textContent = '前へ';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            applyFiltersAndSort(); // Re-apply filters and sort to display cards for the new page
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
        }
    });
    paginationContainer.appendChild(prevButton);

    // ページ番号ボタンの生成ロジック (スマホ版で表示を省略)
    const maxPageButtonsToShow = 5; // 表示するページボタンの最大数 (例: 現在のページとその前後2ページ)
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPageButtonsToShow) {
        // 現在のページを中心に表示範囲を決定
        startPage = Math.max(1, currentPage - Math.floor(maxPageButtonsToShow / 2));
        endPage = Math.min(totalPages, startPage + maxPageButtonsToShow - 1);

        // 端のページネーションの調整 (例: 最後のページ群を表示する場合)
        if (endPage - startPage + 1 < maxPageButtonsToShow) {
            startPage = Math.max(1, totalPages - maxPageButtonsToShow + 1);
        }
    }

    // 先頭に省略記号を追加
    if (startPage > 1) {
    // 1ページ目のボタン
    const firstPageButton = document.createElement('button');
    firstPageButton.textContent = '1';
    firstPageButton.classList.add('page-number');
    if (1 === currentPage) {
        firstPageButton.classList.add('active');
    }
    firstPageButton.addEventListener('click', () => {
        currentPage = 1;
        applyFiltersAndSort();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    paginationContainer.appendChild(firstPageButton);


    // ページ番号ボタン
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-number');
        if (i === currentPage) {
            pageButton.classList.add('active'); // Add 'active' class for the current page
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            applyFiltersAndSort(); // Re-apply filters and sort to display cards for the new page
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
        });
        paginationContainer.appendChild(pageButton);
    }

    // 末尾に省略記号と最後のページボタンを追加
if (endPage < totalPages) {
    const ellipsis = document.createElement('span');
    ellipsis.textContent = '...';
    ellipsis.classList.add('ellipsis');
    paginationContainer.appendChild(ellipsis);

    // 最後のページボタンを追加
    const lastPageButton = document.createElement('button');
    lastPageButton.textContent = totalPages;
    lastPageButton.classList.add('page-number');
    if (totalPages === currentPage) {
        lastPageButton.classList.add('active');
    }
    lastPageButton.addEventListener('click', () => {
        currentPage = totalPages;
        applyFiltersAndSort();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    paginationContainer.appendChild(lastPageButton);
}

    // "Next" button
    const nextButton = document.createElement('button');
    nextButton.textContent = '次へ';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            applyFiltersAndSort(); // Re-apply filters and sort to display cards for the new page
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
        }
    });
    paginationContainer.appendChild(nextButton);


// カテゴリとサブカテゴリの動的生成 (Dynamic generation of categories and subcategories)
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
        currentPage = 1; // Reset page on category change
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

    subcategorySelect.addEventListener('change', () => {
        currentPage = 1; // Reset page on subcategory change
        applyFiltersAndSort();
    });
}

// フィルターとソートの適用 (Apply filters and sort)
function applyFiltersAndSort() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categorySelect = document.getElementById('categorySelect').value;
    const subcategorySelect = document.getElementById('subcategorySelect').value;
    const sortSelect = document.getElementById('sortSelect').value;

    let filteredCards = allCards.filter(card => {
        const matchesSearch = searchInput === '' || card.name.toLowerCase().includes(searchInput); // 検索入力が空の場合はすべてをマッチさせる
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

    displayCards(filteredCards); // Display the filtered and sorted cards (pagination handled inside displayCards)
}

// モーダル表示 (Show modal)
function showSelected() {
    const selectedList = document.getElementById('selectedList');
    const modalTotal = document.getElementById('modalTotal');
    const selectedModal = document.getElementById('selectedModal');

    selectedList.innerHTML = ''; // Clear

    const selectedItems = JSON.parse(localStorage.getItem('selectedCards') || '{}');
    let total = 0;
    let printContent = ''; // Content for printing

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
            printContent += `<div style="display:flex;align-items:center;margin-bottom:8px;"><img src="${item.imgUrl}" style="max-width:60px;max-height:80px;margin-right:10px;border-radius:4px;object-fit:contain;"><span>${item.name} × ${item.qty} → ¥${(item.qty * item.price).toLocaleString()}</span></div>`;
        }
    }

    if (Object.keys(selectedItems).length === 0 || total === 0) {
        selectedList.innerHTML = '<p>選択されたカードはありません。</p>';
    }

    modalTotal.textContent = `¥${total.toLocaleString()}`;
    selectedModal.style.display = 'block';
    selectedModal.setAttribute('aria-hidden', 'false');

    localStorage.setItem('printContent', printContent + `<br><strong>合計金額: ¥${total.toLocaleString()}</strong>`);
}

// モーダルを閉じる (Close modal)
function closeModal() {
    const selectedModal = document.getElementById('selectedModal');
    selectedModal.style.display = 'none';
    selectedModal.setAttribute('aria-hidden', 'true');
}

// 印刷処理 (Print process)
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
        div { display: block; } /* Ensure div for print content renders correctly */
    `);
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h2>選択されたカード一覧</h2>');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

// イベントリスナーの設定 (Event listener setup)
document.addEventListener('DOMContentLoaded', () => {
    setItemsPerPage(); // Set itemsPerPage based on initial window size
    populateCategories(); // Generate category options
    applyFiltersAndSort(); // Initial display of cards

    // Event delegation for quantity buttons on card container
    document.getElementById('cardContainer').addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('qty-minus') || target.classList.contains('qty-plus')) {
        const name = target.dataset.name;
        const input = document.querySelector(`.qty-input[data-name="${name}"]`);
        
        let qty = input ? parseInt(input.value) : 0;

        if (isNaN(qty)) {
            qty = 0;
        }

        if (target.classList.contains('qty-minus')) {
            qty = Math.max(0, qty - 1);
        } else if (target.classList.contains('qty-plus')) {
            if (qty < 10) {
                qty += 1;
            }
        }

        if (input) {
            input.value = qty; // ← ここを必ず更新！
        }

        updateTotal(); // 合計金額の再計算
    }
});

    document.getElementById('searchInput').addEventListener('input', () => {
        currentPage = 1; // Reset page on search input
        applyFiltersAndSort();
    });

    document.getElementById('sortSelect').addEventListener('change', () => {
        currentPage = 1; // Reset page on sort change
        applyFiltersAndSort();
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('categorySelect').value = '';
        document.getElementById('subcategorySelect').innerHTML = '<option value="">すべてのサブカテゴリ</option>';
        document.getElementById('subcategorySelect').style.display = 'none'; // Hide subcategory
        localStorage.removeItem('selectedCards'); // Clear local storage

        // Reset quantities for currently displayed cards (and any other selected cards in local storage)
        document.querySelectorAll('.qty-input').forEach(input => input.value = 0);

        // After clearing local storage and visible inputs, re-calculate total from a fresh state
        updateTotal();
        currentPage = 1; // Reset page on reset button click
        applyFiltersAndSort(); // Re-apply filters and sort to update display
    });

    // Window resize event listener with debouncing
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const oldItemsPerPage = itemsPerPage;
            setItemsPerPage(); // Recalculate itemsPerPage
            // If itemsPerPage changed (e.g., switched from mobile to PC view)
            if (oldItemsPerPage !== itemsPerPage) {
                currentPage = 1; // Reset page to 1
                applyFiltersAndSort(); // Re-render cards with new pagination
            }
        }, 200); // Debounce for 200ms
    });
});

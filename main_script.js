// Global variables for pagination
let currentPage = 1; // Current page
let itemsPerPage; // Items to display per page (dynamic)
let totalPages = 0; // Total number of pages

// Function to set itemsPerPage based on window width
function setItemsPerPage() {
    // Example: Toggle at 768px width
    if (window.innerWidth <= 768) {
        itemsPerPage = 20; // For mobile displays
    } else {
        itemsPerPage = 40; // For PC displays
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
                <input type="number" class="qty-input" value="${currentQty}" min="0" data-name="${card.name}" inputmode="numeric" pattern="[0-9]*" aria-label="${card.name}の数量">
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
    let total = 0;
    // Always load from local storage to ensure all previously selected items are included
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '{}');

    // Iterate through all stored selected cards, not just currently displayed ones
    for (const name in selectedCards) {
        const item = selectedCards[name];
        total += item.qty * item.price;
    }

    // Update quantities for currently visible inputs, and save back to local storage
    const qtyInputs = document.querySelectorAll('.qty-input');
    qtyInputs.forEach(input => {
        const name = input.dataset.name;
        const qty = parseInt(input.value);

        // Find the full card object from allCards if not already in selectedCards
        const card = allCards.find(c => c.name === name);

        if (qty > 0 && card) {
            selectedCards[name] = {
                qty: qty,
                price: card.price,
                imgUrl: card.imgSrc,
                name: card.name
            };
        } else {
            // If quantity is 0 or card not found (shouldn't happen with proper data), remove from selectedCards
            if (selectedCards[name]) {
                delete selectedCards[name];
            }
        }
    });

    document.getElementById('total-display').textContent = `合計買取金額: ¥${total.toLocaleString()}`;
    // Save the updated selectedCards object back to local storage
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
}

// ページネーションUIの生成と更新 (Generate and update pagination UI)
function renderPagination(totalPages, currentPage) {
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = ''; // 既存のボタンをクリア

    const maxPageButtons = window.innerWidth <= 768 ? 5 : 10; // スマホは5個、PCは10個

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // 端のページでボタンが少なくなる場合の調整
    if (endPage - startPage + 1 < maxPageButtons) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    // 「最初へ」ボタン
    if (currentPage > 1) {
        const firstButton = document.createElement('button');
        firstButton.textContent = '最初へ';
        firstButton.onclick = () => goToPage(1);
        paginationContainer.appendChild(firstButton);
    }

    // 1ページ目へのリンク
    if (startPage > 1) {
        const pageButton = document.createElement('button');
        pageButton.textContent = '1';
        pageButton.onclick = () => goToPage(1);
        if (currentPage === 1) {
            pageButton.classList.add('active');
        }
        paginationContainer.appendChild(pageButton);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
    }

    // 中心となるページボタン
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.onclick = () => goToPage(i);
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        paginationContainer.appendChild(pageButton);
    }

    // 最終ページへのリンク
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
        const pageButton = document.createElement('button');
        pageButton.textContent = totalPages;
        pageButton.onclick = () => goToPage(totalPages);
        if (currentPage === totalPages) {
            pageButton.classList.add('active');
        }
        paginationContainer.appendChild(pageButton);
    }

    // 「最後へ」ボタン
    if (currentPage < totalPages) {
        const lastButton = document.createElement('button');
        lastButton.textContent = '最後へ';
        lastButton.onclick = () => goToPage(totalPages);
        paginationContainer.appendChild(lastButton);
    }

    // 「前へ」ボタン
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '前へ';
        prevButton.onclick = () => goToPage(currentPage - 1);
        paginationContainer.insertBefore(prevButton, paginationContainer.firstChild);
    }

    // 「次へ」ボタン
    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.textContent = '次へ';
        nextButton.onclick = () => goToPage(currentPage + 1);
        paginationContainer.appendChild(nextButton);
    }
}

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
    printWindow.document.write('</body></html>');
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
            let qty = parseInt(input.value);

            if (target.classList.contains('qty-minus')) {
                qty = Math.max(0, qty - 1);
            } else if (target.classList.contains('qty-plus')) {
                qty += 1;
            }
            input.value = qty;
            updateTotal(); // Update total and save to local storage
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
// Global variables for pagination
let currentPage = 1; // Current page
let itemsPerPage; // Items to display per page (dynamic)
let totalPages = 0; // Total number of pages

// Function to set itemsPerPage based on window width
function setItemsPerPage() {
    if (window.innerWidth <= 768) {
        itemsPerPage = 10; // For mobile displays
    } else {
        itemsPerPage = 20; // For PC displays
    }
}

// LocalStorageから選択されたアイテムを読み込む関数
function loadSelectedQuantities() {
    const savedItems = localStorage.getItem('selectedQuantities');
    return savedItems ? JSON.parse(savedItems) : {};
}

// LocalStorageに選択されたアイテムを保存する関数
function saveSelectedQuantities(items) {
    localStorage.setItem('selectedQuantities', JSON.stringify(items));
}

// ページをまたいで選択されたアイテムを保持するグローバル変数
// { 'item_id_1': quantity_1, 'item_id_2': quantity_2, ... } の形式
let selectedQuantities = loadSelectedQuantities(); // ページ読み込み時にLocalStorageからロード

// --- updateQuantity 関数: 商品の数量を更新し、LocalStorageに保存、合計を再計算 ---
function updateQuantity(itemId, newQty) { // 変更: newQty を直接受け取るようにする
    const inputElement = document.getElementById(`qty-${itemId}`);
    if (!inputElement) {
        console.warn(`Quantity input not found for item ID: ${itemId}`);
        return;
    }

    // newQty が数値であることを確認し、0未満にならないようにする
    newQty = parseInt(newQty);
    if (isNaN(newQty) || newQty < 0) newQty = 0;

    inputElement.value = newQty;

    // selectedQuantities グローバル変数を更新
    if (newQty > 0) {
        selectedQuantities[itemId] = newQty;
    } else {
        delete selectedQuantities[itemId]; // 数量が0になったら削除
    }
    saveSelectedQuantities(selectedQuantities); // LocalStorageに保存

    calculateTotal(); // 合計を再計算
}

// --- calculateTotal 関数: selectedQuantitiesから総合計を計算し表示を更新 ---
function calculateTotal() {
    let total = 0;
    // selectedQuantities から合計を計算する
    for (const itemId in selectedQuantities) {
        const item = allCards.find(card => card.id === itemId); // IDでカードを検索
        if (item) {
            total += item.price * selectedQuantities[itemId];
        } else {
            // データが見つからない場合は、LocalStorageからそのIDを削除する（古いデータ対策）
            delete selectedQuantities[itemId];
            saveSelectedQuantities(selectedQuantities);
        }
    }
    document.getElementById('total-display').textContent = `合計買取金額: ¥${total.toLocaleString()}`;
    // モーダルの合計金額は showSelected 関数で設定されるため、ここでは変更しない
}

// --- displayCards 関数: カード表示と数量入力欄の初期値設定 ---
function displayCards(cardsToPaginate) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    // Calculate pagination range
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCards = cardsToPaginate.slice(startIndex, endIndex); // Get cards for the current page

    if (paginatedCards.length === 0) {
        // 条件に合うカードがない場合のメッセージ
        const message = isUnopenedBoxPage ? '条件に合うBOXは見つかりませんでした。' : '該当するカードがありません。';
        cardContainer.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">${message}</p>`;
        renderPagination(cardsToPaginate.length); // Still render pagination even if no cards for current view
        calculateTotal(); // Update total (ensure it's updated even if no cards displayed on current page)
        return;
    }

    paginatedCards.forEach(card => {
        // card.id が存在しない場合はエラーを出すか、スキップするか、または仮のIDを割り当てる
        // ここではidがないと正しく動作しないので、idが必須であることを強調します
        if (!card.id) {
            console.error('カードにIDが設定されていません:', card);
            return; // IDがないカードはスキップ
        }

        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';

        // Get stored quantity from selectedQuantities (using card.id)
        const currentQty = selectedQuantities[card.id] || 0; // Use card.id here

        // 画像パスを card.image または card.imgSrc のいずれか存在する方から取得
        const imageUrl = card.image || card.imgSrc;
        if (!imageUrl) {
            console.warn('カードの画像URLが見つかりません:', card);
            // 画像がない場合は代替画像やプレースホルダーを表示することも検討
        }

        cardItem.innerHTML = `
            <img src="${imageUrl}" alt="${card.name}" loading="lazy">
            <h3>${card.name}</h3>
            <p>買取価格: ¥${card.price.toLocaleString()}</p>
            <div class="qty-wrapper">
                <button class="qty-minus" data-id="${card.id}">-</button>
                <input type="number" class="qty-input" id="qty-${card.id}" value="${currentQty}" min="0" data-id="${card.id}" inputmode="numeric" pattern="[0-9]*" aria-label="${card.name}の数量">
                <button class="qty-plus" data-id="${card.id}">+</button>
            </div>
        `;
        cardContainer.appendChild(cardItem);
    });

    calculateTotal(); // Update total after displaying cards
    renderPagination(cardsToPaginate.length); // Render pagination UI
}


// ページネーションUIの生成と更新 (Generate and update pagination UI)
function renderPagination(totalItems) {
    totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById('paginationContainer');

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

    const maxVisiblePageButtons = window.innerWidth <= 768 ? 3 : 7;

    // "Prev" button
    const prevButton = document.createElement('button');
    prevButton.textContent = '前へ';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            applyFiltersAndSort();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(prevButton);

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePageButtons - 1);

    if (endPage - startPage + 1 < maxVisiblePageButtons) {
        startPage = Math.max(1, endPage - maxVisiblePageButtons + 1);
    }

    if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.textContent = '1';
        firstPageButton.classList.add('page-number');
        firstPageButton.addEventListener('click', () => {
            currentPage = 1;
            applyFiltersAndSort();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationContainer.appendChild(firstPageButton);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.margin = '0 5px';
            paginationContainer.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-number');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            applyFiltersAndSort();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationContainer.appendChild(pageButton);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.margin = '0 5px';
            paginationContainer.appendChild(ellipsis);
        }
        const lastPageButton = document.createElement('button');
        lastPageButton.textContent = totalPages;
        lastPageButton.classList.add('page-number');
        lastPageButton.addEventListener('click', () => {
            currentPage = totalPages;
            applyFiltersAndSort();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationContainer.appendChild(lastPageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = '次へ';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            applyFiltersAndSort();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(nextButton);
}


// --- カテゴリとサブカテゴリの動的生成 (Dynamic generation of categories and subcategories) ---
// この変数で現在のページが未開封BOXページかどうかを判断します
const path = window.location.pathname;
// ペライチのURLパスに合わせて '/box-kaito' を使用
const isUnopenedBoxPage = path.includes('/box-kaito'); // 修正: '/box-kaito' のみに絞るか、正確なURLパスを指定してください

function populateCategories() {
    const categorySelect = document.getElementById('categorySelect');
    const subcategorySelect = document.getElementById('subcategorySelect');
    
    // 現在のページが未開封BOXページの場合の処理
    if (isUnopenedBoxPage) {
        categorySelect.innerHTML = '<option value="">すべてのカテゴリ</option>'; // 全カテゴリ表示
        // カテゴリはBOXのタイプ（遊戯王BOX、ポケカBOXなど）を表示するように調整
        const boxCategories = [...new Set(allCards.filter(card => card.subcategory === "未開封BOX").map(card => card.category))];
        boxCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = `${category}BOX`; // BOXページ用に「BOX」を追加
            categorySelect.appendChild(option);
        });
        subcategorySelect.style.display = 'none'; // 未開封BOXページではサブカテゴリは不要なので非表示
        
        // 検索バーのプレースホルダーもBOX用に調整
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = "BOX名を検索...";
            searchInput.setAttribute('aria-label', 'BOX名検索');
        }

    } else {
        // 通常のカードページの場合の処理
        const allCategories = [...new Set(allCards.filter(card => card.subcategory !== "未開封BOX").map(card => card.category))]; // 修正: 未開封BOXを除外
        const allSubcategories = {};

        allCards.filter(card => card.subcategory !== "未開封BOX").forEach(card => { // 修正: 未開封BOXを除外
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
}


// --- フィルターとソートの適用 (Apply filters and sort) ---
function applyFiltersAndSort() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categorySelect = document.getElementById('categorySelect').value;
    const sortSelect = document.getElementById('sortSelect').value;
    const subcategorySelect = document.getElementById('subcategorySelect').value; // 通常ページで使用

    let filteredCards = allCards.filter(card => {
        const matchesSearch = card.name.toLowerCase().includes(searchInput);
        const matchesCategory = categorySelect === '' || card.category === categorySelect;

        // ページによってフィルタリング条件を変更
        if (isUnopenedBoxPage) {
            // 未開封BOXページの場合、subcategoryが"未開封BOX"のものを表示
            return matchesSearch && matchesCategory && card.subcategory === "未開封BOX";
        } else {
            // 通常のカードページの場合
            const matchesSubcategory = subcategorySelect === '' || card.subcategory === subcategorySelect;
            // 未開封BOXは通常ページでは表示しないようにする
            return matchesSearch && matchesCategory && matchesSubcategory && card.subcategory !== "未開封BOX";
        }
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
    const modalTotalElement = document.getElementById('modalTotal'); // IDが'modalTotal'の要素を取得
    const selectedModal = document.getElementById('selectedModal');
    selectedList.innerHTML = ''; // Clear

    // selectedQuantities グローバル変数を使用
    let total = 0;
    let printContent = ''; // Content for printing

    const itemsToShow = [];
    for (const itemId in selectedQuantities) {
        const qty = selectedQuantities[itemId];
        if (qty > 0) {
            const item = allCards.find(card => card.id === itemId);
            if (item) {
                itemsToShow.push({ item: item, qty: qty });
            }
        }
    }

    if (itemsToShow.length === 0) {
        selectedList.innerHTML = '<p>選択されたBOX/カードはありません。</p>';
    } else {
        itemsToShow.forEach(({ item, qty }) => {
            const li = document.createElement('div');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.marginBottom = '8px';

            // 画像パスを card.image または card.imgSrc のいずれか存在する方から取得
            const imageUrl = item.image || item.imgSrc;

            const img = document.createElement('img');
            img.src = imageUrl; // 修正: imageUrl を使用
            img.alt = item.name;
            img.style.maxWidth = '40px';
            img.style.maxHeight = '56px';
            img.style.marginRight = '10px';
            img.style.borderRadius = '4px';
            img.style.objectFit = 'contain';

            const textSpan = document.createElement('span');
            textSpan.textContent = `${item.name} × ${qty} → ¥${(qty * item.price).toLocaleString()}`;

            li.appendChild(img);
            li.appendChild(textSpan);
            selectedList.appendChild(li);

            total += qty * item.price;

            printContent += `<div style="display:flex;align-items:center;margin-bottom:8px;"><img src="${imageUrl}" style="max-width:60px;max-height:80px;margin-right:10px;border-radius:4px;object-fit:contain;"><span>${item.name} × ${qty} → ¥${(qty * item.price).toLocaleString()}</span></div>`;
        });
    }

    modalTotalElement.textContent = `¥${total.toLocaleString()}`; // ここも変更
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
    printWindow.document.write('<html><head><title>選択されたアイテム一覧</title>'); // タイトルを変更
    printWindow.document.write('<style>');
    printWindow.document.write(`
        body { font-family: 'Segoe UI', Tahoma, Verdana, sans-serif; margin: 20px; }
        h2 { text-align: center; margin-bottom: 20px; }
        img { vertical-align: middle; }
        span { display: inline-block; margin-left: 5px; }
        div { display: block; }
    `);
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h2>選択されたアイテム一覧</h2>'); // タイトルを変更
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
    populateCategories(); // Generate category options based on page type
    applyFiltersAndSort(); // Initial display of cards (will also call calculateTotal)

    // Event delegation for quantity buttons on card container
    document.getElementById('cardContainer').addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('qty-minus') || target.classList.contains('qty-plus')) {
            // data-id属性を使用
            const itemId = target.dataset.id;
            const input = document.getElementById(`qty-${itemId}`);
            
            if (input) { // input要素が存在するか確認
                let qty = parseInt(input.value);

                if (target.classList.contains('qty-minus')) {
                    qty = Math.max(0, qty - 1);
                } else if (target.classList.contains('qty-plus')) {
                    qty += 1;
                }
                // updateQuantity 関数を呼び出す (newQty を渡す)
                updateQuantity(itemId, qty); // 修正: 直接新しい数量を渡す
            }
        }
    });

    // InputイベントもupdateQuantityを呼び出す
    document.getElementById('cardContainer').addEventListener('input', (event) => {
        const target = event.target;
        if (target.classList.contains('qty-input')) {
            const itemId = target.dataset.id;
            let qty = parseInt(target.value);
            if (isNaN(qty) || qty < 0) qty = 0;
            updateQuantity(itemId, qty); // 修正: 直接新しい数量を渡す
        }
    });

    document.getElementById('searchInput').addEventListener('input', () => {
        currentPage = 1;
        applyFiltersAndSort();
    });
    document.getElementById('sortSelect').addEventListener('change', () => {
        currentPage = 1;
        applyFiltersAndSort();
    });
    document.getElementById('categorySelect').addEventListener('change', () => {
        currentPage = 1;
        applyFiltersAndSort();
    });
    // サブカテゴリ選択は populateCategories 内でリスナーを設定しているのでここでは不要

    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('categorySelect').value = '';
        // サブカテゴリはpopulateCategories()で初期化されるため、ここではHTML要素を直接リセット
        const subcategorySelect = document.getElementById('subcategorySelect');
        if (subcategorySelect) {
            subcategorySelect.innerHTML = '<option value="">すべてのサブカテゴリ</option>';
            subcategorySelect.style.display = 'none'; // Hide subcategory
        }
        
        selectedQuantities = {}; // グローバル変数をクリア
        saveSelectedQuantities({}); // LocalStorageもクリア

        // すべての数量入力欄を0にする (現在表示されていないものも含むLocal Storageの反映)
        // displayCards が呼ばれるとLocalStorageから再ロードされるため、個別にリセットは不要
        // ただし、もしリセットボタンを押した際に全ページの数量表示もリセットしたい場合は、
        // displayCardsが呼ばれる前に、DOM上の全qty-inputのvalueを0にする処理が必要です
        // ここではdisplayCardsが最終的に呼ばれるので、特に変更は加えない
        // もし、リセット後にすべてのページで数量を0にしたい場合は、以下の行を有効にする
        // document.querySelectorAll('.qty-input').forEach(input => input.value = 0);

        calculateTotal(); // 合計をリセット
        currentPage = 1;
        applyFiltersAndSort(); // Re-apply filters and sort to update display
    });

    // Window resize event listener with debouncing
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const oldItemsPerPage = itemsPerPage;
            setItemsPerPage(); // Recalculate itemsPerPage
            if (oldItemsPerPage !== itemsPerPage) {
                currentPage = 1; // Reset page to 1
                applyFiltersAndSort(); // Re-render cards with new pagination
            }
        }, 200); // Debounce for 200ms
    });

    // 初期表示時に合計金額を計算
    calculateTotal();
});
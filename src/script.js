const products = [
    // Local Products
    {
        id: 1,
        title: "Abiraterone Acetate (Ahabir) 500 mg",
        category: "Anti Cancer Medicines",
        price: "Price on Request",
        image: "../assets/products/PHOTO-2026-06-12-20-09-52.jpg",
        inStock: true
    },
    {
        id: 2,
        title: "Pazopanib (PAZINIB) 200 mg",
        category: "Anti Cancer Medicines",
        image: "../assets/products/PHOTO-2026-06-12-20-10-42.jpg",
        price: "Price on Request",
        inStock: true
    },
    {
        id: 3,
        title: "Episiotomy Scissors",
        category: "Surgical Instruments",
        image: "../assets/products/PHOTO-2026-06-12-20-11-20.jpg",
        price: "Price on Request",
        inStock: false
    },
    {
        id: 4,
        title: "Crocodile Forceps",
        category: "Surgical Instruments",
        image: "../assets/products/PHOTO-2026-06-12-20-11-30.jpg",
        price: "Price on Request",
        inStock: true
    },
    {
        id: 5,
        title: "Mycophenolate Mofetil (CellCept) 500 mg (Box)",
        category: "Pharmaceutical Tablets",
        image: "../assets/products/PHOTO-2026-06-12-20-14-21.jpg",
        price: "Price on Request",
        inStock: false
    },
    // Products fetched from IndiaMART Profile
    {
        id: 7,
        title: "Mycophenolic Acid Tablet 360 mg",
        category: "Pharmaceutical Tablets",
        price: "Price on Request",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325120222/RX/WL/OR/11404443/mycophenolic-acid-tablet-360-mg-250x250.jpg",
        inStock: true
    },
    {
        id: 8,
        title: "Tenofovir Disoproxil Fumarate 300mg Tablets samhep-TDF",
        category: "Pharmaceutical Tablets",
        price: "Price on Request",
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338988962/XP/ZT/DT/11404443/product-jpeg-250x250.jpeg",
        inStock: true
    },
    {
        id: 9,
        title: "Taxeleon Injection 260MG",
        category: "Anti Cancer Medicines",
        price: "Price on Request",
        image: "https://5.imimg.com/data5/IOS/Default/2024/10/457995027/SZ/PB/LJ/11404443/product-jpeg-250x250.png",
        inStock: true
    },
    {
        id: 10,
        title: "Dr. Odin Pulse Oximeter",
        category: "Medical Devices",
        price: "Price on Request",
        image: "https://5.imimg.com/data5/IOS/Default/2024/10/457996720/HZ/QG/AK/11404443/product-jpeg-250x250.png",
        inStock: true
    },
    {
        id: 11,
        title: "Perfecxa Digital Thermometer",
        category: "Medical Devices",
        price: "Price on Request",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/6/520115034/HN/IF/UE/11404443/perfecxa-digital-thermometer-250x250.jpeg",
        inStock: true
    }
];

const phoneNumber = "919995898268";

let currentCategory = "All Categories";
let searchQuery = "";

function init() {
    renderCategories();
    renderProducts();
    setupSearch();
}

function renderCategories() {
    const categoryList = document.getElementById('category-list');

    // Extract unique categories
    const categories = ["All Categories", ...new Set(products.map(p => p.category))];

    categoryList.innerHTML = categories.map(cat => `
        <li class="${cat === currentCategory ? 'active' : ''}" onclick="setCategory('${cat}')">${cat}</li>
    `).join('');
}

// Make setCategory global so inline onclick can access it
window.setCategory = function (cat) {
    currentCategory = cat;
    renderCategories();
    renderProducts();
    document.getElementById('current-category-title').innerText = cat;
};

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    const handleSearch = () => {
        searchQuery = searchInput.value.toLowerCase();
        renderProducts();
    };

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Live search
    searchInput.addEventListener('input', handleSearch);
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const countEl = document.getElementById('product-count');

    let filtered = products;

    if (currentCategory !== "All Categories") {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery.trim() !== "") {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(searchQuery));
    }

    countEl.innerText = `${filtered.length} items found`;
    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #6b7280; padding: 2rem;">No products match your search criteria.</p>`;
        return;
    }

    // Authentic WhatsApp Icon SVG
    const whatsappIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        let badgeHtml = '';
        if (!product.inStock) {
            badgeHtml = `<div class="badge">Out of Stock</div>`;
        }

        const btnClass = product.inStock ? 'whatsapp-btn' : 'whatsapp-btn disabled';
        const btnText = product.inStock ? 'Contact Supplier' : 'Unavailable';
        const btnDisabled = !product.inStock ? 'disabled' : '';

        card.innerHTML = `
            <div class="product-image-container">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            </div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-category">${product.category}</p>
            <button class="${btnClass}" ${btnDisabled} onclick="sendToWhatsApp(${product.id})">
                ${whatsappIcon}
                ${btnText}
            </button>
        `;

        grid.appendChild(card);
    });
}

window.sendToWhatsApp = function (productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const message = `Hello Yuzaxy team! I'm interested in purchasing the "${product.title}" listed for ${product.price}. Could you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', init);

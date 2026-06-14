const products = [
    // Local Products
    {
        id: 2,
        title: "Abiraterone Acetate (Ahabir) 500 mg",
        category: "Anti Cancer Medicines",
        price: "Price on Request",
        image: "../assets/products/PHOTO-2026-06-12-20-09-52.jpg",
        inStock: true
    },
    {
        id: 3,
        title: "Pazopanib (PAZINIB) 200 mg",
        category: "Anti Cancer Medicines",
        price: "Price on Request",
        image: "../assets/products/PHOTO-2026-06-12-20-10-42.jpg",
        inStock: true
    },
    {
        id: 4,
        title: "Episiotomy Scissors",
        category: "Surgical Instruments",
        price: "Price on Request",
        image: "../assets/products/PHOTO-2026-06-12-20-11-20.jpg",
        inStock: false
    },
    {
        id: 5,
        title: "Crocodile Forceps",
        category: "Surgical Instruments",
        price: "Price on Request",
        image: "../assets/products/PHOTO-2026-06-12-20-11-30.jpg",
        inStock: true
    },
    {
        id: 6,
        title: "Mycophenolate Mofetil (CellCept) 500 mg (Box)",
        category: "Pharmaceutical Tablets",
        price: "Price on Request",
        image: "../assets/products/PHOTO-2026-06-12-20-14-21.jpg",
        inStock: true
    },
    // Products fetched from IndiaMART Profile
    { id: 7, title: "Mycophenolic Acid Tablet 360 mg", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325120222/RX/WL/OR/11404443/mycophenolic-acid-tablet-360-mg-250x250.jpg", inStock: true },
    { id: 8, title: "Tenofovir Disoproxil Fumarate 300mg Tablets samhep-TDF", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338988962/XP/ZT/DT/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 9, title: "Taxeleon Injection 260MG", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/IOS/Default/2024/10/457995027/SZ/PB/LJ/11404443/product-jpeg-250x250.png", inStock: true },
    { id: 10, title: "Dr. Odin Pulse Oximeter", category: "Medical Devices", price: "Price on Request", image: "https://5.imimg.com/data5/IOS/Default/2024/10/457996720/HZ/QG/AK/11404443/product-jpeg-250x250.png", inStock: true },
    { id: 11, title: "Perfecxa Digital Thermometer", category: "Medical Devices", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/Default/2025/6/520115034/HN/IF/UE/11404443/perfecxa-digital-thermometer-250x250.jpeg", inStock: true },
    { id: 12, title: "Oluminant Baricitinib 4mg", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2024/8/444972783/LP/LH/VB/11404443/product-jpeg-250x250.jpg", inStock: true },
    { id: 13, title: "Amiodarone Injection tachydon 150 mg", category: "Pharmaceutical Injections", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338732845/OB/YP/MG/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 14, title: "Gadopentetate Dimeglumine Injection Usp Gadoimage", category: "Pharmaceutical Injections", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338966188/GB/BQ/IP/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 15, title: "Protamine Sulphate Injection prota 50 mg", category: "Pharmaceutical Injections", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338970664/PH/MC/LY/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 16, title: "Polymyxin B For Injection Usp POLYHET", category: "Pharmaceutical Injections", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/339119391/YQ/YF/DI/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 17, title: "Enoxaparin Sodium Injection", category: "Pharmaceutical Injections", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2024/8/444974453/SY/SV/HH/11404443/product-jpeg-250x250.jpg", inStock: true },
    { id: 18, title: "Vorier Voriconazole 200mg", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338754222/JM/PR/DK/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 19, title: "Leuprolide Acetate LUPRODEX 11.25", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338778732/LZ/DW/DE/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 20, title: "Cytodrox Hydroxyurea Capsule", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338804029/BO/AD/GW/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 21, title: "Capegard 500mg Capecitabine Tablet", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338805315/FV/HU/CX/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 22, title: "Tegafur Gimeracil And Oteracil P Capsule", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2024/8/444974256/HU/UB/MP/11404443/product-jpeg-250x250.jpg", inStock: true },
    { id: 23, title: "Velpanat Sofosbuvir 400 Mg Velpatasvir 100Mg", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/IOS/Default/2024/10/457058459/TS/VH/YW/11404443/product-jpeg-250x250.png", inStock: true },
    { id: 24, title: "Atormit 40mg Atorvastatin", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/PDFImage/2025/1/477818796/YR/CU/AU/11404443/atormit-40mg-atorvastatin-250x250.png", inStock: true },
    { id: 25, title: "Duovir N Tab", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338799393/ZA/YB/VL/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 26, title: "Entavir Entecavir 1mg Tablet", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338809299/SE/EF/TU/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 27, title: "Takfa 1 Tacrolimus Capsule", category: "Pharmaceutical Capsules", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326871405/II/UI/EV/11404443/takfa-1-tacrolimus-capsule-250x250.jpg", inStock: true },
    { id: 28, title: "Tacrolimus Capsule IP 1 mg", category: "Pharmaceutical Capsules", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326872867/PD/ZX/PX/11404443/tacrolimus-capsule-ip-1-mg-250x250.jpeg", inStock: true },
    { id: 29, title: "Cyclosporine Capsules IP 500 mg", category: "Pharmaceutical Capsules", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326874600/TY/FK/NV/11404443/cyclosporine-capsules-ip-500-mg-250x250.jpg", inStock: true },
    { id: 30, title: "Tacrolimus Capsule IP 0.5 mg", category: "Pharmaceutical Capsules", price: "Price on Request", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326873879/UC/MZ/QA/11404443/tacrolimus-capsule-ip-0-5-mg-250x250.jpeg", inStock: true },
    { id: 31, title: "Leuprolide Acetate LUPRODEX 22.5", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338780987/MK/DF/BT/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 32, title: "Pomide 2mg Capsules", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/339173946/YQ/ZQ/IT/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 33, title: "Posacad Gr POSACAD GR", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338737939/UA/VV/QA/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 34, title: "Imatib 400 Mg Tablets", category: "Anti Cancer Medicines", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338825081/XD/WE/FB/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 35, title: "Reviro Tenofovir Tablet 300MG", category: "Pharmaceutical Tablets", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338958026/WG/PX/JO/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 36, title: "Cefoperazone Sulbactam Injection kelxone-s", category: "Pharmaceutical Injections", price: "Price on Request", image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/338734621/UV/ZV/LF/11404443/product-jpeg-250x250.jpeg", inStock: true },
    { id: 37, title: "Non Contact Thermometer", category: "Medical Devices", price: "Price on Request", image: "https://5.imimg.com/data5/IOS/Default/2024/10/457996931/UJ/XM/FK/11404443/product-jpeg-250x250.png", inStock: true }
];

// Auto-generate realistic stock counts for the prototype
products.forEach(p => {
    if (p.inStock && p.stockCount === undefined) {
        // Generates a consistent number between 15 and 95 based on the product ID
        p.stockCount = (p.id * 17) % 80 + 15; 
    } else if (!p.inStock) {
        p.stockCount = 0;
    }
});

const phoneNumber = "919846196746";

let currentCategory = "All Categories";
let searchQuery = "";

function init() {
    // Initial render
    renderCategories();
    renderProducts();

    setupSearch();
}

// SPA Navigation
window.showCatalog = function() {
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('catalog-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.showProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Build Detail View
    const detailContent = document.getElementById('detail-content-area');
    
    const badgeHtml = !product.inStock ? '<span class="badge badge-out-of-stock detail-badge">Out of Stock</span>' : '';
    const btnClass = product.inStock ? 'whatsapp-btn' : 'whatsapp-btn disabled';
    const btnText = product.inStock ? 'Inquire Now' : 'Unavailable';
    const btnDisabled = !product.inStock ? 'disabled' : '';
    const stockClass = product.inStock ? 'in-stock' : 'out-of-stock';
    const stockText = product.inStock ? `${product.stockCount} In Stock` : `0 In Stock`;
    const whatsappIcon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

    detailContent.innerHTML = `
        <div class="detail-layout">
            <div class="detail-image-wrapper">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="detail-info-wrapper">
                <span class="detail-category">${product.category}</span>
                <h1 class="detail-title">${product.title}</h1>
                <div class="detail-price">${product.price}</div>
                <div class="detail-stock ${stockClass}">
                    ${stockText}
                </div>
                <div class="detail-description">
                    <p>High-quality product distributed by Yuzaxy Pharma. We ensure safe, authentic, and timely delivery of orders across all locations. Contact us directly via WhatsApp to receive full details and request a quote.</p>
                </div>
                <div class="detail-action">
                    <button class="${btnClass}" ${btnDisabled} onclick="sendToWhatsApp(${product.id})">
                        ${whatsappIcon}
                        ${btnText}
                    </button>
                </div>
            </div>
        </div>
    `;

    // Swap Views
    document.getElementById('catalog-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');
    
    // Scroll to Top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCategories() {
    const categoryList = document.getElementById('category-list');
    const categorySelect = document.getElementById('category-select');
    
    // Extract unique categories
    const categories = ["All Categories", ...new Set(products.map(p => p.category))];
    
    // Desktop List
    categoryList.innerHTML = categories.map(cat => `
        <li class="${cat === currentCategory ? 'active' : ''}" onclick="setCategory('${cat}')">${cat}</li>
    `).join('');

    // Mobile Native Dropdown
    if (categorySelect) {
        categorySelect.innerHTML = categories.map(cat => `
            <option value="${cat}" ${cat === currentCategory ? 'selected' : ''}>${cat}</option>
        `).join('');
    }
}

// Make setCategory global so inline onclick can access it
window.setCategory = function(cat) {
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
        window.scrollTo(0, 0);
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
        card.style.cursor = 'pointer';
        card.title = 'View Details';
        card.onclick = () => showProductDetail(product.id);

        let badgeHtml = '';
        if (!product.inStock) {
            badgeHtml = `<div class="badge">Out of Stock</div>`;
        }

        const btnClass = product.inStock ? 'whatsapp-btn' : 'whatsapp-btn disabled';
        const btnText = product.inStock ? 'Inquire Now' : 'Unavailable';
        const btnDisabled = !product.inStock ? 'disabled' : '';

        const stockText = product.inStock 
            ? `<p style="color: #059669; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.75rem;">${product.stockCount} In Stock</p>`
            : '<p style="color: #dc2626; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.75rem;">0 In Stock</p>';

        card.innerHTML = `
            <div class="product-image-container">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            </div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-category">${product.category}</p>
            ${stockText}
            <button class="${btnClass}" ${btnDisabled} onclick="event.stopPropagation(); sendToWhatsApp(${product.id})">
                ${whatsappIcon}
                ${btnText}
            </button>
        `;
        
        grid.appendChild(card);
    });
}

window.sendToWhatsApp = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    // Resolve the absolute URL so WhatsApp can generate an image preview
    const imageUrl = new URL(product.image, window.location.href).href;

    const message = `*New Product Inquiry*

*Product Name:* ${product.title}
*Category:* ${product.category}
*Price:* ${product.price}
*Image Link:* ${imageUrl}

Hello Yuzaxy team, I am interested in this product and would like more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', init);

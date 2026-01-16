// Global State
let products = [];
let categories = [];
let filters = {
    categories: [],
    priceRange: 'all'
};
let sortBy = 'featured';

// API URLs
const API_BASE = 'https://fakestoreapi.com';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoriesContainer = document.getElementById('categoriesContainer');
const priceFiltersContainer = document.getElementById('priceFiltersContainer');
const productCount = document.getElementById('productCount');
const sortSelect = document.getElementById('sortSelect');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const mobileFilterOverlay = document.getElementById('mobileFilterOverlay');
const closeMobileFilter = document.getElementById('closeMobileFilter');
const showResultsBtn = document.getElementById('showResultsBtn');
const clearDesktopFilters = document.getElementById('clearDesktopFilters');
const clearMobileFilters = document.getElementById('clearMobileFilters');

// Fetch Data
async function fetchProducts() {
    try {
        showLoading();
        const response = await fetch(`${API_BASE}/products`);
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
        showError();
    }
}

async function fetchCategories() {
    try {
        const response = await fetch(`${API_BASE}/products/categories`);
        categories = await response.json();
        renderCategories();
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Render Functions
function renderCategories() {
    const categoryCheckboxes = categories.map((category, index) => {
        const id = `category-${index}`;
        const count = products.filter(p => p.category === category).length;
        return `
            <label class="filter-option" for="${id}">
                <input 
                    type="checkbox" 
                    id="${id}" 
                    class="filter-input category-checkbox" 
                    value="${category}"
                />
                <span style="text-transform: capitalize;">${category} (${count})</span>
            </label>
        `;
    }).join('');

    // Desktop categories
    categoriesContainer.innerHTML = categoryCheckboxes;
    
    // Mobile categories
    const mobileCategoriesContainer = document.getElementById('mobileCategoriesContainer');
    if (mobileCategoriesContainer) {
        mobileCategoriesContainer.innerHTML = categoryCheckboxes;
    }

    // Add event listeners
    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryChange);
    });
}

function renderProducts() {
    const filteredProducts = getFilteredAndSortedProducts();
    
    // Update count
    productCount.textContent = `${filteredProducts.length} Products`;

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                </svg>
                <p>No products found matching your filters.</p>
                <button onclick="clearAllFilters()" class="clear-filters-btn">Clear All Filters</button>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const isBestseller = product.rating.rate >= 4.5;
    const stars = createStars(product.rating.rate);
    
    return `
        <article class="product-card">
            <div class="product-image-wrapper">
                <img 
                    src="${product.image}" 
                    alt="${product.title}"
                    class="product-image"
                    loading="lazy"
                />
                ${isBestseller ? '<span class="bestseller-badge">BESTSELLER</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${product.rating.rate} (${product.rating.count})</span>
                </div>
                <p class="product-category">${product.category}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </article>
    `;
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    
    let starsHTML = '';
    
    // Filled stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += `
            <svg class="star filled" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        `;
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += `
            <svg class="star empty" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        `;
    }
    
    return starsHTML;
}

function showLoading() {
    productsGrid.innerHTML = '<div class="loading">Loading products...</div>';
}

function showError() {
    productsGrid.innerHTML = '<div class="loading">Error loading products. Please try again.</div>';
}

// Filter and Sort Logic
function getFilteredAndSortedProducts() {
    let filtered = [...products];

    // Filter by categories
    if (filters.categories.length > 0) {
        filtered = filtered.filter(product => 
            filters.categories.includes(product.category)
        );
    }

    // Filter by price range
    switch (filters.priceRange) {
        case 'under25':
            filtered = filtered.filter(p => p.price < 25);
            break;
        case '25to50':
            filtered = filtered.filter(p => p.price >= 25 && p.price <= 50);
            break;
        case '50to100':
            filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
            break;
        case 'over100':
            filtered = filtered.filter(p => p.price > 100);
            break;
    }

    // Sort
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating.rate - a.rating.rate);
            break;
        case 'featured':
        default:
            // Keep original order
            break;
    }

    return filtered;
}

// Event Handlers
function handleCategoryChange(e) {
    const category = e.target.value;
    
    if (e.target.checked) {
        filters.categories.push(category);
    } else {
        filters.categories = filters.categories.filter(c => c !== category);
    }
    
    // Sync checkboxes between desktop and mobile
    document.querySelectorAll(`.category-checkbox[value="${category}"]`).forEach(checkbox => {
        checkbox.checked = e.target.checked;
    });
    
    renderProducts();
}

function handlePriceChange(e) {
    filters.priceRange = e.target.value;
    
    // Sync radio buttons between desktop and mobile
    document.querySelectorAll(`.price-radio[value="${e.target.value}"]`).forEach(radio => {
        radio.checked = true;
    });
    
    renderProducts();
}

function handleSortChange(e) {
    sortBy = e.target.value;
    renderProducts();
}

function clearAllFilters() {
    filters.categories = [];
    filters.priceRange = 'all';
    
    // Uncheck all category checkboxes
    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset price radio buttons
    document.querySelectorAll('.price-radio').forEach(radio => {
        radio.checked = radio.value === 'all';
    });
    
    renderProducts();
}

function toggleMobileFilter() {
    mobileFilterOverlay.classList.toggle('active');
}

function closeMobileFilterDrawer() {
    mobileFilterOverlay.classList.remove('active');
}

// Event Listeners
sortSelect.addEventListener('change', handleSortChange);
mobileFilterBtn.addEventListener('click', toggleMobileFilter);
closeMobileFilter.addEventListener('click', closeMobileFilterDrawer);
showResultsBtn.addEventListener('click', closeMobileFilterDrawer);
mobileFilterOverlay.addEventListener('click', (e) => {
    if (e.target === mobileFilterOverlay) {
        closeMobileFilterDrawer();
    }
});
clearDesktopFilters.addEventListener('click', clearAllFilters);
clearMobileFilters.addEventListener('click', clearAllFilters);

// Setup price filters
function setupPriceFilters() {
    const priceRanges = [
        { value: 'all', label: 'All Prices' },
        { value: 'under25', label: 'Under $25' },
        { value: '25to50', label: '$25 to $50' },
        { value: '50to100', label: '$50 to $100' },
        { value: 'over100', label: 'Over $100' }
    ];

    const priceHTML = priceRanges.map((range, index) => {
        const id = `price-${index}`;
        return `
            <label class="filter-option" for="${id}">
                <input 
                    type="radio" 
                    id="${id}" 
                    name="price" 
                    class="filter-input price-radio" 
                    value="${range.value}"
                    ${range.value === 'all' ? 'checked' : ''}
                />
                <span>${range.label}</span>
            </label>
        `;
    }).join('');

    // Desktop price filters
    priceFiltersContainer.innerHTML = priceHTML;
    
    // Mobile price filters
    const mobilePriceContainer = document.getElementById('mobilePriceFiltersContainer');
    if (mobilePriceContainer) {
        mobilePriceContainer.innerHTML = priceHTML.replace(/price-(\d+)/g, 'mobile-price-$1');
    }

    // Add event listeners
    document.querySelectorAll('.price-radio').forEach(radio => {
        radio.addEventListener('change', handlePriceChange);
    });
}

// Newsletter Form Handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    });
}

// Initialize
async function init() {
    setupPriceFilters();
    await fetchProducts();
    await fetchCategories();
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

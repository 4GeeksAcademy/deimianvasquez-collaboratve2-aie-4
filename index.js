const CART_STORAGE_KEYS = ['florale_cart', 'carrito', 'cart', 'shoppingCart', 'shopping_cart'];

function getActiveStorageKey() {
    for (const key of CART_STORAGE_KEYS) {
        try {
            const parsed = JSON.parse(localStorage.getItem(key) || 'null');
            if (Array.isArray(parsed)) {
                return key;
            }
        } catch (error) {
            // Ignore invalid JSON and continue with the next key.
        }
    }
    return CART_STORAGE_KEYS[0];
}

const activeStorageKey = getActiveStorageKey();

function loadCart() {
    try {
        const parsed = JSON.parse(localStorage.getItem(activeStorageKey) || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(activeStorageKey, JSON.stringify(cart));
}

function getTotalUnits(cart) {
    return cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
}

function updateHeaderBadge() {
    const badge = document.getElementById('header-cart-count');
    if (!badge) {
        return;
    }

    const cart = loadCart();
    badge.textContent = String(getTotalUnits(cart));
}

function sanitizeQuantity(rawValue) {
    const parsed = Number.parseInt(rawValue, 10);
    if (Number.isNaN(parsed) || parsed < 1) {
        return 1;
    }
    return parsed;
}

function parsePriceFromPage() {
    const priceNode = document.querySelector('p.text-3xl.font-bold.text-negroBase');
    if (!priceNode) {
        return 0;
    }

    const priceMatch = (priceNode.textContent || '').match(/[\d,.]+/);
    if (!priceMatch) {
        return 0;
    }

    const normalized = priceMatch[0].replace(/,/g, '');
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
}

function buildProductPayload(quantity) {
    const name = document.getElementById('product-name')?.textContent?.trim() || 'Producto sin nombre';
    const skuText = document.getElementById('product-sku')?.textContent?.trim() || '';
    const sku = skuText.replace('Ref:', '').replace('#', '').trim();
    const imageElement = document.getElementById('product-image');
    const image = imageElement?.getAttribute('src') || '';
    const selectedSize = document.querySelector('input[name="talla"]:checked')?.value || '';
    const price = parsePriceFromPage();

    return {
        id: `${sku || name}-${selectedSize || 'sin-talla'}`,
        name,
        sku,
        image,
        price,
        quantity,
        size: selectedSize
    };
}

function addCurrentProductToCart() {
    const form = document.getElementById('product-form');
    const quantityInput = document.getElementById('cantidad');

    if (!form || !quantityInput) {
        return false;
    }

    if (!form.reportValidity()) {
        return false;
    }

    const quantity = sanitizeQuantity(quantityInput.value);
    const product = buildProductPayload(quantity);
    const cart = loadCart();

    const existingIndex = cart.findIndex((item) => {
        return item.sku === product.sku && (item.size || '') === (product.size || '');
    });

    if (existingIndex >= 0) {
        cart[existingIndex].quantity = sanitizeQuantity((cart[existingIndex].quantity || 1) + quantity);
    } else {
        cart.push(product);
    }

    saveCart(cart);
    updateHeaderBadge();
    return true;
}

function setupQuantityControls() {
    const quantityInput = document.getElementById('cantidad');
    const decreaseButton = document.getElementById('qty-decrease');
    const increaseButton = document.getElementById('qty-increase');

    if (!quantityInput || !decreaseButton || !increaseButton) {
        return;
    }

    decreaseButton.addEventListener('click', () => {
        const nextValue = Math.max(1, sanitizeQuantity(quantityInput.value) - 1);
        quantityInput.value = String(nextValue);
    });

    increaseButton.addEventListener('click', () => {
        const nextValue = sanitizeQuantity(quantityInput.value) + 1;
        quantityInput.value = String(nextValue);
    });

    quantityInput.addEventListener('change', () => {
        quantityInput.value = String(sanitizeQuantity(quantityInput.value));
    });
}

function setupCartNavigation() {
    const cartButton = document.getElementById('header-cart-button');
    if (!cartButton) {
        return;
    }

    cartButton.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
}

function setupProductForm() {
    const form = document.getElementById('product-form');
    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addCurrentProductToCart();
    });
}

function setupBuyNow() {
    const buyNowButton = document.getElementById('buy-now-button');
    if (!buyNowButton) {
        return;
    }

    buyNowButton.addEventListener('click', () => {
        const wasAdded = addCurrentProductToCart();
        if (wasAdded) {
            window.location.href = 'cart.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupCartNavigation();
    setupQuantityControls();
    setupProductForm();
    setupBuyNow();
    updateHeaderBadge();
});

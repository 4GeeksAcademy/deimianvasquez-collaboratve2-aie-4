// Claves soportadas para mantener compatibilidad con diferentes implementaciones del carrito.
const CART_STORAGE_KEYS = ['florale_cart', 'carrito', 'cart', 'shoppingCart', 'shopping_cart'];
const fallbackImage = 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=500';

// Referencias al DOM para actualizar la UI del carrito y el resumen.
const cartItemsContainer = document.getElementById('cart-items');
const emptyCartContainer = document.getElementById('empty-cart');
const summaryItems = document.getElementById('summary-items');
const summarySubtotal = document.getElementById('summary-subtotal');
const summaryTaxes = document.getElementById('summary-taxes');
const summaryShipping = document.getElementById('summary-shipping');
const summaryTotal = document.getElementById('summary-total');
const cartCountBadge = document.getElementById('cart-count-badge');
const checkoutButton = document.getElementById('checkout-button');

// Se detecta la clave de LocalStorage donde ya existan datos validos del carrito.
function getActiveStorageKey() {
    for (const key of CART_STORAGE_KEYS) {
        try {
            const parsed = JSON.parse(localStorage.getItem(key) || 'null');
            if (Array.isArray(parsed)) {
                return key;
            }
        } catch (error) {
            // Si el contenido no es JSON valido, se ignora y se prueba la siguiente clave.
        }
    }
    return CART_STORAGE_KEYS[0];
}

const activeStorageKey = getActiveStorageKey();

// Convierte valores ambiguos de cantidad a un entero valido con minimo de 1.
function sanitizeQuantity(rawValue) {
    const parsed = Number.parseInt(rawValue, 10);
    if (Number.isNaN(parsed) || parsed < 1) {
        return 1;
    }
    return parsed;
}

// Convierte precio a numero seguro para evitar NaN y mantener calculos estables.
function sanitizePrice(rawValue) {
    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed) || parsed < 0) {
        return 0;
    }
    return parsed;
}

// Normaliza la forma de cada item para soportar diferentes estructuras guardadas.
function normalizeCartItem(item, index) {
    const name = item?.name || item?.title || item?.productName || 'Producto sin nombre';
    const sku = item?.sku || item?.SKU || item?.code || '';
    const image = item?.image || item?.thumbnail || item?.img || fallbackImage;
    const price = sanitizePrice(item?.price ?? item?.unitPrice ?? item?.precio ?? 0);
    const quantity = sanitizeQuantity(item?.quantity ?? item?.qty ?? item?.cantidad ?? 1);
    const id = item?.id || item?.productId || `${name}-${sku}-${index}`;

    return { id, name, sku, image, price, quantity };
}

// Carga el carrito desde LocalStorage y retorna una lista normalizada.
function loadCartFromStorage() {
    try {
        const rawCart = localStorage.getItem(activeStorageKey);
        const parsedCart = JSON.parse(rawCart || '[]');
        if (!Array.isArray(parsedCart)) {
            return [];
        }
        return parsedCart.map(normalizeCartItem);
    } catch (error) {
        return [];
    }
}

// Persiste el carrito actualizado en la clave detectada.
function saveCartToStorage(cart) {
    localStorage.setItem(activeStorageKey, JSON.stringify(cart));
}

// Formatea importes en moneda MXN para mantener consistencia visual y local.
function formatMoney(value) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    }).format(value);
}

// Calcula valores acumulados para el resumen de compra.
function getCartSummary(cart) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxes = 0;
    const shipping = 0;
    const total = subtotal + taxes + shipping;

    return { totalItems, subtotal, taxes, shipping, total };
}

// Construye el bloque HTML de cada producto respetando estilos y espaciados del proyecto.
function createCartItemTemplate(item, index) {
    const lineTotal = item.price * item.quantity;

    return `
        <article class="bg-grisSuave rounded-[32px] p-5 sm:p-6 transition-all duration-300">
            <div class="flex flex-col sm:flex-row gap-5 sm:items-center">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="w-full sm:w-28 h-52 sm:h-32 object-cover rounded-2xl bg-blancoBase"
                    loading="lazy"
                >

                <div class="flex-1 min-w-0">
                    <h3 class="text-xl font-bold text-negroBase leading-tight">${item.name}</h3>
                    <p class="text-sm text-grisSecundario mt-1">${item.sku ? `SKU: ${item.sku}` : 'SKU no disponible'}</p>
                    <p class="text-lg font-bold text-negroBase mt-3">${formatMoney(item.price)}</p>
                </div>

                <div class="sm:text-right flex flex-col gap-4 sm:items-end">
                    <div>
                        <label for="quantity-${index}" class="block text-sm text-grisSecundario mb-2">Cantidad</label>
                        <div class="flex items-center bg-blancoBase rounded-full w-32 p-1 border border-black/5">
                            <button
                                type="button"
                                class="w-8 h-8 flex items-center justify-center text-negroBase hover:bg-grisSuave rounded-full transition-colors"
                                aria-label="Disminuir cantidad de ${item.name}"
                                data-action="decrease"
                                data-index="${index}"
                            >
                                <span class="text-xl leading-none">-</span>
                            </button>
                            <input
                                id="quantity-${index}"
                                type="number"
                                min="1"
                                value="${item.quantity}"
                                class="w-full bg-transparent text-center font-medium text-negroBase focus:outline-none appearance-none"
                                aria-label="Cantidad de ${item.name}"
                                data-action="input"
                                data-index="${index}"
                            >
                            <button
                                type="button"
                                class="w-8 h-8 flex items-center justify-center text-negroBase hover:bg-grisSuave rounded-full transition-colors"
                                aria-label="Aumentar cantidad de ${item.name}"
                                data-action="increase"
                                data-index="${index}"
                            >
                                <span class="text-xl leading-none">+</span>
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between sm:justify-end gap-4">
                        <p class="text-base font-bold text-negroBase">${formatMoney(lineTotal)}</p>
                        <button
                            type="button"
                            class="text-sm font-medium text-grisSecundario hover:text-negroBase transition-colors"
                            data-action="remove"
                            data-index="${index}"
                            aria-label="Eliminar ${item.name} del carrito"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// Controla visibilidad entre estado vacio y listado de productos.
function toggleEmptyState(isEmpty) {
    emptyCartContainer.classList.toggle('hidden', !isEmpty);
    cartItemsContainer.classList.toggle('hidden', isEmpty);
    checkoutButton.disabled = isEmpty;
}

// Actualiza el badge del header con la suma total de unidades del carrito.
function updateHeaderBadge(totalItems) {
    cartCountBadge.textContent = String(totalItems);
}

// Pinta la lista de productos y los importes del resumen en pantalla.
function renderCart() {
    const summary = getCartSummary(cart);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        toggleEmptyState(true);
    } else {
        cartItemsContainer.innerHTML = cart.map(createCartItemTemplate).join('');
        toggleEmptyState(false);
    }

    summaryItems.textContent = String(summary.totalItems);
    summarySubtotal.textContent = formatMoney(summary.subtotal);
    summaryTaxes.textContent = formatMoney(summary.taxes);
    summaryShipping.textContent = formatMoney(summary.shipping);
    summaryTotal.textContent = formatMoney(summary.total);
    updateHeaderBadge(summary.totalItems);
}

// Reemplaza la cantidad de un item y guarda cambios si el indice es valido.
function setItemQuantity(index, nextQuantity) {
    if (!cart[index]) {
        return;
    }
    cart[index].quantity = sanitizeQuantity(nextQuantity);
    saveCartToStorage(cart);
    renderCart();
}

// Elimina un item del carrito y vuelve a renderizar.
function removeCartItem(index) {
    if (!cart[index]) {
        return;
    }
    cart.splice(index, 1);
    saveCartToStorage(cart);
    renderCart();
}

// Maneja clicks de los controles de cantidad y boton de eliminar via delegacion.
cartItemsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) {
        return;
    }

    const action = button.dataset.action;
    const index = Number.parseInt(button.dataset.index || '-1', 10);
    if (Number.isNaN(index) || !cart[index]) {
        return;
    }

    if (action === 'increase') {
        setItemQuantity(index, cart[index].quantity + 1);
    }

    if (action === 'decrease') {
        setItemQuantity(index, Math.max(1, cart[index].quantity - 1));
    }

    if (action === 'remove') {
        removeCartItem(index);
    }
});

// Permite escribir manualmente la cantidad y la normaliza al perder foco/cambiar valor.
cartItemsContainer.addEventListener('change', (event) => {
    const input = event.target.closest('input[data-action="input"]');
    if (!input) {
        return;
    }

    const index = Number.parseInt(input.dataset.index || '-1', 10);
    if (Number.isNaN(index) || !cart[index]) {
        return;
    }

    setItemQuantity(index, input.value);
});

// Datos en memoria usados por toda la pagina para renderizar y mutar el carrito.
let cart = loadCartFromStorage();

renderCart();

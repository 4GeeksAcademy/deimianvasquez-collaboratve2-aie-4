Cambios aplicados 1st commit:

Layout completo de carrito (no drawer), con lista de productos a la izquierda y resumen a la derecha en desktop.
Vista responsive:
Desktop: productos horizontales + resumen sticky.
Tablet: columnas adaptadas.
Mobile: tarjetas verticales + resumen debajo.
Render dinámico desde LocalStorage.
Selector de cantidad con botones + y -, y validación para no bajar de 1.
Cálculo automático de:
Total por producto.
Subtotal.
Total general.
Eliminación de productos.
Persistencia de cambios en LocalStorage.
Actualización del badge del carrito en el header.
Estado de carrito vacío con mensaje “Tu carrito esta vacio” y botón “Seguir comprando” hacia index.html.
Formato de moneda en MXN con Intl.NumberFormat.
ARIA labels en controles clave.
Transiciones suaves en acciones visuales.
Nota técnica:

Para compatibilidad, el script intenta leer estas claves de LocalStorage: florale_cart, carrito, cart, shoppingCart, shopping_cart.
Si no encuentra ninguna válida, usa florale_cart como predeterminada.
Validación:

Revisé errores del archivo y no hay errores reportados en cart.html.

////////////////////////////

Cambios aplicados 2nd commit:

1. Actualicé index.html para conectar la UI con JS:
Agregué id="header-cart-button" al botón del carrito.
Agregué id="header-cart-count" al badge del carrito.
Agregué id="product-image", id="product-name", id="product-sku" a los datos del producto.
Agregué id="product-form" al formulario principal.
Agregué id="qty-decrease" y id="qty-increase" a los botones de cantidad.
Agregué id="buy-now-button" al botón Comprar ahora.
Agregué la carga del nuevo script al final: index.js.

2. Creé index.js con toda la lógica nueva:
Navegación a cart.html desde el icono del carrito.
Control de cantidad (+ / - y validación mínimo 1).
Guardado en LocalStorage al agregar al carrito.
Merge del mismo producto+talla para sumar cantidades.
Actualización del badge del carrito en header.
Comprar ahora: agrega al carrito y redirige a cart.html.
Compatible con las mismas keys que usa cart.js

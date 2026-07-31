Cambios aplicados:

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
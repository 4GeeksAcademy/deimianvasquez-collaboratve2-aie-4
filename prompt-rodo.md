# Crear una página de Carrito de Compras para mi proyecto de e-commerce

Estoy desarrollando un sitio de e-commerce y ya tengo un archivo **index.html** que representa la página de un producto.

Quiero que utilices **ese mismo archivo como referencia**, respetando completamente su estructura, diseño y estilo visual.

No quiero que crees un proyecto desde cero ni que cambies la identidad visual existente.

## Objetivo

Crear una nueva página llamada **cart.html** que funcione como el carrito de compras del sitio.

Debe verse como si hubiera sido diseñada junto con el resto del proyecto.

---

## Diseño

El carrito debe conservar exactamente el mismo estilo que tiene el archivo **index.html**:

* Misma paleta de colores.
* Misma tipografía.
* Mismo Header.
* Mismo Footer.
* Mismo espaciado.
* Mismos bordes redondeados.
* Mismos botones.
* Misma apariencia responsive.
* Utilizar Tailwind CSS siguiendo la estructura existente.

No quiero un panel lateral (Drawer).

Debe ser una página completa.

---

## Contenido del carrito

Cada producto agregado debe mostrar:

* Imagen miniatura
* Nombre del producto
* SKU (si existe)
* Precio unitario
* Selector de cantidad con botones + y -
* Total por producto
* Botón para eliminar el producto

---

## Resumen de compra

En el lado derecho (o debajo en móvil) agregar una tarjeta con:

* Cantidad total de productos
* Subtotal
* Impuestos (placeholder)
* Envío (placeholder)
* Total final

Botones:

* Continuar comprando
* Proceder al pago

---

## Funcionalidad

Implementar toda la lógica usando JavaScript.

El carrito debe:

* Obtener los productos desde LocalStorage.
* Mostrar automáticamente todos los productos guardados.
* Permitir aumentar o disminuir cantidades.
* No permitir cantidades menores a 1.
* Actualizar automáticamente:

  * Total por producto
  * Subtotal
  * Total general
* Eliminar productos.
* Guardar nuevamente los cambios en LocalStorage.
* Actualizar el badge del carrito que aparece en el Header.

---

## Carrito vacío

Si no existen productos:

Mostrar una vista amigable con:

* Un icono o ilustración
* El mensaje:

"Tu carrito está vacío"

y un botón:

"Seguir comprando"

que regrese a **index.html**.

---

## Responsive

Desktop:

* Productos alineados horizontalmente.
* Resumen de compra fijo a la derecha.

Tablet:

* Adaptar columnas sin romper el diseño.

Mobile:

* Mostrar cada producto en formato vertical.
* Mantener visibles los botones de cantidad.
* Que el resumen quede debajo de la lista de productos.

---

## Calidad del código

* No modificar el diseño del proyecto existente.
* Reutilizar las mismas clases y estilos de index.html cuando sea posible.
* Mantener un código limpio y bien organizado.
* Separar HTML, CSS y JavaScript si el proyecto ya sigue esa estructura.
* Utilizar nombres descriptivos para funciones y variables.
* Evitar código duplicado.

---

## Extras (si es posible)

Agregar:

* Formato de moneda en pesos mexicanos (MXN).
* Accesibilidad (ARIA Labels).
* Transiciones suaves.
* Utilizar comentarios muy descriptivos para todo el codigo que se genere

---

## Muy importante

Antes de generar código, analiza el archivo **index.html** existente y utiliza su estructura como guía.

No cambies el estilo visual del proyecto.

El resultado debe parecer una continuación natural del sitio existente, como si hubiera sido diseñado por la misma persona.

Si necesitas reutilizar componentes como Header o Footer, hazlo en lugar de crear otros nuevos.

Prioriza una experiencia de usuario similar a la de tiendas como Zara, H&M o Shopify, manteniendo la identidad visual de mi proyecto.

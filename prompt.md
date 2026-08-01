**[Configuración del Entorno y Layout Base]**
Prompt: Actúa como un desarrollador frontend Senior.
Vamos a maquetar una vista de producto de e-commerce usando únicamente HTML semántico y Tailwind CSS por CDN. 
Inyecta la siguiente configuración en el script de Tailwind:
 colores personalizados -  (blancoBase: #FFFFFF, grisSuave: #F3F3F3, negroBase: #1A1A1A, verdeAmarillo: #e9f7b2, lavender: #8875FF) 
  tipografías - (Google Sans como sans-serif principal y League Script como fuente decorativa). Genera solo la estructura base del documento (head, body) y un contenedor <main> vacío,
  
  asegurando que sea completamente responsivo, semantico y que cumpla con los protocolos necesarios para seo y schema.org


**[La Cuadrícula Principal del Producto]**
Prompt: Dentro del contenedor <main>, añade la sección del producto. Utiliza CSS Grid para crear un diseño de dos columnas en pantallas grandes (lg:grid-cols-2) que colapse a una columna en móvil. En la columna izquierda, coloca una etiqueta <figure> con una imagen vertical del producto ocupando todo el ancho. En la columna derecha, incluye un título grande, código de referencia y precio. Añade un formulario interactivo con un selector de tallas (S, M, L) estilizado como botones redondos, un input de cantidad numérico y dos botones de acción de ancho completo: "Agregar al carrito" en negroBase y "Comprar ahora" en verdeAmarillo.


**[Header Semántico]**
Prompt: Trabaja sobre el código anterior. Crea un componente <header> fijo (sticky) en la parte superior con fondo blancoBase. Debe contener un logo tipográfico a la izquierda usando la fuente League Script. En el centro, añade una barra de búsqueda visible solo en escritorio. A la derecha, implementa iconos de navegación (favoritos, perfil) y un icono de carrito que incluya un indicador numérico flotante usando el color verdeAmarillo. Utiliza etiquetas semánticas y asegúrate de la alineación con Flexbox.

**[Sección de Especificaciones]**
Prompt: Debajo de la cuadrícula del producto, añade una nueva etiqueta <section> para los detalles. Divide esta sección en dos columnas para escritorio. En la primera columna, crea una tarjeta con fondo grisSuave para listar los "Materiales y Cuidado" utilizando viñetas. En la segunda columna, redacta dos párrafos sobre el "Uso recomendado" de la prenda. Aplica un alto contraste tipográfico para facilitar la lectura y respeta el espaciado vertical.

**[El Footer del E-commerce]**
Prompt: Al final del documento, fuera del main, implementa un componente <footer> con fondo grisSuave. Estructúralo en una cuadrícula responsiva: una columna principal que incluya el logo y un input para suscribirse a un newsletter con su respectivo botón de envío. Las siguientes columnas deben contener listas de enlaces para "Tienda" y "Atención al Cliente". Finaliza con una línea divisoria inferior que contenga el copyright y un icono genérico de redes sociales.

**[Catálogo]**
### CONTEXTO
Estamos construyendo la página de una tienda de ropa llamada "florale". Ya tengo el header y el footer hechos en index.html, usando Tailwind CSS vía CDN con esta configuración ya definida en el <head>:
colores: blancoBase (#FFFFFF), grisSuave (#F3F3F3), negroBase (#1A1A1A), grisSecundario (#757575), verdeAmarillo (#e9f7b2), lavender (#8875FF)
fuentes: font-sans (Google Sans/DM Sans), font-display (Google Sans Flex/DM Sans), font-script (League Script, usado en el logo "florale")
El body ya tiene: bg-blancoBase text-negroBase font-sans

El código existente usa comentarios HTML descriptivos en cada bloque, 
por ejemplo:
<!-- Header Semántico -->
<!-- Logo / Brand -->
<!-- Columna 1: Marca y Newsletter -->

### RESTRICCIONES
No uses colores ni fuentes que no estén en mi configuración de Tailwind. Usa la misma estructura de contenedor que el header: 
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Usa imágenes de placeholder de picsum.photos.
Mantén el mismo estilo de comentarios HTML descriptivos que se usaron, 
agregando uno antes de cada sección y sub-bloque importante 
(ej. <!-- Hero / Banner destacado -->, <!-- Mini productos destacados -->, <!-- Tarjeta de producto -->).


### TAREA
Necesito que agregues, entre mi </header> y mi <footer>, dos secciones nuevas:

1. Un HERO banner con:
   - Grid de 2 columnas (1 en mobile)
   - Columna izquierda: imagen grande con overlay oscuro degradado y texto 
     "Colección de la semana" con avatar y enlace "Explorar la colección"
   - Columna derecha: fondo grisSuave, título grande con font-display, 
     texto de apoyo, botón "Comprar ahora" en bg-verdeAmarillo, 
     y 3 mini-productos con imagen, nombre y precio

2. Una sección de CATÁLOGO con:
   - Título "Nuestro Catálogo" en font-display
   - Filtros tipo pills: "Más vendidos" (activo, bg-negroBase), 
     "Tendencia" y "Nuevo" (bg-grisSuave con hover bg-verdeAmarillo)
   - Grid de productos responsive (2 columnas mobile, 3 tablet, 4 desktop)
   - Cada tarjeta con: imagen (aspect-[3/4], rounded-2xl), botón de favorito 
     flotante, badge de categoría flotante, nombre del producto y precio 
     (algunos con precio anterior tachado)


### FORMATO DE SALIDA
Escribe el HTML completo listo para insertar en mi archivo.
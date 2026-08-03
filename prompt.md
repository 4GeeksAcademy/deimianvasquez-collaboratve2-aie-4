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
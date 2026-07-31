[Objetivo General]
Prompt: Actua como un desarrollador frontend Senior especializado en ecommerce y performance web. Debes construir un flujo de Checkout en 3 pasos para un sitio estatico, usando unicamente HTML semantico y Tailwind CSS por CDN, manteniendo el mismo lenguaje visual del proyecto base en index.html. El resultado debe ser completamente responsive (movil, tablet, escritorio), accesible, con SEO tecnico solido y orientado a superar 90 puntos en PageSpeed Insights. No uses frameworks JS, no uses librerias externas adicionales, no uses componentes dinamicos dependientes de backend.

[Arquitectura de Paginas y Navegacion]
Prompt: Define una arquitectura de 2 paginas conectadas:
1. Pagina de producto en index.html.
2. Pagina de checkout en checkout.html.
Conecta ambas por navbar y acciones clave:
1. Logo en ambas paginas enlaza al inicio.
2. Icono de carrito en index.html enlaza a checkout.html.
3. Boton Comprar ahora en index.html enlaza a checkout.html.
4. Navbar de checkout incluye enlace de volver a producto.
Manten consistencia visual de colores, tipografias, espaciados, bordes redondeados y estilo de botones.

[Configuracion Base y Sistema Visual]
Prompt: Reutiliza la configuracion Tailwind del proyecto base (colores personalizados y tipografias existentes). Estructura el documento con head completo y body semantico. Incluye diseno limpio, jerarquia tipografica clara y espaciado coherente. Preserva identidad de marca Florale y evita estilos genericos sin intencion visual.

[SEO Tecnico y Metadatos]
Prompt: Implementa SEO tecnico en checkout.html con:
1. title unico y descriptivo.
2. meta description util para contexto transaccional.
3. canonical correcto para la URL de checkout.
4. Open Graph y Twitter Cards alineadas.
5. JSON-LD con WebPage y BreadcrumbList.
6. HTML semantico indexable en contenido principal.
7. Nota de buenas practicas: checkout puede llevar noindex en produccion real por ser pagina transaccional, pero mantener estructura SEO completa para evaluacion tecnica.

[Estructura Semantica del Checkout]
Prompt: Crea la estructura:
1. header sticky con branding y navegacion.
2. main con titulo principal del checkout y subtitulo explicativo.
3. seccion de progreso visual de 3 pasos.
4. formulario dividido en 3 bloques semanticos con fieldset y legend.
5. aside con resumen del pedido.
6. footer coherente con el sitio.
Usa etiquetas semanticas y contenido textual real, no placeholders vacios.

[Navegacion de Etapas y Orden Obligatorio]
Prompt: Implementa una navegacion superior por etapas con botones clickeables para Paso 1, Paso 2 y Paso 3. El flujo debe ser obligatorio en orden:
1. Primero se completa y valida Paso 1.
2. Luego se habilita Paso 2.
3. Finalmente se habilita Paso 3.
Si el usuario intenta avanzar sin completar el paso anterior, muestra validacion nativa del navegador y llevalo al campo faltante. Los botones superiores deben permitir moverse a secciones ya habilitadas para editar datos.

[Paso 1 - Datos Personales]
Prompt: Implementa el primer bloque del formulario con campos:
1. Nombre.
2. Apellidos.
3. Correo electronico.
4. Telefono.
Incluye labels asociados, atributos name, id, autocomplete, required y mensajes de ayuda cortos. El telefono debe aceptar unicamente 10 digitos (sin letras ni simbolos) con validacion nativa HTML. Define diseno responsive con 1 columna en movil y 2 columnas en tablet/escritorio cuando aplique.

[Paso 2 - Direccion de Entrega]
Prompt: Implementa segundo bloque con campos:
1. Calle y numero.
2. Colonia.
3. Ciudad.
4. Estado.
5. Codigo postal.
6. Referencias de entrega.
Usa semantica clara y agrupa campos por logica de captura. Anade texto breve de tiempos de envio estimados y cobertura para mejorar claridad de usuario.

[Paso 3 - Pago con Tarjeta]
Prompt: Implementa tercer bloque con:
1. Nombre en la tarjeta.
2. Numero de tarjeta.
3. Fecha de vencimiento con dos desplegables (mes y anio).
4. CVV.
5. Checkbox para guardar datos de pago de forma simulada.
Anade microcopys de confianza:
1. Pago seguro.
2. Cifrado de datos.
3. Proteccion del comprador.
Manten todos los campos con validaciones HTML nativas y atributos autocomplete de tarjeta. Los selectores de mes y anio deben conservar el mismo estilo visual del formulario.

[Resumen del Pedido]
Prompt: Crea un panel de resumen de compra con:
1. Producto.
2. Cantidad.
3. Subtotal.
4. Envio.
5. Total final.
Hazlo sticky en escritorio y estatico en movil. Incluye boton principal Finalizar compra y boton secundario Volver al carrito. Debe verse premium, claro y legible.

[Responsive Completo]
Prompt: Garantiza comportamiento responsive:
1. Movil: flujo vertical, botones full width, inputs comodos para touch.
2. Tablet: distribucion intermedia con mejor aprovechamiento de columnas.
3. Escritorio: layout de dos columnas, formulario y resumen.
4. Cada seccion de etapa del formulario debe tener una altura minima de 80vh para evitar recortes visuales al navegar entre pasos.
Usa breakpoints Tailwind de forma consistente y evita overflow horizontal.

[Accesibilidad]
Prompt: Implementa buenas practicas a11y:
1. Contraste suficiente en texto y controles.
2. Labels visibles y vinculados.
3. focus states claros en inputs y botones.
4. aria-label solo cuando sea necesario.
5. Orden logico de tabulacion.
6. Texto alternativo en iconos no decorativos.
Asegura navegacion usable sin mouse.

[Performance para PageSpeed 90+]
Prompt: Aplica optimizaciones orientadas a alto puntaje:
1. Minimizar recursos externos.
2. Evitar imagenes pesadas o no criticas.
3. Definir width y height en imagenes.
4. Mantener DOM limpio y sin duplicaciones innecesarias.
5. Reducir variaciones de fuentes y pesos.
6. Evitar scripts extra no indispensables.
7. Priorizar contenido above the fold del checkout.
8. Mantener CLS bajo con tamanos estables de componentes.

[Checklist de Entrega]
Prompt: Valida que el resultado cumpla:
1. Flujo de checkout en 3 pasos completo.
2. Orden obligatorio entre etapas (Paso 1 -> Paso 2 -> Paso 3).
3. Botones superiores clickeables con navegacion por seccion.
4. HTML + Tailwind unicamente.
5. Diseno consistente con index.html.
6. Conexion de paginas por navbar y acciones principales.
7. Semantica SEO y contenido indexable tecnico.
8. Responsive real en movil, tablet y escritorio.
9. Base solida para superar 90 en PageSpeed.

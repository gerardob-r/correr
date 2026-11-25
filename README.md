# Zancada (nombre provisional)

PWA sencilla para registrar salidas a correr. Funciona sin conexión y guarda los datos solo en el móvil (localStorage).

- `index.html`: toda la app (HTML, CSS y JS).
- `manifest.webmanifest`: nombre, icono y ajustes de instalación. Cambia aquí `name` y `short_name` para renombrar la app.
- `sw.js`: caché para uso sin conexión. Sube `CACHE` (p. ej. `correr-v2`) cada vez que cambies algún archivo.

**Leer capturas:** en "Nueva carrera" (o en Datos → Desde una captura) puedes subir capturas del entreno. La app usa [Tesseract.js](https://github.com/naptha/tesseract.js) (se descarga del CDN la primera vez, necesita conexión) para leer fecha, distancia, tiempo y parciales, y rellena el formulario para que lo revises.

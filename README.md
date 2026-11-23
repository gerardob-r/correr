# Zancada (nombre provisional)

PWA sencilla para registrar salidas a correr. Funciona sin conexión y guarda los datos solo en el móvil (localStorage).

- `index.html`: toda la app (HTML, CSS y JS).
- `manifest.webmanifest`: nombre, icono y ajustes de instalación. Cambia aquí `name` y `short_name` para renombrar la app.
- `sw.js`: caché para uso sin conexión. Sube `CACHE` (p. ej. `correr-v2`) cada vez que cambies algún archivo.

# 01. Visión del producto

## Objetivo
Construir una plataforma digital para "El Cura" que permita:
- Leer cuentos y poesías en una experiencia de libro realista (páginas, portada, sombra, transición suave).
- Escuchar audiolibros y ver contenidos en video.
- Guardar progreso de lectura y subrayados por usuario (persistentes entre sesiones).
- Ofrecer suscripción única (vitalicia) con descargas de PDF/audio/video.

## Principios de diseño
1. **Experiencia inmersiva:** interfaz con estética de papel, tipografía legible, animaciones ligeras y responsivas.
2. **Performance:** animaciones con CSS (GPU-friendly), cargas diferidas, y assets optimizados.
3. **Seguridad:** protección XSS/CSRF, saneamiento de entradas y cifrado en tránsito.
4. **Escalabilidad:** arquitectura modular, separación FE/BE, y posibilidad de CDN + cache.
5. **Accesibilidad:** contraste adecuado, tamaños de fuente escalables y navegación por teclado.

## Público objetivo
- Lectores adultos interesados en cuentos y poesías.
- Usuarios con preferencia por lecturas en pantalla y audio.

## Métricas clave
- Tiempo promedio de lectura por sesión.
- Finalización de libros.
- Número de suscriptores vitalicios.
- Retención mensual.

# 05. Seguridad y privacidad

## Medidas recomendadas
- **Helmet** para cabeceras seguras.
- **Rate limiting** para endpoints sensibles.
- **Sanitización** de textos para evitar XSS.
- **Validación** con express-validator.
- **CORS** con lista blanca.
- **JWT** con expiración corta + refresh tokens.

## Datos sensibles
- Cifrar claves en variables de entorno.
- No almacenar tokens en localStorage (usar httpOnly cookies si aplica).

## Política de contenido
- Moderación de contenido subido.
- Sanitización de HTML en textos.

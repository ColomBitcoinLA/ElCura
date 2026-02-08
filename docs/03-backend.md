# 03. Backend (Node.js + Express + MongoDB)

## Objetivo
API REST para:
- Gestión de libros (metadatos, capítulos, recursos).
- Progreso de lectura y subrayados por usuario.
- Gestión de usuarios y suscripciones.

## Configuración de MongoDB Atlas
1. Crear cuenta gratuita y cluster.
2. Crear usuario y red permitida.
3. Obtener `CONNECTION_STRING`.
4. Guardar en `.env` como `MONGO_URI`.

## Variables de entorno sugeridas
```
PORT=4000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/elcura
JWT_SECRET=super-secret
OAUTH_GOOGLE_CLIENT_ID=...
OAUTH_GOOGLE_CLIENT_SECRET=...
OAUTH_CALLBACK_URL=...
```

## Paquetes recomendados
- express, mongoose
- helmet, cors
- express-rate-limit
- express-validator
- xss-clean (o sanitize-html en backend)
- dotenv

## Endpoints iniciales
- `GET /api/books` (lista)
- `GET /api/books/:id` (detalle)
- `POST /api/books` (admin)
- `POST /api/progress` (guardar página)
- `POST /api/highlights` (subrayados)
- `POST /api/auth/register` / `POST /api/auth/login`

## Seguridad base
- Helmet + CORS estricto
- Rate limiting en auth
- Sanitización de inputs
- Logs y auditoría básica

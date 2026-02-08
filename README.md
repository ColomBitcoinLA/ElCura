# El Cura: Cuentos y Poesías

Plataforma editorial digital para el escritor "El Cura" con backend seguro (Node.js + Express + MongoDB Atlas) y un frontend React para experiencia de lectura tipo libro real.

## Fase 1 (MVP funcional)
- Backend con autenticación JWT + refresh tokens.
- OAuth 2.0 con Google (Passport).
- Endpoints para libros, progreso y highlights.
- Middleware de suscripción para descargas protegidas.
- Seguridad avanzada (Helmet, rate limit, sanitización XSS y NoSQL).
- Demo funcional del lector con **react-pageflip** en el frontend.

## Estructura principal
```
.
├── client/            # Frontend React (demo lector)
├── docs/              # Documentación técnica
├── src/               # Backend Node.js (MVC)
├── .env.example
└── package.json
```

## Requisitos
- Node.js 18+
- Cuenta en MongoDB Atlas

## Configuración rápida (Backend)
1. Copia el archivo `.env.example` a `.env` y configura tus variables.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor:
   ```bash
   npm run dev
   ```

La API quedará disponible en `http://localhost:4000`.

## Configuración rápida (Frontend demo)
1. En otra terminal:
   ```bash
   cd client
   npm install
   npm run dev
   ```
2. Abre `http://localhost:5173` para ver el lector demo.

## Documentación
- [01. Visión del producto](docs/01-product-vision.md)
- [02. Arquitectura y estructura del proyecto](docs/02-architecture.md)
- [03. Backend (Node.js + Express + MongoDB)](docs/03-backend.md)
- [04. Frontend (HTML/CSS/JS)](docs/04-frontend.md)
- [05. Seguridad y privacidad](docs/05-security.md)
- [06. Despliegue y operación](docs/06-deployment.md)
- [07. Modelos de datos](docs/07-data-models.md)
- [08. Roadmap y escalamiento](docs/08-roadmap.md)

## Próximas fases
- Integración de Stripe.
- Cache con Redis.
- CDN con Cloudinary o S3.
- Microservicios para servicios de contenido y pagos.

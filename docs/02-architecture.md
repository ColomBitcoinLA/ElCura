# 02. Arquitectura y estructura del proyecto

## Arquitectura general
- **Frontend estático** (HTML/CSS/JS) servido desde `/public` o un CDN.
- **Backend API** (Node.js + Express) con arquitectura MVC en `/src`.
- **Base de datos** MongoDB Atlas.

## Estructura recomendada
```
el-cura-project/
├── public/                    # Frontend (estático)
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   ├── index.html
│   ├── obras.html
│   ├── sobre.html
│   ├── comunidad.html
│   └── contacto.html
├── src/                       # Backend (Node.js)
│   ├── config/                # Conexión DB y variables
│   ├── controllers/           # Lógica de negocio
│   ├── middlewares/           # Seguridad, auth, validaciones
│   ├── models/                # Esquemas Mongoose
│   ├── routes/                # Endpoints API
│   ├── services/              # Servicios externos (pagos, mail)
│   ├── utils/                 # Helpers, sanitización
│   └── app.js                 # App core
├── database/                  # Migraciones/seed (si aplica)
├── .env.example
├── package.json
└── README.md
```

## Patrón de diseño
- **MVC** en backend.
- **Componentización** ligera en frontend (CSS/JS por sección).

## Escalabilidad
- CDN para assets pesados (portadas, audio/video).
- Cache (Redis) para lecturas concurrentes y progreso.
- Separación de servicios (auth, pagos, contenido) en microservicios si crece el producto.

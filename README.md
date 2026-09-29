# ⚡ BackendForge - Gestor de Proyectos & Temario de Especialización Backend

Una aplicación web interactiva, moderna y completa diseñada para llevar el control minucioso de cada uno de tus proyectos de software, estudiar una ruta exhaustiva de **Backend, APIs y Microservicios**, marcar cada fase como aprendida y añadir proyectos reales y de alto impacto a tu portafolio profesional.

---

## 🚀 Cómo Iniciar la Aplicación

Puedes usar la aplicación de **dos formas inmediatas sin instalaciones complejas**:

### Opción 1: Abrir directamente en el navegador (Sin servidor)
Haz doble clic sobre el archivo `index.html` en tu explorador de archivos de Windows o ábrelo con Google Chrome, Edge o Firefox. Funciona de manera autónoma con almacenamiento persistente en tu navegador (`localStorage`).

### Opción 2: Con servidor local de desarrollo
Si deseas correrlo a través de un servidor HTTP local:

**Con Python:**
```bash
python -m http.server 3000
```
Y abre en tu navegador: [http://localhost:3000](http://localhost:3000)

**Con Node.js (npx):**
```bash
npx serve .
```

---

## 🌟 Características Principales

### 1. 📁 Guía y Seguimiento de Todos tus Proyectos
- **Gestor CRUD Completo:** Crea, edita, visualiza y elimina cualquiera de tus proyectos personales o profesionales.
- **Campos de Nivel Profesional:**
  - Título, Categoría y Nivel de Dificultad.
  - Estado dinámico: `⏳ Planificado`, `⚡ En Desarrollo`, `✔ Completado`.
  - Links directos a Repositorio de GitHub, Documentación interactiva Swagger/OpenAPI y Colecciones de Postman.
  - Stack tecnológico (tags) y entregables clave.
  - Notas de aprendizaje y lecciones aprendidas.
- **Filtros en Tiempo Real:** Busca por texto, filtra por estado y por especialidad técnica.

### 2. 🗺️ Temario Exhaustivo de Estudio (8 Fases)
El temario cubre a fondo todo el ciclo de vida del desarrollo Backend y sistemas a gran escala:

1. **Fase 1: Fundamentos Sólidos de Backend & Redes**
   - Protocolos (HTTP/1.1, HTTP/2, HTTP/3, TCP/UDP, TLS 1.3, DNS, Sockets).
   - Runtimes, Event Loop, I/O Asíncrono, Concurrencia vs Paralelismo.
   - Clean Code, Principios SOLID, Patrón Repository, Factory, Adapter, Strategy.
   - Arquitectura Hexagonal y Domain-Driven Design (DDD).

2. **Fase 2: Arquitectura y Diseño Profesional de APIs**
   - RESTful avanzado, Richardson Maturity Model nivel 3, Idempotencia, HATEOAS.
   - OpenAPI 3.1 / Swagger y validación estricta de contratos.
   - gRPC & Protocol Buffers para streaming y baja latencia.
   - GraphQL (Schemas, Resolvers, DataLoader para resolver N+1).
   - Webhooks con firmas HMAC y eventos SSE/WebSockets.

3. **Fase 3: Persistencia, Bases de Datos & Estrategias de Caché**
   - SQL Relacional (PostgreSQL/MySQL), Transacciones ACID, niveles de aislamiento.
   - Optimización de consultas con `EXPLAIN ANALYZE` e indexación avanzada (B-Tree, GIN, GiST).
   - NoSQL (MongoDB, Redis, Cassandra, pgvector).
   - Estrategias de Caching (Cache-Aside, Write-Through, prevención de Cache Stampede).
   - Migraciones sin tiempo de inactividad (Expand & Contract Pattern).

4. **Fase 4: Seguridad, Autenticación y Autorización Backend**
   - JWT, Refresh Tokens rotativos con detección de reuso, cookies HttpOnly.
   - OAuth 2.0 con PKCE y OpenID Connect (OIDC).
   - Modelos de Autorización RBAC y ABAC.
   - Mitigación de OWASP API Security Top 10 (BOLA/IDOR, Mass Assignment, SQLi).
   - Criptografía con Argon2id, AES-256-GCM y gestión de secretos.

5. **Fase 5: Arquitectura de Microservicios & Sistemas Distribuidos**
   - Decomposición de monolitos y Bounded Contexts.
   - Event-Driven Architecture con Apache Kafka y RabbitMQ.
   - Saga Pattern para transacciones distribuidas (Orquestación vs Coreografía).
   - Transactional Outbox Pattern, CQRS y Event Sourcing.
   - Resiliencia distribuida (Circuit Breakers, Retries con Exponential Backoff, Bulkhead).

6. **Fase 6: Testing, Calidad de Código y Pruebas de Carga**
   - Pirámide de pruebas y TDD.
   - Pruebas de integración con bases de datos reales mediante **Testcontainers**.
   - Contract Testing con **Pact** entre servicios.
   - Pruebas de carga, estrés y rendimiento con **k6** (latencias P95/P99).

7. **Fase 7: Contenedores, DevOps, CI/CD & Kubernetes**
   - Docker Multi-stage builds, imágenes Distroless y escaneo con Trivy.
   - CI/CD automatizado con GitHub Actions (linters, tests, builds y releases).
   - Kubernetes (Pods, Deployments, Services, Ingress, HPA, ConfigMaps y Secrets).
   - Helm Charts y despliegue en la nube (AWS, GCP).

8. **Fase 8: Observabilidad, Monitoreo y Operaciones en Producción**
   - Los 3 Pilares: Métricas, Logs estructurados y Distributed Tracing.
   - OpenTelemetry (OTel) y Jaeger / Zipkin para rastreo de peticiones end-to-end.
   - Prometheus y Dashboards en Grafana con los 4 Golden Signals de Google SRE.
   - Logging centralizado, Health checks (Liveness/Readiness) y alertas.

### 3. ✅ Checkpoints y Progreso por Fases
- Puedes marcar/desmarcar cada tema individualmente con casillas interactivas.
- Botón rápido para **Completar toda la fase** o restablecerla.
- Cálculo de porcentaje en tiempo real tanto por fase como en el panel global.

### 4. 💼 Proyectos para Realizar y Añadir al Portafolio
- Cada fase incluye **proyectos prácticos enterprise** con especificaciones detalladas, entregables y lo que los reclutadores evalúan.
- Cada proyecto incluye el botón **"🚀 Añadir a mis proyectos"**, que precarga todos los datos técnicos del proyecto en el formulario para que lo agregues inmediatamente a tu lista de trabajo.

### 5. 🌟 Modo Showcase / Portafolio Público
- Vista limpia y ejecutiva pensada para reclutadores, managers técnicos o clientes.
- Muestra únicamente tus proyectos activos y completados con sus características técnicas, badges y links a GitHub/Demo.
- Incluye botón directo para **Imprimir o Guardar como PDF**.

### 6. 💾 Exportar e Importar Copias de Seguridad (JSON)
- Todos tus datos se guardan automáticamente en `localStorage`.
- Puedes hacer clic en **"Exportar Datos"** para descargar un archivo JSON con todos tus proyectos y progresos.
- Puedes restaurar tu información en cualquier momento o moverla a otra computadora con **"Importar Backup"**.

### 7. 🌗 Modo Oscuro y Modo Claro
- Soporta tema oscuro de alta estética para desarrolladores y modo claro con un solo clic.

---

## 📂 Estructura del Código

```
paginaGuia/
├── index.html                  # Estructura principal y maquetado de vistas
├── css/
│   └── styles.css              # Sistema de diseño, componentes y temas
├── js/
│   ├── app.js                  # Lógica de la app, estado, persistencia y eventos
│   └── data/
│       ├── roadmapData.js      # Temario detallado de las 8 fases y proyectos propuestos
│       └── initialProjects.js  # Proyectos de ejemplo preconfigurados
└── README.md                   # Documentación de uso
```

---

¡Disfruta construyendo tus proyectos y llevando tu carrera Backend al siguiente nivel! 🚀

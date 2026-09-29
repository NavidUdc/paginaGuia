// Proyectos iniciales para el seguimiento y portafolio del desarrollador
const INITIAL_PROJECTS = [
  {
    id: "proj-user-1",
    title: "Auth Microservice con JWT y Refresh Tokens Rotativos",
    category: "Security & Auth",
    status: "completado", // 'planificado', 'en_progreso', 'completado'
    difficulty: "Avanzado",
    priority: "alta",
    phaseOrigin: "Fase 4: Seguridad",
    repoUrl: "https://github.com/tu-usuario/auth-microservice-jwt",
    demoUrl: "https://api-auth.ejemplo.dev/docs",
    postmanUrl: "https://documenter.getpostman.com/view/example",
    tags: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Argon2", "Docker"],
    description: "Servicio de autenticación centralizada desacoplado. Soporta registro con verificación por correo, login con hashing Argon2id, rotación automática de refresh tokens para prevenir replay attacks, invalidación instantánea con Redis y 2FA con TOTP.",
    keyFeatures: [
      "Rotación de refresh tokens con detección de reuso y revocación automática",
      "Autenticación en dos pasos (2FA) con RFC 6238 TOTP y QR code",
      "Rate limiting por IP y por cuenta con Redis para evitar fuerza bruta",
      "Documentación Swagger OpenAPI 3.0 interactiva y suite de tests en Jest"
    ],
    notes: "Completado con 92% de cobertura de código. Pendiente añadir soporte para passkeys / WebAuthn.",
    createdAt: "2026-08-15",
    completedAt: "2026-09-10"
  },
  {
    id: "proj-user-2",
    title: "Enterprise Multi-Protocol API (REST + gRPC + GraphQL)",
    category: "APIs & Contracts",
    status: "en_progreso",
    difficulty: "Intermedio-Avanzado",
    priority: "alta",
    phaseOrigin: "Fase 2: APIs",
    repoUrl: "https://github.com/tu-usuario/enterprise-multiprotocol-api",
    demoUrl: "",
    postmanUrl: "",
    tags: ["Go", "gRPC", "Protobuf", "GraphQL", "PostgreSQL", "REST"],
    description: "API de catálogo y órdenes que expone los tres paradigmas principales. Implementa gRPC para comunicación de alta velocidad entre microservicios, GraphQL con prevención de problema N+1 mediante DataLoader y REST con OpenAPI 3.1.",
    keyFeatures: [
      "Endpoints REST con RFC 7807 Problem Details y HATEOAS",
      "Servicio gRPC con Server Streaming para cambios de inventario",
      "Resolvers de GraphQL optimizados con DataLoader para evitar consultas N+1",
      "Headers de idempotencia en mutaciones críticas"
    ],
    notes: "Falta implementar el streaming gRPC para sincronizar stock en tiempo real.",
    createdAt: "2026-09-01",
    completedAt: null
  },
  {
    id: "proj-user-3",
    title: "Plataforma de E-commerce con Microservicios y Saga Pattern",
    category: "Distributed Systems",
    status: "planificado",
    difficulty: "Avanzado / Senior",
    priority: "media",
    phaseOrigin: "Fase 5: Microservicios",
    repoUrl: "",
    demoUrl: "",
    postmanUrl: "",
    tags: ["Java", "Spring Boot", "Apache Kafka", "Docker", "Saga Pattern", "PostgreSQL"],
    description: "Sistema distribuido de órdenes, pagos e inventario coordinados mediante el patrón Saga orquestado. Cuenta con Transactional Outbox para asegurar que ningún evento de Kafka se pierda en caso de caída del servidor.",
    keyFeatures: [
      "Orquestador de Saga con transacciones compensatorias en caso de cobro fallido",
      "Transactional Outbox Pattern para publicación atómica de eventos",
      "Arquitectura Database-per-service con PostgreSQL independiente",
      "Orquestación local completa con Docker Compose"
    ],
    notes: "Diseño del diagrama C4 completado. Listo para empezar el servicio de órdenes.",
    createdAt: "2026-09-20",
    completedAt: null
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_PROJECTS };
}

// Datos exhaustivos del Temario de Estudio Backend, APIs y Microservicios
const ROADMAP_DATA = [
  {
    id: "fase-1",
    phaseNumber: 1,
    title: "Fase 1: Fundamentos Sólidos de Backend & Redes",
    subtitle: "Runtimes, Concurrencia, Protocolos HTTP/TCP y Principios de Diseño",
    badge: "Fundamentos",
    color: "from-blue-500 to-cyan-500",
    description: "La base que diferencia a un programador de un verdadero ingeniero de backend. Comprende cómo viajan los datos en la red y cómo los sistemas gestionan memoria y concurrencia.",
    topics: [
      {
        id: "f1-t1",
        title: "Protocolos de Red y Modelo Cliente-Servidor",
        description: "Funcionamiento interno de HTTP/1.1, HTTP/2, HTTP/3 (QUIC), TCP vs UDP, DNS, TLS/SSL handshake y WebSockets.",
        subtopics: ["Ciclo Request-Response y Headers", "HTTP/2 Multiplexing y compresión HPACK", "Seguridad con TLS 1.3 y certificados", "Sockets TCP directos"]
      },
      {
        id: "f1-t2",
        title: "Runtimes, Concurrencia e I/O Asíncrono",
        description: "Event Loop, hilos de ejecución, concurrencia vs paralelismo, Non-blocking I/O vs Blocking I/O.",
        subtopics: ["Event Loop en Node.js / Concurrencia en Go (Goroutines) / Threads en Java", "CPU-bound vs I/O-bound tasks", "Pools de conexiones y manejo eficiente de memoria", "Garbage Collection y Memory Leaks"]
      },
      {
        id: "f1-t3",
        title: "Principios SOLID, Clean Code y Patrones de Diseño",
        description: "Estructuración de código mantenible, desacoplado y preparado para crecer sin romperse.",
        subtopics: ["Single Responsibility & Dependency Inversion (DI)", "Patrón Repository, Factory, Adapter, Strategy", "Inyección de dependencias (IoC Containers)", "Manejo centralizado de errores y excepciones"]
      },
      {
        id: "f1-t4",
        title: "Arquitectura en Capas y Clean Architecture",
        description: "Separación clara entre dominio, casos de uso (aplicación), controladores y adaptadores de infraestructura.",
        subtopics: ["Arquitectura Hexagonal (Puertos y Adaptadores)", "Domain-Driven Design (DDD) básico", "DTOs, Entities y Mappers", "Validación estricta de esquemas de entrada"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f1-1",
        title: "Servidor HTTP / Reverse Proxy Concurrente desde Cero",
        category: "Backend Core",
        difficulty: "Intermedio",
        phaseOrigin: "Fase 1: Fundamentos",
        tags: ["Sockets", "HTTP Parser", "Concurrencia", "Clean Architecture"],
        summary: "Desarrollo de un servidor HTTP/1.1 o proxy inverso básico usando sockets puros sin frameworks (Node.js net/http o Go net), implementando parsing de peticiones, enrutador por regex y balanceo round-robin simple.",
        deliverables: [
          "Parsing manual de Request Line, Headers y Body en TCP",
          "Enrutador HTTP con soporte de métodos GET, POST, PUT, DELETE",
          "Pool de conexiones y gestión concurrente de peticiones",
          "Logging estructurado de latencia y bytes transferidos"
        ],
        whyRecruitersLoveIt: "Demuestra que no dependes ciegamente de Express o Spring Boot y que entiendes las entrañas de los protocolos de red."
      },
      {
        id: "proj-f1-2",
        title: "CLI Tool de Benchmark & Health Check de Red",
        category: "Backend Tools",
        difficulty: "Junior-Mid",
        phaseOrigin: "Fase 1: Fundamentos",
        tags: ["CLI", "DNS", "TLS Checker", "Streams"],
        summary: "Herramienta de consola para diagnosticar servidores: verifica resolución DNS, certificados SSL/TLS con alertas de expiración, tiempos de respuesta HTTP y genera reportes en formato JSON o tabla formateada.",
        deliverables: [
          "Medición de DNS lookup, TCP connect y TLS handshake time",
          "Alertas de certificados SSL que vencen en menos de 30 días",
          "Exportación de resultados a JSON/CSV y salida en colores",
          "Arquitectura desacoplada con patrón Strategy para diferentes chequeos"
        ],
        whyRecruitersLoveIt: "Muestra habilidades de scripting profesional, buenas prácticas de modularidad y dominio de conceptos de red."
      }
    ]
  },
  {
    id: "fase-2",
    phaseNumber: 2,
    title: "Fase 2: Arquitectura y Diseño Profesional de APIs",
    subtitle: "RESTful Avanzado, GraphQL, gRPC, Webhooks y OpenAPI",
    badge: "APIs & Contratos",
    color: "from-cyan-500 to-teal-500",
    description: "Diseña APIs robustas, autodescriptivas, con contratos inmutables, documentación interactiva y soporte para comunicación síncrona de alto rendimiento.",
    topics: [
      {
        id: "f2-t1",
        title: "Diseño RESTful de Nivel de Madurez Avanzado",
        description: "Modelo de Richardson (Nivel 3), uso semántico riguroso de verbos y status codes HTTP, idempotencia y caching.",
        subtopics: ["Idempotencia (claves de idempotencia para pagos/mutaciones)", "Paginación eficiente (Offset vs Cursor/Keyset)", "Filtros, ordenamiento dinámico y proyecciones de campos", "HATEOAS y enlaces de hipermedios"]
      },
      {
        id: "f2-t2",
        title: "Contratos de API, OpenAPI / Swagger & Validaciones",
        description: "Especificación formal de contratos (Contract-First vs Code-First) y generación automática de clientes y docs.",
        subtopics: ["OpenAPI 3.1 / Swagger y validación contra esquemas", "Validación de DTOs (Zod, class-validator, Pydantic, etc.)", "Estandarización de errores (RFC 7807 Problem Details)", "Versionado de APIs (URI, Header, Content Negotiation)"]
      },
      {
        id: "f2-t3",
        title: "gRPC y Protocol Buffers (Protobuf)",
        description: "Comunicación binaria tipada de ultra baja latencia entre servicios internos.",
        subtopics: ["Sintaxis de archivos .proto y serialización binaria", "Unary RPC, Server Streaming, Client Streaming y Bidirectional Streaming", "Interceptors (Middleware en gRPC)", "gRPC-Gateway para exponer REST"]
      },
      {
        id: "f2-t4",
        title: "GraphQL y APIs en Tiempo Real (WebSockets / SSE)",
        description: "Alternativa a REST para clientes complejos, evitando sobre-petición y sub-petición de datos.",
        subtopics: ["Schemas, Tipos, Queries, Mutations y Subscriptions", "Solución del problema N+1 con DataLoader", "Server-Sent Events (SSE) para notificaciones unidireccionales", "WebSockets con protocolo STOMP o Socket.io"]
      },
      {
        id: "f2-t5",
        title: "API Gateways, Rate Limiting y Resiliencia en Frontera",
        description: "Control de tráfico perimetral, límites de tasa y protección contra abusos.",
        subtopics: ["Algoritmos de Rate Limiting (Token Bucket, Leaky Bucket, Sliding Window)", "Reverse Proxy y Enrutamiento dinámico (Kong, Traefik, Nginx)", "CORS, Compresión Gzip/Brotli y Request timeouts"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f2-1",
        title: "Enterprise Multi-Protocol API (REST + gRPC + GraphQL)",
        category: "APIs & Contracts",
        difficulty: "Intermedio-Avanzado",
        phaseOrigin: "Fase 2: APIs",
        tags: ["REST", "OpenAPI 3.1", "gRPC", "GraphQL", "DataLoader", "Idempotency"],
        summary: "API de catálogo y órdenes de e-commerce que expone endpoints REST documentados con OpenAPI 3.1, servicios gRPC internos para microservicios y un endpoint GraphQL optimizado con DataLoader para clientes web/móvil.",
        deliverables: [
          "Documentación Swagger interactiva y mock server",
          "Headers de Idempotencia para endpoints de cobro/creación de órdenes",
          "Resolución GraphQL sin problema N+1 usando DataLoader",
          "Servicio gRPC con stream de actualización de inventario",
          "Estandarización de errores con RFC 7807 Problem Details"
        ],
        whyRecruitersLoveIt: "Expone tu dominio integral de los 3 paradigmas de APIs actuales y cómo conviven en una arquitectura moderna."
      },
      {
        id: "proj-f2-2",
        title: "Sistema de Webhooks Confiable con Reintentos y Firmas HMAC",
        category: "APIs & Eventos",
        difficulty: "Intermedio",
        phaseOrigin: "Fase 2: APIs",
        tags: ["Webhooks", "HMAC SHA256", "Exponential Backoff", "Eventos"],
        summary: "Plataforma al estilo Stripe/GitHub para enviar webhooks a terceros con firma criptográfica HMAC-SHA256 para verificación de integridad, cola de reintentos con Exponential Backoff y portal para ver logs de entrega.",
        deliverables: [
          "Firma criptográfica en header X-Signature-256",
          "Política de reintentos con backoff exponencial y jitter",
          "Dead-Letter Queue (DLQ) tras 5 intentos fallidos",
          "Dashboard o endpoint para inspeccionar payloads y respuestas HTTP"
        ],
        whyRecruitersLoveIt: "Prueba que sabes diseñar integraciones externas seguras, resilientes y tolerantes a fallos."
      }
    ]
  },
  {
    id: "fase-3",
    phaseNumber: 3,
    title: "Fase 3: Persistencia, Bases de Datos & Estrategias de Caché",
    subtitle: "SQL Relacional, NoSQL, Modelado, Índices y Caching con Redis",
    badge: "Bases de Datos",
    color: "from-teal-500 to-emerald-500",
    description: "Domina el almacenamiento de información: optimización de queries, consistencia transaccional ACID, particionamiento y reducción drástica de latencia con caché distribuida.",
    topics: [
      {
        id: "f3-t1",
        title: "Bases de Datos Relacionales (PostgreSQL / MySQL)",
        description: "Modelado relacional estricto, normalización, relaciones y constraints.",
        subtopics: ["Normalización (1NF a 3NF) y cuándo desnormalizar conscientemente", "Transacciones ACID y niveles de aislamiento (Read Committed, Serializable)", "Locks y bloqueos (Pessimistic vs Optimistic Locking)", "PostgreSQL features: JSONB, Full-Text Search, Arrays"]
      },
      {
        id: "f3-t2",
        title: "Optimización de Consultas e Índices en SQL",
        description: "Análisis de rendimiento, lectura de planes de ejecución y aceleración de consultas.",
        subtopics: ["Análisis con EXPLAIN y EXPLAIN ANALYZE", "Tipos de Índices: B-Tree, Hash, GIN, GiST, Índices Compuestos", "Index Scan vs Index Only Scan vs Sequential Scan", "Particionamiento de tablas (Declarative Partitioning)"]
      },
      {
        id: "f3-t3",
        title: "Bases de Datos NoSQL y Especializadas",
        description: "Cuándo elegir y cómo modelar en bases de datos NoSQL según el patrón de acceso.",
        subtopics: ["Document Store (MongoDB) y modelado embed vs reference", "Key-Value / In-Memory (Redis, Memcached)", "Wide-Column (Cassandra / ScyllaDB) para alta escritura", "Bases de datos Vectoriales (pgvector, Pinecone) para IA"]
      },
      {
        id: "f3-t4",
        title: "Estrategias de Caching y Patrones con Redis",
        description: "Aceleración de lectura, reducción de carga en la base de datos y consistencia.",
        subtopics: ["Patrones: Cache-Aside, Write-Through, Write-Behind", "Políticas de expiración (TTL) y desalojo (LRU, LFU)", "Problemas comunes: Cache Stampede, Thundering Herd, Penetration", "Estructuras de datos de Redis: Hashes, Sets, Sorted Sets, Bitmaps"]
      },
      {
        id: "f3-t5",
        title: "Migraciones de Esquema y Versionado de BD",
        description: "Evolución controlada de la base de datos en entornos de producción sin tiempo de inactividad.",
        subtopics: ["Herramientas de migración (Flyway, Liquibase, Prisma Migrate, Alembic)", "Zero-downtime migrations (Patrón Expand-Contract)", "Seeders y entornos reproducibles con Docker"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f3-1",
        title: "Motor de Analítica y Leaderboard en Tiempo Real con Redis y SQL",
        category: "Databases & Cache",
        difficulty: "Intermedio-Avanzado",
        phaseOrigin: "Fase 3: Persistencia",
        tags: ["PostgreSQL", "Redis Sorted Sets", "Cache-Aside", "Optimización SQL"],
        summary: "Plataforma de métricas de gaming o e-commerce que procesa miles de eventos por segundo, calculando rankings en tiempo real mediante Redis Sorted Sets (ZADD/ZRANGE) con persistencia periódica y analítica pesada en PostgreSQL optimizado con índices compuestos y vistas materializadas.",
        deliverables: [
          "Leaderboard con millones de registros actualizado en tiempo submilisegundo con Redis",
          "Consultas analíticas complejas optimizadas con EXPLAIN ANALYZE (< 50ms)",
          "Migraciones automatizadas con patrón Expand and Contract",
          "Test de concurrencia y prevención de race conditions con transacciones y optimistic locking"
        ],
        whyRecruitersLoveIt: "Combina el poder de SQL transaccional con la velocidad de estructuras en memoria para resolver problemas reales de alta escala."
      },
      {
        id: "proj-f3-2",
        title: "Sistema de Reserva de Boletos / Asientos con Concurrencia Estricta",
        category: "Databases",
        difficulty: "Avanzado",
        phaseOrigin: "Fase 3: Persistencia",
        tags: ["PostgreSQL", "Pessimistic Locking", "Transacciones ACID", "Redis Locks"],
        summary: "Backend para venta de entradas de conciertos donde miles de usuarios intentan reservar los mismos asientos simultáneamente, garantizando que jamás ocurra sobreventa (overselling) mediante transacciones serializables o Distributed Locks con Redis (Redlock).",
        deliverables: [
          "Manejo de bloqueo pesimista `SELECT ... FOR UPDATE` y locks distribuidos",
          "TTL de reserva temporal (5 minutos para pagar antes de liberar el asiento)",
          "Pruebas de carga concurrentes simuladas demostrando 0 duplicados",
          "Auditoría completa de transacciones y estados de pago"
        ],
        whyRecruitersLoveIt: "Los problemas de concurrencia en bases de datos son la pregunta técnica favorita en entrevistas Senior."
      }
    ]
  },
  {
    id: "fase-4",
    phaseNumber: 4,
    title: "Fase 4: Seguridad, Autenticación y Autorización Backend",
    subtitle: "JWT, OAuth2, RBAC/ABAC, OWASP API Top 10 y Criptografía",
    badge: "Seguridad Backend",
    color: "from-emerald-500 to-green-500",
    description: "Construye sistemas blindados contra ataques, gestionando identidades federadas, roles, permisos granulares y protegiendo datos sensibles.",
    topics: [
      {
        id: "f4-t1",
        title: "Autenticación Moderna: JWT vs Sesiones Distribuidas",
        description: "Ciclo de vida de tokens, refresco seguro y almacenamiento.",
        subtopics: ["Access Tokens de corta duración + Refresh Tokens rotativos", "Almacenamiento seguro en cookies HttpOnly, Secure, SameSite=Strict", "Invalidación y Blacklisting de tokens con Redis", "Manejo de sesiones concurrentes y detección de robo de token"]
      },
      {
        id: "f4-t2",
        title: "Protocolos OAuth 2.0 y OpenID Connect (OIDC)",
        description: "Autenticación federada e integración con proveedores externos (Google, GitHub, Auth0, Keycloak).",
        subtopics: ["Flujo Authorization Code con PKCE (Proof Key for Code Exchange)", "Diferencia entre Authentication (OIDC) y Authorization (OAuth2)", "Scopes y Claims en tokens de identidad", "Validación de JWKS (JSON Web Key Set)"]
      },
      {
        id: "f4-t3",
        title: "Modelos de Autorización: RBAC y ABAC",
        description: "Control de acceso a recursos basado en roles y atributos contextuales.",
        subtopics: ["Role-Based Access Control (RBAC): Roles, Permisos y Grupos", "Attribute-Based Access Control (ABAC): Permisos dinámicos según contexto", "Bibliotecas modernas de autorización (CASL, Casbin, Oso, OPA)"]
      },
      {
        id: "f4-t4",
        title: "OWASP Top 10 API Security y Mitigación Práctica",
        description: "Protección proactiva contra los vectores de ataque más críticos en APIs modernas.",
        subtopics: ["BOLA / IDOR (Broken Object Level Authorization) y cómo prevenirlo", "Broken Function Level Authorization y Mass Assignment", "Prevención de Inyección SQL/NoSQL con parameterized queries", "CORS, Helmet, Content Security Policy y sanitización"]
      },
      {
        id: "f4-t5",
        title: "Criptografía y Gestión Segura de Secretos",
        description: "Protección de datos en tránsito y en reposo.",
        subtopics: ["Hashing seguro de contraseñas con Argon2id o bcrypt con salting", "Cifrado simétrico (AES-256-GCM) y asimétrico (RSA/ECC)", "Gestión de secretos en producción (HashiCorp Vault, AWS Secrets Manager)", "Rotación automática de llaves criptográficas"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f4-1",
        title: "Servidor de Identidad y Autenticación Centralizada (Auth Microservice)",
        category: "Security & Auth",
        difficulty: "Avanzado",
        phaseOrigin: "Fase 4: Seguridad",
        tags: ["JWT", "Refresh Tokens Rotativos", "OAuth2 PKCE", "Argon2", "Redis Blacklist", "2FA / TOTP"],
        summary: "Microservicio independiente de identidad que gestiona registro, login seguro con Argon2id, autenticación de dos factores (2FA con TOTP / Google Authenticator), rotación automática de refresh tokens, revocación instantánea vía Redis y login social OAuth2 con Google/GitHub.",
        deliverables: [
          "Generación y validación de 2FA con códigos QR y TOTP RFC 6238",
          "Rotación estricta de refresh tokens con detección de reuso de token (Token Theft Detection)",
          "Endpoints listos para integrarse con cualquier frontend de manera desacoplada",
          "Protección contra fuerza bruta con Rate Limiting IP + usuario en Redis"
        ],
        whyRecruitersLoveIt: "La seguridad es crítica en cualquier empresa; tener tu propio microservicio de Auth robusto demuestra madurez de nivel Senior."
      },
      {
        id: "proj-f4-2",
        title: "API Segura con Autorización Granular ABAC y Suite de Pentesting OWASP",
        category: "Security",
        difficulty: "Intermedio-Avanzado",
        phaseOrigin: "Fase 4: Seguridad",
        tags: ["ABAC", "OWASP API Security", "BOLA Prevention", "Security Auditing"],
        summary: "API de gestión de historias clínicas o documentos financieros protegida con políticas ABAC (un médico solo ve pacientes de su departamento y durante su turno activo), complementada con tests automatizados de seguridad que simulan ataques BOLA, SQLi y Mass Assignment verificando que sean rechazados.",
        deliverables: [
          "Motor de políticas de autorización ABAC contextual",
          "Conjunto de pruebas automatizadas contra vulnerabilidades OWASP",
          "Logging de auditoría inmutable de accesos y violaciones de seguridad",
          "Sanitización estricta y DTOs seguros sin sobreasignación"
        ],
        whyRecruitersLoveIt: "Demuestra que piensas como defensor y que tus APIs están listas para auditorías de seguridad corporativas."
      }
    ]
  },
  {
    id: "fase-5",
    phaseNumber: 5,
    title: "Fase 5: Arquitectura de Microservicios & Sistemas Distribuidos",
    subtitle: "Event-Driven, Kafka, RabbitMQ, Saga Pattern, CQRS y Outbox",
    badge: "Microservicios",
    color: "from-green-500 to-yellow-500",
    description: "Desacopla sistemas grandes en servicios independientes altamente escalables, comunicados por eventos asíncronos y con consistencia eventual garantizada.",
    topics: [
      {
        id: "f5-t1",
        title: "De Monolito a Microservicios & Domain-Driven Design (DDD)",
        description: "Cómo dividir un sistema correctamente sin caer en el antipatrón del 'Monolito Distribuido'.",
        subtopics: ["Bounded Contexts, Ubiquitous Language y Context Mapping", "Estrategia Strangler Fig Pattern para migración incremental", "Comunicación síncrona vs asíncrona: cuándo usar cada una", "Database-per-service pattern y los retos de la integridad de datos"]
      },
      {
        id: "f5-t2",
        title: "Message Brokers y Event-Driven Architecture (EDA)",
        description: "Infraestructura de mensajería para desacoplamiento total entre servicios.",
        subtopics: ["RabbitMQ: Exchanges (Direct, Topic, Fanout), Colas, Ack/Nack y DLQ", "Apache Kafka: Event Streaming, Topics, Particiones, Consumer Groups y Offsets", "Semánticas de entrega: At-least-once, At-most-once, Exactly-once", "Compresión y serialización de eventos con Avro o JSON Schema"]
      },
      {
        id: "f5-t3",
        title: "Patrones Distribuidos Esenciales",
        description: "Solución a los problemas inevitables en sistemas distribuidos.",
        subtopics: ["Transactional Outbox Pattern (Garantizar envío atómico de eventos sin 2PC)", "Saga Pattern para transacciones distribuidas (Coreografía vs Orquestación)", "CQRS (Command Query Responsibility Segregation)", "Event Sourcing y almacenamiento inmutable de cambios"]
      },
      {
        id: "f5-t4",
        title: "Resiliencia y Tolerancia a Fallos en Sistemas Distribuidos",
        description: "Cómo evitar fallos en cascada cuando un servicio de la red colapsa.",
        subtopics: ["Circuit Breaker Pattern (Estados: Closed, Open, Half-Open)", "Retry con Exponential Backoff y Jitter aleatorio", "Bulkhead Pattern y Timeouts rigurosos", "Fallbacks elegantes y degradación controlada del servicio"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f5-1",
        title: "Plataforma de E-commerce Basada en Microservicios y Saga Pattern",
        category: "Distributed Systems",
        difficulty: "Avanzado / Senior",
        phaseOrigin: "Fase 5: Microservicios",
        tags: ["Microservices", "Kafka / RabbitMQ", "Saga Pattern", "Transactional Outbox", "Docker Compose"],
        summary: "Arquitectura distribuida compuesta por 4 microservicios independientes: Servicio de Órdenes, Servicio de Inventario, Servicio de Pagos y Servicio de Notificaciones. La creación de una orden ejecuta una Saga con transacciones compensatorias en caso de fallo (ej. si el pago es rechazado, se libera el stock retenido).",
        deliverables: [
          "4 microservicios con sus propias bases de datos independientes",
          "Implementación del Saga Pattern (orquestado o coreografiado)",
          "Transactional Outbox Pattern con Debezium o polling worker para publicar eventos garantizados",
          "Entorno 100% reproducible localmente con un solo comando `docker compose up`",
          "Manejo de idempotencia en consumidores de eventos"
        ],
        whyRecruitersLoveIt: "Es el proyecto estrella definitivo para optar a posiciones Backend Mid/Senior, demostrando arquitectura enterprise."
      },
      {
        id: "proj-f5-2",
        title: "Pipeline de Procesamiento de Eventos de Streaming con Kafka",
        category: "Event Streaming",
        difficulty: "Avanzado",
        phaseOrigin: "Fase 5: Microservicios",
        tags: ["Apache Kafka", "Consumer Groups", "Stream Processing", "DLQ"],
        summary: "Sistema de ingestión y procesamiento de clicks o telemetría que ingiere miles de eventos por segundo en topics particionados de Kafka, balancea la carga entre múltiples instancias de consumidores y maneja mensajes corruptos enviándolos a Dead Letter Queues para análisis posterior.",
        deliverables: [
          "Cluster local de Kafka + Zookeeper/KRaft con Docker",
          "Productores con particionamiento por llave para preservar orden",
          "Consumidores escalables horizontalmente dentro del mismo Consumer Group",
          "Monitoreo de Lag de consumidores y reintentos automáticos"
        ],
        whyRecruitersLoveIt: "Evidencia experiencia práctica en Big Data backend y procesamiento reactivo de eventos."
      }
    ]
  },
  {
    id: "fase-6",
    phaseNumber: 6,
    title: "Fase 6: Testing, Calidad de Código y Pruebas de Carga",
    subtitle: "Unit, Integration con Testcontainers, Contract Testing y K6",
    badge: "Testing & QA",
    color: "from-yellow-500 to-amber-500",
    description: "Garantiza que el sistema funcione hoy, mañana y bajo millones de peticiones. Automatiza pruebas en todas las capas del backend sin depender de mocks frágiles.",
    topics: [
      {
        id: "f6-t1",
        title: "Pirámide de Pruebas y Unit Testing",
        description: "Pruebas unitarias veloces, aisladas y deterministas.",
        subtopics: ["Frameworks unitarios (Jest, Vitest, PyTest, JUnit 5, Go testing)", "Mocks, Stubs y Spies efectivos vs sobre-mocking", "Test-Driven Development (TDD) en lógica de negocio crítica", "Métricas de Cobertura de Código (Code Coverage) y análisis de mutación"]
      },
      {
        id: "f6-t2",
        title: "Pruebas de Integración Reales con Testcontainers",
        description: "Validación de repositorios y servicios contra bases de datos reales levantadas en contenedores efímeros.",
        subtopics: ["Uso de Testcontainers para levantar PostgreSQL, Redis o Kafka limpios para cada suite", "Database fixtures y limpieza automática de datos entre tests", "Pruebas de endpoints HTTP completos (Supertest, RestAssured, WebTestClient)"]
      },
      {
        id: "f6-t3",
        title: "Consumer-Driven Contract Testing (Pact)",
        description: "Asegurar que los microservicios y APIs frontend/backend no rompan contratos sin necesidad de desplegar todo el sistema.",
        subtopics: ["Principios de Contract Testing vs Pruebas E2E lentas", "Herramienta Pact: Definición de contratos por el consumidor", "Verificación del proveedor en CI/CD y despliegue seguro con 'can-i-deploy'"]
      },
      {
        id: "f6-t4",
        title: "Pruebas de Carga, Estrés y Rendimiento (k6 / Locust)",
        description: "Medición científica de la capacidad del sistema, detección de cuellos de botella y límites de rotura.",
        subtopics: ["Conceptos clave: RPS, Latencia P95 / P99, Throughput, Concurrencia", "Diseño de escenarios de prueba: Smoke, Load, Stress, Spike y Soak Testing", "Automatización de pruebas k6 en el pipeline de integración continua"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f6-1",
        title: "Suite de Testing Enterprise: Unit + Testcontainers + Contract Testing con Pact",
        category: "Testing & Reliability",
        difficulty: "Intermedio-Avanzado",
        phaseOrigin: "Fase 6: Testing",
        tags: ["Testcontainers", "Pact", "Integration Testing", "TDD"],
        summary: "Refactorización y cobertura integral de una API existente implementando pruebas unitarias de lógica pura, pruebas de integración con PostgreSQL real en Docker mediante Testcontainers y contratos verificados con Pact entre servicio consumidor y proveedor.",
        deliverables: [
          "> 85% de cobertura de código real enfocada en reglas de negocio",
          "Pruebas de integración deterministas sin mocks de base de datos",
          "Contratos Pact publicados y verificados en pipeline",
          "Ejecución fluida y aislada en local y en GitHub Actions"
        ],
        whyRecruitersLoveIt: "Los candidatos que saben escribir pruebas de integración reales con contenedores son contratados de inmediato frente a quienes solo hacen mocks simples."
      },
      {
        id: "proj-f6-2",
        title: "Reporte de Ingeniería: Benchmark de Rendimiento y Carga con k6",
        category: "Performance Testing",
        difficulty: "Intermedio",
        phaseOrigin: "Fase 6: Testing",
        tags: ["k6", "Performance Tuning", "P99 Latency", "Stress Testing"],
        summary: "Estudio comparativo y optimización de una API bajo carga extrema: script de k6 simulando 500 usuarios virtuales simultáneos, identificando cuellos de botella en la base de datos, aplicando índices y caché de Redis, logrando reducir la latencia P99 de 1800ms a 45ms.",
        deliverables: [
          "Scripts de k6 con perfiles de carga (ramping, spike, stress)",
          "Gráficas de métricas antes vs después de la optimización",
          "Reporte técnico en Markdown explicando los hallazgos y correcciones",
          "Validación de umbrales automáticos (Thresholds k6: p(95)<100ms, http_req_failed<1%)"
        ],
        whyRecruitersLoveIt: "Demuestra mentalidad analítica cuantitativa y capacidad real de resolver problemas de rendimiento bajo presión."
      }
    ]
  },
  {
    id: "fase-7",
    phaseNumber: 7,
    title: "Fase 7: Contenedores, DevOps, CI/CD & Kubernetes",
    subtitle: "Docker Multi-Stage, Kubernetes (K8s), Helm y GitHub Actions",
    badge: "DevOps & Cloud",
    color: "from-amber-500 to-orange-500",
    description: "Lleva tus aplicaciones a producción de manera automatizada, reproducible y empaquetada en contenedores ultralivianos y orquestados.",
    topics: [
      {
        id: "f7-t1",
        title: "Docker Avanzado para Desarrolladores Backend",
        description: "Contenedorización segura, imágenes pequeñas y desarrollo local ágil.",
        subtopics: ["Multi-stage builds para imágenes mínimas (Alpine, Distroless)", "Buenas prácticas de seguridad: no-root user, escaneo con Trivy", "Gestión de capas y cache en builds de Docker", "Docker Compose avanzado: perfiles, volúmenes, healthchecks y redes internas"]
      },
      {
        id: "f7-t2",
        title: "Pipelines de CI/CD Automatizados (GitHub Actions / GitLab CI)",
        description: "Entrega continua desde el commit hasta el entorno de staging/producción.",
        subtopics: ["Automatización de linting, type-checking y tests", "Construcción y publicación de imágenes en Docker Hub / GitHub Container Registry", "Estrategias de despliegue: Rolling Updates, Blue/Green, Canary Releases", "Manejo seguro de variables de entorno y secrets en CI/CD"]
      },
      {
        id: "f7-t3",
        title: "Fundamentos de Kubernetes (K8s) para Backend Engineers",
        description: "Orquestación de microservicios a escala en clusters de contenedores.",
        subtopics: ["Arquitectura de K8s: Control Plane, Nodos, Kubelet, etcd", "Objetos fundamentales: Pods, Deployments, ReplicaSets", "Networking en K8s: Services (ClusterIP, NodePort, LoadBalancer) e Ingress", "Configuración desacoplada: ConfigMaps y Secrets", "Escalado automático: Horizontal Pod Autoscaler (HPA) y Resource Limits (requests/limits)"]
      },
      {
        id: "f7-t4",
        title: "Empaquetado con Helm y Despliegue en la Nube",
        description: "Gestión de paquetes de Kubernetes y conceptos Cloud (AWS ECS/EKS, GCP Cloud Run/GKE).",
        subtopics: ["Creación de Helm Charts parametrizados", "Despliegues Serverless en Cloud Run / AWS Lambda para APIs", "Almacenamiento de objetos (S3, GCS) y CDNs"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f7-1",
        title: "Pipeline CI/CD Completo con GitHub Actions, Docker Distroless y Trivy",
        category: "DevOps & CI/CD",
        difficulty: "Intermedio-Avanzado",
        phaseOrigin: "Fase 7: DevOps",
        tags: ["GitHub Actions", "Docker Multi-stage", "Trivy Security Scan", "Automated Releases"],
        summary: "Pipeline de integración y entrega continua para una API backend: corre linters y tests, escanea vulnerabilidades en dependencias y sistema operativo con Trivy, compila una imagen Distroless de menos de 50MB, la publica en GHCR y despliega automáticamente.",
        deliverables: [
          "Workflow de GitHub Actions con matrix testing y cache de dependencias",
          "Dockerfile multi-stage ultra optimizado y seguro ejecutado como non-root",
          "Reporte automático de seguridad con Trivy bloqueando builds con CVEs críticos",
          "Versionado semántico automático mediante Conventional Commits"
        ],
        whyRecruitersLoveIt: "Muestra que dominas el ciclo completo de entrega de software con estándares de seguridad modernos."
      },
      {
        id: "proj-f7-2",
        title: "Orquestación de Microservicios en Kubernetes con Helm y Autoscale",
        category: "Cloud & Kubernetes",
        difficulty: "Avanzado",
        phaseOrigin: "Fase 7: DevOps",
        tags: ["Kubernetes", "Helm", "HPA", "Ingress", "Minikube / Kind"],
        summary: "Despliegue completo de una arquitectura de microservicios en un cluster de Kubernetes local (Kind o Minikube) empaquetado con Helm Charts personalizados, configurando Ingress Controller, ConfigMaps, Secrets, Liveness/Readiness probes y HPA que escala los pods ante carga de CPU.",
        deliverables: [
          "Helm Chart modular para los servicios, bases de datos y broker",
          "Ingress con enrutamiento path-based (/api/v1/orders, /api/v1/users)",
          "Prueba de autoscaling HPA simulando carga con k6 y viendo los pods multiplicarse",
          "Zero-downtime rolling updates comprobados durante un nuevo release"
        ],
        whyRecruitersLoveIt: "Es una de las habilidades más cotizadas y difíciles de encontrar en desarrolladores backend."
      }
    ]
  },
  {
    id: "fase-8",
    phaseNumber: 8,
    title: "Fase 8: Observabilidad, Monitoreo y Operaciones en Producción",
    subtitle: "OpenTelemetry, Prometheus, Grafana, Jaeger y Logging Centralizado",
    badge: "Observabilidad",
    color: "from-orange-500 to-rose-500",
    description: "Ten visibilidad total de lo que ocurre dentro de tus sistemas distribuidos en producción: encuentra cuellos de botella en segundos y depura anomalías antes de que el usuario las note.",
    topics: [
      {
        id: "f8-t1",
        title: "Los 3 Pilares de la Observabilidad Moderna",
        description: "Diferencia fundamental entre monitoreo reactivo y observabilidad proactiva.",
        subtopics: ["Métricas (Agregaciones numéricas en el tiempo)", "Logs estructurados (Eventos contextuales en formato JSON)", "Distributed Tracing (El viaje de una petición a través de múltiples servicios)", "Estándar OpenTelemetry (OTel): Unificación de instrumentación"]
      },
      {
        id: "f8-t2",
        title: "Tracing Distribuido con OpenTelemetry y Jaeger / Zipkin",
        description: "Rastreo de peticiones end-to-end entre microservicios para identificar exactamente cuál servicio o consulta tardó más.",
        subtopics: ["Trace IDs, Span IDs y propagación de contexto (W3C Trace Context)", "Instrumentación automática vs manual en código backend", "Visualización de latencias y cuellos de botella en Jaeger UI"]
      },
      {
        id: "f8-t3",
        title: "Métricas con Prometheus y Dashboards en Grafana",
        description: "Recolección de telemetría de rendimiento y salud de la aplicación.",
        subtopics: ["Los 4 Golden Signals de Google SRE: Latency, Traffic, Errors, Saturation", "Tipos de métricas en Prometheus: Counter, Gauge, Histogram, Summary", "Exposición de endpoint /metrics y consultas con PromQL", "Creación de tableros interactivos profesionales en Grafana"]
      },
      {
        id: "f8-t4",
        title: "Logging Centralizado y Gestión de Incidentes",
        description: "Recolección centralizada de logs para búsqueda y correlación instantánea.",
        subtopics: ["Stack ELK (Elasticsearch, Logstash, Kibana) o Grafana Loki", "Correlación de logs con Trace ID para depurar errores puntuales", "Health Checks: Liveness Probes vs Readiness Probes", "Alerting con Alertmanager, PagerDuty y definición de SLIs, SLOs y SLAs"]
      }
    ],
    portfolioProjects: [
      {
        id: "proj-f8-1",
        title: "Full Observability Stack: OpenTelemetry + Jaeger + Prometheus + Grafana",
        category: "Observability",
        difficulty: "Avanzado / Senior",
        phaseOrigin: "Fase 8: Observabilidad",
        tags: ["OpenTelemetry", "Jaeger", "Prometheus", "Grafana", "Distributed Tracing"],
        summary: "Instrumentación completa de una aplicación de microservicios con OpenTelemetry: cada petición genera un Trace ID propagado por HTTP/gRPC, métricas exportadas a Prometheus y un dashboard en Grafana que muestra los 4 Golden Signals en tiempo real, con visualización de Spans en Jaeger.",
        deliverables: [
          "Stack de observabilidad levantable con docker-compose (OTel Collector, Jaeger, Prometheus, Grafana)",
          "Instrumentación de spans personalizados en transacciones y llamadas a bases de datos",
          "Dashboard exportable en JSON para Grafana con KPIs clave",
          "Demostración de diagnóstico en vivo: inyectar latencia artificial y localizarla en Jaeger en menos de 1 minuto"
        ],
        whyRecruitersLoveIt: "Diferencia de inmediato a los ingenieros de backend que saben operar sistemas en producción de los que solo programan en local."
      }
    ]
  }
];

// Exportación para entornos modulares o globales
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROADMAP_DATA };
}

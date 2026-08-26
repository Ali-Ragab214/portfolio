// ============================================================
// PORTFOLIO DATA — edit everything here, no component changes
// needed. Image slots accept local paths (e.g. "/images/x.png")
// placed inside /public, or remote URLs.
// ============================================================

export const PROFILE = {
  name: "Ali Ragab Ghonim",
  firstName: "Ali",
  monogram: "AG",
  title: "Backend Software Engineer",
  specialties: "Java · Spring Boot · System Design",
  tagline:
    "Specializes in scalable REST APIs and production-ready backend systems built with Clean Architecture and cloud-native practices — with hands-on experience in AI-powered applications, RAG pipelines, and LLM-based agent workflows.",
  location: "Menofia, Egypt",
  email: "alighonim78@gmail.com",
  phone: "+201017040332",
  phoneDisplay: "0101 704 0332",
  // Your photo lives at /public/images/profile.jpg — swap the file anytime.
  // Extra shots already processed: profile-full.jpg (full body), profile-alt.jpg.
  photo: "/images/profile.jpg",
  cvPath: "/Ali-Ragab-Ghonim-CV.pdf",
}

export const SOCIALS = {
  github: "https://github.com/Ali-Ragab214",
  linkedin: "https://www.linkedin.com/in/ali-ghonim-b139b8223/",
  email: `mailto:${PROFILE.email}`,
  phone: `tel:${PROFILE.phone}`,
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export const MARQUEE_ITEMS = [
  "Java 17",
  "Spring Boot 3.x",
  "Spring AI",
  "PostgreSQL + pgvector",
  "Redis",
  "RAG Pipelines",
  "LLM Agents",
  "Clean Architecture",
  "Docker",
  "NestJS",
  "Spring Security",
  "JWT · OAuth2 · RBAC",
]

export const ABOUT_SEGMENTS = [
  [
    { t: "Backend Software Engineer specializing in " },
    { t: "Java and Spring Boot", hl: true },
    { t: ", focused on building " },
    { t: "scalable systems", hl: true },
    { t: " and well-designed REST APIs with " },
    { t: "Clean Architecture", hl: true },
    { t: " and rigorous system design practices." },
  ],
  [
    { t: "Passionate about shipping " },
    { t: "production-ready backend systems", hl: true },
    { t: " using Spring Security, PostgreSQL, Redis, Docker, and modern cloud-native practices — graduate of " },
    { t: "ITI's Open Source Track", hl: true },
    { t: " (9-month intensive program), with additional experience in AI-powered applications, Retrieval-Augmented Generation (" },
    { t: "RAG", hl: true },
    { t: ") pipelines, and LLM-based agent workflows." },
  ],
]

export const STATS = [
  { value: 7, suffix: "+", decimals: 0, label: "Bounded contexts designed in one production-grade platform" },
  { value: 40, suffix: "+", decimals: 0, label: "REST endpoints designed & documented" },
  { value: 9, suffix: "-mo", decimals: 0, label: "Intensive ITI Open Source training" },
  { value: 3.3, suffix: "/4", decimals: 1, label: "GPA — B.Sc. Mathematics & CS" },
]

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Languages & Frameworks",
    icon: "code",
    skills: [
      "Java 17",
      "Spring Boot 3.x",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Spring AI",
      "NestJS",
      "TypeScript",
      "PHP (Laravel)",
      "C# (ASP.NET Core)",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "server",
    skills: [
      "REST API Design",
      "Clean Architecture",
      "System Design",
      "OOP",
      "SOLID",
      "JWT",
      "OAuth2",
      "RBAC",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "MongoDB Vector Search",
      "Redis",
      "Hibernate ORM",
    ],
  },
  {
    id: "testing",
    title: "Testing",
    icon: "flask",
    skills: ["JUnit 5", "Mockito", "Unit Testing", "Integration Testing", "TDD"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: "terminal",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "CI/CD",
      "Postman",
      "Swagger",
      "OpenAPI 3",
      "Agile",
      "Scrum",
    ],
  },
  {
    id: "ai-llm",
    title: "AI & LLM",
    icon: "brain",
    skills: [
      "Spring AI",
      "RAG Pipelines",
      "LLM Agents",
    ],
  },
  {
    id: "frontend",
    title: "Frontend (Familiar)",
    icon: "layout",
    skills: ["React", "Angular", "Bootstrap 5", "Tailwind CSS", "Axios"],
  },
]

export const PROJECTS = [
  {
    id: "coursepilot",
    index: "01",
    title: "CoursePilot",
    tagline: "Production-grade full-stack e-learning platform with an AI assistant",
    role: "Full-Stack Engineer",
    type: "Personal Project",
    repo: "https://github.com/Ali-Ragab214/skill-hub-learning-platform",
    demo: null,
    highlights: [
      "RESTful backend serving Students, Instructors, and Admins across 7 bounded contexts (Auth, Courses, Sections & Lessons, Enrollments, Progress, Reviews, Admin) with 40+ REST endpoints.",
      "AI-powered course assistant built with Spring AI, integrated with a React frontend for real-time student interaction.",
      "Strict Layered/Clean Architecture (API → Application → Domain → Infrastructure) — the Domain layer is framework-independent and fully unit-testable.",
      "Method-level RBAC with Spring Security @PreAuthorize enforcing ownership checks server-side — not just route guards.",
      "Fully stateless JWT (HMAC-SHA256) authentication — horizontally scalable by design.",
      "Declarative Redis caching (@Cacheable / @CacheEvict) with zero cache logic inside services.",
      "Flyway-managed versioned SQL migrations (no ddl-auto) — schema drift is impossible across environments.",
      "Custom domain-level validation annotations (e.g. @StrongPassword).",
      "Course lifecycle management (Draft / Published / Archived) with full Swagger/OpenAPI 3 docs, Dockerized with Compose (App + PostgreSQL 16 + Redis 7), high coverage with JUnit 5 + Mockito.",
    ],
    stack: [
      "Java 17",
      "Spring Boot 3.x/4",
      "Spring AI",
      "Spring Security",
      "JWT",
      "React",
      "PostgreSQL",
      "Redis",
      "Flyway",
      "Swagger/OpenAPI",
      "Docker",
      "JUnit 5",
      "Mockito",
    ],
    images: [
      "/coursepilot-screens/01-landing.png",
      "/coursepilot-screens/03-instructor-dashboard.png",
      "/coursepilot-screens/05-catalog.png",
      "/coursepilot-screens/06-course-detail.png",
    ],
  },
  {
    id: "stocksavvy",
    index: "02",
    title: "StockSavvy",
    tagline: "AI Inventory Management Platform",
    role: "Full-Stack Engineer",
    type: "ITI Graduation Project",
    repo: "https://github.com/Youssefshaheen63/Smart_Inventory_Backend",
    demo: null,
    highlights: [
      "AI-powered inventory management using Retrieval-Augmented Generation (RAG) and LLM-powered autonomous agents assisting purchasing, inventory monitoring, and supplier negotiations.",
      "Multi-agent architecture (Demand Forecasting, Reorder Automation, Vendor Negotiation, Anomaly Detection) with human-in-the-loop approvals and full audit logging.",
      "Asynchronous background workflows powered by BullMQ + Redis.",
      "RAG pipeline on PostgreSQL + pgvector for semantic search over vendor contracts, pricing history, and negotiation transcripts — grounded, context-aware AI responses.",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "React",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "BullMQ",
      "Docker",
      "OpenAI API",
    ],
    images: [
      "/stocksavvy-screens/01-dashboard.png",
      "/stocksavvy-screens/02-branch-dashboard.png",
      "/stocksavvy-screens/03-warehouses.png",
      "/stocksavvy-screens/04-movements.png",
    ],
  },
]

export const EDUCATION = [
  {
    id: "iti",
    period: "Oct 2025 – Jul 2026",
    degree: "Open Source Track — 9-Month Intensive Program",
    org: "Information Technology Institute (ITI)",
    place: "Shebin El Kom, Egypt",
    points: [
      "Java EE, Angular, Linux, Database Design, Agile/Scrum, DevOps.",
      "Multiple full-stack projects with code reviews and team collaboration.",
    ],
  },
  {
    id: "bsc",
    period: "Sep 2021 – Jun 2025",
    degree: "B.Sc. Mathematics & Computer Science — GPA 3.3/4.0",
    org: "Minufia University",
    place: "Shebin El Kom, Egypt",
    points: [
      "Data Structures, Algorithms, OOP, Database Systems, Software Engineering, Discrete Mathematics.",
    ],
  },
  {
    id: "iti-summer",
    period: "Jul 2023 – Sep 2023",
    degree: ".NET Development Track — 120-Hour Training",
    org: "ITI Summer Training",
    place: "Egypt",
    points: [
      "C# and ASP.NET Core (MVC, Entity Framework Core, RESTful APIs); delivered a task management app as capstone project.",
    ],
  },
]

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency (B2+)" },
]

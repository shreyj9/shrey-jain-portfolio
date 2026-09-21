export const profile = {
  name: "Shrey Jain",
  role: "Computer Science @ Georgia Tech",
  rotating: ["Software Engineer", "AI / ML", "Distributed Systems"],
  tagline:
    "I build reliable backend systems, developer tools, and machine learning workflows — from distributed workflow engines to engineering research.",
  github: "https://github.com/shreyj9",
  linkedin: "https://www.linkedin.com/in/shrey-jain0/",
  email: "jshrey244@gmail.com",
  stats: [
    { value: "4", label: "backend projects shipped" },
    { value: "10,000", label: "GAN candidates generated" },
    { value: "0.986", label: "R² on gain / directivity" },
  ],
};

export type Project = {
  title: string;
  kicker: string;
  summary: string;
  highlights: string[];
  tags: string[];
  featured: boolean;
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "FaultLine Workflow Engine",
    kicker: "Distributed systems · Backend",
    summary:
      "A distributed DAG workflow engine built for reliability and concurrency.",
    highlights: [
      "Redis-backed worker leases coordinate concurrent task execution",
      "Persistent workflow state in MySQL survives worker and node failures",
      "Retry handling and failure recovery for distributed tasks",
      "Sample tasks and automated tests validate end-to-end execution",
    ],
    tags: ["Java", "Spring Boot", "Maven", "Redis", "MySQL", "Docker"],
    featured: true,
    href: "https://github.com/shreyj9/faultline-workflow-engine",
  },
  {
    title: "RepoLens Codebase Intelligence",
    kicker: "Developer tooling · Search",
    summary:
      "A codebase intelligence platform for searching and reasoning about repositories.",
    highlights: [
      "Tree-sitter parsing builds structural information about source code",
      "BM25 code search with incremental indexing",
      "Dependency-impact analysis to see what a change affects",
      "Redis caching speeds up repeated queries",
    ],
    tags: ["Python", "FastAPI", "Tree-sitter", "Redis", "MySQL", "Docker"],
    featured: true,
    href: "https://github.com/shreyj9/repolens-codebase-intelligence-engine",
  },
  {
    title: "TruckOps Expense Tracker",
    kicker: "Full-stack",
    summary:
      "Trucking expense and load tracking with net-profit summaries, designed around simple operational workflows.",
    highlights: [
      "Expense entry, load tracking, and net-profit summaries",
      "Authentication with persistent, user-specific data",
    ],
    tags: ["Next.js", "Firebase Auth", "Firestore"],
    featured: false,
    href: "https://github.com/shreyjain9/truckops-expense-tracker",
  },
  {
    title: "GAN-Based Antenna Topology Synthesis",
    kicker: "AI / ML · Engineering research",
    summary:
      "A machine learning workflow for rapidly generating antenna topology candidates with GANs and surrogate electromagnetic models.",
    highlights: [
      "Surrogate models trained on a 500-configuration Latin Hypercube dataset",
      "R² ≈ 0.982 for resonant frequency, ≈ 0.986 for gain/directivity",
      "10,000 GAN candidates screened with the surrogate to find strong designs",
    ],
    tags: ["Python", "GANs", "Surrogate Models", "Electromagnetics"],
    featured: false,
  },
];

export const experience = {
  role: "Backend AI Engineering Intern",
  company: "FlyRank AI",
  summary:
    "Built and published four backend projects, with an emphasis on production reliability and AI-adjacent infrastructure.",
  points: [
    "Developed REST APIs, database-backed services, a robots-aware web scraper, PDF generation workflows, and background jobs.",
    "Implemented JWT authentication, SQL persistence, idempotent 202 Accepted workflows, retry logic, and failure alerts.",
    "Added pytest coverage, Swagger documentation, and Docker Compose environments.",
  ],
  tags: ["Python", "FastAPI", "PostgreSQL", "Supabase", "Docker", "pytest"],
};

export type Paper = {
  title: string;
  venue: string;
  status: string;
  summary: string;
  points: string[];
};

export const research: Paper[] = [
  {
    title:
      "Scalable Analog CMOS Architecture for Nonlinear PDEs Using Coupled Chaotic Oscillators",
    venue: "The Tower Undergraduate Research Journal",
    status: "Published",
    summary:
      "An inductorless Chua oscillator array for efficient analog computation of nonlinear partial differential equations.",
    points: [
      "Explored gyrator-C circuits, DTMOS low-power designs, DAC-controlled oscillator coupling, and reaction-diffusion mappings",
      "Developed and evaluated an 8×8 Verilog-A oscillator array capable of Turing-pattern behavior",
    ],
  },
  {
    title: "Analog Computers for Efficient Computation of PDEs",
    venue: "IEEE MIT URTC",
    status: "Presented",
    summary:
      "Using analog computing architectures to efficiently solve partial differential equations.",
    points: [],
  },
  {
    title:
      "GANs for Rapid Topology Synthesis of Antennas Using Surrogate EM Modeling",
    venue: "Machine learning × electromagnetics",
    status: "Research",
    summary:
      "Combining generative models, machine learning, and electromagnetic simulation for antenna design.",
    points: [
      "Surrogate models for resonant frequency, bandwidth, gain, and directivity",
      "Generative modeling expands the design search space while cutting expensive simulations",
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science student at Georgia Tech focused on Intelligence and Modeling/Simulation. My work spans backend engineering, distributed systems, machine learning, developer tooling, and engineering research.",
    "I enjoy building systems that pair strong technical foundations with practical applications — from workflow infrastructure and code intelligence tools to computational engineering research. I'm particularly interested in software engineering, AI/ML, distributed systems, and reliable systems that solve meaningful problems.",
  ],
  education: {
    school: "Georgia Institute of Technology",
    degree: "B.S. in Computer Science",
    graduation: "Expected May 2028",
    focus: "Intelligence and Modeling/Simulation",
  },
  organizations: [
    { name: "HyTech Racing", detail: "Formula SAE electric racing" },
    { name: "VIP: Automated Algorithm Design", detail: "Vertically Integrated Projects" },
    { name: "Delta Theta Tau" },
    { name: "GT Ramblin' Raas", detail: "Garba-Raas dance team" },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Java", "Python", "TypeScript", "SQL", "Verilog-A"],
    },
    {
      label: "Backend",
      items: ["Spring Boot", "FastAPI", "REST APIs", "JWT"],
    },
    {
      label: "Data & infra",
      items: ["Redis", "MySQL", "PostgreSQL", "Firebase", "Supabase", "Docker"],
    },
    { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  ],
};

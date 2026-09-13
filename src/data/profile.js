// Single source of truth for site content — edit here, not in the components.
// Nothing here is invented: only what's actually true today. Add to
// `PROJECTS` as new work actually ships, and move items between
// `ENGINEERING` groups only when they're genuinely true — see the
// EduCore repo's README for the "why" behind that rule.

export const PROFILE = {
  name: "Ahmed Alikar",
  role: "Software Engineer",
  positioning:
    "I build real software across backend systems, full-stack applications, and — increasingly — AI engineering and mobile.",
  github: "https://github.com/AHmed-Alikar",
  email: "axmedkafi11@gmail.com",
  // Given without a country code — the tel: link below uses it as-is,
  // which dials correctly from the same country but isn't a portable
  // international link. Prefix with + and a country code (e.g.
  // +252615113303) if this needs to work for contacts abroad.
  phone: "0615113303",
  phoneDisplay: "0615 113 303",
};

export const ABOUT = {
  paragraphs: [
    "I learn engineering by building things that have to actually work — a real database, real authentication, real failure modes — instead of following a tutorial to the finish line and stopping there.",
    "That means writing an HTTP server on Go's standard library before reaching for a framework, and reading a security library's source before trusting it with a password. It's slower than copying a boilerplate, and it's the only way I've found that the understanding actually sticks.",
    "Most of my work so far has been backend-leaning — APIs, auth, databases — but I'm deliberately pushing into full-stack, mobile, and applied AI engineering rather than staying in one lane.",
  ],
  focus: [
    { label: "Working in", value: "Backend systems, full-stack web, system design" },
    { label: "Actively learning", value: "Mobile (React Native, Flutter), AI/LLM engineering" },
    { label: "Where to see it", value: "github.com/AHmed-Alikar" },
  ],
};

// Grouped by engineering area, not flattened into one badge wall — and
// within each group, ordered by how often the tool is actually reached
// for. Nothing here is scored or claimed as a percentage.
//
// `tier: "core"` = what I actually build with today.
// `tier: "expanding"` = genuinely under active study, not yet shipped —
// kept visually secondary so the section reads as "what I build," not
// as a checklist trying to prove breadth.
export const ENGINEERING = [
  {
    id: "backend",
    title: "Backend & Systems",
    blurb: "APIs, authentication, and the parts of a system that have to be correct.",
    stack: ["Go", "Node.js", "REST APIs", "JWT auth", "Role-based access control", "System design"],
    tier: "core",
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    blurb: "Connecting a real backend to a real interface.",
    stack: ["React", "Node.js", "PostgreSQL", "Vite"],
    tier: "core",
  },
  {
    id: "data",
    title: "Data & Infrastructure",
    blurb: "Where the state actually lives.",
    stack: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    tier: "core",
  },
  {
    id: "ai",
    title: "AI Engineering",
    blurb: "Not yet shipped in a project — under active, hands-on study.",
    stack: ["Python", "LLM applications", "RAG", "Evaluation"],
    tier: "expanding",
  },
  {
    id: "mobile",
    title: "Mobile",
    blurb: "The other side of full-stack — actively picking this up.",
    stack: ["React Native", "Flutter", "Dart"],
    tier: "expanding",
  },
];

// The "How I work" section — a small set of real, specific principles,
// each anchored to something that actually happened (not aphorisms).
export const PRINCIPLES = [
  {
    n: "01",
    title: "Build it before you trust it",
    body: "I don't adopt a library or pattern until I've read enough of it to know what it does when it fails. That's why EduCore's HTTP layer is hand-written on Go's standard library instead of a framework.",
  },
  {
    n: "02",
    title: "Fail loud, not quiet",
    body: "EduCore's JWT secret used to have a hardcoded fallback. Now a missing secret crashes the server on startup instead of silently signing tokens with a bundled default.",
  },
  {
    n: "03",
    title: "Say what's not done",
    body: "Every project on this site lists what's actually missing, not just what's shipped — CRUD routes that exist as functions but aren't wired up, tests that don't exist yet, features that are still just a roadmap item.",
  },
];

export const PROJECTS = [
  {
    n: "01",
    name: "EduCore",
    featured: true,
    status: "In progress",
    category: "Backend Engineering",
    oneLiner: "A Go + PostgreSQL API that handles login, permissions, and student records for a school system.",
    problem:
      "Education-management software is usually a wall of CRUD screens bolted onto whatever auth the framework gave you for free. Before building any of that, I wanted the foundation — who's allowed to do what, and why — to be something I actually understood, not scaffolded.",
    whoFor:
      "A school or training program that needs to track students and control who on staff can see or change what.",
    builtSoFar: [
      "Registration and login, with passwords hashed via bcrypt — never stored or compared in plain text.",
      "JWT-based sessions, with the signing secret read from the environment; the server refuses to start if it's missing rather than falling back to a bundled default.",
      "Role-gated middleware — a route can require a specific role (admin, for example) before the handler ever runs.",
      "Student records readable over a JSON API, backed by PostgreSQL via pgx.",
    ],
    decisions: [
      {
        title: "Fail-fast configuration",
        detail: "A missing JWT secret is a startup crash, not a silently insecure default. Found and fixed after the secret was briefly hardcoded in source.",
      },
      {
        title: "Hashing over encryption",
        detail: "Passwords go through bcrypt — one-way and deliberately slow — never anything reversible.",
      },
      {
        title: "Composable middleware",
        detail: "Auth and role checks are separate, stackable handlers rather than one function doing both jobs.",
      },
    ],
    notYet: [
      "Create/update/delete exist as internal functions but aren't wired to HTTP routes yet — only reads are exposed.",
      "No input validation beyond what the database schema enforces.",
      "Test coverage is limited to password hashing — the HTTP handlers and database layer aren't tested yet.",
      "No frontend, teachers, courses, attendance, or grades yet — that's the roadmap, not the current state.",
    ],
    stack: ["Go", "PostgreSQL", "JWT", "bcrypt", "pgx"],
    href: "https://github.com/AHmed-Alikar/EduCore",
  },
];

export const NOW = [
  "Finishing EduCore's core API — wiring the remaining CRUD routes and adding input validation — before starting a frontend.",
  "Researching five new, original projects to build next, one at a time, each shipped end to end with tests, docs, and a real deployment.",
  "Studying applied AI engineering: retrieval-augmented generation and how to evaluate an LLM system properly.",
];

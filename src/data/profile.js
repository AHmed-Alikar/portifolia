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
    name: "Livestock & Crop Price Lookup Platform",
    featured: true,
    status: "Feature-complete demo",
    category: "Full-Stack (Web + Mobile)",
    oneLiner:
      "A price-transparency lookup tool for livestock and crop markets — not a marketplace — with a React web app, a Flutter mobile app, and a shared Node/Express API.",
    problem:
      "Buyers and sellers in livestock and crop markets often can't see what an item is actually trading for elsewhere, which makes prices easy to misquote. This project builds the transparency layer — public price lookups and history — without taking on the much harder problem of running an actual marketplace.",
    whoFor:
      "Visitors who want to check current and historical prices, traders who submit price entries for approval, and an admin who manages items, markets, and trader submissions.",
    builtSoFar: [
      "Visitor browsing flow: search and filter items/markets, view price history as a chart (Recharts on web, fl_chart on mobile).",
      "Trader authentication and submission flow — traders submit price entries that enter an approval workflow.",
      "Admin authentication with an approval queue, plus item and market management.",
      "A Flutter mobile app covering the visitor and trader flows against the same REST API as the web app.",
      "A documented seed dataset and a written test report covering the core flows end to end.",
    ],
    decisions: [
      {
        title: "Role and status enforced server-side",
        detail: "Trader/admin role checks and submission status transitions are enforced in the API, not just hidden in the UI.",
      },
      {
        title: "Cascade deletes over orphaned records",
        detail: "Deleting a market or item cleans up its dependent price entries instead of leaving dangling references.",
      },
      {
        title: "Mobile app scoped to what traders and visitors need",
        detail: "The Flutter app implements the visitor and trader flows; admin functionality was kept web-only rather than duplicating it on mobile.",
      },
    ],
    notYet: [
      "No live deployment — verified and tested locally, not hosted anywhere yet.",
      "No screenshots in the repo; the showcase site documents the architecture instead of the UI.",
      "No payment or transaction handling — this is a price-lookup tool, not a marketplace, by design.",
    ],
    stack: ["React", "Vite", "React Router", "Recharts", "Node.js", "Express", "MongoDB", "Mongoose", "Flutter"],
    href: "https://github.com/AHmed-Alikar/Livestock-Crop-Price-Lookup-Platform",
    showcaseHref: "https://ahmed-alikar.github.io/Livestock-Crop-Price-Lookup-Platform/",
  },
  {
    n: "02",
    name: "Somali Heritage & Tourism Platform",
    featured: true,
    status: "In progress",
    category: "Full-Stack (Web + Mobile)",
    oneLiner:
      "A moderated, bilingual (Somali/English) directory for discovering tourism destinations and hospitality businesses across Somalia, with a shared web, mobile, and API stack.",
    problem:
      "Somalia's tourism and heritage sites, and the small businesses around them, have no centralized bilingual directory that visitors can browse and businesses can self-list on. This platform is a moderated listings directory — businesses submit places, an admin approves them, and visitors search, filter, and review what's public.",
    whoFor:
      "Visitors browsing and reviewing approved places, businesses self-listing their locations, and an admin moderating submissions and managing region/category data.",
    builtSoFar: [
      "Three role-based account types (Visitor, Business, Admin) with local and Google OAuth authentication.",
      "Bilingual (EN/SO) place listings with region, category, contact info, photos, and geolocation, wired across every web and mobile screen.",
      "A moderation workflow: business submissions start pending, an admin approves or rejects them, and editing an approved place resets it to pending.",
      "Reviews with star ratings, an admin approval queue, and automatic average-rating recalculation.",
      "Maps and geocoding on OpenStreetMap/Leaflet/Nominatim instead of a paid Google Maps key, on both web (react-leaflet) and mobile (flutter_map).",
      "Cloudinary-backed image uploads for cover photos and galleries on both platforms.",
    ],
    decisions: [
      {
        title: "OpenStreetMap over Google Maps",
        detail: "Maps and geocoding run on Leaflet/Nominatim so the project needs no paid API key — the backend self-throttles geocoding requests to respect Nominatim's rate limit.",
      },
      {
        title: "Facebook login gated off, not half-built",
        detail: "The Facebook OAuth routes and model fields exist end to end, but return a 503 until real app credentials are configured — a deliberate, documented gate rather than a silent gap.",
      },
      {
        title: "Edits re-trigger moderation",
        detail: "Editing an already-approved place resets its status to pending, so a listing can't quietly change after approval without re-review.",
      },
    ],
    notYet: [
      "No booking, payment, or itinerary feature — despite \"Tourism\" in the name, this is a discovery directory, not a booking platform.",
      "No automated test suite for the backend or web frontend; the mobile project only ships Flutter's default template test.",
      "No CI/CD, containerization, or deployment configuration — and no live/hosted deployment exists yet.",
    ],
    stack: ["React", "Vite", "React Router", "Leaflet", "Node.js", "Express", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "Flutter"],
    href: "https://github.com/AHmed-Alikar/Somali-Heritage-Tourism",
    showcaseHref: "https://ahmed-alikar.github.io/Somali-Heritage-Tourism/",
  },
  {
    n: "03",
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

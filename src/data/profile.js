// Single source of truth for site content — edit here, not in the components.
// Nothing here is invented: only what's actually true today. Update the
// `EMAIL` placeholder before shipping, and add to `projects` as new work
// actually ships (see the EduCore repo's README for the "why" on that rule).

export const PROFILE = {
  name: "Ahmed Alikar",
  role: "Software Engineer",
  statement:
    "I build backend systems and learn by shipping real, working software — not tutorials.",
  github: "https://github.com/AHmed-Alikar",
  email: "hello@ahmedalikar.dev", // TODO: replace with your real contact email
};

export const FACTS = [
  { n: "01", label: "Focus", value: "Backend engineering & system design" },
  { n: "02", label: "Daily stack", value: "Go, Node.js, React, PostgreSQL" },
  { n: "03", label: "Currently learning", value: "AI / LLM engineering, RAG" },
  { n: "04", label: "Based", value: "Building in public on GitHub" },
];

// Sized by how often it's actually reached for — "core" is used daily,
// "working" is used comfortably, "learning" is active study, not a claim
// of mastery.
export const STACK = {
  core: ["Go", "Node.js", "React", "PostgreSQL"],
  working: ["Python", "Flask", "C#", "C++", "MySQL", "MongoDB", "SQLite"],
  learning: ["React Native", "Flutter", "Dart", "LLM engineering", "RAG"],
};

export const PROJECTS = [
  {
    n: "01",
    name: "EduCore",
    status: "in progress",
    description:
      "A Go + PostgreSQL REST API for education management — JWT authentication, role-based access control, and student records, built on the standard library without a framework.",
    stack: ["Go", "PostgreSQL", "JWT", "bcrypt"],
    href: "https://github.com/AHmed-Alikar/EduCore",
  },
];

export const NOW = [
  "Finishing EduCore's core API before adding a frontend.",
  "Researching five new, original full-stack projects — one at a time, each shipped end to end with tests, docs, and a real deployment.",
  "Studying applied AI engineering: retrieval-augmented generation and LLM evaluation.",
];

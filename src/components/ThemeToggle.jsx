import { useEffect, useState } from "react";

function getStored() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => getStored());

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("theme", theme);
      } catch {
        /* storage unavailable — the choice just won't persist */
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const isDark = theme
    ? theme === "dark"
    : typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        width="18"
        height="18"
        className="theme-toggle-icon"
      >
        {isDark ? (
          <path
            fill="currentColor"
            d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm7 3a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 10a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm10.66-5.66a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0ZM6.46 14.46a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0Zm9.2 1.42a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM6.46 5.54a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 5.76 3.4l.7.7a1 1 0 0 1 0 1.42ZM10 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z"
          />
        ) : (
          <path
            fill="currentColor"
            d="M17.3 13.5A7.5 7.5 0 0 1 6.5 2.7a.75.75 0 0 0-.94-.98A9 9 0 1 0 18.28 14.4a.75.75 0 0 0-.98-.9Z"
          />
        )}
      </svg>
    </button>
  );
}

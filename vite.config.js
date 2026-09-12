import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo is served from a project page (username.github.io/portifolia/),
// so assets need the repo name as their base path in production.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/portifolia/" : "/",
  plugins: [react()],
}));

import { PROFILE } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {PROFILE.name}
      </span>
      <span>Built with React + Vite</span>
    </footer>
  );
}

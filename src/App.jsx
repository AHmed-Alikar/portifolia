import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Engineering from "./components/Engineering.jsx";
import Work from "./components/Work.jsx";
import Process from "./components/Process.jsx";
import Now from "./components/Now.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Engineering />
        <Work />
        <Process />
        <Now />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

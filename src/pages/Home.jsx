import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Journey from "../components/Journey/Journey.jsx";
import Contact from "../components/Contact/Contact.jsx";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Contact />
    </main>
  );
}
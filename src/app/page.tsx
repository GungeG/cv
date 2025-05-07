import ProjectTracker from "./components/project-tracker/project-track/project-tracker";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ProjectTracker />
      <About />
      <Contact />
    </main>
  );
}

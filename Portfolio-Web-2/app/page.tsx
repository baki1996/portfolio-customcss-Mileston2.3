import About from "./About/page";
import Contact from "./Contact/page";
import Projects from "./Projects/page";
import Service from "./Service/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <div>
      <About />
      <Service/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

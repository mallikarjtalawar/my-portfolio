import About from "../components/about";
import Connect from "../components/connect";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skills";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Connect />
      <Footer />
    </>
  );
}

export default Home;
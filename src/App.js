import Nav from './components/Nav';
import './App.css';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contactMe/Contact';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

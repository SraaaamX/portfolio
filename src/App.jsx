import './App.sass';
import { ReactLenis } from 'lenis/react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import MouseFollower from './components/MouseFollower/MouseFollower';
import UpArrow from './components/UpArrow/UpArrow';
import Separator from './components/Separator/Separator';
import About from './components/About/About';
import SoftSkills from './components/Skills/SoftSkills/SoftSkills';
import Footer from './components/Footer/Footer';
import HardSkills from './components/Skills/HardSkills/HardSkills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <MouseFollower />
        <Header />
        <Banner />
        <main>
          <UpArrow />
          <Separator id="about-container" />
          <About />
          <Separator id="soft-skills-container" />
          <SoftSkills />
          <Separator id="hard-skills-container" />
          <HardSkills />
          <Separator id="projects-container" />
          <Projects />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;




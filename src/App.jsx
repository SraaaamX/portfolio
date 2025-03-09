import './App.sass';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import UpArrow from './components/UpArrow/UpArrow';
import Separator from './components/Separator/Separator';
import About from './components/About/About';
import SoftSkills from './components/Skills/SoftSkills/SoftSkills';
import Footer from './components/Footer/Footer';
import HardSkills from './components/Skills/HardSkills/HardSkills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <UpArrow />
      <main>
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
  );
}

export default App;
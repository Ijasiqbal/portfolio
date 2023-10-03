import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/projects/Projects';
import Slides from './components/slides/Slides';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';



function App() {
  return (
    <div>
      <Navbar /> 
      <Slides />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

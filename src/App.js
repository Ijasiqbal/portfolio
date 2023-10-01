import './App.css';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/projects/Projects';
import Slides from './components/slides/Slides';

function App() {
  return (
    <div>
      <Navbar /> 
      <Slides />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

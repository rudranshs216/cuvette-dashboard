import './App.css';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';
import Update from './components/Update';
import Syllabus from "./components/Syllabus"
import QuestionAnalysis from "./components/QuestionAnalysis"
import Graph from './components/Graph';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { open } = useStateContext();
  return (
    <div className='app'>
      {open && <div className='pop'><Popup /></div>}
      <div>
        <Navbar />
        <div className="home">
          <Sidebar />
          <div className="main">
            <p>Skill Test</p>
            <div className="compo">
              <div className="row1">
                <Update />
                <Stats />
                <Graph />
              </div>
              <div className="row2">
                <Syllabus />
                <QuestionAnalysis />
              </div>

            </div>




          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

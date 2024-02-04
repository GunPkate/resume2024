import './App.css';
import HeroA from './components/Hero/HeroA';
import HeroB from './components/Hero/HeroB';
import Experience from './components/Work/Experience'
import { Projects } from './details/Projects';
import { WorkExperience } from './details/WorkExperience';

function App() {

  const works = Projects; 
  const experience = WorkExperience;

  return (
    <div className="App">
      <button className='btn btn-primary'>New</button>
        <div className='container '>
          <div className='flex'>
            <HeroA/>
            <HeroB/>
          </div>
          <Experience section = {"Exprience"} data = {experience}/>
          <Experience section = {"Projects"} data = {works}/>
        </div>
    </div>
  );
}

export default App;

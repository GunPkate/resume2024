import './App.css';
import HeroA from './components/Hero/HeroA';
import HeroB from './components/Hero/HeroB';
import Experience from './components/Work/Experience'
import { Projects } from './details/Projects';
import { WorkExperience } from './details/WorkExperience';
import { Certificates} from './details/education';

function App() {

  const works = Projects; 
  const experience = WorkExperience;
  const certificates = Certificates

  return (
    <div className="App">
      <button className='btn btn-primary'>New</button>
        <div className='container mx-auto' >
          <div className='flex min-h-screen' style={{background: "radial-gradient(circle at 100%, #eee, #eee 50%, #222 75%, #222 75%)"}}>
            <HeroA/>
            <HeroB />
          </div> 
          <div className='min-h-screen'>
            <Experience section = {"Exprience"} data = {experience}/>
          </div>
          <div className='min-h-screen'>
            <Experience section = {"Certificates"} data = {certificates}/>
          </div>
          <div className='min-h-screen'>
            <Experience section = {"Projects"} data = {works}/>
          </div>
        </div>
    </div>
  );
}

export default App;

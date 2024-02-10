import './App.css';
import HeroA from './components/Hero/HeroA';
import HeroB from './components/Hero/HeroB';
import Navbar from './components/Navbar';
import Experience from './components/Work/Experience'
import { Projects } from './details/Projects';
import { WorkExperience } from './details/WorkExperience';
import { Certificates} from './details/education';

function App() {

  const works = Projects; 
  const experience = WorkExperience;
  const certificates = Certificates;

  const items = [
    { topic : "About Me", section : experience } ,
    { topic : "Experience", section : experience } ,
    { topic : "Certificates", section : certificates } ,
    { topic : "Projects", section : works } ,
   ]

  return (
    <div className="App" id="About Me">
        <Navbar navigate = {items} />
        <div className='container mx-auto' >
          <div className='flex min-h-screen' >
            <HeroA/>
            <HeroB />
          </div>
          {items.length > 0 ? items.map( (title,id)  => 
            title.topic != "About Me" ? <Experience key={id} section={title.topic} data={ title.section }/> : <></>
          )  : <></>}
        </div>
    </div>
  );
}

export default App;

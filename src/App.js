import './App.css';
import HeroA from './components/Hero/HeroA';
import HeroB from './components/Hero/HeroB';
import Experience from './components/Work/Experience';





function App() {
  
  return (
    <div className="App">
      <button className='btn btn-primary'>New</button>
        <div className='container '>
          <div className='flex'>
            <HeroA/>
            <HeroB/>
          </div>
          <Experience section = {"Exprience"} />
          <Experience section = {"Projects"} />
        </div>
    </div>
  );
}

export default App;

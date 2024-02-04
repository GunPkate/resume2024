import './App.css';
import HeroA from './components/Hero/HeroA';
import HeroB from './components/Hero/HeroB';



function App() {
  
  return (
    <div className="App">
      <button className='btn btn-primary'>New</button>
        <div className='container flex'>
          <HeroA/>
          <HeroB/>
        </div>
    </div>
  );
}

export default App;

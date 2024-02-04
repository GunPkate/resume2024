import './App.css';
import HeroA from './components/Navbar';


function App() {
  
  return (
    <div className="App">
      <button className='btn btn-primary'>New</button>
        <div className='container flex'>
          <HeroA/>
          {/* <HeroA/> */}
        </div>
    </div>
  );
}

export default App;

import './App.css';
import HeroA from './components/Hero/HeroA';
import HeroB from './components/Hero/HeroB';
import Experience from './components/Work/Experience';

function App() {
  const projects = [
    {
        name: "A",
        tag: "node js",
        tech: ["nodeJS","nodemailer","Hapi"],
        desc: "use nodemailer to generate",
        img: "https://picsum.photos/500/500?image=0"
    },
    {
        name: "B",
        tag: "",
        tech: ["Java", "Springboot"],
        desc: "use nodemailer to generate",
        img: "https://picsum.photos/200/300?image=1"
    },
    {
        name: "C",
        tag: "REST API",
        tech: ["C#,Web API",""],
        desc: "use nodemailer to generate",
        img: "https://picsum.photos/200/300?image=1"
    },
    {
        name: "D",
        tag: "C#",
        tech: "C# ",
        desc: "use nodemailer to generate",
        img: "https://picsum.photos/200/300?image=1"
    },
  ]

  const work = [
    {
      name: "Advanced Info System",
      tag: "Software Developer",
      tech: ["Java", "Springboot","Angular"],
      desc:"ERP of sale department",
      img: "https://picsum.photos/200/300"
    },
    {
      name: "Builk One",
      tag: "Software Developer",
      tech: ["C#", "Dot net MVC","Angular"],
      desc:"Construction Software Company",
      img: "https://picsum.photos/200/300"
    },
    {
      name: "KPMG",
      tag: "Audit Assistant",
      tech: "",
      desc:"Finanical",
      img: "https://picsum.photos/200/300"
    }
  ]

  return (
    <div className="App">
      <button className='btn btn-primary'>New</button>
        <div className='container '>
          <div className='flex'>
            <HeroA/>
            <HeroB/>
          </div>
          <Experience section = {"Exprience"} data = {work}/>
          <Experience section = {"Projects"} data = {projects}/>
        </div>
    </div>
  );
}

export default App;

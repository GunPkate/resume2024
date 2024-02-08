import pro1 from '../assets/projects/pro1/project1.jpg'
import pro2 from '../assets/projects/pro2/project1.jpg'

export const  Projects = [
    {
        name: "Debt Collector Email",
        tag: "node js",
        tech: ["nodeJS","nodemailer","Hapi","Type ORM"],
        desc: ["use nodemailer to generate email."," Context of the email detail change depends on amount of money and day count of last payment "],
        img: `${pro1}`
    },
    {
        name: "C# Accounting",
        tag: "C# WPF",
        tech: ["C#","WPF","Accounting","MS SQL"],
        desc: "Window app accounting ERP using C# WPF to quickly use simple UI and dotnet 4.7 to support Crystal Report. Details of the will be saved into MS SQL and get query from database",
        img: `${pro2}`
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
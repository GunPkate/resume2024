
const Project = ({section}) => {
    
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
    return (
        <>
        <h1>{section}</h1>

        <div className="block">     
            <input placeholder="...Search" className="w-80"/>      
            <div className="w-12/12 parent">
                <div className="grid grid-cols-[50%_50%] min-h-40 justify-center">
                    {projects.length > 0 ? projects.map( data=> 
                        <div className="bg-red-50 m-2">
                            <img src={data.img} className="w-100" alt="" />
                            <div>{data.name}</div>
                            <div>{data.desc}</div>
                            <div>{data.tag}</div>
                            <div>{data.tech[0]}</div>
                        </div>
                     ) :
                    <>
                        NO Data
                    </>
                    }
                </div>
            </div>
        </div>
        </>
        )
}

export default Project;
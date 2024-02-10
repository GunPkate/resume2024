


const Project = ({section,data}) => {
    const img = 
        {
            // margin: "20px",
            width:  "700px",
            height: "300px",
            objectFit: "scale-down"
        }
        
    const header = "text-5xl my-10"
    const sectionStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-40 justify-center";
    const sectionExperience = "grid grid-cols-2  md:grid-cols-2  lg:grid-cols-[40%_40%] lg:gap-x-8 min-h-40 justify-center";
    const a = "text-2xl";
    const b = "text-xl";
    const c = "bg-sky-50 m-2 rounded-2xl border-2 border-blue-600"
    const btn = "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
    const btnText = "mx-auto text-xl py-2 my-2"

    let itemList = data
    return (
        <>
        <h1 className={header} id={section}>{section}</h1>

        <div className="block">     
            <input placeholder="...Search" className="w-80"/>      
            <div className="w-12/12 parent">
                <div className={section === "Certificates" ? sectionStyle+" "+b : sectionExperience+" "+b}>
                    {itemList.length > 0 ? itemList.map( (data,id)=> {
                        let fullData = "";
                        for (let j of data.tech){
                            fullData += ' '+j;
                        }
                        if(section !== "Experience"){

                            return(
                            <div key={id} className={c}>
                                <div style={{background:"white"}}>
                                    <div style={{margin:"20px"}}>
                                    <img src={data.img} style={img} alt="" />
                                    </div>
                                </div>
                                <div className={a}>{data.name}</div>
                                <div className={a}>{data.date}</div>
                                <div dangerouslySetInnerHTML={{__html: `${data.desc}` }}></div>
                                <div >{data.tag}</div>
                                <div >{fullData}</div>
                                <button className={btn + btnText}>More Info</button>
                            </div>)

                        }
                     }) :
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
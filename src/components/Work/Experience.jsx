import {Education} from '../../details/education' 

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
    const sectionProject = "grid grid-cols-2  md:grid-cols-2  lg:grid-cols-[40%_40%] lg:gap-x-8 min-h-40 justify-center";
    const sectionExperience = "grid grid-cols-1  lg:grid-cols-1 lg:gap-x-8 min-h-40 justify-center";
    const a = "text-2xl";
    const b = "text-xl";
    const card = "bg-sky-50 m-2 rounded-2xl border-2 border-blue-600"
    const cardExp = "bg-sky-50 m-2 rounded-2xl border-2 border-blue-600 md:h-[600px] lg:h-[600px]"
    const btn = "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
    const btnText = "mx-auto text-xl py-2 my-2"

    const SubSection = ({data,id}) => {
        let fullData = "";
        for (let j of data.tech){
            fullData += ' '+j;
        }

        return(

            <div key={id} className={section === "Experience" ? cardExp : card}>
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
            </div>

            )
    }



    
    const NonExp =()=>{
        return (
            <>
            <h1 className={header} id={section}>{section}</h1>
    
            <div className="block">     
                //<input placeholder="...Search" className="w-80"/>      
                <div className="w-12/12 parent">
                    <div className={section === "Certificates" ? sectionStyle+" "+b : sectionProject+" "+b}>
                        {itemList.length > 0 ? itemList.map( (data,id)=> {
                            let fullData = "";
                            for (let j of data.tech){
                                fullData += ' '+j;
                            }
    
                            if(section !== "Experience" ){
    
                                return(<>
                                 <SubSection data={data} id={id}/>
                                </>
                                )
    
    
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

    let itemList = data
    let eduList = Education
        if(section !== "Experience"){
            return (<NonExp/>)
        }
        if(section == "Experience"){
            return (
                <>
                <h1 className={header} id={section}>{section}</h1>
            
                   // <input placeholder="...Search" className="w-80"/>      
                    <div className="block lg:flex mx-auto justify-center">     
                        <div className="w-5/12 parent mx-auto">
                            <div className={sectionExperience+" "+b}>
                            {itemList.length > 0 ? itemList.map( (data,id)=> {
                                        let fullData = "";
                                        for (let j of data.tech){
                                            fullData += ' '+j;
                                        }           
                                        return <SubSection data={data} id={id}/>
                                    }) :
                                    <>
                                        NO Data
                                    </>
                                    }
                            </div>     
                        </div>     
                        <div className="w-5/12 parent mx-auto">
                            <div className={sectionExperience+" "+b}>
                            {eduList.length > 0 ? eduList.map( (data,id)=> {
                                        let fullData = "";
                                        for (let j of data.tech){
                                            fullData += ' '+j;
                                        }           
                                        return <SubSection data={data} id={id}/>
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
        
        



}

export default Project;
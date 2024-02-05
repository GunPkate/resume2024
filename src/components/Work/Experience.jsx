


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
    const a = "text-2xl";
    const b = "text-xl";
    const c = "bg-red-50 m-2 rounded-2xl border-2 border-rose-600"
    const btn = "rounded-full bg-sky-500 hover:bg-sky-700 px-3 my-6 text-white"

    let itemList = data
    return (
        <>
        <h1 className={header}>{section}</h1>

        <div className="block">     
            <input placeholder="...Search" className="w-80"/>      
            <div className="w-12/12 parent">
                <div className={sectionStyle+" "+b}>
                    {itemList.length > 0 ? itemList.map( data=> {
                        let fullData = "";
                        for (let j of data.tech){
                            fullData += ' '+j;
                        }
                        return(
                        <div className={c}>
                            <div style={{background:"white"}}>
                                <div style={{margin:"20px"}}>
                                <img src={data.img} style={img} alt="" />
                                </div>
                            </div>
                            <div className={a}>{data.name}</div>
                            <div >{data.desc}</div>
                            <div >{data.tag}</div>
                            <div >{fullData}</div>
                            <button className={btn}>More Info</button>
                        </div>)
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
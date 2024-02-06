


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
    const btn = "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
    const btnText = "mx-auto text-2xl py-2 my-2"

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
                            <div className={a}>{data.date}</div>
                            <div >{data.desc}</div>
                            <div >{data.tag}</div>
                            <div >{fullData}</div>
                            <button className={btn + btnText}>More Info</button>
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
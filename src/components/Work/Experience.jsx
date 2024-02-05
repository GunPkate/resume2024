


const Project = ({section,data}) => {
    const img = 
        {
            // margin: "20px",
            width:  "700px",
            height: "300px",
            objectFit: "scale-down"
        }
        
    const sectionStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-40 justify-center";
    const a = "text-2xl";
    const b = "text-xl";

    let itemList = data
    return (
        <>
        <h1 className="text-3xl">{section}</h1>

        <div className="block">     
            <input placeholder="...Search" className="w-80"/>      
            <div className="w-12/12 parent">
                <div className={sectionStyle}>
                    {itemList.length > 0 ? itemList.map( data=> {
                        let fullData = "";
                        for (let j of data.tech){
                            fullData += ' '+j;
                        }
                        return(
                        <div className="bg-red-50 m-2">
                            <div style={{margin:"20px"}}>
                            <img src={data.img} style={img} alt="" />
                            </div>
                            <div className={a}>{data.name}</div>
                            <div className={b}>{data.desc}</div>
                            <div className={b}>{data.tag}</div>
                            <div className={b}>{fullData}</div>
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
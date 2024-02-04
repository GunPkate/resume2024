


const Project = ({section,data}) => {

    let itemList = data
    return (
        <>
        <h1>{section}</h1>

        <div className="block">     
            <input placeholder="...Search" className="w-80"/>      
            <div className="w-12/12 parent">
                <div className="grid grid-cols-[50%_50%] min-h-40 justify-center">
                    {itemList.length > 0 ? itemList.map( data=> 
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
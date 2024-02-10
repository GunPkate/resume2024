

const HeroB = () => {

    const highLightStyle = "text-2xl  text-blue-700"
    const highLightDiv = "bg-blue-50 m-2 min-h-2"
    const textHeroNormal = "text-2xl"

    const sectionStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-40 justify-center";
    const c = "bg-blue-50 m-2 rounded-xl"

    const skillHighLight = [
        { title: "Role", data2: `
        <div class="float-left">
       Java and Angular Developer <br/>
        Mostly experienced in  ERP and Accounting system <br/>
        </div>

        `},
        { title: "Experience Overview",data1: "1 Year 6 Months", data2: "ERP Developer"},
        { title: "Main Tech Stack",data1: "", data2: 
        `
            Angular v12 <br/> 
            Angular v6 <br/> 
            Java Springboot 1.5.8<br/> 
            C# <br/> 
            Javascript <br/>
            nodeJS  v12 <br/>
        `
        },
        { title: "Business Skill",data1: "1 Year 5 Months", data2: "Accounting & Audit Firm"},
    ]
    
    return (
        <>
        <div className="block w-7/12 my-auto mx-2">
        <h1 className="text-3xl">Software Developer(Outsource)</h1>
            
            <div className={textHeroNormal+" pt-4"}>
                <div className={sectionStyle}>
                        {skillHighLight?skillHighLight.map( (itemn,id)=>
                        <div key={id} className={highLightDiv+" "+c}>
                            <p className={highLightStyle}>    
                            {itemn.title}
                        </p>
                        <p>    
                            {itemn.data1}
                        </p>
                        <p  dangerouslySetInnerHTML={{__html:`${itemn.data2}`}}>    
                        </p>
                        </div>
                        ):<>
                        </>}
                    </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-40 justify-center">
                    <div className="bg-blue-50 m-2">
                        <p>    
                            Experience Overview
                        </p>
                        <p>    
                            
                        </p>
                    </div>
                    <div className="bg-blue-50 m-2">
                        <p>    
                            My Skill
                        </p>
                        <p>    
                            
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
        </>
        )
}

export default HeroB;
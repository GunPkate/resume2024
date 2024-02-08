

const HeroB = () => {

    const textHeroMainStyle = "text-2xl text-blue-400"
    const highLightStyle = "text-2xl text-blue-400"
    const highLightDiv = "bg-red-50 m-2 min-h-2"
    const textHeroNormal = "text-2xl"

    const sectionStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-40 justify-center";
    const c = "bg-red-50 m-2 rounded-xl"

    const skillHighLight = [
        { title: "Experience Overview",data1: "1 Year 6 Months", data2: "ERP Developer with various framework skills"},
        { title: "Business Skill",data1: "1 Year 5 Months", data2: "Accounting & Audit Firm"},
        { title: "Main Tech Stack",data1: "", data2: ["Angular ", "Java ", "C# ", "Javascript "]},
        { title: "Ex",data1: "1 Year 6 Months", data2: "ERP Developer"},
    ]
    
    return (
        <>
        <div className="block w-7/12 my-auto mx-2">
        <h1 className="text-3xl">Software Developer(Outsource)</h1>
            <div className={textHeroNormal}>
                <div className="p-6 hero-div">
                    <p className="whitespace-pre-line">
                        My current role is <span className={textHeroMainStyle}>Java and Angular</span> software developer <br/>
                        My assignment is to maintain and develope <br/>
                        new feature for Enterprise and Public Company <br/>
                        Mostly experienced in <span className={textHeroMainStyle}> ERP and Accounting system </span>
                    </p>
                </div>
            </div>
            
            <div className={textHeroNormal}>
                <div className={sectionStyle}>
                        {skillHighLight?skillHighLight.map( (itemn,id)=>
                        <div key={id} className={highLightDiv+" "+c}>
                            <p className={highLightStyle}>    
                            {itemn.title}
                        </p>
                        <p>    
                            {itemn.data1}
                        </p>
                        <p>    
                            {itemn.data2}
                        </p>
                        </div>
                        ):<>
                        </>}
                    </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-40 justify-center">
                    <div className="bg-red-50 m-2">
                        <p>    
                            Experience Overview
                        </p>
                        <p>    
                            
                        </p>
                    </div>
                    <div className="bg-red-50 m-2">
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
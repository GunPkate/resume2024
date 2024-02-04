

const HeroB = () => {
    const a = document.getElementsByClassName("hero-div");
    const b = document.getElementById("hero");
    console.log(a)
    console.log(b)
    return (
        <>
        <div className="block w-7/12">
            <div className="parent">
                <p className="child min-h-40 bg-red-50 text-red-700 text-3xl">aa</p>
                <div className="p-6 hero-div">
                    <p>Working as Software Developer(Outsource) <span>Java and Angular</span> 
                        My assignment is to maintain and develope new feature for Enterpreise and Public Company
                        Mostly experience <span> ERP and Accounting system </span>
                    </p>
                </div>
            </div>
            
            <div className="parent">
                <div className="grid grid-cols-[50%_50%] min-h-40 justify-center">
                    <div className="bg-red-50 m-2">
                        <p>    
                            1 Year 6 Months
                        </p>
                        <p>    
                            ERP Developer
                        </p>
                    </div>
                    <div className="bg-red-50 m-2">
                        <p>    
                            1 Year 6 Months
                        </p>
                        <p>    
                            ERP Developer
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-[50%_50%] min-h-40 justify-center">
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
                </div>
            </div>
        </div>
        </>
        )
}

export default HeroB;
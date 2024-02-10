import logo from "../../assets/hero.jpg"

const img = 
{
    // margin: "20px",
    width:  "800px",
    height: "400px",
    objectFit: "scale-down"
}

const me = `
I am Gun, currrently software developer(Outsource) 
at Advanced Info Service (AIS)
`
const HeroA = () => {
    const textHeroNormal = ""
    return (
        <>
        <div className="block w-5/12 my-auto" id="About Me">
            <div className="parent">
                <div className=" hero-div rounded-full ">
                    <img id={"hero"} src={logo} style={img}/>
                </div>
            </div>
            
            <div className="parent my-auto ms-auto">
                <div className="grid grid-cols-1 min-h-40 justify-center">
                    <div className="bg-sky-50 m-2 text-2xl">
                        {me}
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}

export default HeroA;
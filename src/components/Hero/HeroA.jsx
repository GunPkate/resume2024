import logo from "../../assets/hero.jpg"

const img = 
{
    // margin: "20px",
    width:  "700px",
    height: "300px",
    objectFit: "scale-down"
}

const HeroA = () => {
    const a = document.getElementsByClassName("hero-div");
    const b = document.getElementById("hero");
    console.log(a)
    console.log(b)
    return (
        <>
        <div className="block w-5/12 my-auto">
            <div className="parent">
                <div className=" hero-div rounded-full ">
                    <img id={"hero"} src={logo} style={img}/>
                </div>
            </div>
            
            <div className="parent">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-40 justify-center">
                    <div className="bg-red-50 m-2">b</div>
                    <div className="bg-sky-50 m-2">b</div>
                </div>
            </div>
        </div>
        </>
        )
}

export default HeroA;
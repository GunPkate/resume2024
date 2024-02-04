import logo from "../../assets/hero.jpg"

const HeroA = () => {
    const a = document.getElementsByClassName("hero-div");
    const b = document.getElementById("hero");
    console.log(a)
    console.log(b)
    return (
        <>
        <div className="block w-5/12">
            <div className="parent">
                <p className="child h-20 bg-red-50 text-red-700 text-3xl">aa</p>
                <div className="p-6 hero-div">
                    <img id={"hero"} src={logo} className="object-cover h-100 w-100"/>
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
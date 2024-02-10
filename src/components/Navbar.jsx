const Navbar = ({navigate}) => {
    
    const btn = "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    const textBtn = "text-4xl text-bold ml-2 "
    const navPost = "flex justify-end "
    const navBG = "w-full fixed bg-gradient-to-r from-cyan-500 to-blue-500 p-2 "

    return (
        <>
            <div className={navPost+navBG}>
                <div className="row flex justify-between">
                    {navigate.length > 0 ? navigate.map( x => 
                        <a href={"#"+x.topic} className={btn+textBtn}>{x.topic}</a>
                    ) : <></>}

                </div>
            </div>
        </>
    )
}

export default Navbar;
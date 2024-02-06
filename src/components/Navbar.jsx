const Navbar = () => {
    
    const btn = "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    const btnColor = "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
    const textBtn = "text-2xl ml-2 "
    const navPost = "flex justify-end "
    const navBG = "w-full fixed bg-gradient-to-r from-cyan-500 to-blue-500 p-2 "

    return (
        <>
            <div className={navPost+navBG}>
                <div className="row flex justify-between">
                    <button className={btn+textBtn}>New</button>
                    <button className={btn+textBtn}>New</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
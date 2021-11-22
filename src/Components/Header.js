import React, { useState } from 'react'
import logo from '../images/logo.png'
import info from '../images/info.png'
function Header() {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div className="flex items-center w-full justify-center relative z-30">
            <div className="flex flex-row justify-between items-baseline w-10/12 p-8 relative ">
                <img src={logo} alt="" />


                <img src={info} alt="" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />



                {showTooltip && <div className="px-4 py-2 mt-12 rounded-3xl shadow-lg text-white tracking-wide bg-red-500 absolute right-0">Test this is test</div>}


            </div>
        </div>

    )
}

export default Header

import React from 'react'
import logo from "../../assets/images/more/logo1.png"

const Header = () => {
    return (
        <nav>
            <div className="py-4 bg-[#372727] shadow-sm">

                <div className="text-center flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-15 h-20" />
                    <span className="text-white text-2xl">Espresso Emporium</span>
                </div>

            </div>
        </nav>
    )
}

export default Header
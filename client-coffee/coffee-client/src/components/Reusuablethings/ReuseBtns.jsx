import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';


const ReuseBtns = ({ onClick, text, icon: Icon, className }) => {

    const navigate = useNavigate();

    const handleBackHome = (e) => {
        e.preventDefault();

        navigate("/");
    }


    return (
        <>

            <button
                className={`lg:px-30 flex gap-2 items-center text-2xl lg:mt-10 ${className} cursor-pointer`}
                onClick={handleBackHome}

            >
                {/* Renders if the icon  isprovided */}
                {/* onClick={handleBackHome} */}
                <FaArrowLeft />
                Back to Home
            </button>

        </>
    )
}

export default ReuseBtns
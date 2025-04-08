import React from 'react'
import error from "../../assets/images/404/404.gif"
import Footer from '../Footer/Footer'
import ReuseBtns from '../Reusuablethings/ReuseBtns'


const Error = () => {
    return (
        <>

            <div>
                <p className='text-4xl text-center py-5'>
                    <ReuseBtns />
                </p>
            </div>
            <main
                className="hero min-h-[600px]"
                style={{
                    backgroundImage: `url(${error})`,
                    backgroundSize: "contain",      // Ensures the image covers the entire container
                    backgroundPosition: "center", // Centers the image
                    backgroundRepeat: "no-repeat", // Prevents repeating
                    backgroundAttachment: "fixed", // Optional: Keeps background fixed on scroll
                }}
            >
            </main>

        </>
    )
}

export default Error
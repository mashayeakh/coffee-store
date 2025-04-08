import React from 'react'
import backgroundImage from "../../assets/images/more/3.png"
import icon1 from "../../assets/images/icons/1.png"
import icon2 from "../../assets/images/icons/2.png"
import icon3 from "../../assets/images/icons/3.png"
import icon4 from "../../assets/images/icons/4.png"
import { RiCupFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router'
import ShowAllCoffee from '../Coffee/ShowAllCoffee'
import two from "../../assets/images/more/2.png"
import four from "../../assets/images/more/4.png"
import five from "../../assets/images/more/5.png"
import six from "../../assets/images/more/6.png"
import seven from "../../assets/images/more/7.png"
import eight from "../../assets/images/more/8.png"
import nine from "../../assets/images/more/9.png"
import ten from "../../assets/images/more/10.png"
import ele from "../../assets/images/more/11.png"
import twl from "../../assets/images/more/12.png"
import thr from "../../assets/images/more/13.JPG"
import fourth from "../../assets/images/more/14.jpg"
import fift from "../../assets/images/more/15.jpg"
import sixtt from "../../assets/images/more/16.png"
import sevent from "../../assets/images/more/17.png"
import eighteen from "../../assets/images/more/18.png"
import nignth from "../../assets/images/more/19.png"



const Home = () => {

    // const location = useLocation();
    const navigate = useNavigate();

    const handleAddCoffee = (e) => {
        e.preventDefault();

        // location.href("/create-coffee");
        navigate("/create-coffee");
    }

    // const handleViewCoffee = (e) => {
    //     e.preventDefault();

    //     navigate("/view-coffee");
    // }


    return (
        <>
            <main
                className="hero min-h-[600px]"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center text-xl" style={{ transform: "translateX(120px)" }}>
                    <div className="max-w-md">
                        <h1 className="mb-3 text-3xl font-bold text-start">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-start">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <div className='text-start '>
                            <button className="btn btn-warning text-lg">Learn More</button>
                        </div>
                    </div>
                </div>

            </main>
            <div className='bg-[#eceae3]'>
                <div className='mx-50 py-10 flex justify-around gap-20'>
                    <div className=''>
                        <img src={icon1} alt="" />
                        <p>Awesome Arome</p>
                        <span className="">s
                            You will definitely be a fan of the design & aroma of your coffee.
                        </span>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <p>High Quality</p>
                        <span>We served the coffee to you maintaining the best quality</span>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <p>Pure Grades</p>
                        <span>The coffee is made of the green coffee beans which you will love</span>
                    </div>
                    <div>
                        <img src={icon4} alt="" />
                        <p>Proper Roasting</p>
                        <span>Your coffee is brewed by first roasting the green coffee beans</span>
                    </div>
                </div>
            </div>

            <div className='my-20'>
                <div className=''>
                    <div className='pt-10 pb-13'>
                        <div className="flex w-full justify-center">
                            <div className="divider divider-vertical text-2xl">- - - Sip & Savor - - - </div>
                        </div>
                        <div className="flex flex-col items-center  gap-4">
                            <h1 className="text-3xl font-bold text-[#402924] filter drop-shadow-lg">Our Popular Products </h1>
                            <button onClick={handleAddCoffee} className='btn w-[150px] h-[48px] text-xl font-stretch-extra-expanded  text-[#FFFFFF] border-2 border-[#331A15] bg-[#e3b577]'>Add Coffee
                                <RiCupFill style={{ color: "#331A15" }} />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <ShowAllCoffee />

                        <div className='mt-30'>
                            <div>
                                <div className="flex w-full justify-center">
                                    <div className="divider divider-vertical text-2xl">Follow Us Now</div>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <h1 className="text-3xl font-bold text-[#402924] filter drop-shadow-lg">Follow on Instagram</h1>
                                </div>
                                <div className='mt-15 lg:px-70'>
                                    <div className='grid grid-cols-4 gap-4'>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg" src={two} alt="" />
                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg relative top-30" src={sevent} alt="" />
                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg" src={twl} alt="" />

                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg" src={fourth} alt="" />
                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg" src={sixtt} alt="" />
                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg relative bottom-20" src={six} alt="" />
                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg" src={eighteen} alt="" />
                                        </div>
                                        <div>
                                            <img class="h-auto max-w-full rounded-lg" src={nignth} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
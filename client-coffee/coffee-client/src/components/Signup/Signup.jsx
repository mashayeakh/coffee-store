import React, { useContext, useState } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri';
import { AuthContext } from '../Context/AuthContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Signup = () => {

    const { createUser, signOutUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const { navigate } = useNavigate();

    const handlesignup = e => {
        e.preventDefault();

        const signupData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        createUser(signupData.email, signupData.password)
            .then(userCred => {
                const gmt = userCred.user.metadata.creationTime;
                const bdTime = new Date(gmt).toLocaleString();

                const sendingUser = {
                    name: signupData.name,
                    email: signupData.email,
                    bdTime
                };

                const url = "http://localhost:5000/create-user";
                fetch(url, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(sendingUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            signOutUser().then(() => {
                                toast.success("Account created successfully! Please login.");
                                setTimeout(() => {
                                    navigate('/login'); // or use window.location.href if you prefer
                                }, 1500);
                                e.target.reset();
                            });
                        }
                    })
            })
            .catch(err => {
                toast.error(err.message || "Signup failed.");
            });
    };

    return (
        <div>
            <div className=''>
                <form onSubmit={handlesignup} className="mx-auto w-[70%] mt-10">
                    <div className='flex flex-col items-center'>
                        <h1 className='lg:mt-4 text-center text-3xl my-4'>signup</h1>
                    </div>
                    <div className=' py-2 flex flex-col place-items-center '>
                        <div className="relative z-0 w-[20%] h-[64px] mt-10 mb-5 group ">
                            <input
                                type="name"
                                name="name"
                                id="floating_name"
                                className="block text-xl py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required
                            />

                            <label htmlFor="floating_photo-url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>

                        </div>
                        <div className="relative z-0 w-[20%] h-[64px]  mb-5 group ">
                            <input
                                type="email"
                                name="email"
                                id="floating_email"
                                className="block text-xl py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required
                            />

                            <label htmlFor="floating_photo-url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>

                        </div>
                        <div className="relative z-0 w-[20%] h-[64px]  mb-5 group ">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="floating_password"

                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required
                            />
                            <div>
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-[15%] left-[85%] cursor-pointer'>
                                    {showPassword ? <FaEye style={{ fontSize: "22px" }} /> : <FaEyeSlash style={{ fontSize: "22px" }} />}
                                </span>
                            </div>

                            <label htmlFor="floating_photo-url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer bg-[#D2B48C] mt-10  font-medium rounded-lg text-sm w-[20%] px-5 py-2.5 text-center text-[#331A15] border-2 border-[#331A15]"
                        >
                            Sign up
                        </button>

                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup
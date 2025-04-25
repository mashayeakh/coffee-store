import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const [successMsg, setSuccessMsg] = useState(false);
    const [errMsg, setErrMsg] = useState(false);

    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Triggered!!!");

        const loginForm = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        // console.log("Login Form - ", loginForm);
        loginUser(loginForm.email, loginForm.password)
            .then(user => {
                console.log("Logged in User = ", user);

                const lastSignInTime = user?.user?.metadata?.lastSignInTime;
                const loginInfo = {
                    email: loginForm.email,
                    lastSignInTime
                };

                // Update user's last login time
                const url = "http://localhost:5000/user";
                fetch(url, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loginInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("User login info updated:", data);

                        // ✅ Show toast after everything is successful
                        toast.success(
                            <span style={{ fontSize: "16px" }}>
                                ✅ Logged in at {lastSignInTime}
                            </span>,
                            {
                                position: "top-right",
                                autoClose: 3000,
                            }
                        );

                        // Navigation and state updates
                        setSuccessMsg(true);
                        setErrMsg(false);
                        navigate("/");
                    });
            })
            .catch(err => {
                console.log("Login Error - ", err.message);
                setErrMsg(true);
                setSuccessMsg(false);
                toast.error("❌ Login failed. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            });

    }

    return (
        <>
            <form onSubmit={handleLogin} className="mx-auto w-[70%] mt-10">
                <div className='flex flex-col items-center'>
                    <h1 className='lg:mt-4 text-center text-3xl my-4'>Login</h1>
                </div>
                <div className=' py-2 flex flex-col place-items-center '>

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
                        className="cursor-pointer bg-[#D2B48C] font-medium rounded-lg text-sm w-[20%] px-5 py-2.5 text-center text-[#331A15] border-2 border-[#331A15]"
                    >
                        Login
                    </button>


                </div>
            </form>
            <ToastContainer />
        </>
    )
}


export default Login
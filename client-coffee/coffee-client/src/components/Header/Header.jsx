import React, { useContext } from 'react'
import logo from "../../assets/images/more/logo1.png"
import { useNavigate } from 'react-router'
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContextProvider';

const Header = () => {

    const navigate = useNavigate();

    const { user, signOutUser } = useContext(AuthContext);


    const handleLogout = () => {
        console.log("Signout triggered");
        signOutUser();
    }

    const handleSignup = e => {
        e.preventDefault();
        navigate("/signup");
    }


    const handleUsers = e => {
        e.preventDefault();
        navigate("/users");
    }
    const handleLogin = e => {
        e.preventDefault();
        navigate("/login");
    }



    return (
        <nav>
            <div className="py-1 bg-[#372727] shadow-sm relative flex items-center justify-center">

                <Link to="/">
                    <div className="text-center flex justify-center items-center">
                        <img src={logo} alt="logo" className="w-15 h-20" />
                        <span className="text-white text-2xl">Espresso Emporium</span>
                    </div>
                </Link>
                <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                    {/* <button onClick={handleSignup} className='btn text-3xl mr-3'>Signup</button>
                    <button onClick={handleLogin} className='btn text-3xl mr-3'>Login</button> */}

                    {
                        user ? <div>
                            <button onClick={handleUsers} className='btn text-2xl mr-3'>Users</button>
                            <button onClick={handleLogout} className='btn text-2xl mr-3'>Logout</button>
                        </div> :
                            <div>
                                <button onClick={handleSignup} className='btn text-2xl mr-3'>Signup</button>
                                <button onClick={handleLogin} className='btn text-2xl mr-3'>Login</button>
                            </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header
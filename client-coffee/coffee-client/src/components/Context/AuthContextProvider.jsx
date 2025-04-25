import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './../Firebase/Firebase.init';


export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create an user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login the created user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //i need to fetch the user information
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser => {
            console.log("Current User ---- ", currUser);
            setUser(currUser);
            // console.log("Email ", user.email);
            setLoading(false);
        }))
        return () => unsubscribe(); // cleanup function to unsubscribe the listener when component unmounts
    }, [])
    //* Signout the user
    const signOutUser = () => {
        return signOut(auth);
    }



    const userInfo = {
        createUser,
        user,
        loading,
        loginUser,
        signOutUser
    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
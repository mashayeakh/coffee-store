import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContext);


    if (!user) {
        return <Navigate to="/login" replace />;
    }


    return children;
}

export default PrivateRoutes
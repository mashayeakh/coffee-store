import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Root
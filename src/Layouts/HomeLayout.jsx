import React from 'react'
import Navbar from '../components/Navbar/Navbar'
export default function HomeLayout({children}) {
    return (
        <>
            <Navbar />
            {children}

        </>
    )
}

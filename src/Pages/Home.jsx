import React from 'react'
import { Navbar } from '../Components'
import UnderNav from '../Components/UnderNav'
import Main from '../Components/Main'
import UnderMain from '../Components/UnderMain'

import Footer from '../Components/Footer'
import Header from '../Components/Header'



export default function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <UnderNav />
            <Main />
            <UnderMain />
            <Footer />

        </div>
    )
}

import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Plans from '../components/Plans'
import Mobile from '../components/Mobile'
import FirstChild from '../components/FirstChild'
import Customer from '../components/Customer'
import Keyboard from '../components/Keyboard'
import Footer from '../components/Footer'

const Home = () => {

    return (
        <>
            <div className="min-h-screen w-[100vw] overflow-x-hidden flex flex-col items-center bg-white ">
                {/* components */}
                <Navbar />
                <FirstChild />
                <Cards />
                <Mobile />
                <Plans />
                <Customer />
                <Keyboard />
                <Footer />
            </div>

        </>
    )
}

export default Home

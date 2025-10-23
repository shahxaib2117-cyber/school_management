import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {

    const nevigate = useNavigate()
    // const { isAuthenticated, login, logout } = useAuth()

    const pages_array = [
        {
            title: "Home"
        }, {
            title: "Pricing"
        }, {
            title: "Usecase"
        }, {
            title: "Location"
        }, {
            title: "FAQ's"
        }, {
            title: "Company"
        }
    ]

    return (
        <div className='navbar-bg h-10 flex gap-15 md:gap-5 px-10 lg:gap-28 rounded-bl-2xl rounded-br-2xl fixed z-[100] items-center ' >
            {/* logo */}
            <div className="h-full flex justify-center items-center px-2 ">
                <img src="/logo.png" className='md:h-8 lg:h-10 md:w-20 lg:w-40 ' alt="logo.png not found!" />
            </div>
            {/* center-contant */}
            <div className="h-full hidden md:flex items-center ">
                {pages_array.map((data, ind) => (
                    <p key={ind} className=' md:text-[13px] lg:text-[15px] md:px-3 lg:px-5 py-1 text-white '>{data.title}</p>
                ))

                }
            </div>
            {/* button */}
            <div className="h-full px-1 flex justify-center items-center ">

                <button onClick={() => nevigate('/login')} className={` whitespace-nowrap align-middle text-white bg-[#3fa8e9] w-fit flex-none rounded-[20px] !px-4 !py-1.5 text-[13px] lg:text-[15px] `} >Log in </button>

            </div>
        </div>
    )
}

export default Navbar

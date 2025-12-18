import React, { useEffect, useState } from 'react'
import LightBgText from '../subComponents/LightBgText'
import Dashboard_logo from '../../../public/dashboard-logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineLibrary } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiRankingLight } from "react-icons/pi";

const Sidebar = () => {

    const location = useLocation()

    const currentPath = location.pathname;

    const links_array = [
        {
            icon: <GoHome className='text-white text-[20px] '/>,
            nevigate: "/desktop",
            text: 'Desktop'
        }, {
            icon: <GoHome className='text-white text-[20px] '/>,
            nevigate: "/desktop/adminDashboard",
            text: 'Admin Dashboard '
        }, {
            icon: <GoHome className='text-white text-[20px] '/>,
            nevigate: "/desktop/teacher",
            text: 'Teachers'
        }, {
            icon: <IoSchoolOutline className='text-white text-[20px] '/>,
            nevigate: "/desktop/students",
            text: 'Students'
        }, {
            icon: <HiOutlineLibrary className='text-white text-[20px] '/>,
            nevigate: "/desktop/billing",
            text: 'Billing'
        }, {
            icon: <IoSettingsOutline className='text-white text-[20px] '/>,
            nevigate: "/desktop/profile",
            text: 'Settings and profile'
        }, {
            icon: <PiRankingLight className='text-white text-[20px] '/>,
            nevigate: "/desktop/assingments",
            text: 'Assingments'
        }, {
            icon: <PiRankingLight className='text-white text-[20px] '/>,
            nevigate: "/desktop/attendance",
            text: 'Attendance'
        }, {
            icon: <HiOutlineLibrary className='text-white text-[20px] '/>,
            nevigate: "/desktop/features",
            new_btn: 'NEW',
            text: 'Features'
        }
    ]

    const loggedInStudent = JSON.parse(localStorage.getItem("logedInStudent"||""))
    const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher"||""))


    const isAdmin = !loggedInStudent && !loggedInTeacher

    return (
        <div className="h-full bg-[#152259] flex flex-col ">
            {/* logo-title-div */}
            <div className="px-8 py-4 flex flex-col justify-center items-center gap-3 ">
                {/* logo-div */}
                <div className="h-[80px] w-[80px] flex justify-center items-center rounded-full overflow-hidden ">
                    <img src={Dashboard_logo} className='scale-[1.4] ' alt="" />
                </div>
                {/* title */}
                <p className='text-[16px] font-semibold text-white '>Udemy Inter. school</p>
            </div>

            {/* pages-links */}
            {/* links-div */}
            <div className=" flex flex-col py-3 px-8 gap-1 border-[red]">
                {/* link_1_div */}
                {links_array.map((data, ind) => (
                    <NavLink key={ind} to={data.nevigate}>
                        <div className={`flex items-center cursor-pointer rounded-[5px] transition-all duration-[300ms]
                        ${!isAdmin && ind == 8 ? `mt-31` : ``} ${isAdmin && ind == 8 ? `mt-31` : ``} ${((!isAdmin && ind == 1)||(loggedInTeacher && ind == 3 )) ? 'hidden' : ''}
                        ${((isAdmin && ind == 7) || loggedInStudent && ind == 7) ? `hidden` : ``} ${loggedInStudent && ind == 8 ? `mt-31` : ``}
                        ${currentPath === data.nevigate ? `bg-[#509CDB]` : `` } ${(isAdmin && ind == 6) ? ' hidden':'' } px-2 py-2 gap-2  `}>
                            {/* icon */}
                            <div className="h-5 w-5 flex justify-center items-center ">
                                {data.icon}
                            </div>
                            {/* text */}
                            {ind == 8 ?
                                <p className='text-[16px] text-white flex gap-5 font-semibold ' >
                                    Features
                                    <span className='flex justify-center items-center text-black text-[12px] px-4 rounded-[20px] bg-[#9cc8e3] '>
                                        NEW
                                    </span>
                                </p>
                                :
                                <p className='text-[16px] text-white '>{data.text}</p>
                            }
                        </div>
                    </NavLink>
                ))
                }
            </div>
        </div>
    )
}

export default Sidebar

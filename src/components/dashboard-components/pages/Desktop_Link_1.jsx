import React, { useState } from 'react'
import LightBgText from '../../subComponents/LightBgText';
import { PiBellThin } from "react-icons/pi";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Chart, DoughnutController } from 'chart.js/auto';


const Desktop_Link_1 = () => {
    const { isAuthenticated, login, logout } = useAuth()
    const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher"))
    // const allLoggedInTeacher = JSON.parse(localStorage.getItem("allLoggedInTeachers") || "[]")
    const nevigate = useNavigate()
    const items_array = [
        {
            icon: <BsPersonFillAdd className='scale-[1.5] ' />,
            title: "Add other admins",
            description: ["Create rich course content and coaching products for your students",
                "When you give them a pricing plan, they'll appear on your site!"]
        }, {
            icon: <FaUniversity className='scale-[1.3] ' />,
            title: "Add classes",
            description: ["Create rich course content and coaching products for your students",
                "When you give them a pricing plan, they'll appear on your site!"]
        }, {
            icon: <MdOutlineSchool className='scale-[1.5] ' />,
            title: "Add students",
            description: ["Create rich course content and coaching products for your students",
                "When you give them a pricing plan, they'll appear on your site!"]
        }
    ]

    const [openTeacherDetails, setOpenTeacherDetails] = useState()
    
    const handleClick = (ind) => {
        setOpenTeacherDetails(ind)
    }

    return (
        <div className="container flex flex-col items-center ">
            {/* head-child */}
            <div className="w-full flex justify-center items-center py-2 px-5 bg-slate-100 ">
                <div className=" h-10 flex items-center gap-80 ">
                    <p className='text-[14px] '>Learn  how to launch faster <br />watch our webinar for tips from our experts and get a limited time offer.</p>
                    <div className="flex gap-5 items-center ">
                        <div className="h-7 w-7 flex justify-center items-center relative ">
                            <div className="h-full w-full py-[2px] px-[2px] flex justify-end absolute ">
                                <div className="h-[10px] w-[10px] rounded-full bg-[#1b7ccb] "></div>
                            </div>
                            <PiBellThin className='text-[60px] ' />
                        </div>
                        <LightBgText onClick={() => logout()} lable='Logout'
                            className=' py-1 px-5 rounded-[5px] !bg-[#509CDB] !text-[13px] text-white flex justify-center items-center' />
                    </div>
                </div>
            </div>

            <div className="h-100 w-230 border-[2px]  ">
                
            </div>

        </div>
    )
}

export default Desktop_Link_1

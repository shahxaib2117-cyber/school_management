import React from 'react'
import LightBgText from '../../subComponents/LightBgText';
import { PiBellThin } from "react-icons/pi";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Desktop_Link_1 = () => {
    const { isAuthenticated, login, logout } = useAuth()
    const nevigate = useNavigate()
  const items_array = [
    {
      icon: <BsPersonFillAdd className='scale-[1.5] '/>,
      title: "Add other admins",
      description: ["Create rich course content and coaching products for your students",
        "When you give them a pricing plan, they'll appear on your site!"]
    }, {
      icon: <FaUniversity className='scale-[1.3] '/>,
      title: "Add classes",
      description: ["Create rich course content and coaching products for your students",
        "When you give them a pricing plan, they'll appear on your site!"]
    }, {
      icon: <MdOutlineSchool className='scale-[1.5] '/>,
      title: "Add students",
      description: ["Create rich course content and coaching products for your students",
        "When you give them a pricing plan, they'll appear on your site!"]
    }
  ]

    return (
        <div className="container flex flex-col items-center ">
            {/* head-child */}
            <div className="w-full flex justify-center items-center py-3 bg-slate-100 ">
                <div className=" h-15 flex items-center gap-40 ">
                    <p>Learn  how to launch faster <br />watch our webinar for tips from our experts and get a limited time offer.</p>
                    <div className="flex gap-5 items-center ">
                        <div className="h-9 w-9 flex justify-center items-center relative ">
                            <div className="h-full w-full py-[2px] px-[2px] flex justify-end absolute ">
                                <div className="h-[14px] w-[14px] rounded-full bg-[#1b7ccb] "></div>
                            </div>
                            <PiBellThin className='text-[50px] ' />
                        </div>
                        <LightBgText onClick={()=>logout()} lable='Logout'
                            className=' py-2 px-8 rounded-[5px] !bg-[#509CDB] text-white flex justify-center items-center' />
                    </div>
                </div>
            </div>
            <div className="h-9/10 w-8/10 flex flex-col py-5 ">
                {/*heading-title--div */}
                <div className="">
                    <p className='text-[#464646] text-[35px] font-semibold '>Welcome to your dashboard, Udemy school</p>
                    <p className='text-[#464646] text-[25px] font-semibold ml-10 '>Uyo/school/@teachable.com</p>
                </div>
                {/* items-button-div */}
                <div className="flex py-5 pl-8 pr-1 ">
                    {/* items-div */}
                    <div className="flex flex-col gap-5 ">
                        {items_array.map((data, ind) => (
                            <div key={ind} className="flex gap-3 ">
                                {/* icon */}
                                <div className=" flex items-start ">
                                    <div className="h-9 w-9 flex justify-center items-center rounded-[5px] bg-[#EFF3FA] ">
                                        {data.icon}
                                    </div>
                                </div>
                                {/* text */}
                                <div className="">
                                    <p className='text-[#464646] text-[25px] font-semibold '>{data.title}</p>
                                    <p>
                                        {data.description.map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                {i !== data.description.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        ))
                        }


                    </div>
                    {/* button-div */}
                    <div className="h-full flex justify-end items-end flex-1 py-5 px-5 ">
                        {/* button */}
                        <div className="py-3 px-4 flex items-center gap-5 text-center bg-[#152259] rounded-[30px] ">
                            {/* text-first-icon */}
                            <div className=" flex items-center gap-1 ">
                                <div className="h-5 w-5 flex justify-center items-end ">
                                    <RiHeadphoneFill className='text-[white]' />
                                </div>
                                <p className='text-[14px] text-[white] '>Support</p>
                            </div>
                            {/* last-icon */}
                            <div className="h-4 w-4 flex items-start justify-center mt-1 ">
                                <IoIosArrowUp className='text-[white] scale-[1] ' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Desktop_Link_1
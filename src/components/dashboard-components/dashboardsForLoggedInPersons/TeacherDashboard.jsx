import React, { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import { PiBellThin } from 'react-icons/pi';
import LightBgText from '../../subComponents/LightBgText';
import { MdOutlineDelete } from 'react-icons/md';
import Modal from '../../commons/Modal';

const TeacherDashboard = () => {

    const { isAuthenticated, login, logout } = useAuth()
    const [isOpenDeleteMadal, setIsOpenDeleteMadal] = useState(false)
    const [indexForDeleteAnnouncement,setIndexForDeleteAnnouncement] = useState()
    // console.log("🚀 ~ TeacherDashboard ~ indexForDeleteAnnouncement:", indexForDeleteAnnouncement)
    const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher"))
    const announcement = JSON.parse(localStorage.getItem("announcement") || "[]")
    // console.log("🚀 ~ TeacherDashboard ~ announcement:", announcement?.length)
    const name = loggedInTeacher?.name
    const clas = loggedInTeacher?.class
    const gender = loggedInTeacher?.gender

    const handleSetInd = (ind) => {
        setIndexForDeleteAnnouncement(ind)
        setIsOpenDeleteMadal(true)
    }
    const handleDelete = () => {
        const updated = announcement.filter((_,ind) => ind !== indexForDeleteAnnouncement )
        console.log("🚀 ~ handleDelete ~ updated:", updated)
        localStorage.setItem("announcement", JSON.stringify(updated))
        setIsOpenDeleteMadal(false)
    }

    const handleLogout = () => {
        logout()
        localStorage.removeItem("logedInTeacher")
    }
    return (
        <div className='h-screen container overflow-hidden relative '>
            {/* delete modal */}
            <Modal className={` mr-[28rem] `} isOpen={isOpenDeleteMadal} onClose={() => setIsOpenDeleteMadal(false)}>
                <div className="h-[100px] w-[250px] flex flex-col items-center justify-between gap-2 ">
                    <p className='text-[red] text-[22px] font-semibold '>
                        Are you sure?
                    </p>
                    <div className=" w-9/10 h-20 flex justify-between items-center ">
                        <button onClick={() => setIsOpenDeleteMadal(false)} className='transition-all duration-200 ease-in h-8 scale-[1.1] whitespace-nowrap py-1 px-4 rounded-[5px] text-[13px] bg-[#38b924] shadow-2xl text-white font-semibold '>
                            No
                            {/* bg-[#8cde7f] */}
                        </button>
                        <button onClick={handleDelete} className='transition-all duration-200 ease-in h-8 hover:scale-[1.1] whitespace-nowrap py-1 px-4 rounded-[5px] text-[13px] bg-[#e38080] hover:bg-[#df2525] hover:shadow-2xl text-white font-semibold '>
                            Yes
                        </button>
                    </div>
                </div>
            </Modal>
            {/* navbar */}
            <div className="h-13 w-full px-5 flex justify-between items-center bg-slate-400 absolute ">
                {/* student's profile */}
                <div
                    style={{
                        gridTemplateColumns: `40px 1px 1fr`,
                        gridTemplateRows: `1fr`
                    }} className=' container h-full w-3/10 grid gap-1 ' >
                    {/* profile/img */}
                    <div style={{ gridRow: 'span 1' }} className="flex justify-center items-center ">
                        <div className="h-10 w-10 rounded-full bg-[blue] "></div>
                    </div>
                    <div style={{ gridColumn: 'span 1', gridRow: 'span 1' }} className=""></div>
                    {/* name or class */}
                    <div style={{ gridRow: 'span 1' }} className="flex flex-col justify-center ">
                        <p className='text-[18px] font-semibold '>{name}</p>
                        <p className='text-[12px] '>{clas}</p>
                    </div>
                </div>

                {/* logout-btn or notification-icon */}
                <div className=" flex gap-5 items-center px-2 ">
                    <div className="h-8 w-8 flex justify-center items-center relative ">
                        <div className="h-full w-full py-[2px] px-[2px] flex justify-end absolute ">
                            <div className="h-[12px] w-[12px] rounded-full bg-[#1b7ccb] "></div>
                        </div>
                        <PiBellThin className='text-[50px] ' />
                    </div>
                    <LightBgText onClick={handleLogout} lable='Log out'
                        className=' py-1 px-6 rounded-[5px] !bg-[#dadada] !text-[#000000] flex justify-center items-center' />
                </div>
            </div>

            {/* center contant */}
            <div className="h-full flex flex-col px-5 bg-[#131e4e] pt-20 overflow-y-scroll ">
                {/* profile */}
                <div className="blue_bg_effect px-10 h-[10rem] flex justify-between border-[2px] rounded-[20px] ">
                    {/* name */}
                    <div className="h-full flex items-center ">
                        <p className='text-[35px] text-[#cfcece] '>
                            Wellcome Back {name}! <br />
                            <span className='text-[25px] text-[#cfcece] '>
                                Always stay updated in your teacher portal
                            </span>
                        </p>
                    </div>
                    {/* profile-img */}
                    <div className="h-full flex justify-center items-center ">
                        <div className="blue_bg_effect h-50 w-50 flex justify-center items-center rounded-full">
                            <div className="h-45 w-45 overflow-hidden rounded-full ">
                                {gender == "Male" ?
                                    <img src="/dashboard-imgs/teacher_avatar_boy.PNG" alt="" />
                                    :
                                    <img src="/dashboard-imgs/teacher_avatar_girl.PNG" alt="" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* other contant */}
                <div style={{
                    gridTemplateColumns: `69% 30%`,
                    gridTemplateRows: `100px 100px 1fr`
                }}
                    className="h-130 w-full grid gap-[1%] py-1 mt-10 ">
                    <div style={{ gridColumn: 'span 1', gridRow: 'span 2' }} className=" flex flex-col gap-2 px-2 ">
                        {/* current student's ___ div */}
                        <p className='text-[18px] font-semibold text-[#cfcece]'>SomeThings</p>
                        <div className=" flex justify-center items-center gap-5 ">
                            <div className="blue_bg_effect h-40 w-40 rounded-[10px] "></div>
                            <div className="blue_bg_effect h-40 w-40 rounded-[10px] "></div>
                            <div className="blue_bg_effect h-40 w-40 rounded-[10px] "></div>
                            <div className="blue_bg_effect h-40 w-40 rounded-[10px] "></div>
                        </div>
                    </div>
                    {/* current student's teachers div */}
                    <div style={{ gridColumn: 'span 1', gridRow: 'span 1' }} className=" flex flex-col gap-2 ">
                        <p className='text-[18px] font-semibold text-[#cfcece]'>Current present teachers</p>
                        <div className="blue_shadow_effect rounded-[5px] flex items-center overflow-y-hidden overflow-x-scroll gap-5 ">
                            <div className="h-20 flex justify-center items-center gap-5 px-4 ">
                                <div className="blue_bg_effect h-10 w-10 mb-1 rounded-full hover:scale-[1.2] transition-all duration-200 ease-in "></div>
                                <div className="blue_bg_effect h-10 w-10 mb-1 rounded-full hover:scale-[1.2] transition-all duration-200 ease-in "></div>
                                <div className="blue_bg_effect h-10 w-10 mb-1 rounded-full hover:scale-[1.2] transition-all duration-200 ease-in "></div>
                                <div className="blue_bg_effect h-10 w-10 mb-1 rounded-full hover:scale-[1.2] transition-all duration-200 ease-in "></div>
                                <div className="blue_bg_effect h-10 w-10 mb-1 rounded-full hover:scale-[1.2] transition-all duration-200 ease-in "></div>
                                <div className="blue_bg_effect h-10 w-10 mb-1 rounded-full hover:scale-[1.2] transition-all duration-200 ease-in "></div>
                            </div>
                        </div>
                    </div>
                    {/* announcement div */}
                    <div style={{ gridColumn: 'span 1', gridRow: 'span 2' }} className=" flex flex-col gap-2 ">
                        <p className='text-[18px] font-semibold text-[#cfcece]'>Announcement </p>
                        <div className="blue_shadow_effect w-1/1 h-45 flex flex-col items-center overflow-y-scroll rounded-[5px] pb-2 ">
                            {announcement?.length ? (announcement?.reverse()?.map((data, ind) => (
                                <div key={ind} className="blue_bg_effect w-18/20 px-2 py-2 mt-3 rounded-[5px] break-words mb-1 ">
                                    <div className="flex justify-between ">
                                        <p className='text-[17px] text-[#cfcece] font-semibold '>{data?.title}</p>
                                        <MdOutlineDelete onClick={() => handleSetInd(ind)}
                                            className='ml-20 text-[20px] text-[#ea4545] hover:scale-[1.4] hover:text-[red] duration-300 transition-all ' />
                                    </div>

                                    <p className='text-[14px] text-[#cfcece] '>{data?.text}</p>
                                </div>
                            ))) : (
                                <div className="blue_bg_effect flex justify-center items-center h-18/20 w-18/20 px-2 py-2 mt-2 rounded-[5px] ">
                                    <p className='text-[18px] font-semibold text-[#8d8d8d]'>Not any announcement!</p>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    {/* current student's un-paid feeses div */}
                    <div style={{ gridColumn: 'span 1', gridRow: 'span 2' }} className=" flex flex-col gap-1 ">
                        <p className='text-[18px] font-semibold text-[#cfcece]'>Un-paid Feeses</p>
                        <div className="w-1/1 h-20 flex items-center overflow-x-scroll px-2 ">
                            <div className="blue_bg_effect h-5/10 min-w-40 flex justify-center items-center px-2 rounded-[5px] ">
                                <p className='text-[17px] font-semibold text-[#cfcece]'>
                                    Addmission Fees
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard

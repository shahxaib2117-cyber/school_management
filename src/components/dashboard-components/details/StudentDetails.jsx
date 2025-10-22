import React, { useEffect, useRef, useState } from 'react'
import { IoSchoolOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
// h-[35rem] w-80 
const StudentDetails = ({ ...props }) => {

    const cls = props?.students?.filter((dat, ind) => dat.class == props?.studentDetails?.class);

    useEffect(() => {
    }, [props?.teachersFromSameClass])

    const clsLength = cls.length

    const margin = ['ml-0', 'ml-5', 'ml-10', 'ml-15', 'ml-20']

    const teachersOfSameClass = props?.teachersFromSameClass

    const teachersLength = teachersOfSameClass.length

    const handleClose = () => {
        props?.setOpenStudentDetails(false)
        setTimeout(() => {
            props?.setStudentDetails(null)
        }, 500);
        props?.setIsClicked(null)
    }

    return (<>
        {/* {props?.openStudentDetails ? ( */}
        <div className={`transform transition-all duration-500 ease-in ${props?.openStudentDetails ? `translate-x-0 opacity-[1] ` : `translate-x-full opacity-[0] `} right-0 absolute z-20 `} >
            <div className=" px-5 rounded-[5px] shadow-md bg-[#ffffff] border-t-[2px] border-[#6b6b6b] pb-2">
                {/* { props?.studentDetails ? ( */}
                <div className='h-[31rem] w-[14rem] overflow-y-scroll '>
                    <div className='min-h-[31rem] w-full overflow-y-scroll mt-1 flex flex-col '>
                        {/* FIRST_CHILD */}
                        {/* profile div */}
                        <div className="h-[270px] flex flex-col items-center ">
                            {/* roll nomber/student id */}
                            <div className=" w-full flex mt-3 justify-between ">
                                <div className=""></div>
                                <p className=' font-semibold text-[#4F4F4F] text-[17px] '>{props?.studentDetails?.studentId}</p>
                                <div onClick={() => handleClose()} className="cursor-pointer text-[#838080] hover:text-[#4F4F4F] 
                        hover:font-semibold hover:scale-[1.1] duration-100 ">✕</div>
                            </div>
                            {/* img */}
                            <div className="h-37 w-37 mt-2 flex justify-center items-center rounded-full bg-slate-500 ">
                                {/* <img src={props?.studentDetails?.image} alt="sdsdfdsa" /> */}
                            </div>
                            <p className='text-[19px]  font-semibold text-[#000000] '>{props?.studentDetails?.name}</p>
                            <p className='text-[15px]  font-semibold text-[#858585] '>{props?.studentDetails?.subject}</p>
                            {/* icons */}
                            <div className=" flex items-center mt-2 gap-3">
                                <div className="h-9 w-9 flex justify-center items-center bg-[#cfe7fcfa] rounded-[10px] ">
                                    <IoSchoolOutline className='text-[30px] text-[#c1c0c0] ' />
                                </div>
                                <div className="h-9 w-9 flex justify-center items-center bg-[#cfe7fcfa] rounded-[10px] ">
                                    <IoCallOutline className='text-[27px] text-[#c1c0c0] ' />
                                </div>
                                <div className="h-9 w-9 flex justify-center items-center bg-[#cfe7fcfa] rounded-[10px] ">
                                    <IoMailOutline className='text-[30px] font-semibold text-[#c1c0c0] ' />
                                </div>
                            </div>
                        </div>
                        {/* SECOND_CHILD */}
                        {/* about div */}
                        <div className="h-[200px] flex flex-col items-center overflow-y-scroll ">
                            {/* about title div */}
                            <div className="w-full ">
                                <p className='text-[20px] font-semibold '>About </p>
                            </div>
                            {/* student's age or gender div */}
                            <div className="w-full flex mt-5 gap-20 ">
                                {/* student's age */}
                                <div className="">
                                    <p className=' font-semibold text-[#000000] '>Age</p>
                                    <p className='text-[13px]  font-semibold text-[#858585] '>{props?.studentDetails?.age}</p>
                                </div>
                                {/* student's gender */}
                                <div className="">
                                    <p className=' font-semibold text-[#000000] '>Gender</p>
                                    <p className='text-[13px]  font-semibold text-[#858585] '>{props?.studentDetails?.gender}</p>
                                </div>
                            </div>
                            {/* students of the same class */}
                            {/* title */}
                            <div className="w-full mt-2 ">
                                <p className='font-semibold'>People from the same class</p>
                            </div>
                            {/* imgs */}
                            <div className="w-full flex items-center mt-3">
                                <div className="flex items-center relative ">
                                    {cls.slice(0, 5).map((dat, ind) => (
                                        <div key={ind} className={`${ind >= 1 ? `${margin[ind]} absolute z-1` : ``} h-9 w-9 rounded-full border-[2px] border-[#3d3d3d] bg-[#cac9c9] `}></div>
                                    ))
                                    }
                                </div>
                                {clsLength > 5 ?
                                    <p className='text-[#3ca9f1] whitespace-nowrap font-semibold text-[14px] ml-21 '>+{clsLength - 5} more</p>
                                    : ''
                                }
                            </div>
                        </div>
                        {/* third child */}
                        {/* teacher of the same class */}
                        {/* {
                            teachersLength > 0 ?
                                <div className="w-full ">
                                    <p className='font-semibold'>Teachers from the same class</p>
                                </div> :
                                <div className="w-full border-[2px] border-[#fa2626] rounded-[5px] bg-[#f55555ae] ">
                                    <p className='text-center text-[#ffffff] fontold'>This class don't have any Teacher!</p>
                                </div>
                        } */}

                        {/* imgs */}
                        <div className="w-full hidden items-center">
                            <div className="flex flex-col items-center ">
                                {teachersOfSameClass.map((dat, ind) => (
                                    <div key={ind} className={`transition-all ease-in duration-700 w-full flex flex-col py-2 px-2 rounded-[5px] shadow-md mt-2 border-[2px] bg-[#f6f5f5] border-[#cfcfcf] `} >
                                        <div className="w-full flex justify-between ">
                                            <div className=" h-9 w-9 rounded-full border-[2px] border-[#3d3d3d] bg-[#4cda45]  "></div>
                                            {/* <div onClick={() => closeTeacherDetails()} className="h-5 flex justify-center items-center px-1 cursor-pointer duration-100 transition-all ease-in hover:bg-[#ee4646] text-[12px] hover:text-white">
                                                ✕
                                            </div> */}
                                        </div>
                                        {/* name */}
                                        <div className=" mt-2 items-center">
                                            <p className='text-[14px] font-semibold text-[#000000] '>Name </p>
                                            <p className='text-[14px] font-semibold block text-[#858585] '>{dat.name}</p>
                                        </div>
                                        <div className="w-full flex mt-2 gap-5 ">
                                            {/* teacher's age */}
                                            <div className="">
                                                <p className=' font-semibold text-[#000000] '>Age</p>
                                                <p className='text-[13px]  font-semibold text-[#858585] '>{dat.age}</p>
                                            </div>
                                            {/* teacher's gender */}
                                            <div className="">
                                                <p className=' font-semibold text-[#000000] '>Gender</p>
                                                <p className='text-[13px]  font-semibold text-[#858585] '>{dat.gender}</p>
                                            </div>
                                            {/* teacher's gender */}
                                            <div className="">
                                                <p className=' font-semibold text-[#000000] '>Subjects</p>
                                                <p className='text-[13px]  font-semibold text-[#858585] '>{dat.subject}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* //  </div>
         ) : ''
         } */}
    </>
    )
}

export default StudentDetails

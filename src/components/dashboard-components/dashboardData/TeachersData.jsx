import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const TeachersData = (props) => {

  const { value, teachers, deleteTeacher, editTeacher, setTeacherDetails, openTeacherDetails } = props
  // console.log(editTeacher)
  const handleClick = (ind) => {
    const selectTeacher = teachers[ind]
    setTeacherDetails(selectTeacher)
  }
  const filtered = teachers.filter((sub) =>
    (sub.name || "").toLowerCase().includes((value || "").toLowerCase()) ||
    (sub.email || "").toLowerCase().includes((value || "").toLowerCase()) ||
    (sub.gender || "").toLowerCase().includes((value || "").toLowerCase())
  );

  const logedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher")) || [];

  return (
    <div className={` h-[25rem] w-full overflow-hidden bg-white transform transition-all duration-1000 ${openTeacherDetails ? `opacity-0 ` : `opacity-100 `} `} >
      {/* list titles */}
      <div className=" h-7 fixed bg-white flex items-center gap-20">
        <p className='text-[14px] text-[#152259] font-semibold '>Name</p>
        <p className='text-[14px] text-[#152259] font-semibold opacity-0 ml-20 '>Subject</p>
        <p className='text-[14px] text-[#152259] font-semibold opacity-0 '>Class</p>
        <p className='text-[14px] text-[#152259] font-semibold '>Email Address</p>
        <p className='text-[14px] text-[#152259] font-semibold ml-28 '>Gender</p>
        <p className='text-[14px] text-[#152259] font-semibold ml-2 '>Edit</p>
        <p className='text-[14px] text-[#152259] font-semibold '>Delete</p>
      </div>
      {/* list */}
      <div className="ml-2 mt-10 overflow-y-scroll ">
        <ul className='max-h-[25rem] flex flex-col overflow-y-scroll gap-1'>
          {filtered.length >= 0 ? (filtered.map((data, ind) => (
            <li key={ind} className={`${ind % 2 !== 0 ? `bg-[#ececff]` : ``}
             shadow-md h-8 py-5 w-full flex items-center rounded-[5px]`}>
              {/* img */}
              <div onClick={() => handleClick(ind)} className="w-48 pl-2 cursor-pointer flex items-center gap-1">
                <div className="h-7 w-7 rounded-full bg-red-300 "></div>
                <p className={`text-[14px] font-semibold `}>
                  {data.name}
                </p>
              </div>
                <p className={`w-30 text-[14px] bg-red-400 font-semibold `}>
                  {/* {data?.subject} */}
                </p>
                <p className={`w-30 text-[14px] bg-red-400 font-semibold `}>
                  {/* {data.class} */}
                </p>
                <p className={`w-70 text-[14px] font-semibold `}>
                  {data.email}
                </p>
                <p className={`w-30 text-[14px] font-semibold `}>
                  {data.gender}
                </p>
              <FaRegEdit onClick={() => editTeacher(ind)}
                className='ml-5 text-[20px] text-[#4040e3] hover:scale-[1.3] hover:text-[blue] duration-300 transition-all  ' />
              <MdOutlineDelete onClick={() => deleteTeacher(ind)}
                className='ml-20 text-[20px] text-[#ea4545] hover:scale-[1.4] hover:text-[red] duration-300 transition-all ' />
            </li>
          ))) : <div className="flex justify-center items-center">
            <p className='text-[60px] font-semibold text-[#383838] '>Teachers Not Found !</p>
          </div>
          }

        </ul>
      </div>
    </div >
  )
}

export default TeachersData

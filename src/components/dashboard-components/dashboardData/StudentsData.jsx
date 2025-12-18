import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const StudentsData = (props) => {

    const { value,
        students,
        deleteStudent,
        editStudent,
        studentDetails,
        setStudentDetails,
        openStudentDetails,
        setOpenStudentDetails,
        isClicked,
        setIsClicked,
        logedInTeacher } = props

    const loggedStudent = JSON.parse(localStorage.getItem("logedInStudent" || '{}'))
    const logedInTeachar = JSON.parse(localStorage.getItem("logedInTeacher") || "{}");
    const handleClick = (ind) => {
        const seclectStudent = students[ind];
        if (studentDetails !== seclectStudent) {
            setIsClicked(ind)
            setStudentDetails(seclectStudent)
        } else {
            setIsClicked(null)
            setOpenStudentDetails(false)
            setTimeout(() => {
                setStudentDetails(null)
            }, 500);
        }
    }

    const [pageNum, setPageNum] = useState(0)

    // getting Students Of Logined Teacher
    const filterstudentsOfCurrentTeachered = students?.filter((data, ind) => data?.class?.toLowerCase() == logedInTeachar?.schoolClass)
    const getStudentsOfLoginedTeacher = filterstudentsOfCurrentTeachered || students
    console.log("🚀 ~ StudentsData ~ getStudentsOfLoginedTeacher:", getStudentsOfLoginedTeacher)
    const finalNum = pageNum * 8
    const selectedArrayForMap = getStudentsOfLoginedTeacher?.slice(finalNum, finalNum + 8)

    const filtered = selectedArrayForMap.filter((sub) =>
        (sub?.name || "").toLowerCase().includes((value || "").toLowerCase()) ||
        (sub?.email || "").toLowerCase().includes((value || "").toLowerCase()) ||
        (sub?.class || "").toLowerCase().includes((value || "").toLowerCase()) ||
        (sub.studentId?.toString() || "").toLowerCase().includes((value || "").toLowerCase()) ||
        (sub.gender || "").toLowerCase().includes((value || "").toLowerCase())
    );

    const catchValidity = ((pageNum + 1) * 8) >= getStudentsOfLoginedTeacher?.length

    return (
        <div className='w-full bg-white '>
            {/* list titles */}
            <div className="duration-500 transition-all ease-in h-7 fixed bg-white flex items-center pr-5">
                <p className={`duration-500 transition-all ease-in ${openStudentDetails != false ? `w-51` : `w-60`} text-[14px] text-[#152259] font-semibold `}>
                    Name
                </p>
                <p className={`duration-500 transition-all ease-in whitespace-nowrap ${!openStudentDetails ? "max-w-40 opacity-100" : "opacity-0 max-w-0 "} w-40 text-[14px] text-[#152259] font-semibold `}>
                    Students Id
                </p>
                <p className='w-30 text-[14px] text-[#152259] font-semibold '>Class</p>
                <p className={`duration-500 transition-all ease-in ${openStudentDetails != false ? `w-60` : `w-80`} text-[14px] text-[#152259] font-semibold `}>Email Address</p>
                <p className='w-20 text-[14px] text-[#152259] font-semibold '>Gender</p>
                {
                    !loggedStudent ? (
                        <>
                            <p className='w-15 text-[14px] text-[#152259] font-semibold '>Edit</p>
                            <p className='w-15 text-[14px] text-[#152259] font-semibold '>Delete</p>
                        </>
                    ) : ''
                }

                <div className="flex-1"></div>
            </div>
            {/* list */}
            <div className="ml-2 mt-7 ">
                <ul className='h-[22rem] flex flex-col gap-1 overflow-y-scroll'>
                    {filtered?.map((data, ind) => (
                        <li key={finalNum + ind}
                            className={`${loggedStudent?.name == data?.name && '!bg-slate-600 '}
                            ${isClicked == (finalNum + ind) ? `!bg-[#66a5ec]` : ` even:bg-[#ececff]`} duration-200
                            transition-all ease-in shadow-md h-8 py-5 overflow-hidden w-full flex items-center rounded-[5px]`}>
                            {/* img */}
                            <div onClick={() => handleClick(finalNum + ind)}
                                className={` pl-2 flex items-center cursor-pointer gap-1 duration-500 transition-all ease-in ${openStudentDetails != false ? `w-50` : `w-60`}`} >
                                <div className="h-7 w-7 flex justify-center rounded-full bg-red-400 ">
                                    <img src={data?.image || null} className='' alt="" />
                                </div>
                                <p className={`${loggedStudent?.name == data?.name ? 'text-[#ffffff]' : ''}
                            ${isClicked == (finalNum + ind) ? `text-[#ffffff]` : `text-[#152259] `} duration-200 transition-all ease-in text-[14px] font-semibold  `} >{data.name}</p>
                            </div>
                            <p className={`duration-500 transition-all ease-in overflow-hidden ${loggedStudent?.name == data?.name ? 'text-[#ffffff]' : ''} ${!openStudentDetails ? "max-w-40 opacity-100" : "max-w-0 opacity-0"} w-40 text-[14px] text-[#152259] font-semibold `}>{data.studentId}</p>
                            <p className={`${loggedStudent?.name == data.name ? 'text-[#ffffff]' : ''}
                            ${isClicked == (finalNum + ind) ? `text-[#ffffff]` : `text-[#152259] `} duration-400 transition-all ease-in w-30 text-[14px] font-semibold `} >
                                {data.class}
                            </p>
                            <p className={`text-[14px] ${loggedStudent?.name == data?.name ? 'text-[#ffffff]' : ''}
                            ${isClicked == (finalNum + ind) ? `text-[#ffffff]` : `text-[#152259] `} font-semibold duration-500 transition-all ease-in ${openStudentDetails != false ? `w-60` : `w-80`} `} >{data.email}</p>
                            <p className={`w-20 text-[14px] ${loggedStudent?.name == data?.name ? 'text-[#ffffff]' : ''}
                            ${isClicked == (finalNum + ind) ? `text-[#ffffff]` : `text-[#152259] `} duration-400 transition-all ease-in font-semibold `} >
                                {data.gender}
                            </p>
                            <div className="w-15 ">
                                <FaRegEdit onClick={() => editStudent(finalNum + ind)}
                                    className=' text-[20px] text-[#4040e3] hover:scale-[1.3] cursor-pointer
                                     hover:text-[blue] duration-300 transition-all  ' />
                            </div>
                            <div className="w-15 ">
                                <MdOutlineDelete onClick={() => deleteStudent(finalNum + ind)}
                                    className='text-[20px] text-[#ea4545] hover:scale-[1.4] cursor-pointer
                                 hover:text-[red] duration-300 transition-all ' />
                            </div>

                        </li>
                    ))
                    }

                </ul>
                <div className="h-15 w-full flex justify-center items-center ">
                    {/* center contant wraper */}
                    <div className={`h-12 w-5/20 ${getStudentsOfLoginedTeacher.length > 8 ? ` flex ` : `hidden `} justify-between items-center `} >
                        <button disabled={pageNum < 1} onClick={() => setPageNum(pageNum - 1)} className="h-8 w-12 pb-[2px] text-[14px] rounded-[5px]
                         text-white font-semibold bg-[#3657e8] disabled:bg-[#838383] ">
                            prev
                        </button>
                        {/* numbers of pages wrapper */}
                        <div className=" w-[5/10] flex justify-center items-center gap-2">
                            {/* {pageNum > 0 && */}
                            <div className={`h-7 w-7 text-[15px] ${pageNum > 0 ? `opacity-100 ` : `opacity-0`} flex justify-center items-center font-semibold overflow-hidden bg-slate-200 rounded-[5px] relative `} >
                                <div className="light-glassmorphism h-full w-full absolute "></div>
                                {pageNum}
                            </div>
                            {/* } */}

                            <div className=" h-9 w-9 text-[19px] flex justify-center items-center font-semibold bg-slate-200 rounded-[5px] ">{pageNum + 1}</div>

                            {/* {!catchValidity &&  */}
                            <div className={` ${!catchValidity ? `opacity-100 ` : `opacity-0`} h-7 w-7 text-[15px] flex justify-center items-center 
                                 font-semibold overflow-hidden bg-slate-200 rounded-[5px] relative `} >
                                <div className="light-glassmorphism h-full w-full absolute "></div>
                                {pageNum + 2}
                            </div>
                            {/* } */}
                        </div>
                        <button disabled={catchValidity} onClick={() => setPageNum(pageNum + 1)}
                            className="h-8 w-12 pb-[2px] text-[14px] rounded-[5px] text-white font-semibold bg-[#3657e8] disabled:bg-[#838383] ">
                            next
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StudentsData
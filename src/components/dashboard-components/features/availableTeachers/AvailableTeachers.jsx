import React, { useEffect, useState } from 'react'

const AvailableTeachers = ({ ...props }) => {

    const teachers = JSON.parse(localStorage.getItem("teachers") || "[]")
    // console.log("🚀 ~ AvailableTeachers ~ teachers:", teachers)

    const [filteredTeachers, setFilteredTeachers] = useState()
    const [existingSubjects, setExistingSubjects] = useState()


    useEffect(() => {
        setFilteredTeachers(teachers)
    }, [])

    const [selectedSubjectsArray, setSelectedSubjectsArray] = useState([])
    console.log("🚀 ~ AvailableTeachers ~ selectedSubjectsArray:", selectedSubjectsArray)
    const [teacherIndex, setTeacherIndex] = useState()

    const handleGetTeacher = (teacher) => {
        const teacherName = teacher.name
        // getting all teachers of current student
        const foundTeachers = teachers?.filter((data) => data.seats?.some((set) => set.studentName == props?.get__ind?.name))
        // getting current teacher
        const getCurrentTeacher = foundTeachers?.filter((data) => data.name == teacherName)
        console.log("🚀 ~ handleGetTeacher ~ getCurrentTeacher:", getCurrentTeacher)
    }

    const handleAdd = (subject) => {
        if (teacherIndex == null) return;
        const teachar = filteredTeachers[teacherIndex]
        const teacherName = teachar.name;

        let obj = { sub: subject, teacher: teacherName }

        setSelectedSubjectsArray((prev) => {
            const check = prev.some((item) => item?.sub == subject)
            let updated;
            if (check) {
                updated = prev.filter((data, ind) => data.sub !== subject)
            } else if (prev.length >= 5) {
                return prev
            } else {
                updated = [...prev, obj]
            }
            return updated
        })
    }

    const grouped = selectedSubjectsArray.reduce((acc, curr) => {
        const existing = acc.find((item) => {
            console.log("🚀 ~ AvailableTeachers ~ curr.teacher:", curr.teacher)
            return item.teacher === curr.teacher;
        });
        if (existing) {
            existing.sub.push(curr.sub);
        } else {
            acc.push({
                teacher: curr.teacher,
                sub: [curr.sub],
            });
        }
        return acc;
    }, []);

    const handleClick = () => {
        const updatedTeachers = teachers?.filter((item) => {
            return grouped.filter((item2) => {
                if (item2.teacher == item.name) {
                    item2.teacherId = item.teacherId;
                    let obj = {
                        studentName: props?.studentName,
                        bookedSeats: grouped?.length,
                        bookedSubjects: item2?.sub
                    }
                    item?.seats?.push(obj)
                }
            });
        })
        localStorage.setItem("teachers", JSON.stringify(updatedTeachers))
        props.clicked()
    }

    const editing = props?.get__ind !== undefined;

    return (
        <>
            <p className=' text-[20px] font-semibold '>Available teachers</p>
            <div className='h-100 w-200 overflow-y-scroll border-[2px] rounded-[5px] '>
                <div className=' min-h-100 w-full flex flex-col gap-3 px-3 py-3 '>
                    {filteredTeachers ? (filteredTeachers.map((teacher, index) => {
                        return (
                            <div key={index} className={` flex duration-300 ease-in-out overflow-hidden min-h-40 w-full flex-col border-2 rounded-md px-2 py-1 gap-2`} >
                                <div className=" w-full flex justify-between px-2 py-1 gap-2 ">
                                    <div className="h-full max-w-100 flex items-center gap-1 px-1 ">
                                        <div className="h-7 w-7 rounded-full bg-slate-500 "></div>
                                        <p className='text-[16px] font-semibold '>{teacher.name}</p>
                                    </div>
                                    {teacherIndex != index ?
                                        <button disabled={!editing && teacher?.seats?.length == 5} onClick={() => { handleGetTeacher(teacher), setTeacherIndex(index) }} className='px-3 py-1 disabled:bg-[#a7a7a7] rounded-[5px] bg-[#5ede4b] text-[white] '>Select subjects</button>
                                        :
                                        teacherIndex == index ?
                                            <button onClick={() => setTeacherIndex(null)} className='px-3 py-1 rounded-[5px] bg-[#4779e5] text-[white] '>Done</button>
                                            :
                                            <button className={`px-3 py-1 rounded-[5px] bg-[#4b72de] text-[white] `}>Book</button>
                                    }
                                </div>
                                {teacherIndex == index ? (
                                    <div className={`transition-all duration-200 ease-in-out ${teacherIndex === index
                                        ? "max-h-[400px] opacity-100"
                                        : "max-h-[0px] opacity-0 mt-0"
                                        } overflow-hidden`}>
                                        <div className={`h-7 w-full flex bg-[#ffffff] `}>
                                            <div className="h-full w-53 flex justify-center items-center font-semibold ">Avalaible subjects</div>
                                            <div className="h-full w-50 flex items-center font-semibold ">Teachers name</div>
                                            <div className="h-full flex-1 flex items-center font-semibold ">Selected subjects</div>
                                        </div>
                                        <div className={`transition-all ease-in delay-300 h-65 w-full flex `}>
                                            {/* available---subjects */}
                                            <div className={`transition-all ease-in h-64 w-50 overflow-y-scroll border-[2px] border-[#ff2222] `}>
                                                <div className={`min-h-60 flex flex-col items-center gap-2 py-2 `}>
                                                    {filteredTeachers[teacherIndex]?.subject?.map((subject, ind) => {
                                                        const exist = selectedSubjectsArray.find((item) => item.sub == subject);
                                                        const check = !!exist;
                                                        const ownedByThisTeacher = exist?.teacher === filteredTeachers[index].name;
                                                        return (
                                                            <button disabled={check && !ownedByThisTeacher} key={ind} onClick={() => handleAdd(subject)} className={`${selectedSubjectsArray.some((data) => data.sub == subject) ?
                                                                ' bg-[#484848] text-[#bdbdbd] ' : 'bg-[#c4c4c4] text-[#626262]'} duration-200 transition-all ease-in form-shadow rounded-[20px] text-[14px] h-6 px-2 flex justify-center items-center hover:text-[#e4e4e4] hover:bg-[#969696] `} >{subject}</button>
                                                        )
                                                    }
                                                    )
                                                    }
                                                </div>
                                            </div>
                                            {/* selected---subjects-div */}
                                            <div className={`transition-all ease-in h-64 flex-1 py-1 px-1 overflow-y-scroll border-[2px] border-[#ff2222] `}>
                                                <div className={`min-h-60 flex flex-col gap-2 `}>
                                                    {/* item--div */}
                                                    {grouped?.length > 0 ? (
                                                        grouped?.map((data, index) => (
                                                            <div key={index} className={`h-10 border-[2px] flex rounded-[5px] `}>
                                                                <div className={`h-full w-50 flex items-center pl-1 bg-amber-700 `}>
                                                                    <p>{data?.teacher}</p>
                                                                </div>
                                                                <div className={` h-full w-85 bg-amber-500 overflow-x-scroll`}>
                                                                    <div className={`h-full flex gap-1 items-center px-1 `}>
                                                                        {data?.sub.map((dat, ind) => (
                                                                            <button key={ind} className={`bg-[#c4c4c4] text-[#626262] duration-200 transition-all ease-in form-shadow rounded-[20px] text-[14px] h-6 px-2 flex justify-center items-center `} >{dat}</button>
                                                                        ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="h-60 w-full flex justify-center items-center ">selected subjects not found!</div>
                                                    )
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={`transition-all ease-in h-30 w-full flex justify-center items-center gap-2 `}>
                                        <p className={` text-[20px] font-semibold text-[#414241] `}>{5 - teacher?.seats?.length} seats left</p>
                                    </div>
                                )
                                }
                            </div>
                        )
                    }
                    )
                    ) : (
                        <div className=""></div>
                    )
                    }
                </div>
            </div>
            <button onClick={() => handleClick()} className='px-3 py-1 rounded-[5px] mt-1 bg-[#4781e5] text-[white] '>Add</button>
        </>
    )
}

export default AvailableTeachers
import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import LightBgText from '../../subComponents/LightBgText';

const TeachersModalContant = ({ ...props }) => {

    const getInd = props?.teachers.find((_, ind) => ind == props?.indexForEditTeacher);
    // console.log("🚀 ~ TeachersModalContant ~ getInd:", getInd)
    const formValidityForEdit = props?.indexForEditTeacher !== null && props?.indexForEditTeacher !== undefined;

    const teachers = JSON.parse(localStorage.getItem('teachers')) || []
    console.log("🚀 ~ TeachersModalContant ~ teachers:", teachers?.length)
    const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher"))

    const subjectsArray = ['english', 'urdu', 'math', 'science', 'computer', 'commerce', 'physics', 'chemistry']
    const [selectedSubjectsArray, setSelectedSubjectsArray] = useState([])

    useEffect(() => {
        if (formValidityForEdit && getInd?.subject?.length) {
            setSelectedSubjectsArray(getInd.subject);
        }
    }, [formValidityForEdit, getInd]);

    const handleAdd = (ind) => {
        const newSub = subjectsArray[ind]

        setSelectedSubjectsArray((prev) => {
            let updated;
            if (prev?.includes(newSub)) {
                updated = prev.filter(sub => sub !== newSub)
            } else {
                if (prev.length >= 5) return prev;
                updated = [...prev, newSub]
            }
            setTeachersFormData((prev) => ({
                ...prev,
                subject: updated
            }))
            return updated;
        }
        )
    }

    useEffect(() => {
        // console.log('props?.teachers :', props?.teachers.length)
    }, [props?.teachers])

    const [teachersFormData, setTeachersFormData] = useState(
        {
            desination: "teacher",
            name: formValidityForEdit ? getInd.name : "",
            email: formValidityForEdit ? getInd.email : "",
            gender: formValidityForEdit ? getInd.gender : "",
            subject: formValidityForEdit ? getInd.subject : [],
            seats: formValidityForEdit ? getInd.seats : [],
            age: formValidityForEdit ? getInd.age : "",
            teacherId: formValidityForEdit ? getInd.teacherId : "",
        }
    )

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('teachers')) || [];
        if (savedData.length > 0) {
            props.setTeachers(savedData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target
        setTeachersFormData(
            {
                ...teachersFormData,
                [name]: value,
                teacherId: teachers?.length + 1
            }
        )
    }

    const clicked = () => {
        if (props?.indexForEditTeacher != null) {
            const editedTeachers = [...props.teachers];
            editedTeachers[props?.indexForEditTeacher] = teachersFormData;
            props.setTeachers(editedTeachers);
            localStorage.setItem('teachers', JSON.stringify(editedTeachers));
        } else {
            const updatedTeachers = [...props.teachers, teachersFormData];
            props.setTeachers(updatedTeachers);
            localStorage.setItem('teachers', JSON.stringify(updatedTeachers));

        }

        setTeachersFormData({
            desination: "teacher",
            name: "",
            email: "",
            gender: "",
            subject: [],
            seats: []
        })
        props.setIsOpen(false)

        const updatedTeacher = {
            ...loggedInTeacher,
            subjects: selectedSubjectsArray,
            seats: []
        }

        // const updatedTeacherList = [...allLoggedInTeachers, updatedTeacher]

        localStorage.setItem("logedInTeacher", JSON.stringify(updatedTeacher))
        // localStorage.setItem("allLoggedInTeachers", JSON.stringify(updatedTeacherList))

        setSelectedSubjectsArray([])
    }

    const checkValidity = teachersFormData.desination === '' ||
        teachersFormData.gender === '' ||
        teachersFormData.class === '' ||
        teachersFormData.subject === '';

    return (
        <div className='pr-10 '>
            {/* first child titles or 1 input */}
            <div className="w-full flex gap-60 ">
                {/* ------------------------------titles-div------------------------------ */}
                <div className="flex flex-col gap-5 ">
                    {/* titles */}
                    <p className='text-[30px] text-[#3d3c3c] whitespace-nowrap font-semibold mt-5 '>Add Teachers </p>
                    <div className="flex gap-10 ">
                        <p className='text-[16px] text-[#3d3c3c] whitespace-nowrap font-semibold '>Manually </p>
                        <p className='text-[16px] text-[#3d3c3c] whitespace-nowrap font-semibold '>Import CSV </p>
                    </div>
                </div>
                {/* one input */}
                <div className="  w-70">
                    {/* <p className='text-[14px] text-[#000000] font-semibold ' >Desination </p>
                    <input type="text" onChange={handleChange} value={teachersFormData.desination} name='desination' className='px-2 text-[#000000] h-10 w-1/1 rounded-[5px] border-[2px] border-[#bcbaba] ' /> */}
                </div>
            </div>
            {/* ------------------------------inputs - div ------------------------------*/}
            <div className=" ">
                {/* input-1 full name input div */}
                <div className="mt-5 ">
                    <p className='text-[14px] text-[#000000] font-semibold ' >Full Name </p>
                    <input type="text" name='name' onChange={handleChange} placeholder='Enter Your Name...' value={teachersFormData.name} className='px-2 text-[#000000] h-10 w-18/20 rounded-[5px] border-[2px]  border-[#bcbaba]' />
                </div>
                {/* email-class or gender div */}
                <div className=" w-full mt-5 flex gap-10 items-end ">
                    {/* <div className=""> */}
                    <div className=" w-8/20  ">
                        <p className='text-[14px] text-[#000000] font-semibold ' >Email Address</p>
                        <input type="text" name='email' onChange={handleChange} placeholder='Enter Your Email... ' value={teachersFormData.email} className='px-2 text-[#000000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                    </div>
                    {/* gender */}
                    <div className="h-10 w-20/100 rounded-[5px] border-[2px]  border-[#bcbaba] ">
                        <select className='h-full px-2 py-1 text-[16px] text-[#000000] rounded-[5px] outline-none '
                            id="gender" onChange={handleChange} value={teachersFormData.gender} name="gender">
                            <option className='text-[16px] text-[black] ' value="" disabled>Gender</option>
                            <option className='text-[16px] text-[black] '>Male</option>
                            <option className='text-[16px] text-[black] '>Female</option>
                            <option className='text-[16px] text-[black] '>Costom</option>
                        </select>
                    </div>
                    {/* class */}
                    {/* age */}
                    <div className=" w-3/20 ">
                        <p className='text-[14px] text-[#000000] font-semibold ' >Age </p>
                        <input type="number" onChange={handleChange} value={teachersFormData.age} placeholder='Age' name='age' className='px-2 text-[#000000] h-10 w-1/1 rounded-[5px] border-[2px] border-[#bcbaba] ' />
                    </div>
                    {/* </div> */}
                </div>
                {/* subject */}
                <div className="mt-5 h-35 flex items-end gap-10 overflow-hidden rounded-[5px] ">
                    <div className="h-35 w-180 flex flex-col gap-2 ">
                        <p className='text-[25px] text-center font-semibold '>Select subjects</p>
                        <div className="min-h-15 w-full ">
                            <div className="h-1/1 w-full flex flex-wrap justify-center gap-3 px-3 py-3 ">
                                {subjectsArray.map((data, ind) => (
                                    <div key={ind} onClick={() => handleAdd(ind)} className={`duration-200 transition-all ease-in h-8 px-3 flex justify-center items-center
                                  ${selectedSubjectsArray?.includes(data) ? ' bg-[#444444] text-[#d0d0d0]' : ' bg-[#c4c4c4] text-[#626262]'}  hover:scale-[1.1] 
                                 form-shadow rounded-[20px] `} >{data}</div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* add another teacher btn */}
                <div className="flex items-center justify-between mt-5 h-10 w-8/20 rounded-[5px]">
                    {/* icon or text */}
                    <div className="flex items-center gap-2 ">
                        <IoIosAddCircleOutline className='text-[23px] font-semibold text-[#000000] ' />
                        <p className='text-[15px] '>Add another</p>
                    </div>
                    {/* btn */}
                    <LightBgText lable={`${formValidityForEdit ? `Edit Teacher` : `Add Teacher`}`} onClick={() => clicked()}
                        className=' py-1 px-4 rounded-[5px] text-[14px] !bg-[#008deb] text-white
                         disabled:!bg-[#dadada] disabled:!text-[#000000] flex justify-center items-center' />
                </div>
            </div>
        </div>
    )
}

export default TeachersModalContant

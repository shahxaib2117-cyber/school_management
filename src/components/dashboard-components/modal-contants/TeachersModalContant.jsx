import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import LightBgText from '../../subComponents/LightBgText';

const TeachersModalContant = ({ ...props }) => {

    const getInd = props?.teachers.find((_, ind) => ind == props?.indexForEditTeacher);
    const formValidityForEdit = props?.indexForEditTeacher !== null && props?.indexForEditTeacher !== undefined;

    if (props?.indexForEditTeacher) {
        console.log("🚀 ~ TeachersModalContant ~ indexForEditTeacher:", props?.teachers[props?.indexForEditTeacher].name)
    }

    useEffect(() => {
        console.log('props?.teachers :', props?.teachers.length)
    }, [props?.teachers])

    const [teachersFormData, setTeachersFormData] = useState(
        {
            desination: formValidityForEdit ? getInd.desination : "",
            name: formValidityForEdit ? getInd.name : "",
            email: formValidityForEdit ? getInd.email : "",
            password: formValidityForEdit ? getInd.password : "",
            phoneNumber: formValidityForEdit ? getInd.phoneNumber : "",
            gender: formValidityForEdit ? getInd.gender : "",
            class: formValidityForEdit ? getInd.class : "",
            subject: formValidityForEdit ? getInd.subject : "",
            age: formValidityForEdit ? getInd.age : "",
            teacherId: formValidityForEdit ? getInd.teacherId : props?.teachers.length
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
            desination: "",
            name: "",
            email: "",
            password: "",
            phoneNumber: '',
            gender: "",
            class: "",
            subject: ""
        })
        props.setIsOpen(false)

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
                <div className="flex mt-5 ">
                    <div className="w-full flex gap-10 items-end ">
                        <div className=" w-8/20  ">
                            <p className='text-[14px] text-[#000000] font-semibold ' >Email Address</p>
                            <input type="text" name='email' onChange={handleChange} placeholder='Enter Your Email... ' value={teachersFormData.email} className='px-2 text-[#000000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                        </div>
                        {/* class */}
                        <div className="h-10 w-5/20 flex items-center rounded-[5px] border-[2px]  border-[#bcbaba] ">
                            <select className='h-full px-2 py-1 text-[16px] text-[#000000] rounded-[5px] outline-none '
                                // id="class" name="class">
                                id="class" onChange={handleChange} value={teachersFormData.class} name="class">
                                <option className='text-[16px] text-[black] ' value="" disabled>class</option>
                                <option className='text-[16px] text-[black] ' >J SS 1</option>
                                <option className='text-[16px] text-[black] ' >J SS 2</option>
                                <option className='text-[16px] text-[black] ' >J SS 3</option>
                                <option className='text-[16px] text-[black] ' >J SS 4</option>
                                <option className='text-[16px] text-[black] ' >J SS 5</option>
                            </select>
                        </div>
                        {/* gender */}
                        <div className="h-10 w-14/100 rounded-[5px] border-[2px]  border-[#bcbaba] ">
                            <select className='h-full px-2 py-1 text-[16px] text-[#000000] rounded-[5px] outline-none '
                                id="gender" onChange={handleChange} value={teachersFormData.gender} name="gender">
                                <option className='text-[16px] text-[black] ' value="" disabled>Gender</option>
                                <option className='text-[16px] text-[black] '>Male</option>
                                <option className='text-[16px] text-[black] '>Female</option>
                                <option className='text-[16px] text-[black] '>Costom</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* email-class or gender div */}
                <div className="flex mt-5 ">
                    <div className="w-full flex items-end gap-10 ">
                        <div className=" w-8/20 ">
                            <p className='text-[14px] text-[#000000] font-semibold ' >Password</p>
                            <input type="text" name='password' onChange={handleChange} placeholder='Enter Your Password... ' value={teachersFormData.password} className='px-2 text-[#000000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                        </div>
                        <div className=" w-9/20 ">
                            <p className='text-[14px] text-[#000000] font-semibold ' >Phone Number</p>
                            <input type="number" name='phoneNumber' onChange={handleChange} placeholder='Enter Your Phone number... ' value={teachersFormData.phoneNumber} className='px-2 text-[#000000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                        </div>
                    </div>
                </div>
                {/* subject */}
                <div className="mt-5 h-15 flex items-end gap-10 rounded-[5px] ">
                    <div className=" h-10 border-[2px] rounded-[5px] border-[#bcbaba] w-8/20 ">
                        <select className='h-full w-1/1 px-2 py-1 text-[16px] text-[#000000] rounded-[5px] outline-none '
                            id="subject" onChange={handleChange} value={teachersFormData.subject} name="subject">
                            <option className='text-[16px] text-[black] ' value="" disabled>Subject</option>
                            <option className='text-[16px] text-[black] ' >Math</option>
                            <option className='text-[16px] text-[black] ' >Physics</option>
                            <option className='text-[16px] text-[black] ' >Chemistry</option>
                        </select>
                    </div>
                    {/* desination */}
                    <div className=" w-5/20 ">
                        <p className='text-[14px] text-[#000000] font-semibold ' >Desination </p>
                        <input type="text" onChange={handleChange} placeholder='Enter Your Desination' value={teachersFormData.desination} name='desination' className='px-2 text-[#000000] h-10 w-1/1 rounded-[5px] border-[2px] border-[#bcbaba] ' />
                    </div>
                    {/* age */}
                    <div className=" w-3/20 ">
                        <p className='text-[14px] text-[#000000] font-semibold ' >Age </p>
                        <input type="number" onChange={handleChange} value={teachersFormData.age} placeholder='Age' name='age' className='px-2 text-[#000000] h-10 w-1/1 rounded-[5px] border-[2px] border-[#bcbaba] ' />
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

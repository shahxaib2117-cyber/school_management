import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import LightBgText from '../../subComponents/LightBgText';

const StudentsModalContant = ({ ...props }) => {

    
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    const logedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher")) || {};
    const students = JSON.parse(localStorage.getItem("students")) || []
    const filteredStudents = props?.students.filter((dat) => (dat.teacherId == logedInTeacher.teacherId)) || []

    const get_ind = filteredStudents[props?.indexForEdit] || students[props?.indexForEdit] 
    console.log("🚀 ~ StudentsModalContant ~ get_ind:", get_ind)

        useEffect(() => {
            // console.log('teachers :', teachers.length)
        }, [teachers])
    var randomIdGenrater = Math.floor(Date.now() * (Math.random() * 0.00000001))
    const rareId = crypto.randomUUID()
    // console.log("🚀 ~ StudentsModalContant ~ rareId:", rareId)
    
    const [randomNumber, setRandomNumber] = useState(randomIdGenrater)

    const [studentsFormData, setStudentsFormData] = useState(
        {
            name: get_ind?.name || "",
            email: get_ind?.email || "",
            password: get_ind?.password || "",
            phoneNumber: get_ind?.phoneNumber || "",
            gender: get_ind?.gender || "",
            class: get_ind?.class || "",
            studentId: get_ind?.studentId || randomNumber,
            age: get_ind?.age || "",
            image: get_ind?.image || "",
            teacherId:get_ind?.teacherId || logedInTeacher.teacherId
        }
    )

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('students')) || [];
        if (savedData.length > 0) {
            props.setStudents(savedData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files, type } = e.target
        setStudentsFormData(
            {
                ...studentsFormData,
                [name]: type === "file" && files.length > 0 ? files[0] : value,
            }
        )
    }
    // start

    const clicked = () => {

        if (props?.indexForEdit != null) {
            const edited = [...props?.students]
            edited[props?.indexForEdit] = studentsFormData;
            props?.setStudents(edited);
            localStorage.setItem('students', JSON.stringify(edited));
        } else {
            const updatedStudents = [...props.students, studentsFormData];
            setRandomNumber(randomIdGenrater);
            props.setStudents(updatedStudents);
            localStorage.setItem('students', JSON.stringify(updatedStudents));
        }

        setStudentsFormData({
            name: "",
            email: "",
            password: "",
            phoneNumber: '',
            gender: "",
            class: "",
            studentId: randomNumber,
            age: "",
            image: "",
            teacherId:logedInTeacher.teacherId

        })
        props.setIsOpen(false)
    }

    const checkValidity = studentsFormData.gender === '' ||
        studentsFormData.class === '';

    return (
        <div className=''>
            {/* first child titles or 1 input */}
            <div className="w-full flex gap-60">
                {/* ------------------------------titles-div------------------------------ */}
                <div className="flex flex-col gap-5 ">
                    {/* titles */}
                    <p className='text-[30px] text-[#3d3c3c] whitespace-nowrap font-semibold mt-5 '>Add students </p>
                    <div className="flex gap-10 ">
                        <p className='text-[16px] text-[#3d3c3c] whitespace-nowrap font-semibold '>Manually </p>
                        <p className='text-[16px] text-[#3d3c3c] whitespace-nowrap font-semibold '>Import CSV </p>
                    </div>
                </div>

                <div className="w-80 "></div>

            </div>
            {/* ------------------------------inputs - div ------------------------------*/}
            <div className=" ">
                {/* input-1 full name or age input div */}
                <div className="mt-5 flex gap-10 ">
                    <div className=" w-14/20">
                        <p className='text-[14px] text-[#000000] font-semibold ' >Full Name </p>
                        <input type="text" placeholder='Enter Your Name... ' name='name' onChange={handleChange} value={studentsFormData.name} className='px-2 text-[#000] h-10 w-1/1 rounded-[5px] border-[2px] border-[#bcbaba]' />
                    </div>

                    {/*age */}
                    <div className=" w-3/20">
                        <p className='text-[14px] text-[#000] font-semibold ' >Age</p>
                        <input type="number" min={1} max={120} name='age' placeholder='Age' onChange={handleChange} value={studentsFormData.age}
                            className='px-2 text-[#000] w-10/10 h-10 rounded-[5px] border-[2px] border-[#bcbaba] ' />
                    </div>

                </div>
                {/* email-class or gender div */}
                <div className="flex mt-5 ">
                    <div className="w-full flex gap-10 items-end ">
                        <div className=" w-8/20  ">
                            <p className='text-[14px] text-[#000] font-semibold ' >Email Address</p>
                            <input type="text" name='email' placeholder='Enter Your Email...' onChange={handleChange} value={studentsFormData.email} className='px-2 text-[#000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                        </div>
                        {/* class */}
                        <div className="h-10 w-5/20 flex items-center rounded-[5px] border-[2px]  border-[#bcbaba] ">
                            <select className='h-full px-2 py-1 text-[16px] text-[#000] rounded-[5px] outline-none '
                                // id="class" name="class">
                                id="class" onChange={handleChange} value={studentsFormData.class} name="class">
                                <option className='text-[16px] text-[black] ' value="" disabled>class</option>
                                <option className='text-[16px] text-[black] ' >J SS 1</option>
                                <option className='text-[16px] text-[black] ' >J SS 2</option>
                                <option className='text-[16px] text-[black] ' >J SS 3</option>
                                <option className='text-[16px] text-[black] ' >J SS 4</option>
                                <option className='text-[16px] text-[black] ' >J SS 5</option>
                            </select>
                        </div>
                        {/* gender */}
                        <div className="h-10 w-3/20 rounded-[5px] border-[2px]  border-[#bcbaba] ">
                            <select className='h-full px-2 py-1 text-[16px] text-[#000] rounded-[5px] outline-none '
                                id="gender" onChange={handleChange} value={studentsFormData.gender} name="gender">
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
                            <p className='text-[14px] text-[#000] font-semibold ' >Password</p>
                            <input type="text" name='password' placeholder='Enter Your Password...' onChange={handleChange} value={studentsFormData.password} className='px-2 text-[#000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                        </div>
                        <div className=" w-9/20 ">
                            <p className='text-[14px] text-[#000] font-semibold ' >Phone Number</p>
                            <input type="number" name='phoneNumber' placeholder='Enter Your Phone number... ' onChange={handleChange} value={studentsFormData.phoneNumber} className='px-2 text-[#000] h-10 w-full rounded-[5px] border-[2px] border-[#bcbaba] ' />
                        </div>
                    </div>
                </div>
                {/* subject */}
                {/* <div className="mt-5 h-10 w-8/20 rounded-[5px] border-[2px] border-[#bcbaba] "> */}
                <div className="flex gap-5 ">
                    {/* age */}
                    {/* <div className="w-1/10 ">
                        <p className='text-[14px] text-[#000] font-semibold ' >Age</p>
                        <input type="number" name='age' onChange={handleChange} value={studentsFormData.age}
                            className='px-2 text-[#000] h-10 w-10/10 rounded-[5px] border-[2px] border-[#bcbaba] ' />
                    </div> */}
                    {/* image */}
                    {/* <div className="w-1/10">
                        <p className='text-[14px] text-[#000] font-semibold ' >Image</p>
                        <input type="file" name='image' onChange={handleChange}
                            className='px-2 text-[#000] flex items-center h-10 w-10/10 rounded-[5px] border-[2px] border-[#bcbaba] ' />
                    </div> */}

                </div>

                {/* </div> */}
                {/* add another teacher btn */}
                <div className="flex items-center justify-between mt-5 h-10 w-8/20 rounded-[5px]">
                    {/* icon or text */}
                    <div className="flex items-center gap-2 ">
                        <IoIosAddCircleOutline className='text-[23px] font-semibold text-[#000] ' />
                        <p className='text-[15px] '>Add another</p>
                    </div>
                    {/* btn */}
                    <LightBgText lable={`${get_ind ? `Edit Student` : `Add Student`}`} disabled={checkValidity} onClick={() => clicked()}
                        className=' py-1 px-4 rounded-[5px] text-[14px] !bg-[#008deb] text-white
                          disabled:!bg-[#dadada] disabled:!text-[#000000] flex justify-center items-center' />
                </div>
            </div>

        </div>
    )
}

export default StudentsModalContant

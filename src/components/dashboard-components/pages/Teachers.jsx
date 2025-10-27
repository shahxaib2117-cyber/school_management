import React, { useEffect, useState } from 'react'
import LightBgText from '../../subComponents/LightBgText'
import { PiBellThin } from 'react-icons/pi'
import { useAuth } from '../../../contexts/AuthContext'
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { RiHeadphoneFill } from 'react-icons/ri';
import Modal from '../../commons/Modal';
import TeachersModalContant from '../modal-contants/TeachersModalContant';
import TeachersData from '../dashboardData/TeachersData';
import TeacherDetails from '../details/TeacherDetails';
import TeacherDashboard from '../dashboardsForLoggedInPersons/TeacherDashboard';

const Teachers = () => {

  const { isAuthenticated, login, logout } = useAuth()
  const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher") || "{}")

  const isTeacherLoggedIn = loggedInTeacher?.name != null

  const [isOpen, setIsOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [teacherDetails, setTeacherDetails] = useState(null)
  const [openTeacherDetails, setOpenTeacherDetails] = useState(false)
  const [indexForEditTeacher, setIndexForEditTeacher] = useState(null)
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    if (teacherDetails != null) {
      setOpenTeacherDetails(true)
    }
  }, [teacherDetails])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('teachers')) || [];
    setTeachers(saved);
  }, []);

  const check = teachers.length === 0;

  // delete Teacher
  const deleteTeacher = (index) => {
    const updated = teachers.filter((_, i) => i !== index);
    setTeachers(updated);
    localStorage.setItem('teachers', JSON.stringify(updated));
  };

  // handleFilterChange
  const handleFilterChange = (e) => {
    setInputValue(e.target.value)
    setFilterValue(e.target.value)
  }

  // edit Teacher
  const editTeacher = (index) => {
    setIndexForEditTeacher(index)
    setIsOpen(true)
  };

  useEffect(() => {
    if (!isOpen) {
      setIndexForEditTeacher(null)
    }
  }, [isOpen])

  useEffect(() => {
  }, [filterValue])

  return (
    <>{!isTeacherLoggedIn ? (
      <div className=' flex flex-col container w-full '>
        <Modal className={' py-10 px-18 mr-40 '} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <TeachersModalContant teachers={teachers} indexForEditTeacher={indexForEditTeacher} isOpen={isOpen} setIsOpen={setIsOpen} setTeachers={setTeachers} />
        </Modal>
        {/* logout-btn or notification-icon div*/}
        <div className="h-15 w-full flex items-center justify-between ">
          {!check ?
            //  {/* buttons-div  */}
            <div className='flex gap-5 h-8/10 items-center ml-5 '>
              {/* btn--1 */}
              <LightBgText lable='Export CSV'
                className=' py-2 px-6 h-9 rounded-[5px] !bg-[#e6eaeb] !text-[#2778ce]
                     flex justify-center items-center whitespace-nowrap font-semibold ' />
              {/* btn--2 */}
              <LightBgText lable='Add Teachers ' onClick={() => setIsOpen(true)}
                className='py-2 px-6 h-9 rounded-[5px] !bg-[#3687de] !text-[#ffffff] flex justify-center items-center whitespace-nowrap font-semibold ' />
            </div> : <div className=""></div>
          }
          {/* logout-btn or notification-icon */}
          <div className="flex gap-5 items-center px-2 mr-15 ">
            <div className="h-9 w-9 flex justify-center items-center relative ">
              <div className="h-full w-full py-[2px] px-[2px] flex justify-end absolute ">
                <div className="h-[14px] w-[14px] rounded-full bg-[#1b7ccb] "></div>
              </div>
              <PiBellThin className='text-[50px] ' />
            </div>
            <LightBgText onClick={() => logout()} lable='Log out'
              className=' !py-2 px-8 rounded-[5px] !bg-[#dadada] !text-[#000000] flex justify-center items-center' />
          </div>
        </div>

        {/* ----------------------------title or add-teacher-btn---------------------------- */}
        <div className="h-15 w-19/20 flex justify-between items-center px-10 ">
          {
            check ? <>
              <p className='text-[20px] font-semibold '>Teachers</p>
              {/* buttons-div  */}
              <div className='flex gap-5 '>
                {/* btn--1 */}
                <LightBgText lable='Export CSV'
                  className=' py-2 px-6 rounded-[5px] !bg-[#e6eaeb] !text-[#2778ce]
             flex justify-center items-center whitespace-nowrap font-semibold ' />
                {/* btn--2 */}
                <LightBgText lable='Add Teachers ' onClick={() => setIsOpen(true)}
                  className=' py-2 px-6 rounded-[5px] !bg-[#3687de] !text-[#ffffff] 
            flex justify-center items-center whitespace-nowrap font-semibold ' />
              </div>
            </> : []
          }

        </div>
        {/* ----------------------------2nd child---------------------------- */}
        <div className={`h-[30rem] w-19/20 flex-1 flex flex-col gap-8
         ${check ? `items-end  pr-10 pb-10 ` : `items-start pl-5 `}`} >
          {/* ----------------------------filter or input---------------------------- */}
          <div className={`h-12 ${check ? `w-87/100` : `w-10/10`} flex gap-5 `}>
            {/* filter */}
            <select onChange={handleFilterChange} value={filterValue}
              className='px-5 text-[15px] rounded-[5px] bg-[#e7eaeee5] outline-none ' id="filter" name="filter">
              <option className=' text-[black] ' value="">Add filter</option>
              <option className='text-[16px] text-[black] ' >J SS 1</option>
              <option className='text-[16px] text-[black] ' >J SS 2</option>
              <option className='text-[16px] text-[black] ' >J SS 3</option>
              <option className='text-[16px] text-[black] ' >J SS 4</option>
              <option className='text-[16px] text-[black] ' >J SS 5</option>
              <option className=' text-[black] ' value="">Remove filter</option>
            </select>
            {/* input */}
            <div className="flex flex-1 items-center px-2 bg-[#e7eaeee5] gap-2 rounded-[5px] ">
              <IoIosSearch className='text-[25px] ' />
              <input type="text" onChange={(e) => setInputValue(e.target.value)} onFocus={(e) => e.target.select()}
                onClick={() => setFilterValue('')}
                value={inputValue} placeholder='Search for a student by name or email' className='h-full w-full outline-none ' />
            </div>
          </div>
          {/* list-child */}
          {/* {!openTeacherDetails ? */}

          <div className={` flex-1 flex ${check ? `w-87/100 justify-end items-end` : `w-10/10`}  
        rounded-[5px] `} >
            {/* contant */}
            {check ? <div className="flex gap-30 ">
              {/* child-1 */}
              <div className="mb-20 flex flex-col items-center ">
                <p className='text-[25px] font-semibold text-[#4F4F4F]'>No Teachers at this time</p>
                <p className='text-[15px] font-semibold text-[#4F4F4F]'>Teachers will appear here after they enroll in your school.  </p>
              </div>
              {/* child-2 */}
              <div className="flex items-end ">
                {/* button */}
                <div className="py-3 px-4 mb-5 mr-2 flex items-center gap-5 text-center bg-[#152259] rounded-[30px] ">
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
                {/* </div> */}
              </div>
            </div>
              :
              <div className=" w-full flex justify-center items-center relative overflow-hidden ">
                <TeachersData teacherDetails={teacherDetails} setTeacherDetails={setTeacherDetails} openTeacherDetails={openTeacherDetails} value={inputValue} deleteTeacher={deleteTeacher} editTeacher={editTeacher} teachers={teachers} setValue={setInputValue} />

                <TeacherDetails teachers={teachers} teacherDetails={teacherDetails} setTeacherDetails={setTeacherDetails} setOpenTeacherDetails={setOpenTeacherDetails} openTeacherDetails={openTeacherDetails} />
              </div>
            }

          </div>

        </div>
      </div>) : <TeacherDashboard/> }
    </>
  )
}

export default Teachers
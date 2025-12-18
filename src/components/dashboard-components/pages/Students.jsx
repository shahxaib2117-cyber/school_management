import React, { useEffect, useState } from 'react'
import LightBgText from '../../subComponents/LightBgText'
import { PiBellThin } from 'react-icons/pi'
import { useAuth } from '../../../contexts/AuthContext'
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { RiHeadphoneFill } from 'react-icons/ri';
import Modal from '../../commons/Modal';
import StudentsData from '../dashboardData/StudentsData';
import StudentsModalContant from '../modal-contants/StudentsModalContant';
// import not_found_img from '../../../../public/dashboard-imgs/not-found-img.png'
import StudentDetails from '../details/StudentDetails';
import { createPortal } from 'react-dom';
import StudentDashboard from '../dashboardsForLoggedInPersons/StudentDashboard';


const Students = () => {

  const { isAuthenticated, login, logout } = useAuth()


  const [students, setStudents] = useState([]);
  const [logedInTeacher, setLogedInTeacher] = useState({})
  const loggedInStudent = JSON.parse(localStorage.getItem("logedInStudent") || "{}")
  const isStudentLoggedIn = loggedInStudent?.name != null

  const handleLogout = () => {
    logout()
    localStorage.removeItem("logedInTeacher")
  }

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('students') || "[]");
    const logedInTeachar = JSON.parse(localStorage.getItem("logedInTeacher") || "{}");
    setStudents(saved);
    setLogedInTeacher(logedInTeachar)
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [indexForEdit, setIndexForEdit] = useState(null)
  const [studentDetails, setStudentDetails] = useState(null)
  const [isOpenDeleteMadal, setIsOpenDeleteMadal] = useState(false)
  const [openStudentDetails, setOpenStudentDetails] = useState(false)
  const [indexForDeleteStudent, setIndexForDeleteStudent] = useState(null)
  const [filterValue, setFilterValue] = useState('')

  const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
  // teachersFromSameClass
  const teachersFromSameClass = teachers.filter((dat) => dat?.teacherId == studentDetails?.teacherId)
  const studentsOfCurrentTeacher = students.filter((dat, ind) => dat.teacherId == logedInTeacher?.teacherId)


  useEffect(() => {
    if (studentDetails != null) {
      setOpenStudentDetails(true)
    }
  }, [studentDetails])

  const empty = studentsOfCurrentTeacher?.length === 0;
  // delete student modal
  const openDeleteModal = (ind) => {
    setIsOpenDeleteMadal(true)
    setIndexForDeleteStudent(ind)
  }
  // delete student

  const deleteStudent = () => {
    const targetStudent = studentsOfCurrentTeacher[indexForDeleteStudent] || students[indexForDeleteStudent];
    if (!targetStudent) return;
    const updatedStudents = students.filter(
      (dat) => dat.studentId !== targetStudent.studentId
    );

    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setIsOpenDeleteMadal(false)
  };


  // handleFilterChange
  const handleFilterChange = (e) => {
    setInputValue(e.target.value)
    setFilterValue(e.target.value)
  }

  // edit student
  const editStudent = (index) => {
    // const targetStudent = studentsOfCurrentTeacher[index] || students[index];
    // console.log('index for edit', index)
    setIndexForEdit(index)
    setIsOpen(true)
  };

  useEffect(() => {
    if (!isOpen) {
      setIndexForEdit(null)
    }
  }, [isOpen])


  const [isClicked, setIsClicked] = useState(null)

  return (
    <>{!isStudentLoggedIn ? (
      <div className={`flex flex-col container w-full border-[2px] `}>
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
              <button onClick={deleteStudent} className='transition-all duration-200 ease-in h-8 hover:scale-[1.1] whitespace-nowrap py-1 px-4 rounded-[5px] text-[13px] bg-[#e38080] hover:bg-[#df2525] hover:shadow-2xl text-white font-semibold '>
                Yes
              </button>
            </div>
          </div>
        </Modal>
        {/* add student modal */}
        <Modal className={` py-10 px-15 mr-40`} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <StudentsModalContant students={students}
            logedInTeacher={logedInTeacher}
            indexForEdit={indexForEdit}
            setIndexForEdit={setIndexForEdit}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setStudents={setStudents}
          />
        </Modal>
        {/* logout-btn or notification-icon div*/}
        <div className="h-15 w-full flex items-center justify-between ">
          {!empty ?
            //  {/* buttons-div  */}
            <div className='flex h-8/10 gap-5 ml-5 '>
              {/* btn--1 */}
              <LightBgText lable='Export CSV'
                className='  !py-3 px-6 rounded-[5px] !bg-[#e6eaeb] !text-[#2778ce]
                     flex justify-center items-center whitespace-nowrap font-semibold ' />
              {/* btn--2 */}
              <LightBgText lable='Add students ' onClick={() => { setIsOpen(true)}}
                className=' !py-3  px-6 rounded-[5px] !bg-[#3687de] !text-[#ffffff] 
                    flex justify-center items-center whitespace-nowrap font-semibold ' />
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
            <LightBgText onClick={handleLogout} lable='Log out'
              className=' py-2 px-8 rounded-[5px] !bg-[#dadada] !text-[#000000] flex justify-center items-center' />
          </div>
        </div>

        {/* ----------------------------title or add-teacher-btn---------------------------- */}
        <div className="h-15 w-19/20  flex justify-between items-center px-10 ">
          {
            empty ? <>
              <p className='text-[20px] font-semibold '>Students</p>
              {/* buttons-div  */}
              <div className='flex gap-5 '>
                {/* btn--1 */}
                <LightBgText lable='Export CSV'
                  className=' py-2 px-6 rounded-[5px] !bg-[#e6eaeb] !text-[#2778ce]
             flex justify-center items-center whitespace-nowrap font-semibold ' />
                {/* btn--2 */}
                <LightBgText lable='Add students ' onClick={() => {setIsOpen(true), notifySuccess()}}
                  className=' py-2 px-6 rounded-[5px] !bg-[#3687de] !text-[#ffffff] 
            flex justify-center items-center whitespace-nowrap font-semibold ' />
              </div>
            </> : []
          }

        </div>
        {/* ----------------------------2nd child---------------------------- */}
        <div className={`w-19/20 flex relative `}>
          <div className={`w-19/20 flex-1 flex flex-col gap-8
         ${empty ? `items-end  pr-10 pb-10 ` : `items-start pl-5 `}`} >
            {/* ----------------------------filter or input---------------------------- */}
            <div className={`h-12 ${empty ? `w-87/100` : `w-10/10`} flex gap-5 `}>
              {/* filter */}
              <select onChange={handleFilterChange} value={filterValue}
                className='px-5 text-[15px] rounded-[5px] bg-[#e7eaeee5] outline-none' id="filter" name="filter">
                <option className=' text-[black] ' value="">Add filter</option>
                <option className='text-[16px] text-[black] ' >Jss1</option>
                <option className='text-[16px] text-[black] ' >Jss2</option>
                <option className='text-[16px] text-[black] ' >Jss3</option>
                <option className='text-[16px] text-[black] ' >Jss4</option>
                <option className='text-[16px] text-[black] ' >Jss5</option>
                <option className=' text-[black] ' value="">Remove filter</option>

              </select>
              {/* input */}
              <div className="flex flex-1 items-center px-2 bg-[#e7eaeee5] gap-2 rounded-[5px] ">
                <IoIosSearch className='text-[25px] ' />
                <input type="text" onChange={(e) => setInputValue(e.target.value)} onFocus={(e) => e.target.select()}
                  onClick={() => setFilterValue('')}
                  value={inputValue} placeholder='Search for a student by name or email' className='h-full w-full text-[20px] text-[black] outline-none ' />
              </div>
            </div>
            {/* list-child */}
            <div className={` flex-1 flex ${empty ? `w-87/100 justify-end items-end` : `w-10/10`} bg-[#e7eaeee5] 
        rounded-[5px] `} >
              {/* contant */}
              {empty ? <div className="flex gap-25 ">
                {/* child-1 */}
                <div className="mb-10 flex flex-col items-center ">
                  <div className="w-[400px] h-[270px] flex justify-center items-center ">
                    <img src="/dashboard-imgs/not-found-img.png" className='h-10/10 ' alt="" />
                  </div>
                  <p className='text-[25px] font-semibold text-[#4F4F4F]'>No students at this time</p>
                  <p className='text-[15px] font-semibold text-[#4F4F4F]'>students will appear here after they enroll in your school.  </p>
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
                <StudentsData value={inputValue}
                  logedInTeacher={logedInTeacher}
                  students={students}
                  deleteStudent={openDeleteModal}
                  editStudent={editStudent}
                  openStudentDetails={openStudentDetails}
                  setOpenStudentDetails={setOpenStudentDetails}
                  studentDetails={studentDetails}
                  setStudentDetails={setStudentDetails}
                  setValue={setInputValue}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                />
              }

            </div>
          </div>
          {/* students details modal div */}
          {/* {studentDetails ? (
          <div className=" right-0 absolute z-20"> */}
          <StudentDetails
            teachersFromSameClass={teachersFromSameClass}
            students={students}
            openStudentDetails={openStudentDetails}
            setOpenStudentDetails={setOpenStudentDetails}
            setStudentDetails={setStudentDetails}
            studentDetails={studentDetails}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
          {/* </div>
        ) : ''
        } */}

        </div>
      </div>) : <StudentDashboard />
    }
    </>
  )
}

export default Students
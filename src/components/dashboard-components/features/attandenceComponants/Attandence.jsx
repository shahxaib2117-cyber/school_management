import React, { useEffect, useRef, useState } from 'react'
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import Teachers from '../../pages/Teachers';

const Attandence = () => {

  const students = JSON.parse(localStorage.getItem('students') || "[]")
  const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
  const logedInTeachar = JSON.parse(localStorage.getItem("logedInTeacher") || "{}");
  console.log("🚀 ~ Attandence ~ logedInTeachar:", logedInTeachar)
  const [subject, setSubject] = useState('')
  const currTeacherName = logedInTeachar?.name

  const getCurrTeacher = teachers.find((t) => t.name === currTeacherName)
  console.log("🚀 ~ Attandence ~ getCurrTeacher:", getCurrTeacher.teacherId)
  const seats = getCurrTeacher?.seats

  const filterstudentsOfCurrentTeachered = students.filter((std) =>
    seats?.some(s => s?.studentName == std?.name && s.bookedSubjects.find(sub => sub === subject))
  )
  
  useEffect(()=>{
    setSelectItem(filterstudentsOfCurrentTeachered)
  },[subject])

  const [selectItem, setSelectItem] = useState()

  const [studentStatusRecords, setStudentStatusRecords] = useState([])
  const [studentStatus, setStudentStatus] = useState(() => {
    const getData = localStorage.getItem("attendanceStatus");
    return getData ? JSON.parse(getData) : [];
  })
  console.log("🚀 ~ Attandence ~ studentStatus:", studentStatus)


  const statusLables = ["present", "absent", "leave"]

  const buttons = [
    { text: "Present", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#005e00]`, },
    { text: "Absent", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#5e0202]`, },
    { text: "Leave", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#000054]`, },
  ]

  const handleClick = (studentIndex, statusIndex) => {
    setStudentStatus((prev) => {
      const copy = [...prev];
      const statusValue = statusLables[statusIndex]
      const current = copy[studentIndex]
      const newObj = {
        status: statusValue,
        date: new Date().toISOString().split("T")[0],
        subject:subject,
        teacherId:getCurrTeacher.teacherId
      }
      if (current && current.status === statusValue) {
        copy[studentIndex] = null
      } else {
        copy[studentIndex] = newObj
      }
      // copy[studentIndex] = copy[studentIndex] === statusValue ? null : newObj;
      return copy
    })
  }
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const attendanceCount = {
    present: studentStatus?.filter(s => s?.status === "present").length,
    absent: studentStatus?.filter(s => s?.status === "absent").length,
    leave: studentStatus?.filter(s => s?.status === "leave").length,
  };

  const total = filterstudentsOfCurrentTeachered.length;

  const colors = ["#127B09", "#7B0909", "#0B097B", "#7B095D"];

  useEffect(() => {

    localStorage.setItem("attendanceStatus", JSON.stringify(studentStatus));

    const circle = chartRef.current;
    if (!circle) return;

    if (!chartInstance.current) {
      chartInstance.current = new Chart(circle, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [
                attendanceCount.present,
                attendanceCount.leave,
                attendanceCount.absent
              ],
              backgroundColor: colors,
            },
          ],
        },
        options: {
          animation: { duration: 1500 },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    } else {
      chartInstance.current.data.datasets[0].data = [
        attendanceCount.present,
        attendanceCount.absent,
        attendanceCount.leave
      ];
      chartInstance.current.update();
    }
  }, [studentStatus, filterstudentsOfCurrentTeachered]);


  return (
    <div className='blue_shadow_effect h-full container flex flex-col pl-5 gap-2 '>
      {/* data summry */}
      <div className="h-50 flex items-center w-full gap-10 ">
        <div className=" relative h-50 w-50 ">
          <canvas ref={chartRef} width="10" height="10"></canvas>
        </div>
        {/* ✅ Summary Box */}
        <div className="blue_bg_effect h-45 border p-2 rounded-lg bg-gray-50">
          <h2 className="font-bold text-lg mb-2 text-[#b7b7b7]">Attendance Summary</h2>
          <p className=' text-[#b7b7b7]'>Total Students: <b>{total}</b></p>
          <p className="text-green-700">Present: <b>{attendanceCount.present}</b></p>
          <p className="text-[#e43838]">Absent: <b>{attendanceCount.absent}</b></p>
          <p className="text-blue-700">Leave: <b>{attendanceCount.leave}</b></p>
        </div>
        {/* select subjects */}
        <div className="h-full py-2 flex flex-col gap-2 ">
          <p className='text-[17px] text-[#94a4d2]'>Select subject for attandance</p>
          <select onChange={(e) => setSubject(e.target.value)} className='blue_shadow_effect h-10 w-50 rounded-[5px] outline-none px-3 text-[18px] text-[#94a4d2] border-[black] '
            id="subject" name="subject" >
            {
              getCurrTeacher.subject.map((data, ind)=>(
                <option key={ind} className='text-[16px] text-[#94a4d2] ' value={'urdu'} >{data}</option>
              ))
            }
          </select>
        </div>

      </div>
      {/* data */}
      <div className="h-100 w-full overflow-y-scroll ">
        {/* nav div */}
        <div className="blue_bg_effect h-10 w-full container flex fixed z-20 rounded-[5px] ">
          <div className="h-full w-[15%] flex justify-center items-end  "><p className='text-[16px] text-[#b7b7b7] '>name</p></div>
          <div className="h-full w-[8%] flex justify-center items-end "><p className='text-[16px] text-[#b7b7b7] '>roll no</p></div>
          <div className="h-full w-[8%] flex justify-center items-end "><p className='text-[16px] text-[#b7b7b7] '>class</p></div>
          <div className="h-full w-[29%] flex justify-center items-end  "><p className='text-[16px] text-[#b7b7b7] '>email</p></div>
          <div className="h-full w-[20%] flex items-end justify-between px-3 ">
            <p className='text-[16px] font-semibold text-[#4bd54b] '>Present</p>
            <p className='text-[16px] font-semibold text-[#c24444] '>Absent</p>
            <p className='text-[16px] font-semibold text-[#4c4ccf] '>Leave</p>
          </div>
        </div>
        {/* items---div */}
        <div className="min-h-100 w-full flex flex-col py-3 px-3 gap-2 mt-10 ">
          {selectItem?.map((data, index) => {
            // console.log("🚀 ~ Attandence ~ index:", index)
            return <div key={index} className={`blue_bg_effect h-10 w-1/1 flex items-center rounded-[5px] bg-slate-300 `} >
              {/* profile-name */}
              <div className="h-full w-[20%] flex items-center gap-1 pl-2 ">
                <div className="h-7 w-7 bg-amber-100 rounded-full "></div>
                <p className='text-[15px] text-[#b7b7b7] '>{data.name}</p>
              </div>
              {/* roll-no */}
              <div className="h-full w-[10%] flex items-center ">
                <p className='text-[15px] text-[#b7b7b7] '>{data.studentId}</p>
              </div>
              {/* class */}
              <div className="h-full w-[10%] flex items-center ">
                <p className='text-[15px] text-[#b7b7b7] '>{data.class}</p>
              </div>
              {/* email */}
              <div className="h-full w-[30%] flex items-center ">
                <p className='text-[15px] text-[#b7b7b7] '>{data.email}</p>
              </div>
              {/* present-absent-leave-late */}
              <div className="h-full w-[25%] flex justify-around items-center py-1 ">
                {
                  buttons?.map((dat, ind) => (
                    <div key={ind} onClick={() => handleClick(index, ind)} className={`multicolors_bg_effect h-6 flex justify-center items-center delay-200 transition-all duration-400 ease-in bg-[#131e4e] rounded-[5px] text-[0px] text-[#b7b7b7]
                       ${studentStatus ? ((studentStatus[index]?.status === statusLables[ind]) ? dat?.clas : '') : ''} w-[17%]`}>
                      {dat?.text}
                    </div>
                  ))
                }
              </div>
            </div>;
          })
          }
        </div>

      </div>
    </div>
  )
}
export default Attandence

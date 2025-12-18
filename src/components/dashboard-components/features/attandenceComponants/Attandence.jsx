import React, { useEffect, useRef, useState } from 'react'
import { Chart } from 'chart.js/auto';

const Attandence = () => {

  const students = JSON.parse(localStorage.getItem('students') || "[]")
  const logedInTeachar = JSON.parse(localStorage.getItem("logedInTeacher") || "{}");

  const filterstudentsOfCurrentTeachered = students?.filter((data, ind) => data?.class?.toLowerCase() == logedInTeachar?.schoolClass)
  // const [studentIndex,setStudentIndex] = useState([])
  const [studentStatusRecords, setStudentStatusRecords] = useState([])
  const [studentStatus, setStudentStatus] = useState(() => {
    const getData = localStorage.getItem("attendanceStatus");
    return getData ? JSON.parse(getData) : [];
  })

  const date = new Date
  const currentDate = date.getDate()
  useEffect(() => {
   setStudentStatusRecords((prev) =>  [...prev, studentStatus])
  }, [currentDate])
  
  console.log("🚀 ~ Attandence ~ studentStatusRecords:", studentStatusRecords)
  const [selectItem, setSelectItem] = useState(filterstudentsOfCurrentTeachered)

  const statusLables = ["present", "absent", "leave", "late"]

  const buttons = [
    { text: "Present", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#005e00]`, },
    { text: "Absent", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#5e0202]`, },
    { text: "Leave", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#000054]`, },
    { text: "Late", clas: `scale-[1.1] w-[30%] text-[12px] !bg-[#520052]`, }
  ]

  const handleClick = (studentIndex, statusIndex) => {
    setStudentStatus((prev) => {
      const copy = [...prev];
      const statusValue = statusLables[statusIndex]
      copy[studentIndex] = copy[studentIndex] === statusValue ? null : statusValue;
      return copy
    })
  }
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const attendanceCount = {
    present: studentStatus?.filter(s => s === "present").length + studentStatus?.filter(s => s === "late").length,
    absent: studentStatus?.filter(s => s === "absent").length,
    leave: studentStatus?.filter(s => s === "leave").length,
    late: studentStatus?.filter(s => s === "late").length,
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
                attendanceCount.absent,
                attendanceCount.late
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
        attendanceCount.leave,
        attendanceCount.late
      ];
      chartInstance.current.update();
    }
  }, [studentStatus]);


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
          <p className="text-purple-700">Late: <b>{attendanceCount.late}</b></p>
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
          <div className="h-full w-[20%] flex items-end ">
            <p className='text-[16px] font-semibold text-[#4bd54b] '>Present</p>
            <p className='text-[16px] ml-10 font-semibold text-[#c24444] '>Absent</p>
            <p className='text-[16px] ml-2 font-semibold text-[#4c4ccf] '>Leave</p>
            <p className='text-[16px] ml-5 font-semibold text-[#c855c8]'>Late</p>
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
                       ${studentStatus ? ((studentStatus[index] === statusLables[ind]) ? dat?.clas : '') : ''} w-[17%]`}>
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

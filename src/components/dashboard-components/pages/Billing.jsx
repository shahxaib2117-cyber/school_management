import React, { useState } from 'react'
import TimeTable from '../features/TimeTable';
const Billing = () => {

  // const timeTable = [
  //   {
  //     clas: 'jss1',
  //     timings: [
  //       {
  //         time: "12:00 to 1:00",
  //         subject: 'English'
  //       }, {
  //         time: "1:01 to 2:00",
  //         subject: 'urdu'
  //       }, {
  //         time: "2:01 to 2:30",
  //         subject: 'physics'
  //       }, {
  //         time: "2:31 to 3:00",
  //         subject: 'break'
  //       }, {
  //         time: "3:01 to 3:30",
  //         subject: 'math'
  //       }, {
  //         time: "3:31 to 4:30",
  //         subject: 'computer'
  //       }
  //     ]
  //   },{
  //     clas: 'jss2',
  //     timings: [
  //       {
  //         time: "12:00 to 1:00",
  //         subject: 'computer'
  //       }, {
  //         time: "1:01 to 2:00",
  //         subject: 'english'
  //       }, {
  //         time: "2:01 to 2:30",
  //         subject: 'urdu'
  //       }, {
  //         time: "2:31 to 3:00",
  //         subject: 'break'
  //       }, {
  //         time: "3:01 to 3:30",
  //         subject: 'physics'
  //       }, {
  //         time: "3:31 to 4:30",
  //         subject: 'math'
  //       }
  //     ]
  //   },{
  //     clas: 'jss3',
  //     timings: [
  //       {
  //         time: "12:00 to 1:00",
  //         subject: 'math'
  //       }, {
  //         time: "1:01 to 2:00",
  //         subject: 'computer'
  //       }, {
  //         time: "2:01 to 2:30",
  //         subject: 'english'
  //       }, {
  //         time: "2:31 to 3:00",
  //         subject: 'break'
  //       }, {
  //         time: "3:01 to 3:30",
  //         subject: 'urdu'
  //       }, {
  //         time: "3:31 to 4:30",
  //         subject: 'physics'
  //       }
  //     ]
  //   },{
  //     clas: 'jss4',
  //     timings: [
  //       {
  //         time: "12:00 to 1:00",
  //         subject: 'physics'
  //       }, {
  //         time: "1:01 to 2:00",
  //         subject: 'math'
  //       }, {
  //         time: "2:01 to 2:30",
  //         subject: 'computer'
  //       }, {
  //         time: "2:31 to 3:00",
  //         subject: 'break'
  //       }, {
  //         time: "3:01 to 3:30",
  //         subject: 'english'
  //       }, {
  //         time: "3:31 to 4:30",
  //         subject: 'urdu'
  //       }
  //     ]
  //   },{
  //     clas: 'jss5',
  //     timings: [
  //       {
  //         time: "12:00 to 1:00",
  //         subject: 'urdu'
  //       }, {
  //         time: "1:01 to 2:00",
  //         subject: 'physics'
  //       }, {
  //         time: "2:01 to 2:30",
  //         subject: 'math'
  //       }, {
  //         time: "2:31 to 3:00",
  //         subject: 'break'
  //       }, {
  //         time: "3:01 to 3:30",
  //         subject: 'computer'
  //       }, {
  //         time: "3:31 to 4:30",
  //         subject: 'english'
  //       }
  //     ]
  //   }
  // ]


  // find teacher
  // const find_subjects = timeTable.filter((data) => (
  //   data.timings.some((t)=>(t.subject?.toLowerCase() == 'english'))
  // ))

  // const find_class = timeTable.filter((data) => (
  //   data.clas == 'jss1'
  // ))

  // const time_shadule = find_class
  // console.log("🚀 ~ Billing ~ find_subjects:", find_subjects)

  return (
    <div className="h-full container flex-wrap gap-5 ">
      <TimeTable/>
      {/* {
        time_shadule.map((dat, ind) => (
          <div key={ind} className="min-h-10 min-w-10 border-[2px] px-1 py-1 ">
            {dat?.timings.map((data, index) => (
              <div className="border-[2px]">
                <p>{data.subject}</p>
                <p>{data.time}</p>
              </div>
            ))}
          </div>
        ))
      } */}
    </div>
  )
}

export default Billing;
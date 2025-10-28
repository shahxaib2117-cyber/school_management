import React from 'react'

const TimeTable = () => {

  const timeTable = [
    {
      clas: 'jss1',
      timings: [
        {
          time: "12:00 to 1:00",
          subject: 'English'
        }, {
          time: "1:01 to 2:00",
          subject: 'Urdu'
        }, {
          time: "2:01 to 2:30",
          subject: 'Physics'
        }, {
          time: "2:31 to 3:00",
          subject: 'Break'
        }, {
          time: "3:01 to 3:30",
          subject: 'Math'
        }, {
          time: "3:31 to 4:30",
          subject: 'Computer'
        }
      ]
    },{
      clas: 'jss2',
      timings: [
        {
          time: "12:00 to 1:00",
          subject: 'Computer'
        }, {
          time: "1:01 to 2:00",
          subject: 'English'
        }, {
          time: "2:01 to 2:30",
          subject: 'Urdu'
        }, {
          time: "2:31 to 3:00",
          subject: 'Break'
        }, {
          time: "3:01 to 3:30",
          subject: 'Physics'
        }, {
          time: "3:31 to 4:30",
          subject: 'Math'
        }
      ]
    },{
      clas: 'jss3',
      timings: [
        {
          time: "12:00 to 1:00",
          subject: 'Math'
        }, {
          time: "1:01 to 2:00",
          subject: 'Computer'
        }, {
          time: "2:01 to 2:30",
          subject: 'English'
        }, {
          time: "2:31 to 3:00",
          subject: 'Break'
        }, {
          time: "3:01 to 3:30",
          subject: 'Urdu'
        }, {
          time: "3:31 to 4:30",
          subject: 'Physics'
        }
      ]
    },{
      clas: 'Break',
      timings: [
        {
          time: "12:00 to 1:00",
          subject: 'Math'
        }, {
          time: "1:01 to 2:00",
          subject: 'Computer'
        }, {
          time: "2:01 to 2:30",
          subject: 'English'
        }, {
          time: "2:31 to 3:00",
          subject: 'Break'
        }, {
          time: "3:01 to 3:30",
          subject: 'Urdu'
        }, {
          time: "3:31 to 4:30",
          subject: 'Physics'
        }
      ]
    },{
      clas: 'jss4',
      timings: [
        {
          time: "12:00 to 1:00",
          subject: 'Physics'
        }, {
          time: "1:01 to 2:00",
          subject: 'Math'
        }, {
          time: "2:01 to 2:30",
          subject: 'Computer'
        }, {
          time: "2:31 to 3:00",
          subject: 'Break'
        }, {
          time: "3:01 to 3:30",
          subject: 'English'
        }, {
          time: "3:31 to 4:30",
          subject: 'Urdu'
        }
      ]
    },{
      clas: 'jss5',
      timings: [
        {
          time: "12:00 to 1:00",
          subject: 'Urdu'
        }, {
          time: "1:01 to 2:00",
          subject: 'Physics'
        }, {
          time: "2:01 to 2:30",
          subject: 'Math'
        }, {
          time: "2:31 to 3:00",
          subject: 'Break'
        }, {
          time: "3:01 to 3:30",
          subject: 'Computer'
        }, {
          time: "3:31 to 4:30",
          subject: 'English'
        }
      ]
    }
  ]

  localStorage.setItem("timeTable", JSON.stringify(timeTable))

  const find_subjects = timeTable.filter((data) => (
    data.timings.some((t)=>(t.subject?.toLowerCase() == 'English'))
  ))

  console.log("🚀 ~ TimeTable ~ find_subjects:", find_subjects)


  return (
    <div className="h-full container flex-wrap gap-5 ">
      {
        find_subjects.map((dat, ind) => (
          <div key={ind} className="min-h-10 min-w-10 border-[2px] px-1 py-1 ">
            <p>{dat?.clas}</p>
            {/* {
              dat?.timings.map((data, index) => (
                <div key={index} className="">
                  <p>{data.time}</p>
                  <p>{data.subject}</p>
                </div>
              ))
            } */}
          </div>
        ))
      }
    </div>
  )
}

export default TimeTable

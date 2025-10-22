import React, { useEffect } from 'react'

const Exams = ({ size = 8 }) => {

  const array = []

  for (let i = 0; i < 35; i++) {
    array.push(i)
  }

  const index = 9
  const num = Math.floor(index / 8)

  return (
    <div className="min-h-screen overflow-scroll ">
      <div
        style={{
          gridTemplateColumns: `320px 198px 153px 50px`,
          gridTemplateRows: `414px 130px 155px 20px`
        }}
        className=' container h-[748px] w-[748px] bg-black border-[2px] grid gap-2 mb-5 ' >
        <div className="bg-red-600"></div>
        <div style={{ gridColumn: "span 3" }} className="bg-slate-300 "></div>
        <div style={{ gridColumn: "span 1", gridRow: "span 2" }} className="bg-slate-300 "></div>
        <div style={{ gridColumn: "span 2", gridRow: "span 2" }} className="bg-slate-300 "></div>
        <div style={{ gridColumn: "span 1", gridRow: "span 1" }} className="bg-blue-500"></div>
        <div style={{
          gridColumn: "span 1",
          gridRow: "span 2"
        }} className="bg-slate-300 border-t-[10px] "></div>

        <div style={{ gridColumn: "span 1", gridRow: "span 1" }} className="bg-slate-300 "></div>
        <div style={{ gridColumn: "span 1", gridRow: "span 1" }} className="bg-yellow-500 "></div>
        <div style={{ gridColumn: "span 1", gridRow: "span 1" }} className="bg-slate-800 "></div>

      </div>
    </div>
  )
}

export default Exams

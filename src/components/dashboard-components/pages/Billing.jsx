import React, { useState } from 'react'
import LightBgText from '../../subComponents/LightBgText'
import { PiBellThin } from 'react-icons/pi'
import { useAuth } from '../../../contexts/AuthContext'
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { RiHeadphoneFill } from 'react-icons/ri';
import Modal from '../../commons/Modal';
import TeachersModalContant from '../modal-contants/TeachersModalContant';
import TeachersData from '../dashboardData/TeachersData';
const Billing = () => {
  const [layout, setLayout] = useState(false)
  const [inputValue, setInputValue] = useState('')

  
  return (
    // <div className='flex flex-col container w-full '>
    //   {/* logout-btn or notification-icon div*/}
    //   <div className="h-15 w-full flex border-[2px] items-center justify-between ">
    //     { !layout ?
    //     //  {/* buttons-div  */}
    //     <div className='flex h-8/10 gap-5 ml-5 border-[2px]'>
    //       {/* btn--1 */}
    //       <LightBgText onClick={() => console.log("export CSV chala")} lable='Export CSV'
    //         className=' !py-1 px-6 rounded-[5px] !bg-[#e6eaeb] !text-[#2778ce]
    //          flex justify-center items-center whitespace-nowrap font-semibold ' />
    //       {/* btn--2 */}
    //       <LightBgText lable='Add Teachers '
    //         className='!py-1  px-6 rounded-[5px] !bg-[#3687de] !text-[#ffffff] 
    //         flex justify-center items-center whitespace-nowrap font-semibold ' />
    //     </div> : <div className=""></div>
    //     }
        
    //     {/* logout-btn or notification-icon */}
    //     <div className="flex gap-5 border-[2px] items-center px-2 mr-15 ">
    //       <div className="h-9 w-9 flex justify-center items-center relative ">
    //         <div className="h-full w-full py-[2px] px-[2px] flex justify-end absolute ">
    //           <div className="h-[14px] w-[14px] rounded-full bg-[#1b7ccb] "></div>
    //         </div>
    //         <PiBellThin className='text-[50px] ' />
    //       </div>
    //       <LightBgText lable='Log out' onClick={() => setLayout(!layout)}
    //         className=' py-2 px-8 rounded-[5px] !bg-[#dadada] !text-[#000000] flex justify-center items-center' />
    //     </div>
    //   </div>

    //   {/* ----------------------------title or add-teacher-btn---------------------------- */}
    //   <div className="h-15 w-19/20 border-[2px] flex justify-between items-center px-10 ">
    //     {
    //       layout ? <>
    //         <p className='text-[20px] font-semibold '>Teachers</p>
    //         {/* buttons-div  */}
    //         <div className='flex gap-5 border-[2px]'>
    //           {/* btn--1 */}
    //           <LightBgText onClick={() => console.log("export CSV chala")} lable='Export CSV'
    //             className=' py-2 px-6 rounded-[5px] !bg-[#e6eaeb] !text-[#2778ce]
    //          flex justify-center items-center whitespace-nowrap font-semibold ' />
    //           {/* btn--2 */}
    //           <LightBgText lable='Add Teachers '
    //             className=' py-2 px-6 rounded-[5px] !bg-[#3687de] !text-[#ffffff] 
    //         flex justify-center items-center whitespace-nowrap font-semibold ' />
    //         </div>
    //       </> : []
    //     }

    //   </div>
    //   {/* ----------------------------2nd child---------------------------- */}
    //   <div className={`w-19/20 flex-1 border-[2px] border-[red] flex flex-col gap-8
    //      ${layout ? `items-end  pr-10 pb-10 `:`items-start pl-5 `}`} >
    //     {/* ----------------------------filter or input---------------------------- */}
    //     <div className={`h-12 ${layout ? `w-87/100`:`w-10/10` }  border-[2px] border-[blue] flex gap-5 `}>
    //       {/* filter */}
    //       <select className='px-5 text-[15px] rounded-[5px] bg-[#e7eaeee5] outline-none ' id="filter" name="filter">
    //         <option className=' text-[black] ' value="Add filter">Add filter</option>
    //         <option className=' text-[black] ' value="Filterd">Filterd</option>
    //         <option className=' text-[black] ' value="Remove filter">Remove filter</option>
    //       </select>
    //       {/* input */}
    //       <div className="flex flex-1 items-center px-2 bg-[#e7eaeee5] gap-2 rounded-[5px] ">
    //         <IoIosSearch className='text-[25px] ' />
    //         <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder='Search for a student by name or email' className='h-full w-full outline-none ' />
    //       </div>
    //     </div>
    //     {/* list-child */}
    //     <div className={` flex-1 flex ${layout ? `w-87/100 justify-end items-end`:`w-10/10` }  border-[2px] bg-[#e7eaeee5] 
    //     rounded-[5px] `} >
    //       {/* contant */}
    //       {layout ?  <div className="flex gap-30 border-[2px] ">
    //         {/* child-1 */}
    //         <div className="mb-20 flex flex-col items-center ">
    //           <p className='text-[25px] font-semibold text-[#4F4F4F]'>No Teachers at this time</p>
    //           <p className='text-[15px] font-semibold text-[#4F4F4F]'>Teachers will appear here after they enroll in your school.  </p>
    //         </div>
    //         {/* child-2 */}
    //         <div className="flex items-end ">
    //           {/* button */}
    //           <div className="py-3 px-4 mb-5 mr-2 flex items-center gap-5 text-center bg-[#152259] rounded-[30px] ">
    //             {/* text-first-icon */}
    //             <div className=" flex items-center gap-1 ">
    //               <div className="h-5 w-5 flex justify-center items-end ">
    //                 <RiHeadphoneFill className='text-[white]' />
    //               </div>
    //               <p className='text-[14px] text-[white] '>Support</p>
    //             </div>
    //             {/* last-icon */}
    //             <div className="h-4 w-4 flex items-start justify-center mt-1 ">
    //               <IoIosArrowUp className='text-[white] scale-[1] ' />
    //             </div>
    //           </div>
    //           {/* </div> */}
    //         </div>
    //       </div>
    //       :
    //       <TeachersData value={inputValue} setValue={setInputValue} />
    //       }
         
    //     </div>
    //   </div>
    // </div>
    <div className=""></div>
  )
}

export default Billing

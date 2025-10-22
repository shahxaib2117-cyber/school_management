import React from 'react'
import { IoSchoolOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const TeacherDetails = ({ ...props }) => {

  const cls = props?.teachers?.filter((dat, ind) => dat.class == props?.teacherDetails?.class);
  // console.log("🚀 ~ TeacherDetails ~ cls:", cls)
  // same class teachers length
  const clsLength = cls?.length
  // console.log("🚀 ~ teacherDetails ~ clsLength:", clsLength)
  // margin for profile of same class teachers
  const margin = ['ml-0', 'ml-5', 'ml-10', 'ml-15', 'ml-20']


  const handleClose = () => {
    props?.setOpenTeacherDetails(false)
    setTimeout(() => {
      props?.setTeacherDetails(null)
    }, 900);
  }

  // console.log("props?.openTeacherDetails :", props?.openTeacherDetails)

  return (
    <div className={`transform transition-all duration-800 ease-in-out absolute
     ${props?.openTeacherDetails ? `translate-y-0 opacity-100 ` : `translate-y-full opacity-[0] `} pt-2 w-full `} >
      <div className=" pr-50 rounded-[5px] bg-white">
        {/* { props?.TeacherDetails ? ( */}

        <div className='h-[25rem] w-full border-[2px] shadow-md border-[#989898] rounded-[10px] px-2 flex flex-col '>
          {/* roll nomber/Teacher id */}
          <div className=" w-full flex justify-end ">
            <div onClick={() => handleClose()} className="cursor-pointer text-[#838080] hover:text-[#4F4F4F] hover:font-semibold hover:scale-[1.1] 
              duration-100 ">✕</div>
          </div>
          {/* childs parent div */}
          <div className="h-full flex  ">
            {/* FIRST_CHILD */}
            {/* profile div */}
            <div className="h-1/1 w-5/10 py-5 flex flex-col items-center ">
              {/* img */}
              <div className="h-45 w-45 mt-2 flex justify-center items-center rounded-full bg-slate-500 ">
                <img src={props?.teacherDetails?.image} alt="" />
              </div>
              <p className='text-[20px]  font-semibold text-[#000000] mt-3 '>{props?.teacherDetails?.name || "Name"}</p>
              <p className='text-[16px]  font-semibold text-[#858585] '>{props?.teacherDetails?.subject || "Subject"}</p>
              {/* icons */}
              <div className=" flex items-center mt-3 gap-3 ">
                <div className="h-11 w-11 flex justify-center items-center bg-[#cfe7fcfa] rounded-[5px] ">
                  <IoSchoolOutline className='text-[30px] text-[#c1c0c0] ' />
                </div>
                <div className="h-11 w-11 flex justify-center items-center bg-[#cfe7fcfa] rounded-[5px] ">
                  <IoCallOutline className='text-[27px] text-[#c1c0c0] ' />
                </div>
                <div className="h-11 w-11 flex justify-center items-center bg-[#cfe7fcfa] rounded-[5px] ">
                  <IoMailOutline className='text-[30px] font-semibold text-[#c1c0c0] ' />
                </div>
              </div>
            </div>
            {/* SECOND_CHILD */}
            {/* about div */}
            <div className="h-1/1 w-5/10 flex flex-col py-5 items-center ">
              {/* about title div */}
              <div className="w-full ">
                <p className='text-[17px] font-semibold '>About </p>
                <p className='w-[20rem] text-[14px] text-[#404140] '>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
              </div>
              {/* teacher's age or gender div */}
              <div className="w-full flex mt-3 gap-20 ">
                {/* teacher's age */}
                <div className="">
                  <p className=' font-semibold text-[#000000] '>Age</p>
                  <p className='text-[13px]  font-semibold text-[#858585] '>{props?.teacherDetails?.age || 'Age'}</p>
                </div>
                {/* teacher's gender */}
                <div className="">
                  <p className=' font-semibold text-[#000000] '>Gender</p>
                  <p className='text-[13px]  font-semibold text-[#858585] '>{props?.teacherDetails?.gender || "gender"}</p>
                </div>
              </div>
              {/* title */}
              <div className="w-full mt-2 ">
                <p className='font-semibold'>Teacher from the same class</p>
              </div>
              {/* imgs */}
              <div className="w-full flex items-center mt-3">
                <div className="flex items-center relative ">
                  {cls.slice(0, 5).map((dat, ind) => (
                  <div key={ind} className={`${ind >= 1 ? `${margin[ind]} absolute z-1` : ``} h-11 w-11 rounded-full border-[2px] border-[#3d3d3d] bg-[#cac9c9] `}></div>
                ))
                }
                </div>
                {clsLength > 5 ?
                <p className='text-[#3ca9f1] whitespace-nowrap font-semibold text-[14px] ml-21 '>+{clsLength - 5} more</p>
                : ''
              }

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TeacherDetails

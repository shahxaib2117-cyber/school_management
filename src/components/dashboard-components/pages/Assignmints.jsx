import React, { useEffect } from 'react'
import LightBgText from '../../subComponents/LightBgText'
import { MdOutlineDelete } from 'react-icons/md'

const Assingments = () => {

  const today = new Date();

  const formatted =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

  return (
    <div className="container w-full bg-[#131e4e] flex ">
      <div className="h-1/1 w-7/10 px-20 py-5 ">
        <div className="blue_bg_effect h-full w-full overflow-hidden bg-[#131e4e] rounded-[10px] ">
          {/* inputs/parent div */}
          <div className="h-30 w-full px-1 ">
            {/* headings */}
            <div className=" h-5/10 w-full flex ">
              <div className=" h-full w-5/10 flex items-end px-2 ">
                <p className='text-[23px] font-semibold text-[#94a4d2]'>Title</p>
              </div>
              <div className=" h-full w-5/10 flex items-end px-1 ">
                <p className='text-[23px] font-semibold text-[#94a4d2]'>Subject</p></div>
            </div>
            {/* inputs */}
            <div className=" h-5/10 w-full flex ">
              <div className=" h-full w-5/10 flex px-2 py-1 ">
                <input type="text" className='blue_shadow_effect h-full w-full rounded-[5px] outline-none px-3 text-[18px] text-[#94a4d2] border-[black] ' />
              </div>
              <div className=" h-full w-5/10 flex px-2 py-1 ">
                <select className='blue_shadow_effect h-full w-full rounded-[5px] outline-none px-3 text-[18px] text-[#94a4d2] border-[black] '
                  id="subject" name="subject" >
                  <option className='text-[16px] text-[#94a4d2] '>subject</option>
                  <option className='text-[16px] text-[#94a4d2] '>english</option>
                  <option className='text-[16px] text-[#94a4d2] '>math</option>
                  <option className='text-[16px] text-[#94a4d2] '>computer</option>
                  <option className='text-[16px] text-[#94a4d2] '>science</option>
                  <option className='text-[16px] text-[#94a4d2] '>urdu</option>
                </select>
              </div>
            </div>
          </div>
          {/* textarea */}
          <div className="h-95 flex justify-center py-2 ">
            <textarea name="" className='blue_shadow_effect min-h-50 max-h-90 w-96/100 border-[2px] rounded-[5px] outline-none py-1 px-3 text-[#94a4d2]  border-[black]' id="">
            </textarea>
          </div>
          {/* button div */}
          <div className="h-15 w-full flex justify-end items-center px-[13px] ">
            <LightBgText lable='Post' className='px-4 rounded-[5px] !bg-[#3434e0] text-[white] ' />
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="h-1/1 w-3/10 flex flex-col bg-[#131e4e] ">
        <div className="h-12 w-full flex items-end px-1 ">
          <p className='text-[25px] text-[#94a4d2] '>All Assingments</p>
        </div>
        <div className="flex-1 w-full pr-4 py-1 ">
          <div className="blue_shadow_effect h-135 w-full overflow-y-scroll rounded-[7px] ">
            <div className=" min-h-full w-full flex flex-col items-center py-3 gap-3">
              {/* item */}
              <div className="blue_bg_effect h-15 w-18/20 border-[2px] rounded-[7px] py-2 px-2 ">
                <div className="flex justify-between ">
                  <p className='text-[12px] text-[#94a4d2] '>{formatted}</p>
                  <MdOutlineDelete
                    className='ml-20 text-[20px] text-[#ea4545] hover:scale-[1.4] hover:text-[red] duration-300 transition-all ' />
                </div>

                <p className='text-[17px] text-[#94a4d2] '>dshjfhkjdshfkjhdsaf</p>
              </div>
              <div className="blue_bg_effect h-15 w-18/20 border-[2px] rounded-[7px] py-2 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assingments

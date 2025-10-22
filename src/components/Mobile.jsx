import React from 'react'
import mobile_img from  'E:/shahzaib/school_management/public/mobile-img.png'
import { CgProfile } from "react-icons/cg";

const Mobile = () => {
    return (
        <div className='h-[35rem] flex container gap-30 mb-5 mt-20 border-[black] '>
            {/* text-child */}
            <div className=" w-5/10">
                <p className='text-[40px] font-semibold ' >
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                </p>
                <br />
                <br />
                <p className='text-[25px] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus odio pellentesque pellentesque a. Amet <br />
                    ut lobortis pellentesque a, luctus maecenas. <br /><br />
                    Feugiat sed enim vitae viverra cras tristique eu. <br /> Pellentesque bibendum volutpat metus, dictum.
                </p>
                <div className="flex mt-10 gap-5 ">
                    {/* child-1 */}
                    <div className="">
                        <div className="h-20 w-20 rounded-full ">
                            <CgProfile className='text-[80px] rounded-full bg-[#d7d5d5] text-[#989595] ' />
                        </div>
                    </div>
                    {/* child-2 */}
                    <div className="">
                        <p className='text-[40px] font-semibold mt-3 '>80,000K</p>
                        <p className=' text-[#828282] '>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            {/* img-child */}
            <div className="h-full w-4/10 flex justify-center overflow-hidden ">
                <img className='h-10/10 ' src={mobile_img} alt="" />
            </div>
        </div>
    )
}

export default Mobile

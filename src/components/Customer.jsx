import React from 'react'
import LightBgText from './subComponents/LightBgText'
import boy_img from 'E:/shahzaib/school_management/public/boy-img.png'


const Customer = () => {
    return (
        <div className='h-[43rem] container flex justify-center items-center mt-20 mb-5 '>
        <div className=' w-19/20 flex flex-col gap-10'>
            {/* title-child */}
            <div className="h-2/10 flex gap-100 items-center ">
                <p className='text-[40px] font-semibold '>Interesting option <br />from customer</p>
                <p className='text-[20px] '>Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Purus odio pellentesque <br />
                    pellentesque a. Amet</p>
            </div>
            {/* img-child */}
            <div className="h-8/10 ">
                <div className=" py-20 px-20 flex items-center bg-[#0b0641] rounded-[10px] ">
                    <div className=" flex gap-30 border-[#0baf0d] ">
                        {/* img-div */}
                        <div className=" h-[330px] flex items-center rounded-[10px] overflow-hidden ">
                            <img src={boy_img} className='h-13/10 ' alt="" />
                        </div>
                        {/* button-price-pera-text-div */}
                        <div className=" flex flex-col justify-between border-[red] ">
                            <div className="">
                                <LightBgText
                                    lable={'Standard'}
                                    className=" !bg-white !text-[#1777F7] inline-block font-semibold text-[22px]  rounded-[5px] "
                                />
                                <p className='text-[20px] text-white mt-3 '>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus odio pellentesque <br /> pellentesque a. Amet
                                </p>
                                {/* price */}
                                <p className={`text-[50px] text-white  mt-4 font-semibold `}>$15
                                    <span className={`text-[20px]  font-semibold`}>/Month</span>
                                </p>
                            </div>
                            <LightBgText
                                lable={`Choose`}
                                className=" text-white !bg-[#1777F7] text-[25px] mt-10  rounded-[10px] "
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Customer

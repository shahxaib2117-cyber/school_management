import React from 'react'
import keyboard from 'E:/shahzaib/school_management/public/keyboard.png'
import LightBgText from './subComponents/LightBgText'

const Keyboard = () => {
    return (
        <div className=' container gap-20 flex mt-10 '>
            <div className=" h-100 flex justify-center items-center overflow-hidden py-1 px-1">
                <img src={keyboard} className='h-120 ' alt="" />
            </div>
            <div className=" ">
                <div className="">
                    <p className='text-[40px] font-semibold ' >Interesting option <br />from customer</p>
                    <p className='text-[20px] '>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Eget id arcu mauris sed augue <br />
                        volutpat tortor. Condimentum facilisis aenean <br />
                        elit sed mattis porttitor duis ornare justo.</p>
                </div>
                <LightBgText lable='Choose'
                className=' text-white !bg-[#1777F7] inline-block px-10 text-[16px] mt-10 rounded-[8px] '/>
            </div>
        </div>
    )
}

export default Keyboard

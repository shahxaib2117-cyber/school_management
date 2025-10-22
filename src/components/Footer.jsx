import React from 'react'
import LightBgText from './subComponents/LightBgText'

const Footer = () => {
    return (
        <div className='h-[30rem] w-full flex flex-col justify-end items-center bg-[#0e076b] mt-10 '>
            {/* first--child */}
            <div className="h-6/10 container flex justify-center gap-45 ">
                {/* lists-div */}
                <div className="flex gap-10">
                    {/* list_1_div */}
                    {[1, 2, 3].map((data, ind) => (
                        <div key={ind} className="flex flex-col gap-3 ">
                            <p className='text-[20px] text-[white] '>Lorem ipsom Dolor</p>
                            <p className='text-[white] text-[13px] mt-3'>Home</p>
                            <p className='text-[white] text-[13px]'>Pricing</p>
                            <p className='text-[white] text-[13px] '>Usecase</p>
                            <p className='text-[white] text-[13px] '>Location</p>
                            <p className='text-[white] text-[13px] '>Company</p>
                            <p className='text-[white] text-[13px] '>Faq's</p>
                        </div>
                    ))
                    }
                </div>
                {/* input-div */}
                <div className=" ">
                    <p className='text-white ml-10 text-[20px] '>lorem ipsom Dolor</p>
                    <p className='text-white ml-10 mt-5 text-[13px] '>home </p>
                    <div className="h-15 px-3 mt-13 flex justify-center items-center bg-white rounded-[8px] ">
                        {/* input */}
                        <input type="text" placeholder='Get your free consultation now'
                            className='text-[17px] w-50 outline-none bg-white h-7/10 rounded-[10px] ' />
                        {/* button */}
                        <LightBgText lable='Get Started ' className='inline-block py-2 px-2 text-[white] !bg-[#0A92DD] ' />
                    </div>
                </div>
            </div>
            {/* second-child */}
            <div className="h-2/10 px-2 flex justify-center ">
                    <p className='text-[white] mr-70 '>@2022 Scholl management. Copyright and all rigts reserved.</p>
                    <div className=" flex gap-5 ml-25 mr-25 ">
                        <p className='text-[white] '>Privacy </p>
                        <p className='text-[white] '> Security </p>
                        <p className='text-[white] '> Teams </p>
                    </div>
            </div>
        </div>
    )
}

export default Footer

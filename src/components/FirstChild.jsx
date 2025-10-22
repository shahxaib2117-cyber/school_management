import React from 'react'
import center_img from 'E:/shahzaib/school_management/public/main-home-img.png'
import Navbar from '../components/Navbar'
import company_1_icon from 'E:/shahzaib/school_management/public/company_1_icon.png'
import LoginBtnContext from '../LoginContext'
import Cards from '../components/Cards'
import Plans from '../components/Plans'
import Mobile from '../components/Mobile'
import LightBgText from './commons/LightBgTextCommon'
import '../App.css'
const FirstChild = () => {


    const icons_array = [
        {
            icon: company_1_icon
        }, {
            icon: company_1_icon
        }, {
            icon: company_1_icon
        }, {
            icon: company_1_icon
        }, {
            icon: company_1_icon
        }, {
            icon: company_1_icon
        }
    ]


    return (
        <div className=' w-full flex justify-center pb-5 relative ' >
            {/* bg-blue-gradient */}
            <div className="h-[80rem] w-full ">
                <div className="h-[45rem] w-full bg-[#100F57] "></div>
            </div>
            {/* front-div */}
            <div className=" h-full w-full flex flex-col items-center py-5 absolute ">
                {/* <Navbar /> */}
                <div className="mt-[40px] ">
                    <LightBgText lable={"Get your free consultation now"} />
                </div>
                {/* heading--div */}
                <div className=" w-full flex justify-center items-center mt-[10px] relative ">
                    <div className="h-full w-full flex flex-col items-center ">
                        <p className=' text-[28px] md:text-[45px] font-semibold text-white text-center '>
                            Manage your team <br /> easily with task man
                        </p>
                        <p className=' text-center text-[white] text-[12px] md:text-[15px] font-[100] ' >
                            Statisdaa is a  school management solution that offers a <br /> personalized portal to each type of user
                        </p>
                    </div>
                </div>
                <button className='bg-blue-500 text-white md:font-semibold rounded-[20px] px-3 py-[5px] md:px-4 md:py-2 text-[12px] md:text-[14px] mt-2 '>
                    Get Started
                </button>
                {/* main--img--div */}
                <div className=" mt-8 md:mt-10">
                    <img src={center_img} className='inner-box rounded-[10px] h-9/10 ' alt="center_img" />
                </div>
                {/* last--heading */}
                {/* Trusted by company like */}
                <div className=" min-h-[100px] mt-5 flex flex-col justify-center items-center gap-5 ">
                    <p className='text-[35px] font-semibold text-black '>Trusted by company like</p>
                    <div className="h-[60px] flex justify-between min-w-[500px] gap-15 ">
                        {
                            icons_array.map((data, ind) => (
                                <div key={ind} className="h-full w-[60px] flex justify-center items-center ">
                                    <img src={data.icon} alt="icon_1" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstChild

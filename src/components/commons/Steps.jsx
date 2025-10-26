import React, { useState } from 'react'
import uncompleted_icon from '../../assets/un-completed_icon.png'
import step_icon from '../../assets/step_icon.png'
import checked_icon from '../../assets/checked_icon.png'

const Steps = ({ steps }) => {
    const [activeIndex, setActiveIndex] = useState(steps ?? 0);

    let hr_margin = 210;
    hr_margin = hr_margin - (70 * activeIndex)
    let hr_margin_finalval =  hr_margin + "%"
     
    let text_color;
    const getStatus = (index) => {
        if (activeIndex === null) { text_color = false; return <img className='h-full ' src={uncompleted_icon} alt="uncompleted_icon not found!" /> };
        if (index < activeIndex) { return <img className='h-full ' src={checked_icon} alt="checked_icon not found!" /> };
        if (index === activeIndex) { text_color = true; return <img className='h-full ' src={step_icon} alt="step_reached not found!" /> };
        { text_color = false; return <img className='h-full ' src={uncompleted_icon} alt="uncompleted_icon not found!" /> };
    };

    const array = [
        {
            line_one: "Your detail ",
            line_two: "Name and email"
        }, {
            line_one: "Choose a password ",
            line_two: "Choose a secure password"
        }, {
            line_one: "Invite your team ",
            line_two: "Start collaborating"
        }, {
            line_one: "Upload school's document",
            line_two: "For account verification"
        }
    ]
    return (
        <div className=" w-full flex justify-center items-center  ">
            <div className={`h-[100px] w-8/10 container flex justify-center relative mt-3
                 ${activeIndex === 1 ? `mt-2`:`` } 
                 ${activeIndex === 2 ? `mt-24`:`` } 
                 ${activeIndex === 3 ? `mt-30`:`` }
                 `} >
                {/*child__1 */}
                {/* parent */}
                <div className="h-5/10 w-full flex justify-center items-center ">
                    {/* bg_child */}
                    <div className="h-full w-15/20 flex justify-center items-center overflow-hidden mr-4 mb-2 relative ">
                        <hr  style={{ marginRight: hr_margin_finalval }} className={` h-[4px] bg-blue-700 border-none w-full absolute `} />
                        <hr className=' h-[3px] bg-black border-none w-full ' />
                    </div>
                </div>
                {/*child__2 */}
                <div className="h-full w-full flex items-end absolute ">
                    <div className="h-10/10 w-full flex justify-around ">
                        {
                            array.map((data, ind) => (
                                <div key={ind} className=" flex flex-col justify-center items-center text-center ">
                                    <div className="h-7 w-7 flex justify-center items-center bg-black overflow-hidden rounded-full ">
                                        {
                                            getStatus(ind)
                                        }
                                    </div>
                                    <p className={`${text_color ? `text-blue-600` : `text-slate-800`} font-semibold mt-2 `}>{data.line_one}</p>
                                    <p className='text-slate-500 '>{data.line_two}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
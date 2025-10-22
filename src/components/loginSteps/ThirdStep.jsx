import React from 'react'

const ThirdStep = ({ increase }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        increase()
    }

    return (
        <div className=' w-full flex flex-col gap-5 justify-center items-center '>
            <p className='text-[50px] font-semibold text-[black] '>
               Udemy school, Choose your staffs
            </p>
            <form onSubmit={handleSubmit} className=" flex flex-col justify-center mt-10 gap-3 py-10 px-25 form-shadow rounded-[10px] ">
                <select className='px-2 py-1 text-[16px] rounded-[5px] form-input outline-none ' id="city" name="city">
                    <option className='text-[14px] text-[black] ' value="lahore">Number of staff</option>
                    <option className='text-[14px] text-[black] ' value="karachi">1-50</option>
                    <option className='text-[14px] text-[black] ' value="islamabad">51-100</option>
                </select>
                <select className='px-2 py-1 text-[16px] rounded-[5px] form-input outline-none ' id="city" name="city">
                    <option className='text-[14px] text-[black] ' value="lahore">School address</option>
                    <option className='text-[14px] text-[black] ' value="karachi">Karachi</option>
                    <option className='text-[14px] text-[black] ' value="islamabad">Islamabad</option>
                </select>
                <p className='ml-2 '>Already have account? <a href=""> Sign up</a> </p>
                <button type="submit" className="bg-blue-500 px-30 py-2 text-white text-center rounded-[5px] disabled:bg-gray-600">
                    Next
                </button>
            </form>
        </div>
    )
}

export default ThirdStep

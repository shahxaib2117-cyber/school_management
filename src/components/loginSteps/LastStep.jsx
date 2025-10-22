import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LastStep = ({ increase }) => {

    const {isAuthenticated,login,logout} = useAuth()
    const nevigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        increase()
        nevigate('/desktop')
        login()
    }

    return (
        <div className=' w-full flex flex-col gap-5 justify-center items-center '>
            <p className='text-[50px] font-semibold text-[black] '>
                Welcome, Log into you account
            </p>
            <form onSubmit={handleSubmit} className=" flex flex-col justify-center mt-17 gap-3  py-10 px-25 form-shadow rounded-[10px] ">
                <select className='px-2 py-1 text-[18px] rounded-[5px] form-input outline-none ' id="city" name="city">
                    <option className='text-[16px] text-[black] ' value="islamabad">Documents</option>
                    <option className='text-[16px] text-[black] ' value="lahore">My Documents</option>
                    <option className='text-[16px] text-[black] ' value="karachi">Nothing</option>
                </select>
                <p className='ml-2 '>Already have account? <a href=""> Sign up</a> </p>
                
                    <button type="submit" className="bg-blue-500 px-30 py-2 text-white text-center rounded-[5px] disabled:bg-gray-600">
                        Next
                    </button>
            </form>
        </div>
    )
}

export default LastStep
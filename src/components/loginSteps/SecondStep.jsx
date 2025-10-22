import React, { useState } from 'react'
import Input from '../commons/Input'

const SecondStep = ({increase}) => {
    const [password, setPassword] = useState({
        enterPassword: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setPassword({
            ...password,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword({
            confirmPassword:'',
            enterPassword:''
        })
        increase()
    };

    const confirmPassward = password.enterPassword === password.confirmPassword ;

    return (
        <div className=' w-full flex flex-col gap-5 justify-center items-center '>
            <p className='text-[50px] font-semibold text-[black] '>
               Udemy school, Choose your password
            </p>
            <form onSubmit={handleSubmit} className=" form-shadow flex flex-col justify-center gap-3 py-5 px-20 rounded-[10px] ">
                <p className='text-center text-[20px] font-semibold '>
                    It is our great pleasure to have <br /> you on board!
                </p>
                <p className='text-[18px] ' >Choose a password</p>
                <Input
                    onChange={handleChange}
                    value={password.enterPassword}
                    className='w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2 '
                    name={"enterPassword"}
                    type='password'
                />
                <p>Confirm password</p>
                <Input
                    onChange={handleChange}
                    value={password.confirmPassword}
                    className='w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2 '
                    name={"confirmPassword"}
                    type='password'
                />
                <p className='ml-2 '>Already have account? <a href=""> Sign up</a> </p>
                {/* <button disabled={password.enterPassword.length <= 3 || !confirmPassward}   */}
                <button   
                 type="submit" className="bg-blue-500 px-30 py-2 text-white text-center rounded-[5px] disabled:bg-gray-600">
                    Next
                </button>
            </form>
        </div>
    )
}

export default SecondStep

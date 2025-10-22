import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const MainLayout = () => {
    const { isAuthenticated, login, logout } = useAuth()

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center '>
            {/* logout */}
            <button className=' px-3 py-1 bg-[#777676] rounded-[5px] ' onClick={()=>logout()} >Logout</button>
            <p className='text-[50px] font-semibold ' >Wellcome!</p>
        </div>
    )
}

export default MainLayout

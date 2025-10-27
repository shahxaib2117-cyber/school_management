import React, { useState } from 'react'

const AdminModalContant = ({ ...props }) => {
    const [form, setForm] = useState(
        {
            title: '',
            text: ''
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className='h-90 w-110 bg-slate-200 '>
            <p className='text-[20px] font-semibold text-[#414141] '>Title</p>
            <input type="text" className='px-2 text-[18px] font-semibold border-[2px] border-[#a9a9a9] rounded-[5px] ' name='title' value={form.title} onChange={handleChange} />
            <p className='text-[20px] font-semibold text-[#414141]'>Note</p>
            <textarea type="text" className='px-1 py-1 min-h-10 max-h-45 w-full text-[18px] border-[2px] border-[#a9a9a9] rounded-[5px] ' name='text' value={form.text} 
            onChange={handleChange} />
            <div className="h-20 bg-slate-300 pb-1 flex justify-end items-end ">
                <button onClick={() => {props?.setAnnouncement((prev) => [...prev, form]);
                    setForm({ title: '', text: '' })}} className='px-3 py-1 text-white bg-[#5179dd] rounded-[5px] ' >Post</button>
            </div>
        </div>
    )
}

export default AdminModalContant

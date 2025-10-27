import React, { useEffect, useState } from 'react'
import AdminModalContant from '../modal-contants/AdminModalContant'
import Modal from '../../commons/Modal'

const AdminDashboard = () => {

    const [announcement, setAnnouncement] = useState('')
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        const savedd = localStorage.getItem("announcement")
        if (savedd) {
            setAnnouncement(JSON.parse(savedd))
        }
    }, [])

    useEffect(() => {
        if (announcement) {
            localStorage.setItem("announcement", JSON.stringify(announcement))
        }
    }, [announcement])

    console.log("🚀 ~ AdminDashboard ~ announcement:", announcement)

    return (
        <div className=' bg-[#567485] container w-82/100 '>
            <Modal isOpen={isOpenModal} onClose={() => { setIsOpenModal(false) }} className={' mr-100 '} >
                <AdminModalContant
                    announcement={announcement}
                    setAnnouncement={setAnnouncement}
                />
            </Modal>
            <button onClick={() => { setIsOpenModal(true)}} className='px-3 py-1 bg-[#5f5f5f] border-none rounded-[5px] text-[white] ' >Announcement</button>
        </div>
    )
}

export default AdminDashboard

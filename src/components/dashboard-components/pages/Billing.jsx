import React, { useState } from 'react'
import LightBgText from '../../subComponents/LightBgText'
import { PiBellThin } from 'react-icons/pi'
import { useAuth } from '../../../contexts/AuthContext'
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { RiHeadphoneFill } from 'react-icons/ri';
import Modal from '../../commons/Modal';
import TeachersModalContant from '../modal-contants/TeachersModalContant';
import TeachersData from '../dashboardData/TeachersData';
import StudentDashboard from '../dashboardsForLoggedInPersons/StudentDashboard';
const Billing = () => {
  const [layout, setLayout] = useState(false)
  const [inputValue, setInputValue] = useState('')

  
  return (
    <div className=""></div>
  )
}

export default Billing

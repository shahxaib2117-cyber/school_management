import React, { useContext, useState } from 'react'
import Input from '../../components/commons/Input'
import { Links, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const SecondStep = ({ increase }) => {

    const { isAuthenticated, login, logout } = useAuth()

    const teachers = JSON.parse(localStorage.getItem('teachers')) || []
    console.log("🚀 ~ SecondStep ~ teachers:", teachers)
    const students = JSON.parse(localStorage.getItem('students')) || []

    const loggedInStudent = JSON.parse(localStorage.getItem("logedInStudent"))
    const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher"))

    const logedInPerson = loggedInStudent || loggedInTeacher

    const dummyArray = [
        [{
            name: 'shah',
            email: "shahDummy@gmail.com",
            age: 18
        }], [{
            name: 'musa',
            email: "musaDummy@gmail.com",
            age: 24
        }], [{
            name: 'anas',
            email: "anasDummy@gmail.com",
            age: 21
        }]
    ]

    const subjectsArray = ['english', 'urdu', 'math', 'science', 'computer', 'commerce', 'physics', 'chemistry']
    const [selectedSubjectsArray, setSelectedSubjectsArray] = useState([])

    const handleAdd = (ind) => {
        const newSub = subjectsArray[ind]
        setSelectedSubjectsArray((prev) => {
            if (prev.includes(newSub)) {
                return prev.filter(sub => sub !== newSub)
            }
            if (prev.length >= 5) {
                return prev;
            }
            return [...prev, newSub]
        })
    }

    // const [allLoggedInTeachers, setAllLoggedTeachers] = useState(() =>
    //     JSON.parse(localStorage.getItem("allLoggedInTeachers") || "[]")
    // )
    
    const handleClick = () => {
        // const updatedTeacher = {
        //     ...loggedInTeacher,
        //     subjects: selectedSubjectsArray,
        //     seats:[]
        // }
        // const updatedTeacherList = [...allLoggedInTeachers, updatedTeacher]

        // localStorage.setItem("logedInTeacher", JSON.stringify(updatedTeacher))
        // localStorage.setItem("allLoggedInTeachers", JSON.stringify(updatedTeacherList))

        // setAllLoggedTeachers(updatedTeacherList)
        increase()
        // setSelectedSubjectsArray([])
    }

    return (
        <div className=' w-full flex flex-col gap-2 justify-center items-center '>
            <p className='text-[45px] font-semibold text-[black] '>
                Welcome, create your school account
            </p>
            <div className={`form-shadow flex flex-col justify-center items-center gap-5 py-5 px-20 bg-[#ffffff] rounded-[10px] `}>
                <div className="h-35 w-150 flex flex-col gap-3 justify-center ">
                    <p className='text-[25px] text-center font-semibold '>Subjects you want to teach</p>
                    <div className="h-15 w-full ">
                        <div className="h-1/1 w-full flex flex-wrap justify-center gap-3 px-3 py-3 ">
                            {subjectsArray.map((data, ind) => (
                                <div key={ind} onClick={() => handleAdd(ind)} className={`duration-200 transition-all ease-in h-8 px-3 flex justify-center items-center
                                  ${selectedSubjectsArray.includes(data) ? ' bg-[#444444] text-[#d0d0d0]' : ' bg-[#969696] text-[#d0d0d0]'}  hover:scale-[1.1] 
                                 form-shadow rounded-[20px] `} >{data}</div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <button type='submit' onClick={() => handleClick()} className={`px-3 py-1 mt-3 font-semibold text-white rounded-[5px] bg-[#498cea]
                    disabled:bg-[#b3b3b3] `} >
                    Next
                </button>
            </div>
        </div>
    )
}

export default SecondStep

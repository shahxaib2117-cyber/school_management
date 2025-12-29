import React, { useContext, useState } from 'react'
import Input from '../../components/commons/Input'
import { Links, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const FirstStep = ({ increase }) => {

    const teachers = JSON.parse(localStorage.getItem('teachers')) || []
    const students = JSON.parse(localStorage.getItem('students')) || []
    // console.log("🚀 ~ FirstStep ~ students:", students)

    const handleSubmit = (values) => {

        const findExistingTeacher = teachers?.find((data, ind) =>
            data?.name?.toLowerCase() == values?.name?.toLowerCase() &&
            // data?.designation?.toLowerCase() == values?.designation?.toLowerCase() &&
            data?.gender == values?.gender &&
            data?.email?.toLowerCase() == values?.email?.toLowerCase()
        )

        const findExistingStudent = students?.find((data, ind) =>
            data?.name?.toLowerCase() == values?.name?.toLowerCase() &&
            // data?.designation?.toLowerCase() == values?.designation?.toLowerCase() &&
            data?.gender == values?.gender &&
            data?.email?.toLowerCase() == values?.email?.toLowerCase()
        )

        if (values.designation == "Teacher") {
            if (findExistingTeacher) {
                localStorage.setItem("logedInTeacher", JSON.stringify(findExistingTeacher))
                localStorage.removeItem("logedInStudent")
                increase(2)
            }
            else {
                const newTeacher = { ...values, teacherId: teachers.length }
                const updated = [...teachers, newTeacher]
                localStorage.setItem("teachers", JSON.stringify(updated))
                localStorage.setItem("logedInTeacher", JSON.stringify(newTeacher))
                localStorage.removeItem("logedInStudent")
                increase()
            }
        } else if (values.designation == "Student") {
            if (findExistingStudent) {
                localStorage.setItem("logedInStudent", JSON.stringify(findExistingStudent))
                localStorage.removeItem("logedInTeacher")
                increase()
            } else {
                localStorage.removeItem("logedInTeacher")
                increase()
            }
        } else if (values.designation == "Admin") {
            localStorage.removeItem("logedInTeacher")
            localStorage.removeItem("logedInStudent")
            increase(1)
        }
    }


    const loginSchema = Yup.object({
        name: Yup.string()
            .min(3, 'too short')
            .max(25, 'too long')
            .required('required'),

        email: Yup.string()
            .email()
            .required('required'),

        gender: Yup.string()
            .required('required'),

        designation: Yup.string()
            .required('required')
    })

    return (
        <div className=' w-full flex flex-col gap-2 justify-center items-center '>
            <p className='text-[45px] font-semibold text-[black] '>
                Welcome, create your school account
            </p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    gender: '',
                    designation: 'Admin',
                }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={`form-shadow flex flex-col justify-center items-center gap-5 py-5 px-20 bg-[#ffffff] rounded-[10px] `}>
                        {/* name */}
                        <div className="flex flex-col ">
                            <label className='text-[20px] '>
                                Name
                            </label>
                            <Field className={`w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2
                         ${touched.name && errors.name ? `border-[2px] border-[red]` : ``} `} name="name" />
                            <ErrorMessage name='name' component={'p'} className='text-[red] ' />
                        </div>
                        {/* email */}
                        <div className="flex flex-col">
                            <label className='text-[20px] '>
                                email
                            </label>
                            <Field className={`w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2
                         ${touched.email && errors.email ? `border-[2px] border-[red]` : ``} `} name="email" />
                            <ErrorMessage name='email' component={'p'} className='text-[red] ' />
                        </div>
                        {/* gender */}
                        <div className="flex flex-col">
                            <label className='text-[20px] '>
                                gender
                            </label>
                            <Field as="select" className={`w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2
                         ${touched.gender && errors.gender ? `border-[2px] border-[red]` : ``} `} name="gender" >
                                <option value="gender">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Field>
                            <ErrorMessage name='gender' component={'p'} className='text-[red] ' />
                        </div>
                        {/* designation */}
                        <div className="flex flex-col">
                            <label className='text-[20px] '>
                                Designation
                            </label>
                            <Field as="select" className={`w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2
                         ${touched.designation && errors.designation ? `border-[2px] border-[red]` : ``} `} name="designation" >
                                <option value="Admin">Admin</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Student">Student</option>
                            </Field>
                            <ErrorMessage name='designation' component={'p'} className='text-[red] ' />
                        </div>
                        {/* button */}
                        <button type='submit' className='px-3 py-1 font-semibold text-white rounded-[5px] bg-[#498cea] '>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FirstStep
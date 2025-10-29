import React, { useContext, useState } from 'react'
import Input from '../../components/commons/Input'
import { Links, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const SecondStep = ({ increase }) => {

    const { isAuthenticated, login, logout } = useAuth()

    const teachers = JSON.parse(localStorage.getItem('teachers')) || []
    const students = JSON.parse(localStorage.getItem('students')) || []

    const loggedInStudent = JSON.parse(localStorage.getItem("logedInStudent"))
    const loggedInTeacher = JSON.parse(localStorage.getItem("logedInTeacher"))

    const logedInPerson = loggedInStudent || loggedInTeacher
    console.log("🚀 ~ SecondStep ~ logedInPerson:", logedInPerson?.designation)

    const handleSubmit = (values) => {
        const updated = { ...logedInPerson, schoolClass: values.schoolClass }

        if (logedInPerson?.designation == 'Teacher') {
            localStorage.setItem("logedInTeacher", JSON.stringify(updated))
            increase()
        } else if (logedInPerson?.designation == 'Student') {
            localStorage.setItem("logedInStudent", JSON.stringify(updated))
            increase()
        } else {
            return ''
        }
    }

    const loginSchema = Yup.object({
        schoolClass: Yup.string()
            .required('required')
    })

    return (
        <div className=' w-full flex flex-col gap-2 justify-center items-center '>
            <p className='text-[45px] font-semibold text-[black] '>
                Welcome, create your school account
            </p>
            <Formik
                initialValues={{
                    schoolClass: '',
                }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={`form-shadow flex flex-col justify-center items-center gap-5 py-5 px-20 bg-[#ffffff] rounded-[10px] `}>
                        {/* class */}
                        <div className="flex flex-col">
                            <label className='text-[20px] '>
                                {logedInPerson?.designation.toLowerCase() == 'teacher' ? "Select your first class" : "Class"}
                            </label>
                            <Field as="select" className={`w-70 form-input outline-none rounded-[5px] text-[18px] px-2 py-2
                         ${touched.schoolClass && errors.schoolClass ? `border-[2px] border-[red]` : ``} `} name="schoolClass" >
                                <option value="schoolClass">Class</option>
                                <option value="jss1">jss1</option>
                                <option value="jss2">jss2</option>
                                <option value="jss3">jss3</option>
                                <option value="jss4">jss4</option>
                                <option value="jss5">jss5</option>
                            </Field>
                            <ErrorMessage name='schoolClass' component={'p'} className='text-[red] ' />
                        </div>
                        {/* button */}
                        <button type='submit' className='px-3 py-1 font-semibold text-white rounded-[5px] bg-[#498cea] '>Next</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SecondStep

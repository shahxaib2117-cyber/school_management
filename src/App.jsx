import React, { useEffect, useState } from 'react'
import './App.css'
import AuthLayout from './layout/AuthLayout'
import MainLayout from './layout/MainLayout'
import { Navigate, replace, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { useAuth } from './contexts/AuthContext'
import Desktop from './pages/Desktop'
import Home from './pages/Home'
import Desktop_Link_1 from './components/dashboard-components/pages/Desktop_Link_1'
import Teachers from './components/dashboard-components/pages/Teachers'
import Students from './components/dashboard-components/pages/Students'
import Billing from './components/dashboard-components/pages/Billing'
import Profile from './components/dashboard-components/pages/Profile'
import Features from './components/dashboard-components/pages/Features'
import AdminDashboard from './components/dashboard-components/pages/AdminDashboard'
import Attandence from './components/dashboard-components/features/attandenceComponants/Attandence'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Assingments from './components/dashboard-components/pages/Assignmints'

function App() {
  const { isAuthenticated } = useAuth()
  useEffect(() => {

  }, [isAuthenticated])

  return (
    <>
    <ToastContainer  position="bottom-right" autoClose={2000} hideProgressBar={false} />
      <Routes>
        {/* Home always open at "/" */}
        <Route path="/" element={!isAuthenticated ? <Home /> : <Navigate replace to="/desktop" />} />

        {/* Login route */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate replace to="/desktop" /> : <Login />}
        />
        {/* Desktop (Protected route) */}
        <Route
          path="/desktop"
          element={isAuthenticated ? <Desktop /> : <Navigate replace to="/" />}
        >
          <Route index element={<Desktop_Link_1 />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="teacher" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="billing" element={<Billing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="assingments" element={<Assingments />} />
          <Route path="attendance" element={<Attandence />} />
          <Route path="features" element={<Features />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App;


//              12:00 to 1:00   1:01 to 2:00     2:01 to 2:30   2:31 to 3:00       3:00 to 3:30       3:31 to 4:30      
// jss1         english         computer         math                              physics            urdu
// jss2         urdu            english          computer                          math               physics
// jss3         physics         urdu             english                           computer           math
// break        break           break            break                             break              break
// jss4         math            physics          urdu                              english            computer
// jss5         computer        math             physics                           urdu               english
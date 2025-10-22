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
import Exams from './components/dashboard-components/pages/Exams'
import Features from './components/dashboard-components/pages/Features'

function App() {   
   const { isAuthenticated } = useAuth()
  useEffect(() => {

  }, [isAuthenticated])

  return (
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
        element={isAuthenticated ? <Desktop /> : <Navigate replace to="/" /> }
      >
        <Route index element={<Desktop_Link_1 />} />
        <Route path="teacher" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="billing" element={<Billing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="exams" element={<Exams />} />
        <Route path="features" element={<Features />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;

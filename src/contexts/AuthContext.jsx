import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({ children }) => {

    const getInitialAuth = () => {
        const saved = localStorage.getItem("authStateKey");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                localStorage.removeItem("authStateKey");
            }
        }
        return { isAuthenticated: false};
    };

    const [authState, setAuthState] = useState(getInitialAuth)

    useEffect(() => {
        localStorage.setItem("authStateKey", JSON.stringify(authState))
    }, [authState])

    const login = async () => {
            setAuthState({ isAuthenticated: true})
    }
    const logout = async () => {
        setAuthState({ isAuthenticated: false})
    }

    const values = { ...authState, login, logout }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

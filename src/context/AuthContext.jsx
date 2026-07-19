import {createContext, useContext, useState } from 'react'

const AuthContext=createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem('party_menu_token'));
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('party_menu_user');
        try {
            return saved ? JSON.parse(saved) : null;
        } catch {
            localStorage.removeItem('party_menu_user');
            return null;
        }
    });

    const login=(userData,token)=>{
        localStorage.setItem('party_menu_user', JSON.stringify(userData));
        localStorage.setItem('party_menu_token',token)
        setToken(token)
        setUser(userData)
    }

    const logout=()=>{
        localStorage.removeItem('party_menu_token')
        localStorage.removeItem('party_menu_user')
        setToken(null)
        setUser(null)
    }
  return (
    <AuthContext.Provider value={{user,token,isAuthenticated: Boolean(token),login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)

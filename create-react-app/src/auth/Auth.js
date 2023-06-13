import {createContext, useContext, useState} from "react";


const AuthContext = createContext();


const useAuthContext = () => {
  const localEmail = localStorage.getItem('user-email');

  const initialState = localEmail ? {
    email: localEmail
  } : null;
  const [user, setUser] = useState(initialState);


  return {
    user,
    login: (userData) => {
      setUser(userData);
      localStorage.setItem('user-email', userData.email);
    },
    logout: () => {
      setUser(null);
      localStorage.removeItem('user-email');
    }
  }
}

export const AuthProvider = ({children}) => {
  const auth = useAuthContext();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
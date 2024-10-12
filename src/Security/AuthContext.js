import { createContext, useContext } from "react"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    function login(username, password){
        if(username === "om" && password === "cando"){
            return true
        }
        else{
            return false
        }
    }

    return(
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
}
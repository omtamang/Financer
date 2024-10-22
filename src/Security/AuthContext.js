import { createContext, useContext, useState } from "react"
import { retriveUsers } from "../api/ApiService"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){
    const [res, setData] = useState([])

    async function login(username, password){
        
        try {
            const response = await retriveUsers(username)
            setData(response.data)
            console.log(res[0].name)
            console.log(res[0].password)
            if(username === res[0].name && password === res[0].password){
                return true
            }
            else{
                return false
            }
        } catch (error) {
            console.log(error)
            return false
        }

    }

    return(
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
}
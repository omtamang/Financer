import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Signup/Login";
import AuthProvider, { useAuth } from "./Security/AuthContext";
import Home from "./Home/Home";
import Logout from "./Logout/Logout";
import Sign from "./Login/Sign";

export default function Financer() {
    function AuthenticatedRoute({children}){
        const authContext = useAuth()

        if(authContext.isAuthenticated){
            return children
        }

        return <Navigate to="/"/>
    }

    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/register" element={<Sign/>}/>
                        <Route path="/home" element={
                            <AuthenticatedRoute>
                                <Home/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <Logout/>
                            </AuthenticatedRoute>
                        }/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
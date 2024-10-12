import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Signup/Login";
import AuthProvider from "./Security/AuthContext";
import Home from "./Home/Home";


export default function Financer() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
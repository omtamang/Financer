import { Field,Form, Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../../Security/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";


export default function Login() {
    const[username, setUsername] = useState(null)
    const[password, setPassword] = useState(null)
    const[invalid, setInvalid] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    async function onSubmit(value) {
        if(await authContext.login(value.username, value.password)){
            navigate("/home")
        }
        else{
            setInvalid(true)
        }
    }

    return (
        <div>
            <Header/>
            <div className="text-center md:text-3xl font-bold md:pt-[20px]">
                Welcome back
            </div>
            <div>
                <div className="container md:pt-[80px]">
                    <Formik 
                    initialValues={{username, password}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    >
                    {
                        (props) => (
                            <Form className="md:w-[500px] m-auto">

                                {invalid && <div className="alert alert-danger">
                                    Invalid username or password
                                </div>}

                                <fieldset>
                                    <label className="form-label font-bold">Username</label>
                                    <Field type="text" name="username" placeholder="Enter your Username" className="form-control md:w-[100px]" required/>
                                </fieldset>

                                <fieldset className="md:pt-5">
                                    <label className="form-label font-bold">Password</label>
                                    <Field type="password" name="password" placeholder="Enter Password" className="form-control" required/>
                                </fieldset> 

                                <div className="text-center pt-7">
                                    <button className="btn btn-success w-[200px]" type="submit">Login</button>
                                </div>
                            </Form>
                        )
                    }
                    </Formik>

                    <div className="text-center pt-4">
                        Don't have an account? <Link to={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
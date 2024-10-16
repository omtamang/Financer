import { Field,Form, Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../../Security/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const[username, setUsername] = useState(null)
    const[password, setPassword] = useState(null)

    const navigate = useNavigate()

    const authContext = useAuth()

    function onSubmit(value) {
        if(authContext.login(value.username, value.password)){
            navigate("/home")
        }
        else{
            return true
        }
    }

    return (
        <div>
            <div className="text-center md:text-3xl font-bold md:pt-[100px]">
                Login to our system
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
                </div>
            </div>
        </div>
    )
}
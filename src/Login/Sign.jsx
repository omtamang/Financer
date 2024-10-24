import { Field, Formik, Form } from 'formik';
import React, { useState } from 'react';
import Header from '../Header/Header';
import { adduser } from '../api/ApiService';
import { Link, useNavigate } from 'react-router-dom';

export default function Sign() {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const [success, setSuccess] = useState(false)

    async function onSubmit(value) {
        const user = {
            name: value.name,
            phoneNumber: value.phoneNumber,
            password: value.password
        }

        try {
            await adduser(user)
            setSuccess(true)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <div>
                <Header/>
            </div>
            
            <div className='text-center font-bold text-2xl'>
                    Register Now!
            </div>

            {success && <div className='text-center alert alert-success w-[400px] m-auto'>
            Congratulations, your account has been successfully created. <br/> 
            Continue With <Link to={"/"} className='no-underline'>Login</Link>
            </div>}

            <div className='w-[500px] m-auto pt-8 text-blue-500'>
                <Formik 
                initialValues={{name, phoneNumber, password}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset>
                                    <label className='form-label font-bold'>Name</label>
                                    <Field className="form-control" type="text" name="name" placeholder="Enter your name" required/>
                                </fieldset>

                                <fieldset>
                                    <label className='form-label font-bold'>Phone Number</label>
                                    <Field className="form-control" type="tel" name="phoneNumber" placeholder="Enter your number" required/>
                                </fieldset>

                                <fieldset>
                                    <label className='form-label font-bold'>Password</label>
                                    <Field className="form-control" type="password" name="password" placeholder="Enter Strong Password" required/>
                                </fieldset>

                                <div className='text-center pt-3'>
                                    <button className='btn btn-success' type="submit">Register</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
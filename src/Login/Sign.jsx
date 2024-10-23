import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';

export default function Sign() {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()

    function onSubmit(value) {
        
    }
    return(
        <div>
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
                                <Field className="form-control" type="number" name="phoneNumber" placeholder="Enter your number" required/>
                            </fieldset>

                            <fieldset>
                                <label className='form-label font-bold'>Password</label>
                                <Field className="form-control" type="password" name="password" placeholder="Enter Strong Password" required/>
                            </fieldset>

                            <div>
                                <button className='btn btn-success' type="submit">Register</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
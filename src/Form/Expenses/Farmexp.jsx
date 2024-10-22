import { Field, Form, Formik } from "formik";
import { useState } from "react";


export default function Farmexp() {
    const [labour, setLabour] = useState("")
    const [fertilizer, setFertilizer] = useState('')
    const [pesticides, setPesticides] = useState('')
    const [seeds, setSeeds] = useState('')

    function onSubmit(value){

    }

    return (
        <div>
            <p className="text-center text-xl font-bold">Add Todays Expenses</p>

            <div className="container">
                <Formik 
                initialValues={{labour, fertilizer, pesticides, seeds}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                >
                    {
                        (props) => (
                            <Form className="md:w-[400px] m-auto">
                                <fieldset>
                                    <label className="form-label font-bold">Labour</label>
                                    <Field type="number" name="labour" placeholder="Rs." className="form-control"/>
                                </fieldset>

                                <fieldset>
                                    <label className="form-label font-bold">Fertilizer</label>
                                    <Field type="number" name="fertilizer" placeholder="Rs." className="form-control"/>
                                </fieldset>

                                <fieldset>
                                    <label className="form-label font-bold">Pesticides</label>
                                    <Field type="number" name="pesticides" placeholder="Rs." className="form-control"/>
                                </fieldset>

                                <fieldset>
                                    <label className="form-label font-bold">Seeds</label>
                                    <Field type="number" name="seeds" placeholder="Rs." className="form-control"/>
                                </fieldset>

                                <div className="pt-4">
                                    <button className="btn btn-success" type="submit">Add</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
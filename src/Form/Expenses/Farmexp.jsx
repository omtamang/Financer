import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../../Security/AuthContext";
import { addFarmExp } from "../../api/ApiService";


export default function Farmexp() {
    const [labour, setLabour] = useState("")
    const [fertilizer, setFertilizer] = useState('')
    const [pesticides, setPesticides] = useState('')
    const [seeds, setSeeds] = useState('')
    const [success, setSuccess] = useState(false)

    const authContext = useAuth()
    const id = authContext.id
    console.log(id)

    async function onSubmit(value){
        const farm = {
            labour: value.labour,
            fertilizer: value.fertilizer,
            pesticides: value.pesticides,
            seeds: value.seeds,
        }

        try {
            await addFarmExp(farm, id)
            setSuccess(true)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <p className="text-center text-xl font-bold">Add Todays Expenses</p>

            <div className="container">
                {success && <div className="alert alert-success">
                    Expenses Saved Successfully
                </div>}
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
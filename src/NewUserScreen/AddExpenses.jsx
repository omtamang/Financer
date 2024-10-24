import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { addFarmExp } from "../api/ApiService";
import Header from "../Header/Header";
import { useAuth } from "../Security/AuthContext";
import { useNavigate } from "react-router-dom";


export default function AddExpenses() {
    const [labour, setLabour] = useState(0);
    const [fertilizer, setFertilizer] = useState(0);
    const [pesticides, setPesticides] = useState(0);
    const [seeds, setSeeds] = useState(0);

    const authContext = useAuth()
    const id = authContext.id

    const navigate = useNavigate()

    async function onSubmit(value) {
        const farm = {
            labour: value.labour,
            fertilizer: value.fertilizer,
            pesticides: value.pesticides,
            seeds: value.seeds
        }

        try {
            const response = await addFarmExp(farm, id)
            console.log(response)
            if(response.status === 200) {
                navigate('/home')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <Header/>
            </div>
            
            <div className=" text-center">
            <h1 className="text-3xl font-bold mb-4">Add Expenses</h1>
                <Formik 
                initialValues={{labour, fertilizer, pesticides, seeds}}
                enableReinitialize={true}
                onSubmit={{onSubmit}}
                >
                {
                    (props) => (
                        <Form className="md:w-[300px] w-[280px] m-auto">
                            <fieldset>
                                <label className="form-label">Labour</label>
                                <Field type="number" name="labour" className="form-control" placeholder="Rs. Labour Cost" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label">Fertilizer</label>
                                <Field type="number" name="fertilizer" className="form-control" placeholder="Rs. Fertilizer Cost" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label">Pesticides</label>
                                <Field type="number" name="pesticides" className="form-control" placeholder="Rs. pesticide Cost" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label">Seeds</label>
                                <Field type="number" name="seeds" className="form-control" placeholder="Rs. seeds Cost" required/>
                            </fieldset>

                            <div className="">
                                <button className="btn btn-success mt-11" type="submit">Continue</button>
                            </div>
                        </Form>
                    )
                }

                </Formik>
            </div>
        </div>
    )
}
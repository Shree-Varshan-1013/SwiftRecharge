import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { detailSchema } from '../../Schemas/detailSchema';

const Form = () => {

    const navigate = useNavigate();

    const initialData = {
        mobileNumber: "",
        operatorName: "",
        location: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: detailSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventPlan();
            action.resetForm();
        },
    });

    const eventPlan = () => {
        navigate(`/mobile-recharge/${values.operatorName}/${values.mobileNumber}`);
    }

    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8" style={{
                backgroundImage: "url(/assets/bbblurry.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <img className="mx-auto h-10 w-auto" src="/assets/recharge-icon.png" alt="Your Company" />

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Let's get Your
                        </h2>
                        <br />
                        <h2 className='text-center text-2xl'>Mobile Recharge Done:)</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    name="mobileNumber"
                                    type="text"
                                    value={values.mobileNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                />
                                {errors.mobileNumber && touched.mobileNumber && <div className="text-red-600 text-xs">{errors.mobileNumber}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900 mt-4"
                            >
                                Operator
                            </label>
                            <div className="relative">
                                <select
                                    name="operatorName"
                                    value={values.operatorName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                >
                                    <option value="" disabled>Select Operator</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Bsnl">Bsnl</option>
                                    <option value="Jio">Jio</option>
                                    <option value="Vi">Vi</option>
                                </select>
                                {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900 mt-2"
                            >
                                Location
                            </label>
                            <div className="mt-2">
                                <input
                                    name="location"
                                    type='text'
                                    value={values.location}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                />
                            </div>
                            {errors.location && touched.location && <div className="text-red-600 text-xs">{errors.location}</div>}
                        </div>
                        <div>
                            <button
                                onClick={handleSubmit}
                                className="mt-5 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form

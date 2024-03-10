import React from "react"
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Schemas/SignUpSchema";
import Login from "./Login";
import Header from "../Header";
import { useDispatch } from "react-redux";
import Authentication from "../../services/auth/Authentication";
import Swal from 'sweetalert2'
export default function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialState = {
        "userName": "",
        "email": "",
        "userPassword": "",
        "confirmPassword": "",
        "mobileNumber": "",
        "location": "",
        "operatorName": "",
    }

    const eventSignUp = async () => {

        const data = {
            "userName": values.userName,
            "email": values.email,
            "userPassword": values.userPassword,
            "mobileNumber": values.mobileNumber,
            "location": values.location,
            "operatorName": values.operatorName,
        }
        const response = await Authentication.register(data);
        console.log(response);

        if (response.status === 201) {

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully registered !",
                showConfirmButton: false,
                timer: 2000
            });

            setTimeout(() => {
                navigate("/login");
            }, 2000)
        }


    }

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: initialState,
            validationSchema: SignUpSchema,
            onSubmit: (values, action) => {
                // console.log(values);
                eventSignUp();
                action.resetForm();
            }
        })

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
                            Sign up to your account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="userName"
                                        name="userName"
                                        type="userName"
                                        autoComplete="userName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userName}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>
                            {errors.userName && touched.userName ? (
                                <p style={{ color: "red" }}>{errors.userName}</p>
                            ) : null}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="userPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="userPassword"
                                        name="userPassword"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userPassword}
                                        autoComplete="current-userPassword"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>

                            {errors.userPassword && touched.userPassword ? (
                                <p style={{ color: "red" }}>{errors.userPassword}</p>
                            ) : null}

                            <div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                        autoComplete="current-Password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                            ) : null}

                            <div>
                                <label htmlFor="mobileNumber" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        type="mobileNumber"
                                        autoComplete="mobileNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobileNumber}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>

                            {errors.mobileNumber && touched.mobileNumber ? (
                                <p style={{ color: "red" }}>{errors.mobileNumber}</p>
                            ) : null}

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="operatorName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Operator Name
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="operatorName"
                                        name="operatorName"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.operatorName}
                                        autoComplete="current-location"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>
                            {errors.operatorName && touched.operatorName ? (
                                <p style={{ color: "red" }}>{errors.operatorName}</p>
                            ) : null}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                        Location
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.location}
                                        autoComplete="current-location"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>
                            {errors.location && touched.location ? (
                                <p style={{ color: "red" }}>{errors.location}</p>
                            ) : null}

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-900 font-bold">
                            Already you have an account?{' '}
                            <a onClick={() => navigate("/login")} className="font-bold text-teal-600 hover:text-teal-500 text cursor-pointer">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

import React from "react"
import { useNavigate } from "react-router"
import { SignInSchema } from "../../Schemas/SignInSchema";
import { useFormik } from "formik"
import Authentication from "../../services/auth/Authentication";
import { useDispatch } from "react-redux";
import { addToken, addUserDetails, toggleLogin } from "../../config/GlobalSlice";
import Swal from "sweetalert2";

export default function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const initialState = {
    "userName": "",
    "password": ""
  }


  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {

    console.log(values);

    const response = await Authentication.login(values.userName, values.password);

    if (response.status === 200) {

      const user = response.data.user;
      const token = response.data.jwtToken;
      const role = response.data.user.role[0].roleName;

      dispatch(addUserDetails(user));
      dispatch(addToken(token));
      dispatch(toggleLogin(true));

      if(role==="CUSTOMER"){

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully loggedin:)",
          showConfirmButton: false,
          timer: 2000
        });
        setTimeout(()=>{
          navigate("/");
        },2000)
      }
      else{
        Swal.fire({

          position: "center",
          icon: "success",
          title: "Successfully loggedin:)",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(()=>{
          navigate("/dashboard");
        },2000)

      }
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid credentials",
      });
    }

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
          <img class="mx-auto h-10 w-auto" src="/assets/recharge-icon.png" alt="Your Company" />

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email/UserName
                </label>
                <div className="mt-2">
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    autoComplete="userName"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                  />
                </div>
              </div>
              {errors.userName && touched.userName ? (
                <p style={{ color: "red" }}>{errors.userName}</p>
              ) : null}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                  />
                </div>
              </div>
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-900 font-bold">
              Not a member?{' '}
              <a onClick={() => navigate("/signup")} className="font-bold text-teal-600 hover:text-teal-500 text cursor-pointer">
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

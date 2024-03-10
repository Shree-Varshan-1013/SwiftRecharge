import * as Yup from 'yup'

export const SignUpSchema = Yup.object({
    userName: Yup.string().matches(/^[a-zA-Z0-9_]{6,16}$/).min(6).required("Please enter the username !"),
    email: Yup.string().email().required("Email is required"),
    userPassword: Yup.string().min(8).max(12).required("Password is required"),
    confirmPassword:Yup.string().oneOf([Yup.ref('userPassword'), null], 'Password must match').required('Confirm password is required !'),
    mobileNumber: Yup.string().matches(/^[0-9]{10}$/, "phone number is not valid").required("please enter the mobile number"),
    location: Yup.string().required("location is required"),
    operatorName: Yup.string().required("operator is required"),
})
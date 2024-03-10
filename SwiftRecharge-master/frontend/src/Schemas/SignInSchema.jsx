import * as Yup from 'yup'

export const SignInSchema = Yup.object({
    userName:Yup.string().required("Email/userName is required"),
    password:Yup.string().min(8).max(12).required("Password is required"),
})
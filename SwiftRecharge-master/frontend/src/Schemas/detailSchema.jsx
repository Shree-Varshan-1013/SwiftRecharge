import * as Yup from 'yup';

export const detailSchema = Yup.object({
    mobileNumber: Yup.string()
        .required("Please enter the phone number!")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    operatorName: Yup.string().required("Please Enter the operator name !"),
    location: Yup.string().required("Please Enter the location !"),
});

import * as Yup from 'yup';

export const PlanSchema = Yup.object({
    planType: Yup.string().required('Plan Type is required'),
    planName: Yup.string().required('Plan name is required'),
    planData: Yup.string().required('Data is required'),
    planDetails: Yup.string().required('Plan details are required'),
    planPrice: Yup.number().typeError('Price must be a number').required('Price is required'),
    planValidity: Yup.string().required('Validity is required'),
    operatorName: Yup.string().required('Operator name is required')
});


export default PlanSchema;
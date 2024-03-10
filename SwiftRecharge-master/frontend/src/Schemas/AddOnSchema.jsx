import * as Yup from 'yup';

export const AddOnSchema = Yup.object({
    addonName: Yup.string().required('Addon name is required'),
    data: Yup.string().required('Data is required'),
    addonPrice: Yup.number().typeError('Price must be a number').required('Price is required'),
    addonDetails: Yup.string().required('Addon details are required'),
    operatorName: Yup.string().required('Operator name is required')
});


export default AddOnSchema;
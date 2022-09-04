import * as yup from 'yup'

export const  FormikInitialValues = {
    email : "",
    password : "",
}


export const validationSchimas = yup.object({
    email: yup.string().email("invalid Email").required("Email is required"),
    password: yup.string().required("Password is required")
})

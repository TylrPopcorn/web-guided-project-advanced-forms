// Here goes the schema for the form

import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required ya bozo")
        .min(3, "Username must be three characters")
    ,

    email: yup
        .string()
        .email("Mustbe a vlid email")
        .required("Email is reuired.")
    ,

    role: yup
        .string()
        .oneOf(["Instructor", "student", "Alumni"])
    ,

    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean(),
})

export default formSchema;
// Here goes the schema for the form

import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Hey chump, you need a username!")
    .min(3, "Gotta have a 3 character username ya chump!"),
  email: yup
    .string()
    .email("Whattah yah tryin' tuh do yah chump!")
    .required("Yah tryin' tuh pull my leg eh? Gimme an email!"),
  role: yup
    .string()
    .oneOf(["instructor", "student", "alumni"], "Den get outta my class ya chump!!"),
  civil: yup
    .string()
    .oneOf(["single", "partner"], "Civil status is required"),
  jamming: yup.boolean(),
  reading: yup.boolean(),
  golf: yup.boolean()
});

export default formSchema;

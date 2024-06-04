import * as yup from "yup";

const experienceOptions = ["Beginner", "Intermediate", "Advanced", "Expert"];

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  Phonenumber: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Required"),
  Experience: yup
    .string()
    .oneOf(experienceOptions, "Invalid Experience")
    .required("Required"),
  desc: yup.string().required("Required"),
});

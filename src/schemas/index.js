import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please Enter Valid Email").required("Required"),
  name: yup.string().required("Required"),
  Phonenumber: yup.number().positive().integer().required("Required"),
});

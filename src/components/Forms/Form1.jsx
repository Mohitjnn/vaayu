import React from "react";
import { useFormik } from "formik";
import { basicSchema1 } from "@/schemas";
import axios from "axios";

const onSubmit = async (values, actions) => {
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbygcw7i24sNNMXqeWlq4jGPoQ96uKahRUPBnWv0o5n6Mj6NyL_-FBp09K2jVDsWIGQ5/exec",
      values // Send form values directly
    );

    if (response.status === 200) {
      console.log("Form data successfully sent!");
    } else {
      console.error("Error sending form data:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending form data:", error);
  }

  // Reset form after submission
  actions.resetForm();
};

function Form1() {
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        Phonenumber: "",
        desc: "",
      },
      validationSchema: basicSchema1,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col space-y-4 mt-4 text-left w-full h-fit"
    >
      <label
        htmlFor="name"
        className={`font-semibold ${
          errors.name && touched.name ? "text-red-500" : "text-blue-500"
        }`}
      >
        {errors.name && touched.name ? errors.name : "Full Name"}
      </label>
      <input
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        id="name"
        className={`input ${
          errors.name && touched.name
            ? "border-2 border-red-600"
            : "focus:border-blue-500"
        }`}
        type="text"
        placeholder="Full Name"
      />

      <label
        htmlFor="email"
        className={`font-semibold ${
          errors.email && touched.email ? "text-red-500" : "text-blue-500"
        }`}
      >
        {errors.email && touched.email ? errors.email : "Email"}
      </label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        className={`input ${
          errors.email && touched.email
            ? "border-2 border-red-600"
            : "focus:border-blue-500"
        }`}
        type="text"
        placeholder={"Email Address"}
      />

      <label
        htmlFor="Phonenumber"
        className={`font-semibold ${
          errors.Phonenumber && touched.Phonenumber
            ? "text-red-500"
            : "text-blue-500"
        }`}
      >
        {errors.Phonenumber && touched.Phonenumber
          ? errors.Phonenumber
          : "Phone Number"}
      </label>
      <input
        value={values.Phonenumber}
        onChange={handleChange}
        onBlur={handleBlur}
        id="Phonenumber"
        className={`input ${
          errors.Phonenumber && touched.Phonenumber
            ? "border-2 border-red-600"
            : "focus:border-blue-500"
        }`}
        type="text"
        placeholder="Phone Number"
      />
      <label
        htmlFor="desc"
        className={`font-semibold ${
          errors.desc && touched.desc ? "text-red-500" : "text-blue-500"
        }`}
      >
        {errors.desc && touched.desc ? errors.desc : "Message"}
      </label>
      <textarea
        value={values.desc}
        onChange={handleChange}
        onBlur={handleBlur}
        id="desc"
        cols={2}
        rows={2}
        placeholder="A short description of your questions"
        className={`input ${
          errors.desc && touched.desc ? "border-2 border-red-600" : ""
        } `}
      />

      <button type="submit" className="Btnlight rounded-lg py-2 Text">
        Submit
      </button>
    </form>
  );
}

export default Form1;

import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema1 } from "@/schemas";
import TransitionVertical from "@/animations/transitionVertical";

const formUrl =
  "https://script.google.com/macros/s/AKfycbzIDO9WfxaGMHtttPfKg5roVUERVKMrht19l32tAhpyCJQANxCgbooxcBZn02D5Ifs/exec";

function Form1({ scrollToForm }) {
  const [successMessage, setSuccessMessage] = useState("");

  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        Phonenumber: "",
        desc: "",
        formType: "ContactUs",
      },
      validationSchema: basicSchema1,
      onSubmit: (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("Phonenumber", values.Phonenumber);
        formData.append("desc", values.desc);
        formData.append("formType", values.formType);

        fetch(formUrl, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              setSuccessMessage("Form submitted successfully!");
              console.log(response);
              resetForm();
            } else {
              setSuccessMessage("Form submission failed. Please try again.");
            }
          })
          .catch(() => {
            setSuccessMessage("An error occurred. Please try again.");
          });
      },
    });

  return (
    <TransitionVertical>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col items-start space-y-4 text-left w-full"
      >
        <input
          className=""
          type="hidden"
          id="formType"
          name="formType"
          value={values.formType}
        />
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
          name="name"
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
          name="email"
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
          name="Phonenumber"
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
          name="desc"
          cols={2}
          rows={2}
          placeholder="A short description of your questions"
          className={`input ${
            errors.desc && touched.desc ? "border-2 border-red-600" : ""
          }`}
        />

        <div className="flex space-x-4 w-full items-center justify-center">
          <button type="submit" className="Btnlight rounded-lg py-2 Text">
            Submit
          </button>
          <span className="mx-4 text"> Or</span>
          <button
            type="button"
            onClick={() => scrollToForm("form2")}
            className="Btnlight bg-white border-2 border-blue-500 text-blue-500 rounded-lg py-2 Text"
          >
            Join Us
          </button>
        </div>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </TransitionVertical>
  );
}

export default Form1;

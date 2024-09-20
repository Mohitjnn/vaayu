import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema2 } from "@/schemas";
import TransitionVertical from "@/animations/transitionVertical";

const formUrl = process.env.NEXT_PUBLIC_FORM_URL;
function Form2({ scrollToForm }) {
  const [successMessage, setSuccessMessage] = useState("");

  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        Phonenumber: "",
        Experience: "",
        desc: "",
        formType: "JoinUs",
      },
      validationSchema: basicSchema2,
      onSubmit: (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("Phonenumber", values.Phonenumber);
        formData.append("Experience", values.Experience);
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
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col space-y-4 text-left w-full h-fit"
      >
        <input
          type="hidden"
          id="formType"
          name="formType"
          value={values.formType}
        ></input>
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

        <div className="flex justify-between space-x-6">
          <div className="space-y-4 text-left w-full h-fit flex flex-col">
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
          </div>
          <div className="space-y-4 text-left w-full h-fit flex flex-col">
            <label
              htmlFor="Experience"
              className={`font-semibold ${
                errors.Experience && touched.Experience
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              {errors.Experience && touched.Experience
                ? errors.Experience
                : "Experience"}
            </label>
            <select
              value={values.Experience}
              onChange={handleChange}
              onBlur={handleBlur}
              id="Experience"
              name="Experience"
              className={`input ${
                errors.Experience && touched.Experience
                  ? "border-2 border-red-600"
                  : "focus:border-blue-500"
              }`}
            >
              <option value="">Select Experience</option>
              <option value="1 year or less">1 year or less</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4+ years">4+ years</option>
            </select>
          </div>
        </div>
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
          placeholder="A short description of your experience in the sports field"
          className={`input ${
            errors.desc && touched.desc ? "border-2 border-red-600" : ""
          } `}
        />

        <div className="flex space-x-4 w-full items-center justify-center">
          <button type="submit" className="Btnlight  rounded-lg py-2 Text">
            Submit
          </button>
          <span className="mx-4 text"> Or</span>
          <button
            type="button"
            onClick={() => scrollToForm("form1")}
            className="Btnlight bg-white border-2 border-blue-500 text-blue-500 rounded-lg py-2 Text"
          >
            Contact Us
          </button>
        </div>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </TransitionVertical>
  );
}

export default Form2;

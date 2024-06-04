import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "@/schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function Form2() {
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        Phonenumber: "",
        Experience: "",
        desc: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col space-y-4 text-left w-full h-fit"
    >
      <label htmlFor="name" className="font-semibold text-blue-500">
        Full Name
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
      {errors.name && touched.name && (
        <p className="text-red-600 text-left">{errors.name}</p>
      )}

      <label htmlFor="email" className="font-semibold text-blue-500">
        Email Address
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
        placeholder="Email Address"
      />
      {errors.email && touched.email && (
        <p className="flex flex-row justify-start w-[66%] text-red-600">
          {errors.email}
        </p>
      )}
      <div className="flex justify-between space-x-6">
        <div className="space-y-4 text-left w-full h-fit flex flex-col">
          <label htmlFor="Phonenumber" className="font-semibold text-blue-500">
            Phone Number
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
          {errors.Phonenumber && touched.Phonenumber && (
            <p className="flex flex-row justify-start w-[66%] text-red-600">
              {errors.Phonenumber}
            </p>
          )}
        </div>
        <div className="space-y-4 text-left w-full h-fit flex flex-col">
          <label htmlFor="Experience" className="font-semibold text-blue-500">
            Experience
          </label>
          <select
            value={values.Experience}
            onChange={handleChange}
            onBlur={handleBlur}
            id="Experience"
            className={`input ${
              errors.Experience && touched.Experience
                ? "border-2 border-red-600"
                : "focus:border-blue-500"
            }`}
          >
            <option value="">Select Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          {errors.Experience && touched.Experience && (
            <p className="flex flex-row justify-start w-[66%] text-red-600">
              {errors.Experience}
            </p>
          )}
        </div>
      </div>
      <label htmlFor="desc" className="font-semibold text-blue-500">
        Message
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
      {errors.desc && touched.desc && (
        <p className="flex flex-row justify-start w-[66%] text-red-600">
          {errors.desc}
        </p>
      )}

      <button type="submit" className="Btnlight rounded-lg py-2 Text">
        Submit
      </button>
    </form>
  );
}

export default Form2;

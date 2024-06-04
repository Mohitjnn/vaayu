"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { basicSchema } from "@/schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function Contact() {
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        Phonenumber: "",
        desc: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <main className="w-full h-full">
      <center className="w-full h-full px-16 py-10">
        <section className="flex flex-row w-full h-full justify-between items-start space-x-6 ">
          <div className="w-[45%] relative h-[90vh] bg-custom-gradient rounded-br-[20%] mt-20">
            <Image
              src="/contactUsimg.png"
              fill={true}
              objectFit="fill"
              quality={100}
              priority={true}
            />
          </div>
          <div className="flex flex-col w-[50%] h-fit py-4 items-start justify-start">
            <h1 className="Title text-blue-500">Join Us</h1>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col space-y-4 mt-4 text-left w-full h-fit"
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
              {errors.name && touched.name ? (
                <p className="text-red-600 text-left">{errors.name}</p>
              ) : (
                ""
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
              {errors.email && touched.email ? (
                <p className="flex flex-row justify-start w-[66%] text-red-600">
                  {errors.email}
                </p>
              ) : (
                ""
              )}

              <label
                htmlFor="Phonenumber"
                className="font-semibold text-blue-500"
              >
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
              {errors.Phonenumber && touched.Phonenumber ? (
                <p className="flex flex-row justify-start w-[66%] text-red-600">
                  {errors.Phonenumber}
                </p>
              ) : (
                ""
              )}

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
                placeholder="A short description of your questions"
                className={`input ${
                  errors.desc && touched.desc ? "border-2 border-red-600" : ""
                } `}
              />
              {errors.desc && touched.desc ? (
                <p className="flex flex-row justify-start w-[66%] text-red-600">
                  {errors.desc}
                </p>
              ) : (
                ""
              )}

              <button type="submit" className="Btnlight rounded-lg py-2 Text">
                Submit
              </button>
            </form>
          </div>
        </section>
      </center>
    </main>
  );
}

export default Contact;

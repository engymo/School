import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logPhoto from '../../assets/login-img.png';
import logologin from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Register() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-r from-pink-50 to-red-50 p-10">
        <img src={logPhoto} alt="Login" className="w-1/2 mb-6" />
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to Dreams LMS.</h2>
        <p className="text-gray-600 text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center bg-white p-8 md:p-20">
        <div className="flex justify-between items-center mb-10">
          <img src={logologin} alt="Logo" className="w-1/3" />
          <Link to="/" className="text-blue-600 hover:underline text-sm">Back to Home</Link>
        </div>

        <h2 className="text-2xl font-bold mb-8">Sign Up</h2>

        <div className="flex gap-5 mb-6">
          <button className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600">Tutor Instructor</button>
          <button className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600">Submit</button>
        </div>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form Data:', values);
          }}
        >
          
          {() => (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none"
                  />
                  <ErrorMessage name="firstName" className="text-red-500 text-xs mt-1" />
                </div>

                <div className="w-full">
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none"
                  />
                  <ErrorMessage name="lastName" className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none"
                />
                <ErrorMessage name="email" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none"
                />
                <ErrorMessage name="password" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none"
                />
                <ErrorMessage name="confirmPassword"  className="text-red-500 text-xs mt-1" />
              </div>

              <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600">
                Create Account
              </button>

              <p className="text-sm">
                Have an account? <Link to="/Login" className="text-red-500 hover:underline">Login</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logPhoto from '../../assets/login-img.png';
import logologin from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side */}

      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-r from-pink-50 to-red-50 w-full md:w-1/2 p-10">
        <img src={logPhoto} alt="Login Visual" className="w-1/2 mb-6" />
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to Dreams LMS.</h2>
        <p className="text-gray-600 text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Side */}
      
      <div className="flex flex-col justify-center w-full md:w-1/2 sm:h-screen p-8 md:p-20 bg-white">
        <div className="flex justify-between items-center mb-10">
          <img src={logologin} alt="Logo" className="w-1/3" />
          <Link to="/" className="text-blue-600 hover:underline text-sm">Back to Home</Link>
        </div>

        <h2 className="text-2xl font-bold mb-8">Login to your account</h2>

        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-col gap-5">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Your Name Or Email"
                  className="p-3 border border-gray-300 rounded-md text-sm w-full"
                />
                <ErrorMessage name="email"className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="p-3 border border-gray-300 rounded-md text-sm w-full"
                />
                <ErrorMessage name="password"  className="text-red-500 text-sm mt-1" />
              </div>

              <label className="inline-flex items-center text-sm">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Remember me
              </label>

              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Login
              </button>

              <p className="text-sm">
                New User? <Link to="/Register" className="text-red-500">Create an Account</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import OTPPage from "./Otp";
 

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const AdminForgotPassword = () => {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { values, handleChange } = useFormik({
    initialValues: initialValues,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (values.password !== values.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      const response = await fetch('http://127.0.0.1:5000/forget_password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success(data.successful);
        setError('');
        setIsSuccess(true);
      } else {
        toast.error(data.error);
        setError('Error resetting password');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error resetting password');
      setError('Error resetting password');
    }
  };

  return (
    <>
      {isSuccess ? (
        <OTPPage/>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Forgot Password</h2>

          <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
            />

            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              placeholder="Enter new password"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
            />

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              placeholder="Confirm new password"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Reset Password
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AdminForgotPassword;

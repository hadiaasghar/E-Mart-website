import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-auto bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl">Login</h2>
        <p className='text-sm text-gray-500'>Sign in to continue</p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm">
            <div>
            <label className="block text-gray-700">Email Address</label>
<input
  type="email"
  className="w-full px-3 py-2 mt-4 text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
  placeholder="Enter Email Address"
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "Entered value does not match email format",
    },
  })}
/>
{errors.email && (
  <p className="text-red-500">{errors.email.message}</p>
)}

            </div>
            <div className="pt-4">
              <label htmlFor="password" className="text-gray-500">Password</label>
              <input 
  id="password" 
  type="password" 
  autoComplete="current-password" 
  required 
  {...register('password', { required: 'Password is required' })}
  className="w-full px-3 py-2 mt-4 text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
  placeholder="Enter Password" 
/>
{errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}

            </div>
          </div>
          <div className="text-sm">
            <Link to="/forgotpassword">
            <a href="#" className="font-medium text-red-500 hover:text-indigo-500">
              Forgot Password?
            </a></Link>
          </div>
          <div>
            <button 
              type="submit" 
              className="relative flex justify-center w-full h-14 px-8 py-4 text-base font-bold text-white bg-primary-900 border border-transparent rounded-md group hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
          <div>
          <Link to ="/register">
            <button 
              type="button" 
              className="relative flex justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white bg-primary-900 border border-transparent rounded-md group hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button></Link>
          </div>
          <div className="relative flex items-center justify-center w-full mt-4">
            <hr className="w-full border-gray-300" />
            <div className="absolute px-2 text-lg text-primary-900 bg-white">OR</div>
          </div>
          <div>
          <Link to="/loginwithphone">

            <button 
              type="button" 
              className="relative flex items-center justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white  bg-primary-900 border border-transparent rounded-md  hover:bg-primary-400  group   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >

              <span className="absolute gap-3 flex items-center pl-3">
                <FaPhoneAlt className="w-5 h-5 text-white" />
                Login with Phone
              </span>
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

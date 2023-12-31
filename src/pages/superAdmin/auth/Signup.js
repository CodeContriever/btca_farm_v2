import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setSuperAdminSignupData } from '../../../store/superAdmin/Signup';
import Input from '../../../components/form/Input';
import PwdInput from '../../../components/form/PwdInput';
import validateSignupInputs from '../../../utils/validateSuperAdmin/validateSignupInputs';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
   full_name: '',
    username: '',
    password: '',
    cpassword: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async () => {
    const isSignupDataValid = validateSignupInputs(formData, setFormErrors);

    try {
      if (!isSignupDataValid) {
        toast.error('Invalid inputs');
        return;
      }

      Object.values(formErrors).forEach((error) => {
        if (error) {
          toast.error(error);
        }
      });

      const response = await axios.post(
       'https://api.afribook.world/admin/createAdminAccount',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;

        console.log('User registered successfully:', data);

        dispatch(setSuperAdminSignupData(data));
        handleRegistrationSuccess(data);
      } else if (response.status === 400) {
        const errorData = response.data;

        if (errorData && errorData.errors) {
          Object.values(errorData.errors).forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error('Invalid request. Please check your input.');
        }
      } else if (response.status === 401) {
        toast.error('Unauthorized. Please check your credentials.');
      } else if (response.status === 403) {
        toast.error('Forbidden. You do not have permission to access this resource.');
      } else {
        toast.error('An error occurred, please try again later.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred, please try again later.');
    }
  };

  const handleRegistrationSuccess = (data) => {
    if (data.success) {
      navigate('/super_admin/dashboard');
    } else if (data.error === 'User already exists') {
      toast.error('This email or phone number has already been used.');
    } else {
      toast.error('An error occurred, please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    handleRegister();
  };

  return (
    <>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="">
          <Toaster position="bottom-center" reverseOrder={false}></Toaster>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="flex flex-col items-center">
              <a href="/" className="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>
            <div className="w-[100%] px-6 py-8 bg-[#F9FAFB] rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h1 className="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Create an account
                </h1>
              </div>
              <form className="py-1" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      name="full_name"
                      id="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      label="Full Name"
                      required
                    />
                    {formErrors.full_name && (
                      <span className="text-red-500">{formErrors.full_name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      label="Username"
                      required
                    />
                    {formErrors.username && (
                      <span className="text-red-500">{formErrors.username}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <PwdInput
                      type="password"
                      name="password"
                      id="password"
                      label="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.password && (
                      <span className="text-red-500">{formErrors.password}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <PwdInput
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      label="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.confirmPassword && (
                      <span className="text-red-500">{formErrors.confirmPassword}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                  <button
                    type="submit"
                    className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium"
                  >
                    Signup
                  </button>
                </div>
                <div className="py-4 flex flex-row gap-8">
                  <span className="text-gray-500">
                    Already Registered? <Link className="text-red-500 ml-2" to="/super_admin/signin">Login Now</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden md:flex bg-gray-200 rounded-md shadow-md">
            <div className="flex items-center justify-center p-4 md:p-8">
              <img src="/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;

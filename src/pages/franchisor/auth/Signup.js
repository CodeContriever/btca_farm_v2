import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setFranchisorSignupData } from '../../../store/franchisor/Signup';
import Input from '../../../components/form/Input';
import PwdInput from '../../../components/form/PwdInput';
import validateSignupInputs from '../../../utils/validateSignupInputs';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    referredBy: '',
    checkbox: false,
  });

  const [formErrors, setFormErrors] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const isValid = validateSignupInputs(formData, setFormErrors);

    try {
      if (!isValid) {
        console.log('Validation failed');
        toast.error('Invalid inputs');
        return;
      }

      for (const key in formErrors) {
        if (formErrors[key]) {
          toast.error(formErrors[key]);
        }
      }

      const response = await axios.post(
        'https://btca.afribook.world/account/createUserAccount',
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
        console.log('Signup Data:', data);

        dispatch(setFranchisorSignupData(data));
        console.log('Signup Data Dispatched:', data);

        handleRegistrationSuccess(data);
      } else if (response.status === 400) {
        const errorData = response.data;
        if (errorData && errorData.errors) {
          const validationErrors = errorData.errors;
          for (const key in validationErrors) {
            const errorMessage = validationErrors[key];
            toast.error(errorMessage);
          }
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
      navigate('/franchisor/verify_OTP');
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
            <div class="flex flex-col items-center">
              <a
                href="/"
                class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white"
              >
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>
            <div
              className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Create an account
                </h1>
              </div>
              <form className="py-1" onSubmit={handleSubmit}>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      label="Full Name"
                      required
                    />
                    {formErrors.fullname && (
                      <span className="text-red-500">{formErrors.fullname}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      label="Phone Number"
                      required
                    />
                    {formErrors.phoneNumber && (
                      <span className="text-red-500">{formErrors.phoneNumber}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      label="Email Address"
                      required
                    />
                    {formErrors.email && (
                      <span className="text-red-500">{formErrors.email}</span>
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
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      name="referredBy"
                      id="referredBy"
                      value={formData.referredBy}
                      onChange={handleInputChange}
                      label="Referred By"
                      required
                    />
                  </div>
                </div>
                <div class="flex items-start mt-8">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      name="checkbox"
                      checked={formData.checkbox}
                      onChange={(e) => setFormData((prevData) => ({ ...prevData, checkbox: e.target.checked }))}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">
                      I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                <div class="flex flex-col justify-center items-center mt-8">
                  <button
                    type="submit"
                    className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium"
                  >
                    Signup
                  </button>
                </div>
                <div className="py-4 flex flex-row gap-8">
                  <span className="text-gray-500">
                    Already Registered? <Link className="text-red-500 ml-2" to="/franchisor/signin">Login Now</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">
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

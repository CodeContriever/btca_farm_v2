import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../../utils/auth';

import Input from '../../../components/form/Input';
import PwdInput from '../../../components/form/PwdInput';

const ResetPassword = () => {
  const [checkbox, setCheckbox] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/admin/signin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    if (!email || !password || !confirmPassword) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('https://btca.afribook.world/account/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          auth.login(data.user);
          navigate(redirectPath, { replace: true });
        } else {
          navigate('/admin/verify_OTP');
        }
      } else {
        toast.error('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login. Please try again later.');
    }
  };

  return (
    <>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="flex flex-col items-center">
              <a href="/" className="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>
            <div className="w-full px-6 py-8 bg-[#F9FAFB] rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Reset Password
                </h1>
              </div>
              <form className="py-1" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-8 mt-8">
                  <div className="flex flex-col gap-1">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      label="Email Address"
                      required
                      additionalLabelStyles="text-gray-900"
                    />
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

                  </div>

                </div>

                {/* Checkbox */}
                <div className="flex items-start mt-8">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={checkbox}
                      onChange={(e) => setCheckbox(e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium"
                  >
                    Reset Password
                  </button>
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

export default ResetPassword;

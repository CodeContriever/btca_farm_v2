// Import necessary dependencies and components
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../../utils/auth';
import { useDispatch } from 'react-redux';
import { setSuperAdminSigninData } from '../../../store/superAdmin/Signin';
import Input from '../../../components/form/Input';
import PwdInput from '../../../components/form/PwdInput';

const Signin = () => {
  // Initialize React hooks and variables
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input change for controlled form components
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
  const redirectPath = location.state?.path || '/super_admin/dashboard';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Validate input fields
    if (!username || !password) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }

    try {
      // Send a POST request to the server for admin login
      const response = await fetch('https://api.afribook.world/admin/adminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Check the status of the server response
      if (response.status === 200) {
        // If the response is successful, parse the JSON data
        const data = await response.json();

        if (data.success) {
          // If login is successful, set admin data in the Redux store
          dispatch(setSuperAdminSigninData(data));

          // Continue with the normal login flow
          auth.login(data.user);

          // Redirect to the specified path or the admin dashboard
          if (redirectPath) {
            navigate(redirectPath, { replace: true });
          } else {
            navigate('/super_admin/dashboard', { replace: true });
          }

        } else if (data.data && data.data.message === 'Your Account is yet to be activated, try again later') {
          // If the login is not successful with a specific message, handle it
          console.log('Your Account is yet to be activated, try again later', data);
          toast.error('Your Account is yet to be activated, try again later');

        } else {
          // If login is not successful, log the error and display an error message
          console.error('Login failed:', data);
          toast.error('Login failed. Please check your credentials and try again.');

          // Wait for 15 seconds before navigating to the signup page
          await new Promise(resolve => setTimeout(resolve, 15000));

          // Redirect to the admin signup page
          navigate('/admin/signup');
        }
      } else {
        // If the server response status is not 200, display a login failed error message
        toast.error('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      // If an error occurs during login, log the error and display a generic error message
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  // Render the Signin component
  return (
    <>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First column: Register Form */}
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="flex flex-col items-center">
              {/* Logo */}
              <a href="/" className="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>
            {/* Form Column */}
            <div className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
              {/* form heading */}
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Signin to your account
                </h1>
              </div>
              {/* Form */}
              <form className='py-1' onSubmit={handleSubmit}>
                {/* Login input fields */}
                <div className="flex flex-col gap-8 mt-8">
                  {/* Username field */}
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      label="Username"
                      required
                      additionalLabelStyles="text-gray-900"
                    />
                  </div>
                  {/* Password field */}
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
                </div>
                {/* Signin button */}
                <div className="flex flex-col justify-center items-center mt-8">
                  <button
                    type="submit"
                    className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium "
                  >
                    Signin
                  </button>
                </div>
                {/* Forgot password link */}
                <div className="py-4 flex flex-row gap-8">
                  <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/reset">Recover Now</Link></span>
                </div>
              </form>
            </div>
          </div>
          {/* Second column: BTCA logo */}
          <div className="hidden md:flex bg-gray-200 rounded-md shadow-md">
            <div className="flex items-center justify-center p-4 md:p-8" >
              <img src="/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

// Export the Signin component
export default Signin;

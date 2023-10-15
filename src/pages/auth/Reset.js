import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../utils/auth';


const ResetPassword = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }

    // Create a request body with the email and password data
    const requestBody = {
      email: email,
      password: password
    };

    try {
      // Send the POST request to the server
      const response = await fetch('https://btca.afribook.world/account/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });


      // Check if the response indicates a successful login
      if (response.ok) {
        // Parse the response to JSON format
        const data = await response.json();

        if (data.success) {
          auth.login(data.user);
          navigate(redirectPath, { replace: true });
        } else {
          navigate('/verify_OTP');
        }

      } else {
        // Handle the case when the login is not successful
        toast.error('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      // Handle any errors that might occur during the fetch process
      console.error('Error during login:', error);
      toast.error('An error occurred during login. Please try again later.');
    }
  };

  return (
    <>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">

        <div className="">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First column: Register Form */}
          <div className="bg-white rounded-md shadow-md p-4">

            <div class="flex flex-col items-center">

              {/* Logo */}
              <a href="/" class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>

            {/* Form Column */}
            <div
              className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700"
            >

              {/* form heading */}
              <div className="flex flex-col items-center">
                <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Reset Password
                </h1>
              </div>

              {/* Form */}
              <form
                className='py-1'
                onSubmit={handleSubmit}
              >
                {/* Login input fields */}
                <div class="flex flex-col gap-8 mt-8">

                  {/* Email field */}
                  <div className="flex flex-col gap-1">

                    <label for="email" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee Ben"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="flex flex-col gap-1">

                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required

                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div className="flex flex-col gap-1">

                    <label for="confirm-password" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>

                    <input
                      type="confirm-password"
                      name="confirm-password" id="confirm-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required

                    />

                  </div>

                </div>

                {/* Terms & Conditions */}
                <div class="flex items-start mt-8">

                  {/* Terms & Conditions checkbox*/}
                  <div class="flex items-center h-5">

                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      value={checkbox}
                      onChange={(e) => setCheckbox(e.target.value)}
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 "
                      required
                    />

                  </div>

                  {/* Terms & Conditions text*/}
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium  text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a></label>
                  </div>

                </div>

                {/* Reset button */}
                <div
                  class=" flex  flex-col justify-center items-center mt-8"
                >
                  <button
                    type="submit"
                    className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium " >
                    Reset Password
                  </button>

                </div>



              </form>

              {/* </div> */}


            </div>

          </div>

          {/* Second column: BTCA logo */}
          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">

            <div className="flex items-center justify-center p-4 md:p-8" >
              <img src="/logo.png" alt="logo"
              />
            </div>

          </div>

        </div>
      </main>

    </>


  )
};

export default ResetPassword;

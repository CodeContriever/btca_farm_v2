import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../utils/auth';


import { useSelector } from "react-redux";
import { useDispatch, } from 'react-redux';
import { selectSigninData } from '../../store/signin';
import { setSigninData, } from '../../store/signin';
import Input from '../../components/form/Input';
import PwdInput from '../../components/form/PwdInput';


const Signin = () => {
  const dispatch = useDispatch();
  const signinData = useSelector(selectSigninData);

  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, } = formData;
    if (!email || !password) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }

    try {
      // Send the POST request to the server
      const response = await fetch('https://btca.afribook.world/account/loginWithPasswordAndEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });


      // Check if the response indicates a successful login
      if (response.status === 200) {
        // Parse the response to JSON format
        const data = await response.json();
        console.log("User logged in successfully:", data);

        // Dispatch the entire data object to store it in the Redux store
        dispatch(setSigninData(data));
        console.log("Signin Data Dispatched:", data);

        // Log the entire data object in the console
        console.log("Signin Data from Redux Store:", signinData);

        // Log the entire data object in the console
        console.log("Signin Data:", data);

        if (data.success) {
          auth.login(data.user);
          if (redirectPath) {
            // If redirectPath is defined, navigate to it
            navigate(redirectPath, { replace: true });
          } else {
            // If redirectPath is not defined, navigate to /home
            navigate('/franchisor', { replace: true });
          }
        } else {
          // Display an error message and navigate to the verify_email page
          toast.error('You are not registered, please signup.');
          navigate('/signup');
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
                  Signin to your account
                </h1>
              </div>

              {/* Form */}
              <form
                className='py-1'
                onSubmit={handleSubmit}
              >

                {/* Login input fields */}
                <div class="flex flex-col gap-8 mt-8">

                  {/* Email Address*/}
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


                {/* Create account button */}
                <div
                  class=" flex  flex-col justify-center items-center mt-8"
                >
                  <button
                    type="submit"
                    className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium " >
                    Signin
                  </button>

                </div>

                {/* Forgot password */}
                <div
                  className="py-4 flex flex-row gap-8"
                >

                  <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/reset">Recover Now</Link></span>

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

export default Signin;

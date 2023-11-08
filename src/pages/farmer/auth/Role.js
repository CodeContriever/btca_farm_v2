import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSignupData } from "../../../store/farmer/Signup";
import { setRoleData } from "../../../store/farmer/Role";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const Role = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupData = useSelector(selectSignupData);

   // Ensure that signupData is correctly accessed
  console.log("signupData:", signupData);

  // Extract userId from signupData, or set it to null if not available
  const { userId } = signupData?.data || { userId: null };

  const [isUserIdAvailable, setIsUserIdAvailable] = useState(userId !== null);

  useEffect(() => {
    setIsUserIdAvailable(userId !== null);
  }, [userId]);

  const handleSelectChange = async (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      try {
        if (!isUserIdAvailable) {
          // Display a toast message to tell the user to sign up first
          toast.error('Please sign up before selecting a role.');
          return;
        }

        // Set the user's role in the Redux store
        dispatch(setRoleData(selectedOption));
        console.log('User role set in Redux store:', selectedOption);

        // Make an API call to set the user's role on the server
        await axios.post("https://btca.afribook.world/account/assignRole", {
          userId,
          role: selectedOption,
        });
        console.log('API call to set user role succeeded');

        // Navigate to the appropriate page based on the selected role
        navigate(`/${selectedOption}`);
      } catch (error) {
        console.error("Error setting user role:", error);
        // Handle the error, e.g., display an error message to the user
      }
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="">
        {/* ... your toast component setup ... */}
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
              BTCA_FARM
            </a>
          </div>
          <div className="flex items-center mt-0 lg:mt-16">
            <div
              className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <h1 className="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Select Role
                </h1>
              </div>
              <form className="py-1 mt-4">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="register"
                    className="text-sm font-medium text-white dark:text-white"
                  >
                    Register as
                  </label>
                  <select
                    id="register"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleSelectChange}
                  >
                    <option value="">Select an option</option>
                    <option value="farmer">Farmer</option>
                    <option value="franchisor">Franchisor</option>
                    <option value="reseller">Reseller</option>
                  </select>
                </div>
                <div className="py-4 flex flex-row gap-8">
                  <span className="text-gray-500">
                    Already Registered?
                    <Link className="text-red-500 ml-2" to="/signin">
                      Login Now
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">
          <div className="flex items-center justify-center p-4 md:p-8">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Role;
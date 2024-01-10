import React, { useEffect, useCallback} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFarmerSignupData } from "../../../store/farmer/Signup";
import { selectFarmerSigninData } from "../../../store/farmer/Signin";
import { setFarmerRoleData } from "../../../store/farmer/Role";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const Role = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupData = useSelector(selectFarmerSignupData);
  const signinData = useSelector(selectFarmerSigninData);

const setRoleAndNavigate =  useCallback(async (userId) => {
  try {
    const response = await axios.post("https://api.afribook.world/account/assignRole", {
      userId: userId,
      role: "farmer",
    });

    if (response.status === 200) {
      dispatch(setFarmerRoleData("farmer"));
      console.log('User role set in Redux store: farmer');

      navigate("/farmer/signin"); // Navigate to the farmer page
      toast.success('Role set successfully!');
    } else {
      console.error('Failed to set user role');
      toast.error('Failed to set user role. Please try again.');
    }
  } catch (error) {
    console.error("Error setting user role:", error);
    toast.error('Error setting user role. Please try again.');
  }
}, [navigate, dispatch]);

useEffect(() => {
  const userId = signupData?.data?.userId || signinData?.data?.userId;

  if (!userId) {
    toast.error('Please sign up or sign in before selecting a role.');
    navigate("/farmer/signup");
  }  else {
      // Delay the server request by 10 seconds
      const timeoutId = setTimeout(() => {
        setRoleAndNavigate(userId);
      }, 3000);

      // Clear the timeout if the component unmounts before 10 seconds
      return () => clearTimeout(timeoutId);
    }
}, [signupData, signinData, navigate, setRoleAndNavigate]);

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="">
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
              className="w-[100%] px-6 py-8 bg-[#F9FAFB] rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700"
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
  value="farmer"  
  disabled  
>
  <option value="farmer">Farmer</option>
</select>
                </div>

                <div className="py-4 flex flex-row gap-8">
                  <span className="text-gray-500">
                    Already Registered?
                    <Link className="text-red-500 ml-2" to="/farmer/signin">
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

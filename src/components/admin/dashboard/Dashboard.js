import React from "react";
import Users from "./users/Users";
import Transactions from "./transactions/Transactions";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import {  useSelector } from "react-redux";
import { selectSigninData } from "../../../store/admin/Signin";



const Dashboard = () => {
  const signinData = useSelector(selectSigninData);
  
  const { userId } = signinData?.data || {};
  
   const fetchUser = async () => {
    
      try {

        // Make an API call to set the user's role on the server
        const user = await axios.post("https://btca.afribook.world/account/user", {
          userId,
          
        }
         
        );
        console.log('API call to set user role succeeded');
         if (user.status === 200) {
        const data = user.data;

           console.log('User data fetch Successfuly:', data);
    

      } else {
        toast.error('Error fetching data, please try again later.');
      }

      } catch (error) {
        console.error("Error fetching user:", error);

        // Handle the error, e.g., display an error message to the user
        toast.error('Error, please check your connection');
      }
  
  };

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Dashboard
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">
  {/* Users */}
      <div className="bg-white mt-4">
  
<Users />
      </div>
      
 {/* Transactions */}
          <div className="bg-white mt-8">
            <Transactions
            />
      </div>

        </div>

      </div>





    </div>



  )
}

export default Dashboard
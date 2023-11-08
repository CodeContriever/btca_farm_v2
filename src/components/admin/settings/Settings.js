import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectSigninData } from "../../../store/admin/Signin";



const Settings = () => {
      const signinData = useSelector(selectSigninData);
  const { userId } = signinData?.data || {};

  // Define state to store user data
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Make an API call to get the user's data
        const response = await axios.get(`https://btca.afribook.world/account/user/${userId}`);
        
        if (response.status === 200) {
          const data = response.data;
          console.log('User data fetch successful:', data);
          setSettings(data); // Store the fetched data in the state
        } else {
          console.error('Error fetching data, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle the error, e.g., display an error message to the user
        console.error('Error, please check your connection');
      }
    };

    // Call the fetchUser function when the component mounts
    fetchSettings();
  }, [userId]);

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Settings
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">


        </div>

      </div>





    </div>



  )
}

export default Settings
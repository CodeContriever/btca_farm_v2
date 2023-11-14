import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectAdminSigninData } from "../../../../store/admin/Signin";

const Users = () => {
  const signinData = useSelector(selectAdminSigninData);
  const { userId } = signinData?.data || {};

  // Define state to store user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make an API call to get the user's data
        const response = await axios.get(`https://btca.afribook.world/account/user/${userId}`);
        
        if (response.status === 200) {
          const data = response.data;
          console.log('User data fetch successful:', data);
          setUserData(data); // Store the fetched data in the state
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
    fetchUsers();
  }, [userId]);

  // Sample data, you can replace this with real data from your API
  const userCount = 1500;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium text-blue-800 mb-4">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Total Users- Farmers */}
        <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-gray-700">Total Users (Farmers)</h2>
            <p className="text-blue-700 font-bold">{userCount} users</p>
          </div>
        </div>

        {/* Total Users- Franchisors */}
        <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-gray-700">Total Franchisors</h2>
            <p className="text-blue-700 font-bold">{userCount} users</p>
          </div>
        </div>

        {/* Total Users- Resellers */}
        <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-gray-700">Total Resellers</h2>
            <p className="text-blue-700 font-bold">{userCount} users</p>
          </div>
        </div>
      </div>

      {/* Render user data */}
      {userData && (
        <div>
          <h2>User Details:</h2>
          <p>User ID: {userData.userId}</p>
          {/* Render other user details here */}
        </div>
      )}
    </div>
    
  );
}

export default Users;

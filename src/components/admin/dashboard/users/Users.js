import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectAdminSigninData } from "../../../../store/admin/Signin";

const Users = () => {
  const signinData = useSelector(selectAdminSigninData);

  const [farmers, setFarmers] = useState([]);
  const [franchisors, setFranchisors] = useState([]);
  const [resellers, setResellers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const accessToken = signinData?.accessToken || '';
        const response = await axios.get('https://api.afribook.world/admin/users', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          const responseData = response.data;

          if (Array.isArray(responseData.data)) {
            // Assuming the API response has a 'role' property to distinguish user roles
            const users = responseData.data;
            console.log(users)

            // Filter users based on role
            const farmerData = users.filter(user => user.role?.roleType  === 'farmer');
            const franchisorData = users.filter(user => user.role?.roleType  === 'franchisor');
            const resellerData = users.filter(user => user.role?.roleType  === 'reseller');

            setFarmers(farmerData);
            setFranchisors(franchisorData);
            setResellers(resellerData);
          } else {
            console.error('Invalid data format. Expected an array.');
          }
        } else {
          console.error('Error fetching data, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [signinData]);

  const no_Of_Farmers = farmers.length;
  const no_Of_Franchisors = franchisors.length;
  const no_Of_Resellers = resellers.length;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium text-blue-800 mb-4">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Total Users- Farmers */}
        <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-gray-700">Total Farmers</h2>
            <p className="text-blue-700 font-bold">{no_Of_Farmers} farmers</p>
          </div>
        </div>

        {/* Total Users- Franchisors */}
        <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-gray-700">Total Franchisors</h2>
            <p className="text-blue-700 font-bold">{no_Of_Franchisors} franchisors</p>
          </div>
        </div>

        {/* Total Users- Resellers */}
        <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-gray-700">Total Resellers</h2>
            <p className="text-blue-700 font-bold">{no_Of_Resellers} resellers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

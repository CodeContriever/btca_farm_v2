import React, {
  useEffect,
  // useState
} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectFranchisorSigninData } from "../../../../store/franchisor/Signin";

const TotalBuyers = () => {
    const signinData = useSelector(selectFranchisorSigninData);
  const { userId } = signinData?.data || {};

  // Define state to store user data
  // const [buyers, setBuyers] = useState(null);

  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        // Make an API call to get the user's data
        const response = await axios.get(`https://btca.afribook.world/account/user/${userId}`);
        
        if (response.status === 200) {
          const data = response.data;
          console.log('User data fetch successful:', data);

          // setBuyers(data); 
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
    fetchBuyers();
  }, [userId]);

  return (
<div>
          <div className="bg-blue-500 rounded-lg shadow-xl p-4 flex items-center relative">
              
      {/* Background Pattern (Blob) */}
      <div className="absolute inset-0 bg-pattern opacity-25"></div>

        <div className="flex flex-col gap-4 z-10">
          
        {/* Card Title and Icon */}
        <div className="flex flex-row justify-between items-center">
                      <p className="font-semibold text-white">Total Buyers</p>
                      
          <div className="text-white">
           
           <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
  </svg>
          </div>

          
                      
          </div>
          
          {/* Card Details */}
          <div>
            <p className="text-white font-bold">$560.00</p>
                      </div>
      </div>
    </div>
          
          </div>
  )
}

export default TotalBuyers
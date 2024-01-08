import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAdminSigninData } from '../../../store/admin/Signin';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  const signinData = useSelector(selectAdminSigninData);
  console.log(signinData)
    
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
    const handleSignout = async () => {
    try {
      // Extract refresh token from signinData (adjust this based on your actual Redux store structure)
      const refreshToken = signinData?.refreshToken || '';

      // Make a post request to the logout endpoint using Axios
      await axios.post('https://api.afribook.world/admin/logout', {
        refreshToken: refreshToken,
      });

      // Logout successful, navigate to admin/signin
      navigate('/admin/signin');
    } catch (error) {
      // Handle error case, you may show an error message
      console.error('Error during logout', error);
    }
  };

    
  return (
     <div className="relative flex flex-col justify-center items-center" tabIndex="0">
      <button
        onClick={toggleDropdown}
        className="relative inline-flex items-center p-2 rounded-full cursor-pointer"
      >
        {/* Use a default SVG avatar when 'avatarUrl' is not available */}
        {signinData?.avatarUrl ? (
          <img
            src={signinData.avatarUrl}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            alt=""
          />
        )}
          </button>
          
      {isDropdownOpen && (
        <div className="absolute right-0 mt-64 p-2 bg-white border border-gray-300 shadow-lg rounded-md">
          <div className="text-sm text-gray-600 mb-2">
            <div>
              <strong>Name:</strong> 
            </div>
            <div>
              <strong>Email:</strong>
            </div>
            <div>
              <strong>Role:</strong> 
            </div>
          </div>
           <button
            onClick={handleSignout}
            className="block text-sm text-red-600 hover:text-red-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
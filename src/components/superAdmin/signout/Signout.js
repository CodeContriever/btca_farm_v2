import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSuperAdminSigninData } from '../../../store/superAdmin/Signin';

function Signout() {
  const navigate = useNavigate();
  const signinData = useSelector(selectSuperAdminSigninData);

  const handleSignout = async () => {
    try {
      // Extract refresh token from signinData (adjust this based on your actual Redux store structure)
      const refreshToken = signinData?.refreshToken || '';

      // Make a post request to the logout endpoint using Axios
      await axios.post('https://api.afribook.world/admin/logout', {
        refreshToken: refreshToken,
      });

      // Logout successful, navigate to admin/signin
      navigate('/super_admin/signin');
    } catch (error) {
      // Handle error case, you may show an error message
      console.error('Error during logout', error);
    }
  };

  const handleNoClick = () => {
    console.log('No clicked')
    // Navigate to admin/dashboard when the user clicks "No"
    navigate('/super_admin');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-md shadow-lg p-8 mt-4">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        
          <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to sign out?</p>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleNoClick}
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No
            </button>

            <button
              onClick={handleSignout}
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signout;

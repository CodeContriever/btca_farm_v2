import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Dropdown } from 'flowbite-react';
import UserProfile from './Profiles';
import { useSelector } from 'react-redux';
import { selectAdminSigninData } from '../../../../store/admin/Signin';

const Resellers = () => {
  const signinData = useSelector(selectAdminSigninData);
  const [viewProfile, setViewProfile] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('verified'); // Default to 'verified'
  const usersPerPage = 10;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const visibleUsers = users.slice(startIndex, endIndex);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const accessToken = signinData?.accessToken || '';
      const response = await axios.get('https://api.afribook.world/admin/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          isBlocked: filter === 'blocked' ? 1 : 0,
          isEmailVerified: filter === 'verified' ? 1 : 0,
        },
      });

      if (response.status === 200) {
        const responseData = response.data;
        console.log('User data fetch successful:', responseData);

        if (Array.isArray(responseData.data)) {
          setUsers(responseData.data);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } else {
        console.error('Error fetching data, please try again later.');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      console.error('Error, please check your connection');

      // Handle the case when no users are found
      if (error.response && error.response.data && error.response.data.message === 'No users found') {
        console.log('No users found.');
        setUsers([]); // Set an empty array to users
      }
    }
  };

  fetchUsers();
}, [signinData, currentPage, filter]);


  const handleViewProfile = (userId) => {
    setSelectedUserId(userId);
    setViewProfile(true);
  };

  return (
    <div className="container mx-auto px-6">


        <div className="bg-white rounded-md shadow-lg p-8 relative">

            {/* Dropdown */}
            <div className='absolute right-8'>
          <Dropdown label={filter === 'verified' ? 'Verified Users' : 'Blocked Users'} class=' bg-slate-500 rounded-md'>
            <Dropdown.Item onClick={() => setFilter('verified')}>Verified Resellers</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('blocked')}>Blocked Resellers</Dropdown.Item>
              </Dropdown>
              </div>

          <div className="overflow-x-auto mt-12">
            {users.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400">No users found</div>
            ) : (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3 border-r">FARMER</th>
                    <th scope="col" className="px-4 py-3 border-r">ROLE</th>
                    <th scope="col" className="px-4 py-3 border-r">STATUS</th>
                    <th scope="col" className="px-4 py-3 border-r">VIEW PROFILE</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.isArray(visibleUsers) &&
                    visibleUsers.map((user) => (
                      <tr key={user.userId} className="border-b dark:border-gray-700">
                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
                          <div className="flex flex-row gap-2 items-center">
                            <img className="w-11 h-11 rounded-full" src={user.avatarUrl} alt="Avatar" />
                            <h4>{user.fullName}</h4>
                          </div>
                        </th>
                        <td className="px-4 py-3 border-r">{user.role?.roleType || 'N/A'}</td>
                        <td className="px-4 py-3 border-r">{user.isBlocked ? 'Blocked' : 'Active'}</td>
                        <td className="px-4 py-3 border-r">
                          <Button size='sm' color='teal' onClick={() => handleViewProfile(user.userId)}>View Profile</Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Prev
              </button>
              <div>
                {users.length > 0 && (
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white mx-2">
                      {1 + startIndex}
                    </span>
                    to
                    <span className="font-semibold text-gray-900 dark:text-white mx-2">
                      {Math.min(users.length, endIndex)}
                    </span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white mx-2">
                      {users.length}
                    </span>
                  </span>
                )}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={users.length <= endIndex}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Next
              </button>
              </div>
              
            </nav>
            
          </div>


        
     

      <UserProfile viewProfile={viewProfile} setViewProfile={setViewProfile} userId={selectedUserId} />
    </div>
  );
};

export default Resellers;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectFranchisorSigninData } from '../../../../store/franchisor/Signin';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from 'flowbite-react';
import FranchisorPackages from './Packages';
import FranchisorsProfile from './Profiles';
import FranchisorsRating from './Ratings';

const Franchisors = () => {
  const signinData = useSelector(selectFranchisorSigninData);
  const { userId } = signinData?.data || {};

  const [franchisors, setFranchisors] = useState([]);
const [selectedFranchisorId, setSelectedFranchisorId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [viewProfile, setViewProfile] = useState(false);
  const [viewPackages, setViewPackages] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.afribook.world/package/getPackages/${userId}`, {
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
          },
          params: {
            page: currentPage,
            pageSize: 10,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          console.log('User packages fetch successful:', data);

          setFranchisors(data); // Assuming the data received is an array of franchisors
        } else {
          console.error('Error fetching packages, please try again later.');
          toast.error('Franchisors data is not available, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching franchisors:', error);
        toast.error('Error, please check your connection');
      }
    };

    fetchData();
  }, [userId, currentPage]);

  return (
    <div>

      <div className="overflow-x-auto">

         <div>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 border-r">
                FRANCHISOR
              </th>
              <th scope="col" className="px-4 py-3 border-r">
                STATUS
              </th>
              <th scope="col" className="px-4 py-3 border-r">
                LAST LOGIN
              </th>
              <th scope="col" className="px-4 py-3 border-r">
                RATING
              </th>
              <th scope="col" className="px-4 py-3 border-r">
                PROFILE
              </th>
              <th scope="col" className="px-4 py-3 border-r">
                VIEW PACKAGES
              </th>
            </tr>
          </thead>

          <tbody>
            {franchisors.map((franchisor, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
                  <div className="flex flex-row gap-2 items-center">
                    <img className="w-11 h-11 rounded-full" src={franchisor.avatar} alt="Avatar" />
                    <h4>{franchisor.name}</h4>
                  </div>
                </th>
                <td className="px-4 py-3 border-r">{franchisor.status}</td>
                <td className="px-4 py-3 border-r">{franchisor.lastLogin}</td>

               <td className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">
  <FranchisorsRating franchisorId={franchisor.id} />
</td>


                
<td className="px-4 py-3 border-r">
  <Button
    size="sm"
    color="teal"
    onClick={() => {
      setViewProfile(true);
      setSelectedFranchisorId(franchisor.id); // Pass the franchisor ID when the button is clicked
    }}
  >
    View Profile
  </Button>
  <FranchisorsProfile viewProfile={viewProfile} setViewProfile={setViewProfile} selectedFranchisorId={selectedFranchisorId} />
</td>


                <td className="px-4 py-3 border-r">
                  <Button
                    size="sm"
                    color="yellow"
                    onClick={() => {
                      setViewPackages(true);
                      setSelectedFranchisorId(franchisor.id);
                    }}
                    
                  >
                    View Packages
                  </Button>
                  <FranchisorPackages viewPackages={viewPackages} setViewPackages={setViewPackages} selectedFranchisorId={selectedFranchisorId} />
                </td>

              </tr>

            ))}
          </tbody>

        </table>

      </div>

      <div className="flex overflow-x-auto mt-8">

        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">{1 + (currentPage - 1) * 10}</span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">{franchisors.length}</span>
          </span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Prev
            </button>

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={franchisors.length < 10}
              className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Franchisors;

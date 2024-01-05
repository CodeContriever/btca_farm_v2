import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";
import { selectFranchisorSigninData } from "../../../store/franchisor/Signin";

import toast, { Toaster } from 'react-hot-toast';


const ActivatedPackages = () => {

  const signinData = useSelector(selectFranchisorSigninData);
  const { userId } = signinData?.data || {};

  const [currentPage, setCurrentPage] = useState(1);

  const [franchisorPackages, setFranchisorPackages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.afribook.world/franchisor/getFranchisorCurrentPackages/${userId}`, {
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
          },
            params: {
            page: currentPage,
            pageSize: 10, // Adjust this based on your desired page size
          },
        });

        if (response.status === 200) {
          const data = response.data;
          console.log('User packages fetch successful:', data);

        setFranchisorPackages(response.data);
        } else {
          console.error('Error fetching packages, please try again later.');
         
        }

        
      } catch (error) {
          console.error('Error fetching user packages:', error);
        // Handle the error, e.g., display an error message to the user
        // toast.error('Error, please check your connection');
      }
    };

    fetchData();
  }, [userId, currentPage]); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className="container mx-auto px-6">

        <div className="">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
      </div>
      
      <div>
        <h1 className="text-gray-800 text-xl font-medium font-inter leading-6"> Activated Packages</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">

          {franchisorPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Packages not available, please check back later.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {franchisorPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3>
                  <hr />
                  {/* Display other package details */}
                  {/* ... */}
                  <hr />
                  <button
                    className="bg-white p-2 rounded-md text-black"
                   
                  >
                 Activated
                  </button>
                </div>
              ))}
            </div>
          )}

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
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white mx-2">{1 + (currentPage - 1) * 10}</span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">{franchisorPackages.length}</span>
            </span>
            </div>
             
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={franchisorPackages.length < 10}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Next
              </button>
            </div>

          </nav>

        </div>

      </div>

    </div>
  );
};

export default ActivatedPackages;

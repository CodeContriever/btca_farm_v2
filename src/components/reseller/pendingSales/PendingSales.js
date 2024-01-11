import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectResellerSigninData } from '../../../store/reseller/Signin';
import toast, { Toaster } from 'react-hot-toast';

const PendingSales = () => {
  const signinData = useSelector(selectResellerSigninData);
const userId = signinData?.user?.userId || null;
  const accessToken = signinData?.accessToken || '';
  console.log(accessToken)
  const referrerCode = signinData?.user?.referrerCode || null;

  const [pendingSales, setPendingSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPendingSales = async () => {
      try {
      const response = await axios.get(
  'https://api.afribook.world/reseller/resellerGetPendingSales',
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      resellerReferrerCode: referrerCode,
    },
    params: {
      page: currentPage,
      pageSize: 10,
    },
  }
);


     


        if (response.status === 200) {
          const responseData = response.data;
          console.log('Pending sales fetch successful:', responseData);
          if (responseData.data && Array.isArray(responseData.data)) {
            // Check if transactions property exists in responseData.data
            const sales = responseData.data || [];

            setPendingSales(sales);
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }
        } else {
          console.error('Error fetching pending sales, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching pending sales:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };

    fetchPendingSales();
  }, [currentPage, accessToken, referrerCode]);


  const handleConfirmSales = async () => {
    try {
      const response = await axios.put(
        'https://api.afribook.world/reseller/resellerConfirmPackageSales',
        {
          farmerUserId: userId,
          resellerReferrerCode: referrerCode,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Sales confirmation successful');
        // Update UI or show success message
      } else {
        console.error('Error confirming sales, please try again later.');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error confirming sales:', error);
      // Handle error, e.g., show an error message
    }
  };


  return (
    <div className="container mx-auto px-6">

           <div>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>
      
      <div>
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Pending Sales</h1>

        <div className="bg-white rounded-md shadow-lg p-8 mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
              {/* Table header */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 border-r">
                    PACKAGE
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    DESCRIPTION
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    PRICE
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    APPLICANT
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    ROLE
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    DATE
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    STATUS
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    CONFIRM
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingSales.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="my-4 px-4 py-3 border-r text-xl text-center text-gray-500 dark:text-gray-400">
                      Pending sales not available, please check back later.
                    </td>
                  </tr>
                ) : (
                  pendingSales.map((sales, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      {/* Table row data */}
                      <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {sales.package}
                      </th>
                      <td className="px-4 py-3 border-r">{sales.description}</td>
                      <td className="px-4 py-3 border-r">{sales.price}</td>
                      <td className="px-4 py-3 border-r">{sales.applicant}</td>
                      <td className="px-4 py-3 border-r">{sales.role}</td>
                      <td className="px-4 py-3 border-r">{sales.date}</td>
                      <td className="px-4 py-3 border-r">{sales.status}</td>
                      <td className="px-4 py-3 border-r">
                        <button
                          className={`bg-blue-500 p-2 rounded-md text-white ${sales.status === 'Confirmed' ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                          onClick={() => handleConfirmSales(sales.userPackageId)}
                          disabled={sales.status === 'Confirmed'}
                        >
                          {sales.status === 'Confirmed' ? 'Confirmed' : 'Confirm'}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
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
                  <span className="font-semibold text-gray-900 dark:text-white">{pendingSales.length}</span>
                </span>
              </div>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={pendingSales.length < 10}
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

export default PendingSales;

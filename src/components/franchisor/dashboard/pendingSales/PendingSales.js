import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { FaUser, FaUserTie } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectRoleData } from '../../../../store/franchisor/Role';

function PendingSales() {
  const [data, setData] = useState([]);
  const roleData = useSelector(selectRoleData);
  const { userId, role } = roleData?.data || {};
  console.log('userId:', userId);
  console.log('role:', role);


  useEffect(() => {
    if (userId && role === 'franchisor') {
      // Fetch the franchisor's pending packages using the userId as an authorization token.
      axios
        .get('https://btca.afribook.world/franchisor/getFranchisorPendingPackageSales', {
          headers: {
            Authorization: `Bearer ${userId}`,
          },
        })
        .then((response) => {
          const data = response.data;
          console.log('Franchisor pending sales:', data);
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userId, role]);

  function handleConfirmSale(saleId, index) {
    // Simulate a confirmation action
    const updatedData = [...data];
    updatedData[index].confirmed = true;
    setData(updatedData);

    // Make a POST request to confirm the package on the server.
    axios
      .post('https://btca.afribook.world/franchisor/confirmPackage', {
        saleId,
        userId,
      })
      .then((response) => {
        console.log('Package confirmed:', response.data);
        // You may want to handle this response if needed.
      })
      .catch((error) => {
        console.error('Error confirming package:', error);
      });
  }

  return (
    <div className="text-[12px] md:text-base p-4">
      <div className="hidden md:grid md:grid-cols-4 gap-2 text-center">
        <div className="bg-gray-200 p-2">Buyer Name</div>
        <div className="bg-gray-200 p-2">Role</div>
        <div className="bg-gray-200 p-2">Package</div>
        <div className="bg-gray-200 p-2">Confirm</div>
      </div>
      {data.map((sale, index) => (
        <>
          <div key={sale.id} className="grid md:grid-cols-4 gap-2 text-center">
            <div className='flex flex-row items-center gap-2 md:gap-4 p-2'>
              <div className='flex md:hidden'>Buyer: </div>
              <div className="hidden md:flex">{index + 1}</div>
              <div className="">{sale.buyerName}</div>
            </div>

            <div className="flex flex-row items-center gap-2 md:gap-4 p-2">
              <div className='flex md:hidden'>Role: </div>

              <div className='hidden md:flex'>
                {sale.role === 'Farmer' ? <FaUser /> : <FaUserTie />}
              </div>

              <span className="ml-2">{sale.role}</span>
            </div>

            <div className="flex flex-row items-center gap-2 md:gap-4 p-2">
              <div className='flex md:hidden'>Package: </div>
              <div className=''>{sale.package}</div>
            </div>

            <div className="flex md:justify-center items-center gap-2 p-2">
              <div className='flex md:hidden'> Confirm:  </div>
              {sale.confirmed ? (
                <button
                  className="flex flex-row justify-center items-center gap-2 bg-black text-white text-[12px] md:text-base px-2 md:px-4 md:py-1 rounded-lg hover:bg-blue-600 "
                  onClick={() => handleConfirmSale(sale.id, index)}
                >
                  <AiFillCheckCircle className="text-green-500" /> Confirmed
                </button>
              ) : (
                <button
                  className="flex flex-row justify-center items-center gap-2 bg-blue-500 text-white text-[12px] md:text-base px-2  md:px-6 py-1 rounded-lg hover:bg-blue-600 "
                  onClick={() => handleConfirmSale(sale.id, index)}
                >
                  <AiOutlineCheckCircle className="text-white" /> Confirm
                </button>
              )}
            </div>
          </div>
          <hr className="my-2 border-gray-200" />
        </>

      ))
      }

    </div >
  );
}

export default PendingSales;

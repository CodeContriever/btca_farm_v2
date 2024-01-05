// FranchisorsRating.js
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import axios from 'axios';

const FranchisorsRating = ({ franchisorId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(`https://api.afribook.world/franchisor/getRating/${franchisorId}`);

        if (response.status === 200) {
          const data = response.data;
          console.log('Franchisor rating fetch successful:', data);

          setRating(data.rating || 0); // Use 0 if the rating is not available
        } else {
          console.error('Error fetching franchisor rating, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching franchisor rating:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };

    // Fetch the rating when the component mounts or when franchisorId changes
    if (franchisorId) {
      fetchRating();
    }
  }, [franchisorId]);

  return (
    <div className="flex items-center">
      <Rating
        initialRating={rating}
        emptySymbol={<svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.167a.25.25 0 0 1 .5 0V5.75h3.583a.25.25 0 0 1 .177.073l1.877 1.877-1.79 1.789-.104.138V18.75a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25v-9.917L6.792 9.58 8.583 7.79a.25.25 0 0 1 .177-.073H12V1.167zm8.74 1.74a1.25 1.25 0 0 1 1.768 1.768l-1.036 1.036-2.504-.834a.75.75 0 0 0-.46-.03l-1.458.365.366-1.459a.75.75 0 0 0-.03-.46l-.834-2.504 1.036-1.036a1.25 1.25 0 0 1 1.768 1.768l-1.036 1.036.707 2.12 2.12-.707 1.036-1.036zM12 8.75a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75zm-2.417 5.98l.94.94a2.75 2.75 0 1 1-3.88 3.88l-.94-.94a1 1 0 0 1 1.414-1.414z"></path></svg>}
        fullSymbol={<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.167a.25.25 0 0 1 .5 0V5.75h3.583a.25.25 0 0 1 .177.073l1.877 1.877-1.79 1.789-.104.138V18.75a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25v-9.917L6.792 9.58 8.583 7.79a.25.25 0 0 1 .177-.073H12V1.167zm8.74 1.74a1.25 1.25 0 0 1 1.768 1.768l-1.036 1.036-2.504-.834a.75.75 0 0 0-.46-.03l-1.458.365.366-1.459a.75.75 0 0 0-.03-.46l-.834-2.504 1.036-1.036a1.25 1.25 0 0 1 1.768 1.768l-1.036 1.036.707 2.12 2.12-.707 1.036-1.036zM12 8.75a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75zm-2.417 5.98l.94.94a2.75 2.75 0 1 1-3.88 3.88l-.94-.94a1 1 0 0 1 1.414-1.414z"></path></svg>}
        readonly
      />

      <span className="ml-1 text-gray-500 dark:text-gray-400">{rating}</span>
    </div>
  );
};

export default FranchisorsRating;

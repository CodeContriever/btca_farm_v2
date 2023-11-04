import React, { useState } from 'react';

const ReferralLink = () => {
  const [linkGenerated, setLinkGenerated] = useState(false);

  const handleClick = () => {
    // Logic to generate the link
    setLinkGenerated(true);
  };

  return (
    <div>

      <div className="p-4 border border-gray-300 rounded-md bg-gray-100 flex">
        {/* Info field */}
        <div className="flex flex-wrap">
          <button
            onClick={handleClick}
            className={`${linkGenerated
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              } p-2 rounded-md`}
            disabled={linkGenerated}
          >
            Show Referral link
          </button>

          {linkGenerated && (
            <p className="mb-0 mt-0 font-inter text-base leading-6 text-gray-700 break-all">
              Generated Link: <a href="/btca">example.com</a>
            </p>
          )}
        </div>

        {/* Switcher */}
        <div className="flex items-center flex-shrink-0 ml-auto mr-0">
          <label htmlFor="email-alerts" className="cursor-pointer">
            <input
              type="checkbox"
              id="email-alerts"
              className="form-checkbox h-6 w-6 text-blue-500"
            />
          </label>
        </div>
      </div>

      {/* Terms and conditions */}
      <div className="text-gray-500 text-xs font-normal leading-6 mt-2">
        <a href="/terms" target="_blank" className=" text-blue-500 no-underline">
          Terms and conditions of sale and distribution
        </a>
      </div>

    </div>
  );
};

export default ReferralLink;

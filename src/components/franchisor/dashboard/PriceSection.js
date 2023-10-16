import React from 'react'

const PriceSection = ({ title }) => {
  return (
    <div className="px-4 py-4 text-gray-900 bg-gray-700 border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
      {/* Heading */}
      <h2 className="text-base font-medium text-white">{title}</h2>

      {/* Logo, refresh and USDT */}
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <img
            className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
            alt="BTCA logo"
            src="/logo.png"
          />

          <svg
            className="plc-svgIcon resIndicatorPrice__icon"
            height="24"
            width="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ boxSizing: "border-box", color: "#aaabad" }}
          >
            <path
              d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
              style={{ boxSizing: "border-box" }}
            />
          </svg>
        </div>

        {/* USDT */}
        <p className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap">
          USDT
        </p>
      </div>
    </div>
  )
}

export default PriceSection
import React from 'react'

const MiningStatus = ({ heading, status, logoSrc, label, value }) => {
  return (
    <div className="bg-gray-800 px-4 py-8 text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
      <div className="flex flex-row justify-between">
        <h2 className="text-white font-medium">{heading}</h2>
        <div className={`bg-green-700 text-white font-medium px-1.5 py-1`}>
          {status}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-500 font-inter text-base font-medium">
            {label}
          </h3>
          <p className="text-white font-medium">{value}</p>
        </div>
        <div>
          <img className="h-12 w-12" alt="BTCA logo" src={logoSrc} />
        </div>
      </div>
    </div>
  )
}

export default MiningStatus
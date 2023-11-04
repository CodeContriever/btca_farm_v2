import React from 'react'

const Load = ({ title, value, unit, background, textColor }) => {
  return (
    <div className={`rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative p-4 ${background}`}>
      <div className="flex items-center justify-between">
        <p className={`mb-0 mt-0 font-inter text-base font-medium leading-5 ${textColor}`}>
          {title}
        </p>
      </div>
      <div className="p-4">
        <p className={`mb-0 mt-0 font-inter text-xl font-bold leading-6 break-words flex min-w-0 text-black gap-2 ${textColor}`}>
          {value}
          <span className="whitespace-nowrap opacity-50 text-black ml-auto">
            {unit}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Load
import React from 'react'

const TabButton = ({ active, onClick, children }) => (
  <button
    className={`p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center 
      ${active ? 'text-blue-600' : 'text-gray-600'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default TabButton
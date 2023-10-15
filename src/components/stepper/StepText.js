import React from 'react';

const StepText = ({ heading, content, textColor }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className={`text-lg sm:text-xl md:text-2xl font-semibold ${textColor}`}>{heading}</h4>
      <p className={`text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 ${textColor}`}>{content}</p>
    </div>
  );
};

export default StepText;
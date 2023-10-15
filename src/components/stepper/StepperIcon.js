import React from 'react';

const StepperIcon = ({ svgCode, bgColor, imageSrc, imageAlt, customStyles }) => {
  return (
    <span>
      {/* {svgCode} */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-12 h-12" // Default Tailwind CSS classes
        style={customStyles} // Apply custom inline styles
      />
    </span>
  );
};

export default StepperIcon;

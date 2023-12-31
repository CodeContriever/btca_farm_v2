import React from "react";
import classNames from "classnames";

const Input = ({ type, name, id, value, onChange, label, required, additionalLabelStyles, additionalInputStyles }) => {

  // Define the default classes for the input element
  const defaultLabelStyles = "text-md font-medium";
  const defaultInputStyles = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ";

  // Combine the default classes with any additional classes provided as props
  const labelStyles = classNames(defaultLabelStyles, additionalLabelStyles);
  const inputStyles = classNames(defaultInputStyles, additionalInputStyles);

  return (
    <div className="flex flex-col gap-0.5 py-4">
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>


      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={inputStyles}
      />
    </div>
  );
};

export default Input;

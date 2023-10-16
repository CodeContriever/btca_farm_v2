import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PwdInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  required,
  additionalStyles,
}) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={id} className={`text-md font-medium text-gray-900 ${additionalStyles}`}>
        {label}
      </label>

      <div className={`relative ${additionalStyles}`}> {/* Add a space after 'relative' */}
        <input
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          required={required}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default PwdInput;

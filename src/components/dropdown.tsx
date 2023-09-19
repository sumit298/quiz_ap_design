import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface CustomDropdownProps {
  title: string;
  options: string[];
  backgroundColor?: string;
  gap?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  gap = "gap-28",
  title,
  options,
  backgroundColor = "#F3F4F6",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block px-4">
      {/* Custom dropdown button */}
      <button
        onClick={toggleDropdown}
        className={`flex w-full justify-between ${gap} items-center   rounded-lg bg-gray-100 px-4 py-2 focus:outline-none`}
        style={{ backgroundColor: backgroundColor }}
      >
        <span className="font-semibold text-lg">{title}</span>
        {isOpen ? (
          <BsChevronUp className="ml-2 text-gray-500" />
        ) : (
          <BsChevronDown className="ml-2 text-gray-500" />
        )}
      </button>
      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 opacity-1 w-60 border z-50 bg-white   rounded-lg shadow-lg">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className="py-2 px-3 hover:bg-gray-100 cursor-pointer "
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

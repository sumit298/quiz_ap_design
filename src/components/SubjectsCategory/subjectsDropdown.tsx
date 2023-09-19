import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface DropdownMenuItem {
  label: string;
  subMenuItems?: DropdownMenuItem[];
  toggle: boolean;
}

interface CustomDropdownProps {
  label: string;
  subMenuItems?: DropdownMenuItem[];
  toggle: boolean;
}

const SubjectDropDown: React.FC<CustomDropdownProps> = ({
  label,
  subMenuItems,
  toggle,
}) => {
  const [isOpen, setIsOpen] = useState(toggle);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex  items-center px-2 py-2">
        <button
          className="font-semibold text-lg outline-none px-2  rounded-lg"
          onClick={toggleDropdown}
        >
          {label}
        </button>
        {isOpen ? (
          <BsChevronUp className="ml-2 text-gray-500" />
        ) : (
          <BsChevronDown className="ml-2 text-gray-500" />
        )}
      </div>
      {isOpen && subMenuItems && (
        <div className="">
          <ul>
            {subMenuItems.map((subMenuItem, index) => (
              <li
                key={index}
                className=" px-4 py-2 mx-4 cursor-pointer font-semibold"
              >
                {subMenuItem.subMenuItems ? (
                  <SubjectDropDown
                    label={subMenuItem.label}
                    subMenuItems={subMenuItem.subMenuItems}
                    toggle={false}
                  />
                ) : (
                  subMenuItem.label
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SubjectDropDown;

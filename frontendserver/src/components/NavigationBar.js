import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddEmployee from "../pages/admin/AddEmployee";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-custom-blue">
      <div className="flex-shrink-0 text-white ">
        <span className="font-bold text-3xl">M</span>
        <span className="font-normal text-2xl">agnus</span>
        <br />
        <span className="font-bold text-3xl">P</span>
        <span className="font-normal text-2xl">ublic</span>
        <br />
        <span className="font-bold text-3xl">L</span>
        <span className="font-normal text-2xl">ibrary</span>
      </div>
      <div>
        {/* dropdown for books */}
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className=" text-white font-semibold py-3 px-4  inline-flex items-center"
          >
            <span className="mr-1">Employees</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-5-5 1.41-1.41L10 11.17l3.59-3.58L15 9z" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute z-50 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
              <Link to="/admin/addEmployee" element={<AddEmployee />}>
                <span className="block px-4 py-2 text-black hover:bg-gray-100">
                  Add New Empolyee
                </span>
              </Link>
              <span className="block px-4 py-2 text-black hover:bg-gray-100">
                Item 2
              </span>
              <span className="block px-4 py-2 text-black hover:bg-gray-100">
                Item 3
              </span>
            </div>
          )}
        </div>
        {/* dropdown end */}
      </div>
    </nav>
  );
}

export default NavigationBar;

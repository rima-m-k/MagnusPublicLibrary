import React, { useState } from "react";
import imgs from "../images/background.jpg";
function BackgroundBanner() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  return (
    <>
      <div className="image w-full h-auto  relative bg-black bg-opacity-100">
        <img
          src={imgs}
          alt="bg"
          className="w-full h-full inset-0 object-cover blur-sm"
        />
        <div className="absolute inset-0 w-75 h-25 flex items-center justify-center ">
          <div className="bg-slate-200 bg-opacity-50  ">
            <h2 className="text-black text-3xl font-bold  py-4 px-10  my-6 w-full h-full">
              Welcome to Magnus Public Library
            </h2>
            <div className="pb-4 mb-8">
              <form className="flex px-5" >
                <input
                  type="text"
                  className="w-full h-full rounded-l-lg py-3"
                  placeholder="Search books,articles &more"
                />
                {/* dropdown */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    className="bg-gray-300 text-gray-700 font-semibold py-3 px-4  inline-flex items-center"
                  >
                    <span className="mr-1">Dropdown</span>
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
                      <span className="block px-4 py-2 text-black hover:bg-gray-100">
                        Item 1
                      </span>
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
                <button className="bg-custom-olive rounded-r-lg px-5 text-white ">
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundBanner;

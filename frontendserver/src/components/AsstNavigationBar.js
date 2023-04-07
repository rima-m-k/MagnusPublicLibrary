import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddBOOk from "../pages/assistant/AddBook"
function AsstNavigationBar() {
  const [isOpen, setIsOpen] = useState({
    book:false,
    users:false,
  });

  const toggleDropdown = (dropdown) => {
    setIsOpen({
      ...isOpen,
      book: dropdown === 'book' ? !isOpen.book : false,
      users: dropdown === 'users' ? !isOpen.users : false,
    });
  };

  return (
    <nav className="flex flex-wrap items-center justify-center p-6 bg-custom-blue">
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
      <div className="w-full block justify-end flex-grow lg:flex lg:items-center lg:w-auto ">
        {/* dropdown for books */}
        <div className="relative inline-block text-left">
          <button
             onClick={() => toggleDropdown('book')}
            className=" text-white font-semibold py-3 px-4  inline-flex items-center"
          >
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Books</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-5-5 1.41-1.41L10 11.17l3.59-3.58L15 9z" />
            </svg>
          </button>
          {isOpen.book && (
            <div className="absolute z-50 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
              <Link to="/asst/addBook" element={<AddBOOk />}>
                <span className="block px-4 py-2 text-black hover:bg-gray-100">
                  Add New Book
                </span>
              </Link>
              <span className="block px-4 py-2 text-black hover:bg-gray-100">
                Item 2 {/* view books */} 
              </span>
              <span className="block px-4 py-2 text-black hover:bg-gray-100">
                Item 3
              </span>
            </div>
          )}
        </div>
        {/* dropdown end */}
                {/* dropdown for users */}
                <div className="relative inline-block text-left">
          <button
             onClick={() => toggleDropdown('users')}
            className=" text-white font-semibold py-3 px-4  inline-flex items-center"
          >
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Users</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-5-5 1.41-1.41L10 11.17l3.59-3.58L15 9z" />
            </svg>
          </button>
          {isOpen.users && (
            <div className="absolute z-50 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
              {/* <Link to="/asst/addBook" element={<AddBOOk />}> */}
                <span className="block px-4 py-2 text-black hover:bg-gray-100">
view all users
                </span>
              {/* </Link> */}
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

export default AsstNavigationBar;

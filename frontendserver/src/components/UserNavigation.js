import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../pages/user/Signup";
import Login from "../pages/user/Login";
import LandingPage from "../pages/user/LandingPage";
import AllBooks from "../pages/user/AllBooks";

function NavMenu() {
  const token = localStorage.getItem('currentUser');
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className="flex  items-center justify-between p-6 bg-custom-green">
        <div className="flex-shrink-0 text-white ">
          <Link to="/" element={<LandingPage />}>
            <span className="font-bold text-3xl">M</span>
            <span className="font-normal text-2xl">agnus</span>
            <br />
            <span className="font-bold text-3xl">P</span>
            <span className="font-normal text-2xl">ublic</span>
            <br />
            <span className="font-bold text-3xl">L</span>
            <span className="font-normal text-2xl">ibrary</span>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white-500 border-white-600 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:w-auto ${
            showMenu ? "" : "hidden"
          }`}
          id="menu"
        >
          <nav >
            { !token &&
            <>
            
            <Link to="/login" className="text-white p-5 m-2 " element={<Login />}>
              {" "}
              login{" "}
            </Link>
            <Link to="/signup" className="text-white p-5 m-2 " element={<Signup />}>
              {" "}
              Signup{" "}
            </Link>
            <hr className="border-t border-white-300  m-3 w-full" />
            </>
}
            <ul className="flex  items-center justify-around  font-medium text-xl text  text-white">
              <li>
                <Link
                  className="block m-3 px-4 md:inline-block md:mt-0 hover:text-white"
                  to="/bookList" element={<AllBooks />}
                >
               Borrow
                </Link>
              </li>
              <li>
                <Link
                  className="block  m-2 px-4 md:inline-block md:mt-0 hover:text-white"
                  to="#"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="block  m-2 px-4 md:inline-block md:mt-0 hover:text-white"
                  to="#"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="block  m-2 px-4 md:inline-block md:mt-0 hover:text-white"
                  to="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block  m-2 px-4 md:inline-block md:mt-0 hover:text-white"
                  to="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;

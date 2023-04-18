import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AddEmployee from "../pages/admin/AddEmployee";
import Dashboard from "../pages/admin/Dashboard";
import ShowGenre from '../pages/admin/ShowGenre'
import ShowBooks from '../pages/admin/ShowBooks'
import ShowAuthors from '../pages/admin/ShowAuthors'
import CheckOut from "../pages/admin/CheckOut";
import ReturnRenew from "../pages/admin/ReturnRenew";
import ViewEmployees from "../pages/admin/ViewEmployees";
import ViewUsers from "../pages/admin/ViewUsers";
function SideBar() {
  const [toggleDown, setToggleDown] = useState({
    employee: false,
    catalogue: false,
    users: false,
    ga: false,
    circulation:false,
    users:false,
  });
  const handleToggle = (key) => {
    setToggleDown((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="w-64  bg-gray-800 text-white flex flex-col items-center ">
      
      <div className="h-16 w-full flex items-center justify-center text-2xl font-bold">
        <h1 className="text-2xl font-semibold ">Magnus Public Library</h1>
      </div>
      <ul className="flex-grow fixe py-4 ">
        <li className="w-full  ">
          <Link to="/admin/dashboard" element={<Dashboard />}>
            <span className="block px-6 py-2 rounded-lg hover:bg-gray-700">
              Dashboard
            </span>
          </Link>
        </li>
        <li className="w-full ">
          <span
            onClick={() => handleToggle("employee")}
            className="block px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Employees
          </span>
          <div className=" px-10 ">
            {toggleDown.employee && (
              <>
                <Link to="/admin/addEmployee" element={<AddEmployee />}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    Add Employee
                  </span>
                </Link>
                <Link to="/admin/viewEmployees" element={<ViewEmployees />}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    view Employees
                  </span>
                </Link>
              
              </>
            )}
          </div>
        </li>
        <li className="w-full ">
          <span
            onClick={() => handleToggle("users")}
            className="block px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Members
          </span>
          <div className=" px-10 ">
            {toggleDown.users && (
              <>
                <Link to="/admin/viewUsers" element={<ViewUsers />}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    View Members
                  </span>
                </Link>
               
              
              </>
            )}
          </div>
        </li>
        <li className="w-full ">
          <span
            onClick={() => handleToggle("catalogue")}
            className="block px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Catalogue
          </span>
          <div className=" px-10 ">
            {toggleDown.catalogue && (
              <>
                <Link to="/admin/viewBooks"  element={<ShowBooks/>}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    Books
                  </span>
                </Link>
                <Link to="/admin/viewGenre"  element={<ShowGenre  />}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    Genres
                  </span>
                </Link>
                <Link to="/admin/viewAuthors"  element={<ShowAuthors/>}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    Authors
                  </span>
                </Link>
              </>
            )}
          </div>
        </li>

        <li className="mb-4">
        <span
            onClick={() => handleToggle("circulation")}
            className="block px-6 py-2 rounded-lg hover:bg-gray-700"
          >
             Circulation Section
          </span>
          <div className=" px-10 ">
            {toggleDown.circulation && (
              <>
                <Link to="/admin/checkout" element={<CheckOut />}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    Checkout
                  </span>
                </Link>

                <Link to="/admin/returnRenew" element={<ReturnRenew />}>
                  <span className="block px-6 py-2 rounded-lg hover:bg-gray-600 ">
                    Return/Renew
                  </span>
                </Link>
              
              </>
            )}
          </div>
        </li>
      </ul>
      <div className="px-6 py-4">
        <span className="block text-gray-400 hover:text-white ">Logout</span>
      </div>
        </div>
  );
}

export default SideBar;

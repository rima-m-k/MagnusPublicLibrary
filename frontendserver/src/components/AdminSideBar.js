import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddEmployee from '../pages/admin/AddEmployee';
import Dashboard from '../pages/admin/Dashboard';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 bottom-0 bg-gray-800 text-white w-64 md:w-auto md:flex md:flex-col md:h-full md:justify-between transition-transform duration-300 transform md:translate-x-0 md:shadow-lg">
      <div className="md:px-6 pt-6 md:pb-6 md:overflow-y-auto">
      {/* <div className=" flex-shrink-0 text-white ">
        <span className="font-bold text-3xl">M</span>
        <span className="font-normal text-2xl">agnus</span>
        <br />
        <span className="font-bold text-3xl">P</span>
        <span className="font-normal text-2xl">ublic</span>
        <br />
        <span className="font-bold text-3xl">L</span>
        <span className="font-normal text-2xl">ibrary</span>
      </div> */}
        <div className="flex items-center justify-between px-6">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className={isOpen ? 'hidden' : 'block'}
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={isOpen ? 'block' : 'hidden'}
                d="M6 18L18 6M6 6l12 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-6">
          <li className="mb-4">
            <Link to="/admin/dashboard" element={<Dashboard />} >
              <span  className="block px-6 py-2 rounded-lg hover:bg-gray-700">Dashboard</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/addEmployee" element={<AddEmployee />}>

              <span className="block px-6 py-2 rounded-lg hover:bg-gray-700">Add Employee</span>
              </Link>
            </li>
            <li className="mb-4">
              <span  className="block px-6 py-2 rounded-lg hover:bg-gray-700">Customers</span>
            </li>
            <li className="mb-4">
              <span  className="block px-6 py-2 rounded-lg hover:bg-gray-700">Orders</span>
            </li>
            <li className="mb-4">
              <span className="block px-6 py-2 rounded-lg hover:bg-gray-700">Products</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="px-6 py-4">
        <span className="block text-gray-400 hover:text-white">Logout</span>
      </div>
    </div>
  );
}

export default SideBar;
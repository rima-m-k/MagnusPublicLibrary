import React, { useState,useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import { addEmployee,fetchStaffID } from "../../services/serviceHelpers";

function AddEmployee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [staffID,setStafFID] = useState('')

  useEffect (()=>{
   fetchStaffID()
   .then( res => setStafFID(res.data))
  },[])
  function handleFormData(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));


  }
  function handleSubmit(e) {
    e.preventDefault();
    addEmployee(formData)
    
  }
  console.log(staffID)

  return (

    <>
      <NavigationBar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form  onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
           
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormData}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormData}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="designation"
                className="block text-gray-700 font-bold mb-2"
              >
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleFormData}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormData}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="defaultPassword"
                    name="password"
                    value="default"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    onChange={handleFormData}

                  />
                  <label htmlFor="defaultPassword" className="text-gray-700">
                    Use default password
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="newPassword"
                    name="password"
                    value="create"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    onChange={handleFormData}
                  />
                  <label htmlFor="newPassword" className="text-gray-700">
                    Create new password
                  </label>
                  {/* {formData.password !== 'default' &&
                    <input
                      type="text"
                      name="passwordField"
                    
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />} */}

                </div>
              </div>

            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-custom-green hover:bg-custom-olive text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div >
    </>
  );
}

export default AddEmployee;

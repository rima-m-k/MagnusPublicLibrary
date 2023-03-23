import React, { useState } from "react";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { staffLogin } from "../../services/serviceHelpers";

function StaffLogin() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    designationID: "",
  });

  let [error, setError] = useState("");

  const Navigate = useNavigate();

  function handleFormData(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    staffLogin(formData)
      
    .then((res) => {
      const data = {
        ...res.data.data,
        token: res.data.token,
      };
      console.log(data)
      localStorage.setItem("currentUser", JSON.stringify(data));
    })
      .then(() => Navigate("/admin/dashboard"))
      .catch((err) => {
        console.log(err)
        if (err.code === 'ECONNABORTED') {
          setError("server took too long to respond");
        }

        if (err.response !== undefined) {
          console.log(err.response)
          setError(err.response.data.message);
          setFormData({
            email: "",
            password: "",
            designationID: "",
          });
        }

      });
  }

  return (
    <>
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
      </nav>

      {/* login part */}
      <div className="flex flex-col justify-center items-center w-1/4  mx-auto mt-5 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded container shadow-md"
        >
          <h2 className="text-2xl mb-4 font-bold">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              email
            </label>
            <input
              type="email"
              name="email"
              id="eamil"
              value={formData.email}
              onChange={handleFormData}
              required
              className="border-gray-400 bg-gray-100 border-b-2 block w-full rounded py-2 px-3 mx-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleFormData}
              required
              className="border-gray-400 bg-gray-100 border-b-2 block w-full rounded py-2 px-3 mb-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="designationID" className="block font-medium mb-2">
              Designation Id
            </label>
            <input
              type="text"
              name="designationID"
              id="designationID"
              value={formData.designationID}
              onChange={handleFormData}
              required
              className="border-gray-400 bg-gray-100 border-b-2 block w-full rounded py-2 px-3 mb-1"
            />
          </div>
          {error ? <div className="text-red-500 pb-2">{error}</div> : null}
          <button
            type="submit"
            className="bg-custom-blue  text-white py-2 px-4 "
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default StaffLogin;

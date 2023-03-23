import React from "react";
import NavMenu from "../../components/NavMenu";

const Signup = () => {
  return (
    <>
      <NavMenu />
      <div className="container m-auto mb-4 ">
        <h1 className="text-center text-3xl font-semibold  my-5 py-5 ">
          Signup & Get Library Card
        </h1>
        <div className="flex flex-col md:flex-row w-3/4 shadow-2xl  mx-auto ">
          <div className="md:w-1/2 px-4 mt-5">
            {/* Left column content */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
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
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cpassword"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="cpassword"
                  name="cpassword"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
            </form>
          </div>
          <div className="md:w-1/2 px-4 mt-5">
            <form>
              {/* Right column content */}

              <div className="mb-4">
                <label
                  htmlFor="address1"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address2"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-bold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-gray-700 font-bold mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="block text-gray-700 font-bold mb-2"
                >
                  PinCode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-custom-green text-white rounded-md px-4 py-2 m-3 hover:bg-custom-olive"
              >
                &nbsp; Register &nbsp;
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

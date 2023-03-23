import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
// import { Authenticate } from '../../auth/authentication';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await Authenticate(email, password); // call your authentication API function here
    //   // redirect to dashboard page on successful login
    //   // you can use React Router's useHistory hook to do this
    // } catch (error) {
    //   // handle any authentication errors here (e.g. display an error message)
    // }
  };

  return (
    <>
      <NavMenu />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-6">Login</h2>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-custom-green hover:bg-custom-olive text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="inline-block align-baseline font-bold text-sm text-custom-green hover:text-custom-olive"
              >
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

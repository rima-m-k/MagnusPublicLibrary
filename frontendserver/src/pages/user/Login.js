import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
import { userLogin } from "../../services/userServiceHelpers";
// import { Authenticate } from '../../auth/authentication';

function Login() {
  const Navigate = useNavigate()
  const [userInfo,setUserInfo] = useState({
    email:'',
    password:''
  })
  const [error,setError] = useState('')
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((values)=>({...values,[name]:value}));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      userLogin(userInfo)
      .then(res =>{ console.log(res)
      setError(res.data.message)
      })
      .then(()=> Navigate('/'))
      .catch(err => console.log(err))
    //

   
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
                value={userInfo.email}
                onChange={handleChange}

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
                value={userInfo.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {error ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">{error}</div> : null}

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

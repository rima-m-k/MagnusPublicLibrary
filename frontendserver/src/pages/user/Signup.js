import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
import { userSignup } from "../../services/userServiceHelpers";



const Signup = () => {

  const Navigate = useNavigate();

  let [userData,setUserData] = useState({
    name: "",
    phone:"",
    email:"",
    password:"",
    cpassword :"",
    address1:"",
    address2:"", 
    city:"",
    state:"",
    country:"",
    pincode:"",
  })
  const [file, setFile] = useState();
  let [error,setError]= useState('')
  const [passwordError,setPasswordError] = useState('')


  function checkPasswords(){
    if(userData.password !== '' && userData.cpassword !==''){
      setPasswordError('Passwords must be same')
     }
      if(userData.password === userData.cpassword){
      setPasswordError('')
     }

  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    } 
       setUserData((values)=>({...values,[name]:value}));
       
  }
  // console.log(file)
  function handleSubmit(e) {
    e.preventDefault();
    const formdata= new FormData()
    formdata.append("photo",file)
    formdata.append('name',userData.name)
    formdata.append('phone',userData.phone)
    formdata.append('email',userData.email)
    formdata.append('password',userData.password)
    formdata.append('cpassword',userData.cpassword)
    formdata.append('address1',userData.address1)
    formdata.append('address2',userData.address2)
    formdata.append('city',userData.city)
    formdata.append('state',userData.state)
    formdata.append('country',userData.country)
    formdata.append('pincode',userData.pincode)
if(passwordError !==''){
  setError('check password and try again')
}else{
  userSignup(formdata)
  .then(res => {console.log(res)
    if(res.data.message){
setError(res.data.message)
    }
    
    } )
    
    .then(res => {console.log(res)
      setError(res.data.message)

      Navigate('/login')
    })
    .catch(err => console.log(err))
}

  
  }

  return (
    <> 
      <NavMenu />
      <div className="container m-auto mb-4 ">
        <h1 className="text-center text-3xl font-semibold  my-5 py-5 ">
          Signup & Get Library Card
        </h1>
       
          <form className="flex flex-col md:flex-row w-3/4 shadow-2xl  mx-auto " onSubmit={handleSubmit}>
          <div className="md:w-1/2 px-4 mt-5">
            {/* Left column content */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                 Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={userData.fullname}
                  onChange={handleChange}
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
                  required
                  value={userData.phone}
                  onChange={handleChange}
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
                  required
                  value={userData.email}
                  onChange={handleChange}
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
                  type="password"
                  id="password"
                  name="password"
                 required
                  value={userData.password}
                  onChange={handleChange}
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
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  required
                  value={userData.cpassword}
                  onChange={handleChange}
                  onKeyUp={checkPasswords}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
                {passwordError && <div className="text-red-500">{passwordError}</div>}
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
                  required
                  // value={userData.photo}
                  onChange={handleChange}
                  // className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
          </div>
           
          <div className="md:w-1/2 px-4 mt-5">
           
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
                  required
                  value={userData.address1}
                  onChange={handleChange}
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
                  required
                  value={userData.address2}
                  onChange={handleChange}
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
                  required
                  value={userData.city}
                  onChange={handleChange}
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
                  required
                  value={userData.state}
                  onChange={handleChange}
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
                  required
                  value={userData.country}
                  onChange={handleChange}
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
                  required
                  value={userData.pincode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              {error ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">{error}</div> : null}
              <button
                type="submit"
                className="bg-custom-green text-white rounded-md px-4 py-2 m-3 hover:bg-custom-olive"
              >
                &nbsp; Register &nbsp;
              </button>
          </div>
            </form>
       
      </div>
    </>
  );
};

export default Signup;

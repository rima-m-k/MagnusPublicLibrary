import React, { useEffect, useState } from "react";
import { checkout, fetchBookTitle, findUser } from "../../services/adminServiceHelpers";
import Spinner from "../../components/Spinner";

function CheckOut() {
  const [isLoasing,setIsLoading] = useState(false)

 const [checkoutData,setcheckoutData] = useState({
  bookID: '',
  UID: '',
  userID: ''
 })
  const [bookTitle, setBookTitle] = useState([]);
const [error,setError] = useState('')
const [userData,setUserData] = useState({})
const options={ day: 'numeric' ,  month: 'long' , year: 'numeric' };

  useEffect(() => {
    fetchBookTitle().then((res) => {
      console.log(res);
      setBookTitle(res.data);
    });
  }, []);
  
function search (){
 findUser(checkoutData.userID)
 .then(res =>{
  console.log(res)
  setUserData(res.data)
 } )
 .catch(err =>{
console.log(err)
setError(err.response.message)
 })
}
 function handleChange(e){
  const name = e.target.name;
  const value = e.target.value;
  setcheckoutData((values) => ({ ...values, [name]: value }));
 }

 console.log(userData._id)
function handleSubmit(e){
  e.preventDefault();
  setIsLoading(true)
  checkout({ ...checkoutData, userID: userData._id })
  .then(res =>{
    console.log(res)
  })
  .catch(err =>{
    console.log(err)
  })
  .finally(() => setIsLoading(false))

}
 
  return (
   
        <div className="flex flex-wrap ">
          <div className="w-full md:w-2/3 px-4 ">
        <h1 className="text-center text-3xl font-bold  py-4  text-custom-blue">
              CHECKOUT
            </h1>
            
        <div className="max-w-full  bg-white rounded-xl mt-5 mb-7 px-5 shadow-md">
          <div className="container m-auto my-4  ">
            
            <div className=" pb-5">
              <form onSubmit={handleSubmit}
                className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="bookID"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Book Title
                  </label>

                  <select
                    name="bookID"
                    id="bookID"
                    value={checkoutData.bookID}
                    onChange={handleChange}
                    className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  >
                    <option value="select"> select</option>

                    {bookTitle.map((title) => (
                      <option key={title._id} value={title._id}>
                        {" "}
                        {title.title}{" "}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="userID"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Library Card Number
                  </label>
                  <input
                    type="number"
                    id="userID"
                    name="userID"
                    value={checkoutData.userID}
                    onChange={handleChange}
                    // onKeyUp={(event) => setNameError(checkName(event.target.value))}
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />

{isLoasing ?<Spinner isUser = {false} /> :null }

                  <button 
                  className="p-2 mx-3 bg-blue-800 rounded-lg hover:bg-blue-700 text-white" 
                  onClick={search}
                  type="button"
                  >Search User</button>
                </div>
<button type="submit" className="bg-green-800 hover:bg-green-700 p-2  mx-3 rounded-lg text-white">Check Out</button>
              </form>
            </div>
          </div>
          
        </div>
        
{/* <>
<div className="bg-white rounded-lg overflow-hidden shadow-md max-w-xs mt-5">
      <img className="w-full" src="https://via.placeholder.com/500x300" alt="Library Book" />
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">The Catcher in the Rye</h2>
        <p className="text-gray-700 text-sm mb-2">by J.D. Salinger</p>
        <p className="text-gray-700 text-sm">Published in 1951</p>
      </div>
    </div>
</>
         */}

        {/*  */}
        

          </div>
          <div className="w-full md:w-1/3 px-4">
            {/* This element will take up half the width on medium screens and above */}
              <h1 className="text-center text-2xl py-4  text-custom-blue">
              History
            </h1>
              <div className="max-w-xl mx-auto bg-slate-50  mt-5 px-4 ">
          <div className="container mt-4 pt-4 ">
   {userData.name &&         

<>
<div className="bg-white rounded-xl overflow-hidden shadow-md max-w-full">
<div className="bg-custom-green text-white text-center text-bold text-xl py-3">Magnus Public Library</div>

      <div className="flex p-5">
        <img className="w-1/3"
        src={ `http://localhost:8000/Images/${userData.profilePhoto}`}
        alt={userData.name}
        // src="https://via.placeholder.com/100x100"  
        />
      
        <div className="w-2/3 p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-2">{userData.name}</h2>
          <p className="text-gray-700 text-sm mb-2">Issued On: {new Date(userData?.issuedOn).toLocaleDateString('en-US', options)}</p>

          <p className="text-gray-700 text-sm mb-2">Library Card Number: {userData.cardNumber} </p>
          {/* <Barcode value={libraryCardNumber} /> */} 
        {/* <div className="font-black">IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</div> */}

        </div>
      </div>
    </div>
</>
}




            <div className=" pb-5">
              </div>
              </div>
          </div>
        </div>
      </div>
   
    
  );
}

export default CheckOut;

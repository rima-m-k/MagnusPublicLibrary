import React, { useState } from 'react'
import { searchData } from '../../services/adminServiceHelpers';
import SideBar from '../../components/AdminSideBar';
import Spinner from "../../components/Spinner";

function ReturnRenew() {
  const [isLoasing,setIsLoading] = useState(false)

  const [formData,setFormData] = useState({
    bookID:'',
    cardNumber:'',
    action:''
  })
  console.log(formData)
function search(e){
  
searchData(formData)
}
  function handleChange(e){
  const name = e.target.name;
  const value = e.target.value;
  setFormData((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(e){
    setIsLoading(true)
    e.preventDefault();

  }
   return (
    <>
   
      <div className="flex flex-col justify-center items-center   mx-auto mt-5 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded container shadow-md max-w-xl"
        >
          <h2 className="text-2xl mb-4 font-bold">Check In</h2>
          <div className="mb-4">
            <label htmlFor="bookID" className="block font-medium mb-2">
              Book  Name
            </label>
            <input
              type="text"
              name="bookID"
              id="bookID"
              value={formData.bookID}
              onChange={handleChange}
              required
              className="border-gray-400 bg-gray-100 border-b-2 block w-full rounded py-2 px-3 mx-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block font-medium mb-2">
              Card Number
            </label>

            <input
              type="number"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="border-gray-400 bg-gray-100 border-b-2 block w-full rounded py-2 px-3 mb-4"
            />
          <button type='button'
          onClick={search}
          className='p-2 mx-3 bg-blue-800 rounded-lg hover:bg-blue-700 text-white mb-4'
          >Search</button>
          {isLoasing ?<Spinner isUser = {false} /> :null }
           <label htmlFor="bookID" className="block font-medium mb-2">
              Type
            </label>
<div className='mb-4'>
<input type='radio' value='return' name='action' className='mx-3 ' onChange={handleChange}/>
<label htmlFor="action" className="mr-2 ">
Return
</label>
</div>
<div className='mb-4'>

<input type='radio' value='renew' name='action' className='mx-3 '  onChange={handleChange}/> 
<label htmlFor="action" className="mr-2 ">
Renew
</label>
</div>

          </div>
          <button
            type="submit"
            className="bg-custom-blue  text-white py-2 px-4 "
          >
            Submit
          </button>
        </form>
      </div>




        
     
 
    </>
  );
}
  {/* 
      return {
date  
fine = expected return - date of return /7  *10
      }
      renew {
      }
      */}
export default ReturnRenew

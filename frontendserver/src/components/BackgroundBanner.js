import React, { useState } from "react";
import imgs from "../images/background.jpg";
import {  searchItem } from "../services/userServiceHelpers";
function BackgroundBanner() {
const [searchTerm,setSearchTerm]= useState('')
  
  const handleChange= (e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);

  }
  const handleSearch= (e)=>{
    e.preventDefault();
    searchItem(searchTerm)
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    
  }

  console.log(searchTerm)
  return (
    <>
      <div className="image w-full h-auto  relative bg-black bg-opacity-100">
        <img
          src={imgs}
          alt="bg"
          className="w-full h-full inset-0 object-cover blur-sm"
        />
        <div className="absolute inset-0 w-75 h-25 flex items-center justify-center ">
          <div className="bg-slate-200 bg-opacity-50  ">
            <h2 className="text-black text-3xl font-bold  py-4 px-10  my-6 w-full h-full">
              Welcome to Magnus Public Library
            </h2>
            <div className="pb-4 mb-8">
              <form className="flex px-5" onSubmit={handleSearch} >
                <input
                  type="text"
                  name="searchTerm"
                  id="searchTerm"
                  value={searchTerm}
                  onChange={handleChange}
                  className="w-full h-full rounded-l-lg p-3"
                  placeholder="Search books,articles &more"
                />
               
                <button className="bg-custom-olive rounded-r-lg px-5 text-white ">
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundBanner;

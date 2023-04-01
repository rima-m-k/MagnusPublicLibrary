import React, { useState } from 'react'

function AddGenre() {
    const [genreData,setGenreData]= useState({
        genreCode:'',
        genreName : '',
        description : '',
    })
    const[error,setError] = useState('')
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setGenreData((values) => ({ ...values, [name]: value }));

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    console.log(genreData)
  return (
    <>
    
    <div className="max-w-xl mx-auto bg-white rounded-xl mt-5 px-5 shadow-md">
    <div className="container m-auto my-4  ">
  <h1 className="text-center text-3xl font-semibold  py-4  text-custom-blue">ADD GENRE</h1>
  <div className=" pb-5"> <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label
              htmlFor="genreName"
              className="block text-gray-700 font-bold mb-2"
            >
              Genre Name
            </label>
            <input
              type="text"
              id="genreName"
              name="genreName"
              value={genreData.genreName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="genreCode"
              className="block text-gray-700 font-bold mb-2"
            >
              Genre Code
            </label>
            <input
              type="text"
              id="genreCode"
              name="genreCode"
              value={genreData.genreCode.toUpperCase()}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
            />
          </div>
         
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
              name="description"
              id="description"
              rows="6"
              value={genreData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          ) : null}
          <div>
            <button
              type="submit"
              className="bg-custom-blue text-white rounded-md px-4 py-2 m-3 "
            >
              {" "}
              &nbsp; Add Book &nbsp;{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default AddGenre

import React, { useEffect, useState } from "react";

import NavMenu from "../../components/UserNavigation";
import { useParams } from "react-router-dom";
import { fetchSingleBook, placeHold } from "../../services/userServiceHelpers";
import { toast } from "react-toastify";
import spinner from "../../spinner/UserSpinner.gif";


function ViewBooks() {
  const [book, setBook] = useState([])

  useEffect(() => {
    fetchSingleBook(id)
      .then((res) => {
        console.log(res)
        setBook(res.data.singleBook)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const token = localStorage.getItem('currentUser');
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({
    userID: "",
    date: "",
    bookId: id
  })
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')
  const [modalForm, setModalForm] = useState(false)





  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    placeHold(bookingData)
      .then((res) => {
        console.log(res);
        setModalForm(() => !modalForm)
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setBookingData((values) => ({ ...values, [name]: value }));

  }

  const toggleModal = (e) => {
    e.preventDefault();
    setModalForm(() => !modalForm)
  }

  return (
    <>
      <NavMenu />

      <div className="flex justify-center items-center">



        <div className=" m-8">
          <div className="flex items-center mb-8">
            {/* {book.map(value => {
              <h1 className="text-3xl font-bold mr-4">
                {value}
              </h1>
            })} */}
             <h1 className="text-3xl font-bold mr-4">
                {book[0]?.title}
              </h1>

            <span className="text-gray-500 text-xl">
              ({new Date(book[0]?.publicationDate).getFullYear()})
            </span>
          </div>
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <img src={`http://localhost:8000/Images/${book[0]?.image[0]?.frontCover[0]?.filename}`} alt={book[0]?.title} className="w-auto" />
            </div>
            <div className="w-full md:w-2/3 px-4">
              <div className="mb-4">
                <span className="font-bold">Author:</span>
                {book[0]?.author?.AuthorName}
              </div>
              <div className="mb-4">
                <span className="font-bold">Genre:</span>
                {book[0]?.genre?.genreName}
              </div>
              <div className="mb-4">
                <span className="font-bold">Publisher:</span>
                {book[0]?.publisher}
              </div>
              <div className="mb-4">
                <span className="font-bold">Publication Date:</span>{" "}
                {new Date(book[0]?.publicationDate).toLocaleDateString()}
              </div>
              <div className="mb-4">
                <span className="font-bold">Number of Pages:</span>
                {book[0]?.pages}
              </div>
              <div className="mb-4 w-1/2">
                <span className="font-bold">Synopsis:</span>
                <p>{book[0]?.synopsis}</p>
              </div>
              <div className="mb-4 w-1/2">

                <button className="bg-custom-green hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  onClick={token ? toggleModal : () => {
                    toast.error("Login to Place Hold Of The Book", {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}>
                  Place Hold
                </button>

                {
                  modalForm &&
                  <div className="fixed inset-0 z-50 flex justify-center items-center">
                    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
                    <div className="bg-white rounded-lg p-6 z-10">
                      <form onSubmit={handleSubmit}>

                        {/* /////////////////////////////////////  spinner   //////////////////////////////////////////////// */}
                        {isLoading && (
                          <div className="relative">
                            {" "}
                            <div className="absolute  inset-0  flex justify-center items-center z-50">
                              <div className=" rounded-full h-20 w-20  ">
                                <img src={spinner} className="w-50 h-auto" alt="loading" />
                              </div>
                            </div>{" "}
                          </div>
                        )}
                        {/* /////////////////////////////////////  spinner end   //////////////////////////////////////////////// */}

                        <div className="mb-6">
                          <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="date"
                          >
                            Collecting date
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date"
                            type="date"
                            name="date"
                            value={bookingData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                          >
                            Submit
                          </button>
                          <button
                            className="ml-4 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="cancel"
                            onClick={toggleModal}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default ViewBooks;

import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import { addBook } from "../../services/assistantServiceHelpers";

function AddBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publisher: "",
    genre: "",
    newGenre:"",
    newGenreCode:"",
    publicationDate: "",
    frontCover: "",
    // availability: "",
    notes: "",
    copy: "",
  });
  const [frontCover, setFrontCover] = useState({});
  let [error, setError] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setBookData((values) => ({ ...values, [name]: value }));
    if (e.target.name === "frontCover" && e.target.files[0]) {
      setFrontCover(e.target.files[0]);
    }

  }

  console.log(frontCover.name, "front");

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("frontCover", frontCover);
    formdata.append("title", bookData.title);
    formdata.append("author", bookData.author);
    formdata.append("publisher", bookData.publisher);
    formdata.append("genre", bookData.genre);
    formdata.append("newGenre", bookData.newGenre);
    formdata.append("newGenreCode", bookData.newGenreCode);
    formdata.append("publicationDate", bookData.publicationDate);
    // formdata.append("availability", bookData.availability);
    formdata.append("notes", bookData.notes);
    formdata.append("copy", bookData.copy);
    addBook(formdata)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        setError(err.response);
      });
  }
  return (
    <>
      <NavigationBar />
      <div className="container m-auto mb-4 ">
        <h1 className="text-center text-3xl font-semibold  py-4 ">Add Book</h1>
        <div className=" pb-5">
          <div className="max-w-xl mx-auto bg-white rounded-xl p-5 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={bookData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={bookData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="copy"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Number of copies
                </label>
                <input
                  type="text"
                  id="copy"
                  name="copy"
                  value={bookData.copy}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="publisher"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Publisher
                </label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  value={bookData.publisher}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
              </div>
              <div className="flex flex-row    mx-auto bg-white">
                <div className="w-1/2">
                  {/* // Left column content */}
                  <div className="mb-4">
                    <label
                      htmlFor="publicationDate"
                      className="block text-gray-700 font-bold mb-2 "
                    >
                      Publication Date
                    </label>
                    <input
                      type="date"
                      id="publicationDate"
                      name="publicationDate"
                      value={bookData.publicationDate}
                      onChange={handleChange}
                      className=" px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="genre"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Genre
                    </label>
                    <select
                      className=" px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      name="genre"
                      id="genre"
                      value={bookData.genre}
                      onChange={handleChange}
                    >
                      <option value="options">Options</option>
                      <option value="fiction">fiction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                 
                </div>
                <div className="w-1/2 px-5 ">
                  {/* //Right column content  */}

                  <div className="mb-4">
                    <label
                      htmlFor="availability"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Availability
                    </label>
                    <select
                      className=" px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      name="availability"
                      id="availability"
                      value={bookData.availability}
                      onChange={handleChange}
                    >
                      <option value="options">Options</option>
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="frontCover"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Cover photo
                    </label>
                    <input
                      type="file"
                      id="frontCover"
                      name="frontCover"
                      value={bookData.frontCover}
                      onChange={handleChange}
                      className="px-4"
                    />
                  </div>
                 
                </div>
              </div>
{bookData.genre==="other" &&
<>
              <div className="mb-4">
               <label
                      htmlFor="newGenre"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Genre Name
                    </label>
               <input
                 type="text"
                 id="newGenre"
                 name="newGenre"
                 value={bookData.newGenre}
                 onChange={handleChange}
                 className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
               />
             </div>
              <div className="mb-4">
              <label
                     htmlFor="newGenreCode"
                     className="block text-gray-700 font-bold mb-2"
                   >
                     Genre Code
                   </label>
              <input
                type="text"
                id="newGenreCode"
                name="newGenreCode"
                value={bookData.newGenreCode}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
              />
            </div>
            </>
}

              <div className="mb-4">
                <label
                  htmlFor="notes"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                  name="notes"
                  id="notes"
                  rows="6"
                  value={bookData.notes}
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
  );
}

export default AddBook;

import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/AsstNavigationBar";
import {
  addBook,
  fetchBookAndGenres,
} from "../../services/assistantServiceHelpers";
import {
  checkCode,
  checkDate,
  checkName,
  checkNationality,
  checkTextarea,
} from "../../validation/addAuthorValidations";

function AddBook() {
  //////////////////////////////////////////////////declaring states/////////////////////////////////////////////////////////////

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    newAuthorName: "",
    newAuthorCode: "",
    newAuthorDOB: "",
    newAuthorDOD: "",
    newAuthorNationality: "",
    newAuthorBiography: "",
    publisher: "",
    genre: "",
    newGenreName: "",
    newGenreCode: "",
    newGenreDesc: "",
    publicationDate: "",
    frontCover: "",
    synopsis: "",
    copy: "",
    pages: "",
  });

  const [genreData, setGenreData] = useState({}); //for dropdown
  const [authorData, setAuthorData] = useState({}); //for dropdown

  const [frontCover, setFrontCover] = useState({});

  const [nameError, setNameError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [natError, setNatError] = useState("");
  const [bioError, setBioError] = useState("");

  const [genreNameError, setgenreNameError] = useState("");
  const [genreCodeError, setgenreCodeError] = useState("");
  const [genreDescError, setgenreDescError] = useState("");

  const [titleError, setTitleError] = useState("");
  const [copyError, setCopyError] = useState("");
  const [pageError, setPageError] = useState("");
  const [publisherError, setPublisherError] = useState("");
  const [synopsisError, setSynopsisError] = useState("");

  let [error, setError] = useState("");

  useEffect(() => {
    fetchBookAndGenres().then((res) => {
      setGenreData(res.data.genreData);
      setAuthorData(res.data.authorData);
    });
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setBookData((values) => ({ ...values, [name]: value }));
    if (e.target.name === "frontCover" && e.target.files[0]) {
      setFrontCover(e.target.files[0]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("frontCover", frontCover);
    formdata.append("title", bookData.title);
    formdata.append("author", bookData.author);
    formdata.append("newAuthorName", bookData.newAuthorName);
    formdata.append("newAuthorCode", bookData.newAuthorCode);
    formdata.append("newAuthorDOB", bookData.newAuthorDOB);
    formdata.append("newAuthorDOD", bookData.newAuthorDOD);
    formdata.append("newAuthorNationality", bookData.newAuthorNationality);
    formdata.append("newAuthorBiography", bookData.newAuthorBiography);
    formdata.append("publisher", bookData.publisher);
    formdata.append("genre", bookData.genre);
    formdata.append("newGenreName", bookData.newGenreName);
    formdata.append("newGenreCode", bookData.newGenreCode);
    formdata.append("newGenreDesc", bookData.newGenreDesc);
    formdata.append("publicationDate", bookData.publicationDate);
    formdata.append("synopsis", bookData.synopsis);
    formdata.append("copy", bookData.copy);
    formdata.append("pages", bookData.pages);
    addBook(formdata)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        setError(err.response);
      });
  }

  let key1 = Object.keys(genreData);
  let key2 = Object.keys(authorData);

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
                  required
                  value={bookData.title}
                  onChange={handleChange}
                  onKeyUp={(event) => {
                    setTitleError(checkName(event.target.value));
                  }}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
                {titleError ? (
                  <span className="text-red-600"> {titleError}</span>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Author
                </label>
                <select
                  id="author"
                  name="author"
                  required
                  value={bookData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                >
                  <option value="options">select</option>
                  {key2.map((key) => (
                    <option key={key} value={authorData[key]._id}>
                      {authorData[key].AuthorName}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
                {bookData.author === "other" && (
                  <>
                    <div className="mb-4">
                      <label
                        htmlFor="newAuthorName"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Author Name
                      </label>
                      <input
                        required
                        type="text"
                        id="newAuthorName"
                        name="newAuthorName"
                        title="Full Name of the author."
                        value={bookData.newAuthorName}
                        onChange={handleChange}
                        onKeyUp={(event) => {
                          setNameError(checkName(event.target.value));
                        }}
                        className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      />

                      {nameError ? (
                        <span className="text-red-600"> {nameError}</span>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="newAuthorCode"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Author Code
                      </label>
                      <input
                        required
                        type="text"
                        id="newAuthorCode"
                        name="newAuthorCode"
                        title="3 Letter code to identify the author "
                        value={bookData.newAuthorCode.toUpperCase()}
                        onChange={handleChange}
                        onKeyUp={(event) => {
                          setCodeError(checkCode(event.target.value, 3));
                        }}
                        className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      />
                      {codeError ? (
                        <span className="text-red-600"> {codeError}</span>
                      ) : null}
                    </div>

                    <div className="flex flex-row    mx-auto bg-white">
                      <div className="w-1/2">
                        <div className="mb-4 px-3">
                          <label
                            htmlFor="newAuthorDOB"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Birth Date
                          </label>
                          <input
                            required
                            type="date"
                            id="newAuthorDOB"
                            name="newAuthorDOB"
                            title="Date of birth of Author"
                            value={bookData.newAuthorDOB}
                            onChange={handleChange}
                            onKeyUp={(event) =>
                              setDateError(checkDate(event.target.value))
                            }
                            className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                          />
                          {dateError ? (
                            <span className="text-red-600"> {codeError}</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="mb-4 px-3">
                          <label
                            htmlFor="newAuthorDOD"
                            title=" Date of death. Omit this field if author is still alive"
                            className="block text-gray-700 font-bold mb-2  "
                          >
                            Death Date
                          </label>

                          <input
                            type="date"
                            id="newAuthorDOD"
                            name="newAuthorDOD"
                            value={bookData.newAuthorDOD}
                            onChange={handleChange}
                            title=" Date of death. Omit this field if author is still alive"
                            className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="newAuthorNationality"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Nationality
                      </label>
                      <input
                        required
                        type="text"
                        id="newAuthorNationality"
                        name="newAuthorNationality"
                        title="This field is required"
                        value={bookData.newAuthorNationality}
                        onChange={handleChange}
                        onKeyUp={(event) =>
                          setNatError(checkNationality(event.target.value))
                        }
                        className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      />
                      {natError ? (
                        <span className="text-red-600"> {natError}</span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="newAuthorBiography"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Biography
                      </label>
                      <textarea
                        required
                        id="newAuthorBiography"
                        name="newAuthorBiography"
                        rows="6"
                        title="This field is required"
                        value={bookData.newAuthorBiography}
                        onChange={handleChange}
                        onKeyUp={(event) =>
                          setBioError(checkTextarea(event.target.value))
                        }
                        className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      />
                      {bioError ? (
                        <span className="text-red-600"> {bioError}</span>
                      ) : null}
                    </div>
                  </>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="genre"
                  className=" block text-gray-700 font-bold mb-2"
                >
                  Genre
                </label>
                <select
                  autoComplete="on"
                  className=" w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                  name="genre"
                  id="genre"
                  value={bookData.genre}
                  onChange={handleChange}
                >
                  <option value="options">Select</option>
                  {key1.map((key) => (
                    <option key={key} value={genreData[key]._id}>
                      {genreData[key].genreName}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              {bookData.genre === "other" && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="newGenreName"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Genre Name
                    </label>
                    <input
                      type="text"
                      id="newGenreName"
                      name="newGenreName"

                      value={bookData.newGenreName}
                      onChange={handleChange}
                      onKeyUp={(event) =>
                        setgenreNameError(checkName(event.target.value))
                      }
                      className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                    />

                    {genreNameError ? (
                      <span className="text-red-600"> {genreNameError}</span>
                    ) : null}
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
                      value={bookData.newGenreCode.toUpperCase()}
                      onChange={handleChange}
                      onKeyUp={(event) =>
                        setgenreCodeError(checkCode(event.target.value, 2))
                      }
                      className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                    />
                    {genreCodeError ? (
                      <span className="text-red-600"> {genreCodeError}</span>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="newGenreDesc"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                      name="newGenreDesc"
                      id="newGenreDesc"
                      rows="6"
                      value={bookData.newGenreDesc}
                      onChange={handleChange}
                      onKeyUp={(event) =>
                        setgenreDescError(checkTextarea(event.target.value))
                      }
                    ></textarea>
                    {genreDescError ? (
                      <span className="text-red-600"> {genreDescError}</span>
                    ) : null}
                  </div>
                </>
              )}

              <div className="mb-4">
                <label
                  htmlFor="copy"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Number of copies
                </label>
                <input
                  type="number"
                  id="copy"
                  name="copy"
                  required
                  value={bookData.copy}
                  onChange={handleChange}
                  onKeyUp={(event) => {
                    setCopyError(checkTextarea(event.target.value));
                  }}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
                {copyError ? (
                  <span className="text-red-600"> {copyError}</span>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pages"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Number of Pages
                </label>
                <input
                  type="number"
                  id="pages"
                  name="pages"
                  required
                  value={bookData.pages}
                  onChange={handleChange}
                  onKeyUp={(event) => {
                    setPageError(checkTextarea(event.target.value));
                  }}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
                {pageError ? (
                  <span className="text-red-600"> {pageError}</span>
                ) : null}
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
                  required
                  name="publisher"
                  value={bookData.publisher}
                  onChange={handleChange}
                  onKeyUp={(event) => {
                    setPublisherError(checkTextarea(event.target.value));
                  }}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                />
                {publisherError ? (
                  <span className="text-red-600"> {publisherError}</span>
                ) : null}
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
                      required
                      value={bookData.publicationDate}
                      onChange={handleChange}
                      className=" px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-5 ">
                  {/* //Right column content  */}

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
                      required
                      value={bookData.frontCover}
                      onChange={handleChange}
                      className="px-4"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="synopsis"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Synopsis
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md"
                  name="synopsis"
                  id="synopsis"
                  rows="6"
                  required
                  value={bookData.synopsis}
                  onChange={handleChange}
                  onKeyUp={event => setSynopsisError(checkTextarea(event.target.value))}
                  ></textarea>
                  {synopsisError ? (
                    <span className="text-red-600"> {synopsisError}</span>
                  ) : null}
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

import axios from "axios";
const instance = axios.create({baseURL: 'http://localhost:8000/asst', timeout: 30000});
const client   = axios.create({baseURL: 'http://localhost:8000/asst' , timeout: 30000,  headers: { 'Content-Type': 'multipart/form-data'} });

const  addBook = (bookData) =>   client.post('/addBook',bookData);
const addAuthor = (authorData) => instance.post('/addAuthor',authorData);

export {
    addBook,
    addAuthor,
};

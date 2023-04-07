import axios from "axios";
const instance = axios.create({baseURL: 'http://localhost:8000/', timeout: 30000, headers: {   Authorization: `Bearer ${localStorage.getItem("currentUser")}`} });
const client   = axios.create({baseURL: 'http://localhost:8000/' , timeout: 30000,  headers: {   Authorization: `Bearer ${localStorage.getItem("currentUser")}`, 'Content-Type': 'multipart/form-data'} });

const  userSignup = (userData) =>   instance.post('/userSignup',userData);

const userLogin = (userInfo) => instance.post('/userLogin',userInfo);
const fetchBook = () => instance.get('/');
const placeHold = (bookingData) => instance.post('/placeHold',bookingData)

export {
    userSignup,
    userLogin,
    fetchBook,
    placeHold
};

import axios from "axios";
const instance = axios.create({baseURL: 'http://localhost:8000/', timeout: 30000});
const client   = axios.create({baseURL: 'http://localhost:8000/' , timeout: 30000,  headers: { 'Content-Type': 'multipart/form-data'} });

const  userSignup = (userData) =>   client.post('/userSignup',userData);

const userLogin = (userInfo) => instance.post('/userLogin',userInfo);

export {
    userSignup,
    userLogin,
};

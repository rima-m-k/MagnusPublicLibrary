import axios from "axios";
const instance = axios.create({baseURL: 'http://localhost:8000/admin/', timeout: 30000, headers: {   Authorization: `Bearer ${localStorage.getItem('currentUser')}`} ,withCredentials: true,});

const staffLogin = (data) =>  instance.post('/staffportal', data);

const addEmployee=(data) => instance.post('/addEmployee',data)
    
const fetchStaffID= () => instance.get('/addEmployee')
const getAuthorData =() => instance.get('/viewAuthors');
const fetchBookTitle =() => instance.get('/checkout');
const getGenre =() => instance.get('/viewGenre');
const getBook =() => instance.get('/viewBooks')
const getEmployeeData =() => instance.get('/viewEmployees')
const getUsers = () => instance.get('/viewUsers')
const findUser = (keyWord) => instance.post('/userSearch',{term:keyWord})
const checkout = (checkoutData) => instance.post('/checkout',checkoutData)
const searchData = (formData) => instance.post('/returnRenew',formData)
export {
    staffLogin,
    addEmployee,
    fetchStaffID,
    getAuthorData,
    fetchBookTitle,
    getGenre,
    getBook,
    getEmployeeData,
    getUsers,
    findUser,
    checkout,
    searchData
};
//axios interceptors

// 
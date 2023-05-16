import axios from "axios";
const instance = axios.create({baseURL: 'http://localhost:8000/admin/', timeout: 30000, headers: {   Authorization: `Bearer ${localStorage.getItem('AdminData')}`} });



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
const addEvent = (eventData) => instance.post('/addEvent',eventData)
const fetchVenue= () => instance.get('/addEvent')
const addVenue = (venueData) => instance.post('/addVenue',venueData)
const addBlog = (blogData) => instance.post('/addBlog',blogData)
const getadminProfile = () => instance.get('/profile')
const updateEmployeeStatus = (data) => instance.post('/blockUnblock',data)
const getBlogData =() => instance.get('/viewBlog');

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
    searchData,
    addEvent,
    addVenue,
    fetchVenue,addBlog,
    getadminProfile,
    updateEmployeeStatus,
    getBlogData
};
//axios interceptors

// 
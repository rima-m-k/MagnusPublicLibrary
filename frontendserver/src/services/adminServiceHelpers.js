import axios from "axios";
const instance = axios.create({baseURL: 'http://localhost:8000/admin/', timeout: 30000}  ,  )  ;
// error msg

const staffLogin = (data) =>  instance.post('/staffportal', data);

const addEmployee=(data) => instance.post('/addEmployee',data)
    
const fetchStaffID= () => instance.get('/addEmployee')


export {
    staffLogin,
    addEmployee,
    fetchStaffID,
};
//axios interceptors

// 
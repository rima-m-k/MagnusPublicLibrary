import React, { useEffect, useState } from 'react'
import UserNavigation from '../../components/UserNavigation'
import {getUserProfile} from '../../services/userServiceHelpers'
import { Link, useNavigate } from 'react-router-dom';
import LibraryCardApplication from './LibraryCardApplication';

function UserProfile() { 
  let token= localStorage.getItem("currentUser")

  const Navigate = useNavigate()
const [UserData,setUserData] = useState([])
const [expiredSessionMsg,setExpiredSessionMsg] = useState(false)
const [seconds, setSeconds] = useState(5);

    useEffect(() => {
      getUserProfile()
        .then((res) => {
          console.log(res)
          setUserData(res.data.user)

        })
        .catch( err =>{
            console.log(err)
            if(err.response.status===440){
              setExpiredSessionMsg(err.response.data.message)
              setInterval(() => {
                setSeconds(seconds => seconds - 1);
              }, 1000)
              setTimeout(() => Navigate('/login'), 5000);

               
            }
        });
      }, []);
    
  return (
    <>
      <UserNavigation />

      {expiredSessionMsg && 
          <div className="fixed inset-0 z-50 flex justify-center items-center my-5">
          <div className="fixed inset-0 bg-gray-800 opacity-50 my-5"></div>
          <div className="bg-white rounded-lg p-6 z-10 animate-fade-in-down my-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 my-5">{expiredSessionMsg}</h2>
            <p className="text-gray-600 my-5 text-xl">You will be redirected to the login page in 
            <span className='text-blue-500'>  {seconds}   </span>
            seconds...</p>
          </div>
        </div>
     }
     {UserData.address?.length === 0  && token ?
     <>
<div className="bg-red-600 py-4 px-6 text-center ">
<span className='font-bold text-2xl text-slate-200'> GET A LIBRARY CARD NOW</span>

      <Link to='/LibraryCardApplication' className='text-xl px-5 text-blue-500 underline' element={ <LibraryCardApplication />} >
     click here to apply
      </Link>
    </div>  
     </>:<> {null}
     </>
     }


    </>
  )
}

export default UserProfile

import React, { useEffect, useState } from "react";
import { fetchEvent } from "../../services/userServiceHelpers";
import { useNavigate, useParams } from "react-router-dom";

const ViewEvent = () => {
  const { id } = useParams();
const Navigate = useNavigate()
  const [event,setEvent] =  useState([])
  useEffect(()=>{
    fetchEvent(id)
    .then(res =>{
      setEvent(res.data)
    })
  },[])

  const bookEvent = ()=>{
    Navigate(`/bookEvent/${id}`)
  }
  console.log(event)
  return (
    <div className="container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold m-6  ">{event.name}</h1>
      <div className="w-2/3 mx-auto mb-4">
        <div className="flex flex-col sm:flex-row  bg-zinc-900 ">
          <div className="w-2/3">
            <img
 src={`https://res.cloudinary.com/dtbd0liga/image/upload/v1683611856/${event.banner}`}
               alt={event.name}
              className="w-fit object-cover  shadow-md"
            />
          </div>
          <div className="w-1/3 ">
            <div className="flex flex-col items-center mx-auto w-full mt-8">
              <button 
              onClick={bookEvent}
              className="px-4 py-2  text-black font-bold  bg-zinc-50 rounded-md hover:bg-zinc-100 focus:bg-zinc-200">
                BOOK NOW
              </button>
              <span className="mx-auto  text-white font-semibold mt-7">
                Admission Fee: {event.fees===0?"Free":event.fees}
              </span>
              <span className="mx-auto  text-white font-semibold mt-7">
                Email: magnuspubliclibrary@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 w-2/3 mx-auto">
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default ViewEvent;

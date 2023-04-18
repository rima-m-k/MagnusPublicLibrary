import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import NavMenu from "../../components/UserNavigation";
import Footer from "../../components/Footer";
import BackgroundBanner from "../../components/BackgroundBanner";
import { fetchBook } from "../../services/userServiceHelpers";
import {  setBooks } from "../../store/store";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate()
  

  return (
    <>
      <NavMenu />
      <BackgroundBanner />
      <button className="p-5 bg-black text-white" onClick={()=> navigate('/books') }> hello</button>
      <Footer />
    </>
  );
}

export default LandingPage;

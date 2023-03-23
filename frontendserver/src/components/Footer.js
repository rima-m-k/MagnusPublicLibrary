import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/user/Login";
import StaffLogin from "../pages/admin/StaffLogin";

function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-5  ">
      <div className="container mx-auto">
        <div className="flex  justify-between items-center mx-3 px-3 font-light">
          <Link to="NoticeBoard" element={<Login />}>
            Notice Board
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Community
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Venue Hire{" "}
          </Link>
          <Link to="staffPortal" element={<StaffLogin />}>
            Staff Portal{" "}
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Donate{" "}
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Report a problem{" "}
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Support Us{" "}
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Feedback{" "}
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            Contact{" "}
          </Link>
          <Link to="NoticeBoard" element={<Login />}>
            About{" "}
          </Link>
        </div>
        <hr className="my-2 border-gray-500" />
        <div className="flex justify-center items-center font-light">
          Copyright © 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

import { Outlet } from "react-router-dom";
// import Navbar from "../components/base/navbar";

const Homepage = () => {
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-0 ">
        {/* <div className="container"> */}
          <Outlet />
        {/* </div> */}
      </div>
    </>
  );
};

export default Homepage;

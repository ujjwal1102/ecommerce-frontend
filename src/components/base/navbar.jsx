import React from "react";
// import Link from "react-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
import { client } from "../../services/userAuthApis";
import Categories from "./categories";

const Navbar = () => {
  return (
    <div className="" style={{ }}>
      <div className=" w-100" style={{ zIndex: 3 }}>
        {/*position-absolute*/}
        <div className="d-flex">
          <div className="my-2">
            <Categories client={client} />
          </div>
          <nav className="navbar navbar-expand-lg bg-transparent ">
            <div className="">
              <button
                className="navbar-toggler border-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="float-end">
                  <i className="fa-solid fa-bars" />
                </span>
              </button>
              {/* <Categories/> */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/seller">
                      Seller
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

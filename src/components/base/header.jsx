import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Categories from "./categories";
import Cookies from "js-cookie";
import {
  removeToken,
  getAccessToken,
} from "../../services/LocalStorageService";
import NavIcon2 from "../../utils/icons/NavIcon2.png";

const Header = ({ client, accessToken, setAccessToken }) => {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      client.post("logout/");
      removeToken();
      setAccessToken(getAccessToken());
      // setLoggedIn(false); // You may want to setLoggedIn here if needed
    } catch (error) {
      console.error(error);
    }
  };
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setAccessToken(getAccessToken());
    Cookies.set("test","test")
    console.log("Cookies htader: ",document.cookie)
  }, [accessToken]);

  return (
    <header className="py-1 text-center bg-black  text-white  border-transparent " style={{zIndex:3,width:"100%"}}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                  .myBody {
                    margin: 0;
                    padding: 0;
                    background: transparent;
                    height: auto;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    flex-direction: column;
                    align-content: center;
                  }
                
                  .box {
                    position: relative;
                  }
                
                  .input {
                    width: 80px;
                    background: none;
                    border: 1px solid #999999;
                    border-radius: 50px;
                    box-sizing: border-box;
                    font-family: Lato;
                    color: #ffd52d;
                    outline: none;
                    transition: width 0.5s         ;


                  }
                
                  .input-focused {
                    width: 100%;
                  }
                
                  .box input {
                    padding-right: 40px;
                  }
                
                  .box i {
                    position: absolute;
                    top: 50%;
                    right: 15px;
                    transform: translate(-50%, -50%);
                    color: #ffd52d;
                    transition: .2s;
                  }
                
                  .box:hover i {
                    opacity: 0;
                    z-index: -1;
                  }
                  `,
        }}
      />
      <div className="">
        <div className="container-fluid">
          <div className="gy-3">
            <div className="row py-1">
              <div className="col col-auto my-2 my-lg-auto mt-sm-2 mt-md-2 ps-3 my-xl-auto ">
                <Categories client={client} />
              </div>
              <div className="col my-auto">
                <nav className=" navbar navbar-expand-lg bg-transparent p-0 my-auto">
                  <div className="navbar-brand ">
                    <Link to={"/"}>
                    <i className="fa-solid fa-house text-white ps-1 small"></i>
                    </Link>
                  </div>

                  <button
                    className="navbar-toggler border-0 text-white"
                    type="button"
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

                  <div
                    className="my-auto collapse navbar-collapse justify-content-lg-between justify-content-xl-between justify-content-md-center justify-content-sm-center justify-content-center text-sm-dark"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item  nav-link ">
                        <Link
                          className=" nav-link  p-0 my-auto text-white"
                          to="/shop"
                        >
                          <p className="p-0 my-auto">Shop</p>
                        </Link>
                      </li>
                      <li className="nav-item  nav-link ">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="/seller"
                        >
                          <p className="p-0 my-auto">Seller</p>
                        </Link>
                      </li>
                      <li className="nav-item  nav-link d-none d-sm-block d-md-block d-lg-none d-xl-none">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="/seller"
                        >
                          <p className="p-0 my-auto">Accounts Sign Up</p>
                        </Link>
                      </li>
                      <li className="nav-item  nav-link d-none d-sm-block d-md-block d-lg-none d-xl-none">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="/seller"
                        >
                          <p className="p-0 my-auto">Login</p>
                        </Link>
                      </li>

                      <li className="nav-item  nav-link d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="/cart"
                        >
                          <p className="p-0 my-auto">Cart</p>
                        </Link>
                      </li>
                      <li className="nav-item  nav-link d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="/wishlist"
                        >
                          <p className="p-0 my-auto">Wishlist</p>
                        </Link>
                      </li>
                      <li className="nav-item  nav-link d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="/profile"
                        >
                          <p className="p-0 my-auto">Profile</p>
                        </Link>
                      </li>
                      <li className="nav-item  nav-link d-block d-sm-block d-md-none d-lg-none d-xl-none">
                        <Link
                          className="nav-link p-0 my-auto text-white"
                          to="#"
                          onClick={handleLogout}
                        >
                          <p className="p-0 my-auto">Logout</p>
                        </Link>
                      </li>
                    </ul>
                    {/* <div className={`${isFocused ? "focused" : ""}`}>
                      <div className="myBody">
                        <div className="box">
                          <form name="search">
                            <input
                              type="text"
                              className={`input ${
                                isFocused ? "input-focused" : ""
                              }`}
                              name="txt"
                              value={inputValue}
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                            />
                            <i className="fas fa-search" />
                          </form>
                        </div>
                      </div>
                    </div> */}
                    <div className="d-flex justify-content-lg-between flex-md-column flex-lg-row justify-content-xl-between justify-content-md-center justify-content-sm-center justify-content-center ">
                      {/* <div className="d-flex me-0"> */}
                      {accessToken === null ? (
                        <>
                          <div className="nav-item me-2 d-none d-lg-block">
                            <Link to="/signup" className="nav-link">
                              <button className="btn btn-dark btn-outline-light rounded-3 mx-1 btn-sm d-flex align-items-center">
                                <i className="fa-solid fa-user m-1 me-md-2" />
                                <p
                                  className="d-none d-md-block mb-0 "
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  Accounts Sign Up
                                </p>
                              </button>
                            </Link>
                          </div>
                          <div className="nav-item d-none d-lg-block">
                            <Link to="/login" className="nav-link ">
                              <button className=" btn btn-dark btn-outline-light rounded-3 mx-1 btn-sm d-flex align-items-center">
                                <i className="fa-solid fa-right-to-bracket  m-1 me-md-2" />

                                <p
                                  className="d-none d-md-block mb-0"
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  Login
                                </p>
                              </button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <Link
                            className="nav-link d-none d-lg-block"
                            to="/wishlist"
                          >
                            <button
                              className="btn btn-dark btn-outline-light rounded-3 mx-1 btn-sm d-flex align-items-center mx-1"
                              target="_self" 
                            >
                              <i
                                className="fas fa-heart m-1 me-md-2 "
                                aria-hidden="true"
                              />
                              <small className="">
                                <p className="d-none d-md-block mb-0">
                                  Wishlist
                                </p>
                              </small>
                            </button>
                          </Link>
                          <Link
                            className="nav-link d-flex d-none d-lg-block"
                            to="/cart"
                          >
                            <button
                              className="btn btn-dark btn-sm btn-outline-light rounded-3 d-flex  mx-1"
                              target="_self"
                            >
                              <i className="fas fa-shopping-cart m-1 me-md-2 " />
                              <small className="">
                                <p className="d-none d-md-block mb-0 ">
                                  My cart
                                </p>
                              </small>
                              <span className="my-badge">
                                <small>3</small>
                              </span>
                            </button>
                          </Link>
                          <Link
                            className="nav-link d-none d-lg-block"
                            to="/profile"
                          >
                            <button
                              className="btn btn-dark btn-sm btn-outline-light rounded-3 mx-1"
                              title="User"
                            >
                              <i className="fa fa-user " aria-hidden="true" />
                            </button>
                          </Link>
                          <Link className="nav-link d-none d-lg-block" to="#">
                            <button
                              className="btn btn-dark btn-sm btn-outline-light rounded-3 mx-1"
                              title="Logout"
                              onClick={handleLogout}
                            >
                              <i className="fa-solid fa-arrow-right-from-bracket" />
                            </button>
                          </Link>
                        </>
                      )}
                      {/* </div> */}
                      {/* </ul> */}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

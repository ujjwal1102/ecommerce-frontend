import React, { useState } from "react";
import { client } from "../../services/userAuthApis";
import { Navigate, useNavigate } from "react-router-dom";
import { storeToken, getAccessToken } from "../../services/LocalStorageService";
import { Link } from "react-router-dom";

const Signup = ({ accessToken, setAccessToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    try {
      const response = await client.post("register/", data, {
        withCredentials: true,
      });

      const responseData = response.data;

      if (responseData.error) {
        for (const key in responseData.error) {
          for (const value in responseData.error[key]) {
            console.log(responseData.error[key][value]);
          }
        }
      }

      if (responseData.data) {
        console.log(responseData.data.user, responseData.data.token);

        storeToken(responseData.data.token);
        setAccessToken(getAccessToken);
        navigate("/");
        // Handle success, redirect, show a success message, etc.
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle other errors (network issues, server errors, etc.)
    }
  };
  if (accessToken) {
    console.log("accessToken", accessToken);
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black m-2" style={{ borderRadius: 25 }}>
            <div className="card-body p-sm-2 px-md-4">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center display-5 fw-normal lead mb-1 mx-1 mx-md-4 mt-4"></p>
                  <p className="text-center h4  mb-5 mx-1 mx-md-4 mt-1">
                    Sign up
                  </p>
                  <form
                    method="post"
                    role="form"
                    className="mx-1 mx-md-4"
                    onSubmit={handleRegister}
                  >
                    {/* <div className="form-outline flex-fill pb-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <input
                          required=""
                          type="text"
                          id="username"
                          className="form-control"
                          placeholder="Username"
                          name="username"
                        />
                      </div>
                    </div> */}
                    <div className="form-outline flex-fill pb-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <input
                          required=""
                          type="email"
                          id="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="form-control"
                          placeholder="User Email"
                          name="email"
                        />
                      </div>
                      {/* <label className="form-label " for="form3Example3c">Your Email</label> */}
                    </div>
                    <div className="form-outline flex-fill pb-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <input
                          required=""
                          type="password"
                          id="password1"
                          className="form-control"
                          placeholder="Password"
                          name="password1"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      {/* <label className="form-label" for="form3Example4c">Password</label> */}
                    </div>
                    <div className="form-outline flex-fill ">
                      <div className="d-flex flex-row align-items-center mb-5">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <input
                          required=""
                          type="password"
                          id="password2"
                          className="form-control"
                          placeholder="Repeat your password"
                          name="password2"
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                        />
                      </div>
                      {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                    </div>
                    <div className="form-check d-flex justify-content-center pb-5 my-2">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        I agree all statements in
                        <Link to="#!">Terms of service</Link>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="submit"
                        className="btn btn-outline-secondary rounded-3"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

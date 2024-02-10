import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { storeToken, getAccessToken } from "../../services/LocalStorageService";
import { client } from "../../services/userAuthApis";
import { Link } from "react-router-dom";


const Login = ({ accessToken, setAccessToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    client
      .post(
        "login/",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then(function (res) {
        if (res.data) {
          storeToken(res.data.token);
          setAccessToken(getAccessToken());
          console.log(res.data)
          navigate("/");
        }
      }).catch((err) => {
        console.log("err : ", err);
      });
  };

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <section className="py-3" style={{ backgroundColor: "#eee" }}>
      <div className="container vh-100 vh-sm">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-9 col-xl-10">
            <div className="card text-black my-sm-4 mx-3 my-5 rounded-3">
              <div className="card-body p-sm-2 p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-7 col-lg-7 col-xl-7">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                  <div className="col-md-5 col-lg-5 col-xl-5">
                    <h3 className="text-center my-4">Login</h3>
                    <form method="post" role="form" onSubmit={handleLogin}>
                      <div className="form-outline mb-4 mx-3">
                        <input
                          required=""
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Email"
                          title="Email"
                        />
                      </div>

                      <div className="form-outline mb-3 mx-3">
                        <input
                          required=""
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          title="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        Checkbox
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Remember me
                          </label>
                        </div>
                        <Link to="#!" className="text-body">
                          Forgot password?
                        </Link>
                      </div>

                      <div className="text-center mt-4 pt-2">
                        <button
                          type="submit"
                          className="btn text-center btn-outline-secondary rounded-3 px-3"
                        >
                          Login
                        </button>
                        <p className="small mt-2 pt-1 mb-3">
                          Don't have an account?{" "}
                          <Link to="#" className="link-danger">
                            Register
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

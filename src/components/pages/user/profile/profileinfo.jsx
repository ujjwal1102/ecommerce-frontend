import React, { useEffect, useState } from "react";
import { client } from "../../../../services/userAuthApis";
const ProfileInfo = () => {
  const [loading, setLoading] = useState(true);
  const [userProfileInfo, setUserProfileInfo] = useState({
    customer: {
      name: "",
      first_name: "",
      last_name: "",
      email: "",
      bio: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pin_code: "",
      zipcode: "",
      country: "",
      user: "",
    },
  });
  useEffect(() => {
    setLoading(true);
    // const response = client
    //   .get("profile/", {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //     },
    //   })
    //   .then(() => {
    //     console.log("response.data : ", response.data);
    //   });
    client
      .get("profile/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        // setArr(response.data);
        setLoading(false); // Set loading to false after data is fetched
        console.log("profile : ", response.data);
        setUserProfileInfo(response.data);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
  }, []);
  return (
    <div>
      <div className="card-title">
        {/* <h4 c lassName="">Profile Info</h4> */}
        <h4>YOUR PROFILE INFORMATION</h4>
        <hr />
      </div>
      <div className="card-body">
        <form>
          <div className="form-outline mb-3">
            <div className="row d-flex">
              <div className="col col-lg-6 col-md-6">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control autosize ${
                    loading ? "placeholder" : ""
                  }`}
                  id="fullName"
                  aria-describedby="fullNameHelp"
                  // placeholder="Enter your fullname"
                  // defaultValue="Kenneth Valdez"
                  defaultValue={
                    userProfileInfo.customer
                      ? userProfileInfo.customer.first_name +
                        " " +
                        userProfileInfo.customer.last_name
                      : ""
                  }
                />
                <small id="fullNameHelp" className="form-text text-muted ">
                  Your name may appear around here where you are mentioned. You
                  can change or remove it at any time.
                </small>
              </div>
              <div className="col col-lg-6 col-md-6">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${loading ? "placeholder" : ""}`}
                  id="Email"
                  aria-describedby="EmailHelp"
                  placeholder="Enter your Email"
                  defaultValue={userProfileInfo.customer.user.email}
                />
                <small id="EmailHelp" className="form-text text-muted ">
                  Your Email
                </small>
              </div>
            </div>
          </div>
          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="bio">
              Your Bio
            </label>
            <textarea
              className={`form-control autosize ${
                loading ? "placeholder" : ""
              }`}
              id="bio"
              placeholder="Write something about you"
              style={{
                overflow: "hidden",
                overflowWrap: "break-word",
                resize: "none",
                height: 62,
              }}
              defaultValue={
                "A front-end developer that focus more on user interface design, a web interface wizard, a connector of awesomeness."
              }
            />
          </div>
          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="url">
              Mobile no.
            </label>
            <input
              type="text"
              className={`form-control autosize ${
                loading ? "placeholder" : ""
              }`}
              id="url"
              placeholder="Enter your website address"
              defaultValue={userProfileInfo.customer.phone}
            />
          </div>
          <div className="mb-3">
            <div className="form-outline mb-1">
              <div className="row">
                <div className="col-sm-8 mb-3">
                  <p className="mb-0">Address</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      className={`form-control autosize ${
                        loading ? "placeholder" : ""
                      }`}
                      defaultValue={userProfileInfo.customer.address}
                    />
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <p className="mb-0">City</p>
                  {/* <select className="form-select">
                    <option value={1}>New York</option>
                    <option value={2}>Moscow</option>
                    <option value={3}>Samarqand</option>
                  </select> */}
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      className={`form-control autosize ${
                        loading ? "placeholder" : ""
                      }`}
                      defaultValue={userProfileInfo.customer.city}
                    />
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <p className="mb-0">State</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      className={`form-control autosize ${
                        loading ? "placeholder" : ""
                      }`}
                      defaultValue={userProfileInfo.customer.state}
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-6 mb-3">
                  <p className="mb-0">Pin code</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      className={`form-control autosize ${
                        loading ? "placeholder" : ""
                      }`}
                      defaultValue={userProfileInfo.customer.pin_code}
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-6 mb-3">
                  <p className="mb-0">Zip</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      className={`form-control autosize ${
                        loading ? "placeholder" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="small text-muted">
              All of the fields on this page are optional and can be deleted at
              any time, and by filling them out, you're giving us consent to
              share this data wherever your user profile appears.
            </div>
          </div>
          <div className="float-end d-flex my-1 mb-3">
            <button type="button" className="btn btn-primary me-2">
              Update Profile
            </button>
            <button type="reset" className="btn btn-light">
              Reset Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfileInfo;

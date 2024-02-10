import React from "react";

import { Link, Outlet } from "react-router-dom";

const UserProfileUpdate = () => {
  return (
    <div className="container my-4">
      <div className="row d-flex gx-4">
        <div className="col col-sm-none col-md-3 col-lg-3 col-xl-3">
          <div className="card-body">
            <nav className="list-group nav-gap-y-1" >
              <Link
                to=""
                data-toggle="tab"
                className="list-group-item list-group-item-action "
              >
                <div className="d-flex">
                  <i className="fa-regular fa-user my-1 mx-2"></i>
                  Profile Information
                </div>
              </Link>
              <Link
                to="account"
                data-toggle="tab"
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex">
                  <i className="fa-solid fa-user-gear my-1 mx-2"></i>
                  Account Settings
                </div>
              </Link>

              <Link
                to="security"
                data-toggle="tab"
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex">
                  <i className="fa-solid fa-shield-halved my-1 mx-2"></i>
                  Security
                </div>
              </Link>
              <Link
                to="notification"
                data-toggle="tab"
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex">
                  <i className="fa-regular fa-bell my-1 mx-2"></i>Notification
                </div>
              </Link>
              <Link
                to="billing"
                data-toggle="tab"
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex">
                  <i className="fa-regular fa-credit-card my-1 mx-2"></i>
                  Billing
                </div>
              </Link>
            </nav>
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-8 col-xl-9">
          <div className="card mb-3">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileUpdate;

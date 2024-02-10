import React from "react";
const NotificationDropdown = () => {
  return (
    <>
      <div
        id="NotificationsDiv"
        className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3 show"
        data-bs-popper="static"
      >
        <div className="card border-0 w380">
          <div className="card-header border-0 p-3">
            <h5 className="mb-0 font-weight-light d-flex justify-content-between">
              <span>Notifications</span>
              <span className="badge text-white">06</span>
            </h5>
          </div>
          <div className="tab-content card-body">
            <div className="tab-pane fade show active">
              <ul className="list-unstyled list mb-0">
                <li className="py-2 mb-1 border-bottom">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar1.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-2">
                      <p className="d-flex justify-content-between mb-0 ">
                        <span className="font-weight-bold">Chloe Walkerr</span>{" "}
                        <small>2MIN</small>
                      </p>
                      <span className="">
                        Added New Product 2021-07-15{" "}
                        <span className="badge bg-success">Add</span>
                      </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mb-1 border-bottom">
                  <a href="javascript:void(0);" className="d-flex">
                    <div className="avatar rounded-circle no-thumbnail">AH</div>
                    <div className="flex-fill ms-2">
                      <p className="d-flex justify-content-between mb-0 ">
                        <span className="font-weight-bold">Alan Hill</span>{" "}
                        <small>13MIN</small>
                      </p>
                      <span className="">Invoice generator </span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mb-1 border-bottom">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar3.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-2">
                      <p className="d-flex justify-content-between mb-0 ">
                        <span className="font-weight-bold">Melanie Oliver</span>{" "}
                        <small>1HR</small>
                      </p>
                      <span className="">Orader Return RT-00004</span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mb-1 border-bottom">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar5.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-2">
                      <p className="d-flex justify-content-between mb-0 ">
                        <span className="font-weight-bold">Boris Hart</span>{" "}
                        <small>13MIN</small>
                      </p>
                      <span className="">Product Order to Toyseller</span>
                    </div>
                  </a>
                </li>
                <li className="py-2 mb-1 border-bottom">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar6.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-2">
                      <p className="d-flex justify-content-between mb-0 ">
                        <span className="font-weight-bold">Alan Lambert</span>{" "}
                        <small>1HR</small>
                      </p>
                      <span className="">Leave Apply</span>
                    </div>
                  </a>
                </li>
                <li className="py-2">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar7.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-2">
                      <p className="d-flex justify-content-between mb-0 ">
                        <span className="font-weight-bold">Zoe Wright</span>{" "}
                        <small className="">1DAY</small>
                      </p>
                      <span className="">Product Stoke Entry Updated</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a className="card-footer text-center border-top-0" href="#">
            {" "}
            View all notifications
          </a>
        </div>
      </div>
    </>
  );
};

export default NotificationDropdown;

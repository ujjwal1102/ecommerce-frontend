import React from "react";

const UsersList = () => {
  return (
    <div>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Customers Information</h3>
                <div className="col-auto d-flex w-sm-100">
                  <button
                    type="button"
                    className="btn btn-primary btn-set-task w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#expadd"
                  >
                    <i className="icofont-plus-circle me-2 fs-6" />
                    Add Customers
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row end  */}
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <div
                    id="myProjectTable_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_length"
                          id="myProjectTable_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="myProjectTable_length"
                              aria-controls="myProjectTable"
                              className="form-select form-select-sm"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div
                          id="myProjectTable_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder=""
                              aria-controls="myProjectTable"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          id="myProjectTable"
                          className="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline collapsed"
                          style={{ width: "100%" }}
                          role="grid"
                          aria-describedby="myProjectTable_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "73.2px" }}
                                aria-sort="ascending"
                                aria-label="Id: activate to sort column descending"
                              >
                                Id
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "127.2px" }}
                                aria-label="Customers: activate to sort column ascending"
                              >
                                Customers
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "117.2px" }}
                                aria-label="Register  Date: activate to sort column ascending"
                              >
                                Register Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "203.2px" }}
                                aria-label="Mail: activate to sort column ascending"
                              >
                                Mail
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "95.2px" }}
                                aria-label="Phone: activate to sort column ascending"
                              >
                                Phone
                              </th>
                              <th
                                className="dt-body-right sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "84.2px" }}
                                aria-label="Country: activate to sort column ascending"
                              >
                                Country
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 0, display: "none" }}
                                aria-label="Total Order: activate to sort column ascending"
                              >
                                Total Order
                              </th>
                              <th
                                className="dt-body-right sorting"
                                tabIndex={0}
                                aria-controls="myProjectTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 0, display: "none" }}
                                aria-label="Actions: activate to sort column ascending"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td tabIndex={0} className="sorting_1">
                                <strong>#CS-00002</strong>
                              </td>
                              <td>
                                <a href="customer-detail.html">
                                  <img
                                    className="avatar rounded"
                                    src="assets/images/xs/avatar1.svg"
                                    alt=""
                                  />
                                  <span className="fw-bold ms-1">
                                    Joan Dyer
                                  </span>
                                </a>
                              </td>
                              <td>12/03/2021</td>
                              <td>JoanDyer@gmail.com</td>
                              <td>202-555-0983</td>
                              <td className=" dt-body-right">South Africa</td>
                              <td style={{ display: "none" }}>18</td>
                              <td
                                className=" dt-body-right"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic outlined example"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#expedit"
                                  >
                                    <i className="icofont-edit text-success" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary deleterow"
                                  >
                                    <i className="icofont-ui-delete text-danger" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td tabIndex={0} className="sorting_1">
                                <strong>#CS-00004</strong>
                              </td>
                              <td>
                                <a href="customer-detail.html">
                                  <img
                                    className="avatar rounded"
                                    src="assets/images/xs/avatar3.svg"
                                    alt=""
                                  />
                                  <span className="fw-bold ms-1">
                                    Phil Glover
                                  </span>
                                </a>
                              </td>
                              <td>16/03/2021</td>
                              <td>PhilGlover@gmail.com</td>
                              <td>843-555-0175</td>
                              <td className=" dt-body-right">Sri Lanka</td>
                              <td style={{ display: "none" }}>05</td>
                              <td
                                className=" dt-body-right"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic outlined example"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#expedit"
                                  >
                                    <i className="icofont-edit text-success" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary deleterow"
                                  >
                                    <i className="icofont-ui-delete text-danger" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td tabIndex={0} className="sorting_1">
                                <strong>#CS-00006</strong>
                              </td>
                              <td>
                                <a href="customer-detail.html">
                                  <img
                                    className="avatar rounded"
                                    src="assets/images/xs/avatar2.svg"
                                    alt=""
                                  />
                                  <span className="fw-bold ms-1">
                                    Ryan Randall
                                  </span>
                                </a>
                              </td>
                              <td>12/03/2021</td>
                              <td>RyanRandall@gmail.com</td>
                              <td>303-555-0151</td>
                              <td className=" dt-body-right">Australia</td>
                              <td style={{ display: "none" }}>4568</td>
                              <td
                                className=" dt-body-right"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic outlined example"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#expedit"
                                  >
                                    <i className="icofont-edit text-success" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary deleterow"
                                  >
                                    <i className="icofont-ui-delete text-danger" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td tabIndex={0} className="sorting_1">
                                <strong>#CS-00008</strong>
                              </td>
                              <td>
                                <a href="customer-detail.html">
                                  <img
                                    className="avatar rounded"
                                    src="assets/images/xs/avatar4.svg"
                                    alt=""
                                  />
                                  <span className="fw-bold ms-1">
                                    Victor Rampling
                                  </span>
                                </a>
                              </td>
                              <td>25/02/2021</td>
                              <td>VictorRampling@gmail.com</td>
                              <td>404-555-0100</td>
                              <td className=" dt-body-right">Israel</td>
                              <td style={{ display: "none" }}>14</td>
                              <td
                                className=" dt-body-right"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic outlined example"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#expedit"
                                  >
                                    <i className="icofont-edit text-success" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary deleterow"
                                  >
                                    <i className="icofont-ui-delete text-danger" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td tabIndex={0} className="sorting_1">
                                <strong>#CS-00014</strong>
                              </td>
                              <td>
                                <a href="customer-detail.html">
                                  <img
                                    className="avatar rounded"
                                    src="assets/images/xs/avatar6.svg"
                                    alt=""
                                  />
                                  <span className="fw-bold ms-1">
                                    Robert Anderson
                                  </span>
                                </a>
                              </td>
                              <td>18/01/2021</td>
                              <td>RobertAnderson@gmail.com</td>
                              <td>502-555-0133</td>
                              <td className=" dt-body-right">Malaysia</td>
                              <td style={{ display: "none" }}>02</td>
                              <td
                                className=" dt-body-right"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic outlined example"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#expedit"
                                  >
                                    <i className="icofont-edit text-success" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary deleterow"
                                  >
                                    <i className="icofont-ui-delete text-danger" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td tabIndex={0} className="sorting_1">
                                <strong>#CS-00018</strong>
                              </td>
                              <td>
                                <a href="customer-detail.html">
                                  <img
                                    className="avatar rounded"
                                    src="assets/images/xs/avatar5.svg"
                                    alt=""
                                  />
                                  <span className="fw-bold ms-1">
                                    Sally Graham
                                  </span>
                                </a>
                              </td>
                              <td>16/02/2021</td>
                              <td>SallyGraham@gmail.com</td>
                              <td>502-555-0118</td>
                              <td className=" dt-body-right">Indonesia</td>
                              <td style={{ display: "none" }}>03</td>
                              <td
                                className=" dt-body-right"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic outlined example"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#expedit"
                                  >
                                    <i className="icofont-edit text-success" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary deleterow"
                                  >
                                    <i className="icofont-ui-delete text-danger" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="myProjectTable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 6 of 6 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="myProjectTable_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="myProjectTable_previous"
                            >
                              <a
                                href="#"
                                aria-controls="myProjectTable"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="myProjectTable"
                                data-dt-idx={1}
                                tabIndex={0}
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next disabled"
                              id="myProjectTable_next"
                            >
                              <a
                                href="#"
                                aria-controls="myProjectTable"
                                data-dt-idx={2}
                                tabIndex={0}
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
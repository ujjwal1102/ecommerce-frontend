import React from "react";
import { Link } from "react-router-dom";
import { defaultMethod } from "react-router-dom/dist/dom";

const CouponsList = () => {
  return (
    <div>
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
                            style={{ width: "113.2px" }}
                            aria-sort="ascending"
                            aria-label="Coupons Code: activate to sort column descending"
                          >
                            Coupons Code
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "85.2px" }}
                            aria-label="Type: activate to sort column ascending"
                          >
                            Type
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "76.2px" }}
                            aria-label="Discount: activate to sort column ascending"
                          >
                            Discount
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "85.2px" }}
                            aria-label="Start Date: activate to sort column ascending"
                          >
                            Start Date
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "73.2px" }}
                            aria-label="End Date: activate to sort column ascending"
                          >
                            End Date
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "78.2px" }}
                            aria-label="Status: activate to sort column ascending"
                          >
                            Status
                          </th>
                          <th
                            className="dt-body-right sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "145.2px" }}
                            aria-label="Discount Country: activate to sort column ascending"
                          >
                            Discount Country
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myProjectTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 0, display: "none" }}
                            aria-label="Discount Product: activate to sort column ascending"
                          >
                            Discount Product
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
                            <span className="fw-bold ms-1">AXXQT-2547</span>
                          </td>
                          <td>Percentage</td>
                          <td>20%</td>
                          <td>08/03/2021</td>
                          <td>30/03/2021</td>
                          <td>
                            <span className="badge bg-danger">In Active</span>
                          </td>
                          <td className=" dt-body-right">India</td>
                          <td style={{ display: "none" }}>Watches</td>
                          <td
                            className=" dt-body-right"
                            style={{ display: "none" }}
                          >
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <a
                                href="coupon-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </a>
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
                            <span className="fw-bold ms-1">BATTT-XA47</span>
                          </td>
                          <td>Fixed Amount</td>
                          <td>$18.00</td>
                          <td>06/05/2021</td>
                          <td>06/09/2021</td>
                          <td>
                            <span className="badge bg-success">Active</span>
                          </td>
                          <td className=" dt-body-right">Oman</td>
                          <td style={{ display: "none" }}>Shoes</td>
                          <td
                            className=" dt-body-right"
                            style={{ display: "none" }}
                          >
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <a
                                href="coupon-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </a>
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
                            <span className="fw-bold ms-1">DTZQT-8547</span>
                          </td>
                          <td>Fixed Amount</td>
                          <td>$12.6</td>
                          <td>18/08/2021</td>
                          <td>06/09/2021</td>
                          <td>
                            <span className="badge bg-success">Active</span>
                          </td>
                          <td className=" dt-body-right">South Africa</td>
                          <td style={{ display: "none" }}>Clothes</td>
                          <td
                            className=" dt-body-right"
                            style={{ display: "none" }}
                          >
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <a
                                href="coupon-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </a>
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
                            <span className="fw-bold ms-1">FALT-40</span>
                          </td>
                          <td>Percentage</td>
                          <td>18%</td>
                          <td>16/04/2021</td>
                          <td>06/09/2021</td>
                          <td>
                            <span className="badge bg-success">Active</span>
                          </td>
                          <td className=" dt-body-right">Oman</td>
                          <td style={{ display: "none" }}>Shoes</td>
                          <td
                            className=" dt-body-right"
                            style={{ display: "none" }}
                          >
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <a
                                href="coupon-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </a>
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
                            <span className="fw-bold ms-1">FiFty-50%</span>
                          </td>
                          <td>Percentage</td>
                          <td>50%</td>
                          <td>08/03/2021</td>
                          <td>30/03/2021</td>
                          <td>
                            <span className="badge bg-warning">
                              Future Plann
                            </span>
                          </td>
                          <td className=" dt-body-right">India</td>
                          <td style={{ display: "none" }}>Toy</td>
                          <td
                            className=" dt-body-right"
                            style={{ display: "none" }}
                          >
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <a
                                href="coupon-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </a>
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
                            <span className="fw-bold ms-1">SHIP-ZERO</span>
                          </td>
                          <td>Free shipping</td>
                          <td>$0.0</td>
                          <td>12/05/2021</td>
                          <td>06/10/2021</td>
                          <td>
                            <span className="badge bg-success">Active</span>
                          </td>
                          <td className=" dt-body-right">Denmark</td>
                          <td style={{ display: "none" }}>Cream Tube</td>
                          <td
                            className=" dt-body-right"
                            style={{ display: "none" }}
                          >
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <a
                                href="coupon-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </a>
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
  );
};

export default CouponsList;
import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            <h3 className="fw-bold mb-0">Categories List</h3>
            <Link
              href="categories-add.html"
              className="btn btn-primary py-2 px-5 btn-set-task w-sm-100"
            >
              <i className="icofont-plus-circle me-2 fs-6" /> Add Categories
            </Link>
          </div>
        </div>
      </div>
      {/* Row end  */}
      <div className="row g-3 mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div
                id="myDataTable_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="myDataTable_length">
                      <label>
                        Show
                        <select
                          name="myDataTable_length"
                          aria-controls="myDataTable"
                          className="form-select form-select-sm"
                        >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="myDataTable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="myDataTable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="myDataTable"
                      className="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline"
                      style={{ width: "100%" }}
                      role="grid"
                      aria-describedby="myDataTable_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="myDataTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "74.2px" }}
                            aria-sort="ascending"
                            aria-label="Id: activate to sort column descending"
                          >
                            Id
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myDataTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "206.2px" }}
                            aria-label="Categorie: activate to sort column ascending"
                          >
                            Categorie
                          </th>
                          <th
                            className="dt-body-right sorting"
                            tabIndex={0}
                            aria-controls="myDataTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "207.2px" }}
                            aria-label="Date: activate to sort column ascending"
                          >
                            Date
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="myDataTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "116.2px" }}
                            aria-label="Status: activate to sort column ascending"
                          >
                            Status
                          </th>
                          <th
                            className="dt-body-right sorting"
                            tabIndex={0}
                            aria-controls="myDataTable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "140.2px" }}
                            aria-label="Action: activate to sort column ascending"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0} className="sorting_1">
                            <strong>#0001</strong>
                          </td>
                          <td>Watch</td>
                          <td className=" dt-body-right">March 13, 2021</td>
                          <td>
                            <span className="badge bg-success">Published</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0002</strong>
                          </td>
                          <td>Toy</td>
                          <td className=" dt-body-right">January 14, 2021</td>
                          <td>
                            <span className="badge bg-warning">Scheduled</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0003</strong>
                          </td>
                          <td>Laptop</td>
                          <td className=" dt-body-right">February 08, 2021</td>
                          <td>
                            <span className="badge bg-success">Published</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0004</strong>
                          </td>
                          <td>Mobile</td>
                          <td className=" dt-body-right">April 02, 2021</td>
                          <td>
                            <span className="badge bg-warning">Scheduled</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0005</strong>
                          </td>
                          <td>Tv</td>
                          <td className=" dt-body-right">June 19, 2021</td>
                          <td>
                            <span className="badge bg-success">Published</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0006</strong>
                          </td>
                          <td>Cloths</td>
                          <td className=" dt-body-right">April 10, 2021</td>
                          <td>
                            <span className="badge bg-warning">Scheduled</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0007</strong>
                          </td>
                          <td>Footwear</td>
                          <td className=" dt-body-right">May 11, 2021</td>
                          <td>
                            <span className="badge bg-success">Published</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0008</strong>
                          </td>
                          <td>Kitchenware</td>
                          <td className=" dt-body-right">June 13, 2021</td>
                          <td>
                            <span className="badge bg-danger">Hidden</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0009</strong>
                          </td>
                          <td>Beautywear</td>
                          <td className=" dt-body-right">June 13, 2021</td>
                          <td>
                            <span className="badge bg-danger">Hidden</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                            <strong>#0010</strong>
                          </td>
                          <td>Game accessories</td>
                          <td className=" dt-body-right">February 13, 2021</td>
                          <td>
                            <span className="badge bg-success">Published</span>
                          </td>
                          <td className=" dt-body-right">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href="categories-edit.html"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-edit text-success" />
                              </Link>
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
                      id="myDataTable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 13 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="myDataTable_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="myDataTable_previous"
                        >
                          <Link
                            href="#"
                            aria-controls="myDataTable"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            Previous
                          </Link>
                        </li>
                        <li className="paginate_button page-item active">
                          <Link
                            href="#"
                            aria-controls="myDataTable"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </Link>
                        </li>
                        <li className="paginate_button page-item ">
                          <Link
                            href="#"
                            aria-controls="myDataTable"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </Link>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="myDataTable_next"
                        >
                          <Link
                            href="#"
                            aria-controls="myDataTable"
                            data-dt-idx={3}
                            tabIndex={0}
                            className="page-link"
                          >
                            Next
                          </Link>
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

export default CategoryList;

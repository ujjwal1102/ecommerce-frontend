import React from "react";

const OrdersList = () =>{
    return(<>
    <div className="container-xxl flex-grow-1 container-p-y">
  <h4 className="py-3 mb-4">
    <span className="text-muted fw-light">eCommerce /</span> Order List
  </h4>
  {/* Order List Widget */}
  <div className="card mb-4">
    <div className="card-widget-separator-wrapper">
      <div className="card-body card-widget-separator">
        <div className="row gy-4 gy-sm-1">
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-3 pb-sm-0">
              <div>
                <h3 className="mb-2">56</h3>
                <p className="mb-0">Pending Payment</p>
              </div>
              <div className="avatar me-sm-4">
                <span className="avatar-initial rounded bg-label-secondary">
                  <i className="mdi mdi-calendar-month mdi-24px" />
                </span>
              </div>
            </div>
            <hr className="d-none d-sm-block d-lg-none me-4" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-3 pb-sm-0">
              <div>
                <h3 className="mb-2">12,689</h3>
                <p className="mb-0">Completed</p>
              </div>
              <div className="avatar me-lg-4">
                <span className="avatar-initial rounded bg-label-secondary">
                  <i className="mdi mdi-check-all mdi-24px" />
                </span>
              </div>
            </div>
            <hr className="d-none d-sm-block d-lg-none" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-start border-end pb-3 pb-sm-0 card-widget-3">
              <div>
                <h3 className="mb-2">124</h3>
                <p className="mb-0">Refunded</p>
              </div>
              <div className="avatar me-sm-4">
                <span className="avatar-initial rounded bg-label-secondary">
                  <i className="mdi mdi-wallet-outline mdi-24px" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h3 className="mb-2">32</h3>
                <p className="mb-0">Failed</p>
              </div>
              <div className="avatar">
                <span className="avatar-initial rounded bg-label-secondary">
                  <i className="mdi mdi-alert-octagon-outline mdi-24px" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Order List Table */}
  <div className="card">
    <div className="card-datatable table-responsive">
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        <div className="card-header d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <div>
            <div id="DataTables_Table_0_filter" className="dataTables_filter">
              <label>
                <input
                  type="search"
                  className="form-control ms-0"
                  placeholder="Search Order"
                  aria-controls="DataTables_Table_0"
                />
              </label>
            </div>
          </div>
          <div className="d-flex align-items-md-center justify-content-md-end mt-2 mt-md-0 ps-1 ms-1 gap-3">
            <div
              className="dataTables_length mt-0 mt-md-3"
              id="DataTables_Table_0_length"
            >
              <label>
                <select
                  name="DataTables_Table_0_length"
                  aria-controls="DataTables_Table_0"
                  className="form-select"
                >
                  <option value={10}>10</option>
                  <option value={40}>40</option>
                  <option value={60}>60</option>
                  <option value={80}>80</option>
                  <option value={100}>100</option>
                </select>
              </label>
            </div>
            <div className="dt-action-buttons pt-0">
              <div className="dt-buttons">
                <button
                  className="dt-button buttons-collection dropdown-toggle btn btn-label-secondary"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                >
                  <span>
                    <i className="mdi mdi-export-variant me-1" />{" "}
                    <span className="d-none d-sm-inline-block">Export</span>
                  </span>
                  <span className="dt-down-arrow">▼</span>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <table
          className="datatables-order table dataTable no-footer dtr-column collapsed"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
          style={{ width: 1045 }}
        >
          <thead className="table-light">
            <tr>
              <th
                className="control sorting_disabled"
                rowSpan={1}
                colSpan={1}
                style={{ width: 4 }}
                aria-label=""
              />
              <th
                className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                rowSpan={1}
                colSpan={1}
                style={{ width: 18 }}
                data-col={1}
                aria-label=""
              >
                <input type="checkbox" className="form-check-input" />
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 55 }}
                aria-label="order: activate to sort column ascending"
              >
                order
              </th>
              <th
                className="sorting sorting_asc"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 144 }}
                aria-label="date: activate to sort column descending"
                aria-sort="ascending"
              >
                date
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 283 }}
                aria-label="customers: activate to sort column ascending"
              >
                customers
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 108 }}
                aria-label="payment: activate to sort column ascending"
              >
                payment
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 123 }}
                aria-label="status: activate to sort column ascending"
              >
                status
              </th>
              <th
                className="sorting dtr-hidden"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 0, display: "none" }}
                aria-label="method: activate to sort column ascending"
              >
                method
              </th>
              <th
                className="sorting_disabled dtr-hidden"
                rowSpan={1}
                colSpan={1}
                style={{ width: 0, display: "none" }}
                aria-label="Actions"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#6979</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Apr 15, 2023, 10:21</span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <img
                        src="../../assets/img/avatars/19.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Cristine Easom
                      </span>
                    </a>
                    <small className="text-truncate">
                      ceasomw@theguardian.com
                    </small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-warning">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Pending
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-success"
                  text-capitalized=""
                >
                  Delivered
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/mastercard.png"
                    alt="mastercard"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    2356
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="even">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#6624</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Apr 17, 2023, 6:43 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <span className="avatar-initial rounded-circle bg-label-info">
                        FS
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Fayre Screech
                      </span>
                    </a>
                    <small className="text-truncate">fscreechs@army.mil</small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-danger">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Failed
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-success"
                  text-capitalized=""
                >
                  Delivered
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/mastercard.png"
                    alt="mastercard"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    2077
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="odd">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#9305</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Apr 17, 2023, 8:05 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <span className="avatar-initial rounded-circle bg-label-success">
                        PP
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Pauline Pfaffe
                      </span>
                    </a>
                    <small className="text-truncate">ppfaffe1i@wikia.com</small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-secondary">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Cancelled
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-primary"
                  text-capitalized=""
                >
                  Out for Delivery
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/paypal_logo.png"
                    alt="paypal_logo"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    @gmail.com
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="even">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#8005</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Apr 22, 2023, 3:01 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <img
                        src="../../assets/img/avatars/17.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Maurits Nealey
                      </span>
                    </a>
                    <small className="text-truncate">
                      mnealeyf@japanpost.jp
                    </small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-success">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Paid
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-warning"
                  text-capitalized=""
                >
                  Dispatched
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/mastercard.png"
                    alt="mastercard"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    1555
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="odd">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#5859</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Apr 29, 2023, 9:52 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <span className="avatar-initial rounded-circle bg-label-dark">
                        EV
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Eydie Vogelein
                      </span>
                    </a>
                    <small className="text-truncate">
                      evogelein2g@forbes.com
                    </small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-secondary">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Cancelled
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-primary"
                  text-capitalized=""
                >
                  Out for Delivery
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/paypal_logo.png"
                    alt="paypal_logo"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    @gmail.com
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="even">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#8114</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Apr 8, 2023, 3:39 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <img
                        src="../../assets/img/avatars/20.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Ulysses Goodlife
                      </span>
                    </a>
                    <small className="text-truncate">
                      ugoodlife2p@blogger.com
                    </small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-danger">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Failed
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-primary"
                  text-capitalized=""
                >
                  Out for Delivery
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/mastercard.png"
                    alt="mastercard"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    4509
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="odd">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#6890</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Aug 1, 2022, 7:24 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <img
                        src="../../assets/img/avatars/9.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Etienne Duke
                      </span>
                    </a>
                    <small className="text-truncate">eduke1z@dell.com</small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-secondary">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Cancelled
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-info"
                  text-capitalized=""
                >
                  Ready to Pickup
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/mastercard.png"
                    alt="mastercard"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    3507
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="even">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#5911</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Aug 14, 2022, 3:26 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <span className="avatar-initial rounded-circle bg-label-primary">
                        HM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Hilliard Merck
                      </span>
                    </a>
                    <small className="text-truncate">
                      hmerck2n@printfriendly.com
                    </small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-secondary">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Cancelled
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-success"
                  text-capitalized=""
                >
                  Delivered
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/paypal_logo.png"
                    alt="paypal_logo"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    @gmail.com
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="odd">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#5531</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Aug 20, 2022, 3:21 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <img
                        src="../../assets/img/avatars/19.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Cletus Arias
                      </span>
                    </a>
                    <small className="text-truncate">carias21@rambler.ru</small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-danger">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Failed
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-warning"
                  text-capitalized=""
                >
                  Dispatched
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/mastercard.png"
                    alt="mastercard"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    5851
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="even">
              <td className="control" tabIndex={0} style={{}} />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              <td>
                <a href="app-ecommerce-order-details.html">
                  <span>#8044</span>
                </a>
              </td>
              <td className="sorting_1">
                <span className="text-nowrap">Aug 22, 2022, 6:36 </span>
              </td>
              <td>
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper me-3">
                    <div className="avatar avatar-sm">
                      <img
                        src="../../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="pages-profile-user.html" className="text-truncate">
                      <span className="text-heading fw-medium">
                        Nowell Cornford
                      </span>
                    </a>
                    <small className="text-truncate">
                      ncornfordn@sogou.com
                    </small>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-0 w-px-100 text-secondary">
                  <i className="mdi mdi-circle mdi-14px me-2" />
                  Cancelled
                </h6>
              </td>
              <td>
                <span
                  className="badge px-2 rounded-pill bg-label-primary"
                  text-capitalized=""
                >
                  Out for Delivery
                </span>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div className="d-flex align-items-center text-nowrap">
                  <img
                    src="../../assets/img/icons/payments/paypal_logo.png"
                    alt="paypal_logo"
                    className="me-2"
                    width={20}
                  />
                  <span>
                    <i className="mdi mdi-dots-horizontal" />
                    @gmail.com
                  </span>
                </div>
              </td>
              <td className="dtr-hidden" style={{ display: "none" }}>
                <div>
                  <button
                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end m-0">
                    <a
                      href="app-ecommerce-order-details.html"
                      className="dropdown-item"
                    >
                      View
                    </a>
                    <a
                      href="javascript:0;"
                      className="dropdown-item delete-record"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row mx-1">
          <div className="col-sm-12 col-md-6">
            <div
              className="dataTables_info"
              id="DataTables_Table_0_info"
              role="status"
              aria-live="polite"
            >
              Displaying 1 to 10 of 100 entries
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="DataTables_Table_0_paginate"
            >
              <ul className="pagination">
                <li
                  className="paginate_button page-item previous disabled"
                  id="DataTables_Table_0_previous"
                >
                  <a
                    aria-controls="DataTables_Table_0"
                    aria-disabled="true"
                    role="link"
                    data-dt-idx="previous"
                    tabIndex={0}
                    className="page-link"
                  >
                    Previous
                  </a>
                </li>
                <li className="paginate_button page-item active">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    aria-current="page"
                    data-dt-idx={0}
                    tabIndex={0}
                    className="page-link"
                  >
                    1
                  </a>
                </li>
                <li className="paginate_button page-item ">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    data-dt-idx={1}
                    tabIndex={0}
                    className="page-link"
                  >
                    2
                  </a>
                </li>
                <li className="paginate_button page-item ">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    data-dt-idx={2}
                    tabIndex={0}
                    className="page-link"
                  >
                    3
                  </a>
                </li>
                <li className="paginate_button page-item ">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    data-dt-idx={3}
                    tabIndex={0}
                    className="page-link"
                  >
                    4
                  </a>
                </li>
                <li className="paginate_button page-item ">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    data-dt-idx={4}
                    tabIndex={0}
                    className="page-link"
                  >
                    5
                  </a>
                </li>
                <li
                  className="paginate_button page-item disabled"
                  id="DataTables_Table_0_ellipsis"
                >
                  <a
                    aria-controls="DataTables_Table_0"
                    aria-disabled="true"
                    role="link"
                    data-dt-idx="ellipsis"
                    tabIndex={0}
                    className="page-link"
                  >
                    …
                  </a>
                </li>
                <li className="paginate_button page-item ">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    data-dt-idx={9}
                    tabIndex={0}
                    className="page-link"
                  >
                    10
                  </a>
                </li>
                <li
                  className="paginate_button page-item next"
                  id="DataTables_Table_0_next"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    role="link"
                    data-dt-idx="next"
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
</>);
}
export default OrdersList;
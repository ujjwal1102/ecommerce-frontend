import React, { useEffect, useState, useContext } from "react";
import { client } from "../../../services/userAuthApis";
// import OffcanvasffCanvasRight from "../../offcanvas/offcanvasright";
// import OffCanvasRight from "../../offcanvas/offcanvasright";
// import Example from "../../offcanvas/offcanvasright";
// import Example from "../../offcanvas/offcanvasright";
// import { MDBView, MDBMask } from "mdbreact";
import UpdateProduct from "./AddProduct/update_product";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const EditOffCanvas = (productDetails) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
    have chosen. Like, text, images, lists, etc. */}
          {/* <UpdateProduct productDetails={productDetails} /> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const StockInventoryList = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    client
      .get("products/seller/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString("en-US", options);
  };

  const getProductData = async (prod_id) => {
    try {
      const response = await client.get(`products/seller/product/${prod_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("res : ", response.data);
      setProductDetails(response.data);
    } catch (error) {
      console.log("err : ", error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        {/* <style
          dangerouslySetInnerHTML={{
            __html:
              " \n .dropdown-toggle::after { content: none; \n        } \n    ",
          }}
        /> */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  \n  .hover-filled-opacity::before {\n    top: 0;\n    bottom: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 1;\n  }\n\n  .hover-filled-opacity:hover::before {\n    opacity: 0;\n  }\n",
          }}
        />
      </>

      <>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Update Product</Offcanvas.Title>
            {/* <h4 className="mb-1 mt-3">Update Product</h4> */}
            {/* <p>Orders placed across your store</p> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc. */}
            <UpdateProduct productDetails={productDetails} />
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <div className="">
        <div className="body d-flex py-3">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="border-0 mb-4">
                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 className="fw-bold mb-0">Stock Inventory List</h3>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div
                      id=""
                      className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div
                            className="dataTables_length"
                            id="myDataTable_length"
                          >
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
                              Entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div
                            id="myDataTable_filter"
                            className="dataTables_filter"
                          >
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
                      <div className="row mx-1">
                        <div className="col table-responsive text-center align-middle">
                          <table
                            id="myDataTable"
                            className="table  align-middle mb-0"
                            style={{ width: "100%" }}
                            // role="grid"
                            // aria-describedby="myDataTable_info"
                          >
                            <thead>
                              <tr role="row text-nowrap">
                                <th className="col">Id</th>
                                <th className="col">Products</th>
                                <th className="col">Category</th>
                                {/* <th className="col">Date Added</th> */}
                                <th className="col">Stock</th>
                                <th className=" col text-nowrap">In Stock</th>
                                <th className="col">Color</th>
                                <th className=" col">Status</th>
                                <th className=" col">Actions</th>
                              </tr>
                            </thead>
                            {loading ? (
                              <>
                                <tbody className=" ">
                                  <tr>
                                    <td colSpan="8">
                                      {/* <div className="d-flex justify-content-center "> */}
                                      <div
                                        className="spinner-grow my-5 mx-auto"
                                        role="status"
                                      >
                                        <span className="visually-hidden">
                                          Loading...
                                        </span>
                                        {/* </div> */}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </>
                            ) : (
                              <tbody className="text-center text-nowrap align-middle">
                                {products.length !== 0  && (
                                  <>
                                    {products.map((product, idx) => (
                                      <tr key={idx} role="row" className="odd">
                                        <td tabIndex={0} className="sorting_1">
                                          <strong>#{product.id}</strong>
                                        </td>
                                        <td className="">
                                          <div className="d-flex text-center align-items-center  ">
                                            {product.thumbnail_image ? (
                                              <img
                                                src={product.thumbnail_image}
                                                className=" rounded-2 m-2"
                                                alt="profile-image"
                                                style={{
                                                  width: 35,
                                                  height: 35,
                                                }}
                                              />
                                            ) : (
                                              <div
                                                className="m-2 rounded-2"
                                                style={{
                                                  width: 35,
                                                  height: 35,
                                                  background: "#e6e8f1",
                                                }}
                                              ></div>
                                            )}
                                            {/* <span className="small text-secondary  ">
                                            {product.title
                                              ? product.title.slice(0, 30) +
                                                (product.title.length > 30
                                                  ? "..."
                                                  : "")
                                              : product.name
                                              ? product.name.slice(0, 30) +
                                                (product.title.length > 30
                                                  ? "..."
                                                  : "")
                                              : ""}
                                          </span> */}
                                          </div>
                                        </td>
                                        <td>{product.category}</td>
                                        <td>{product.cost}</td>
                                        <td className="">{product.quantity}</td>
                                        <td>Yellow</td>
                                        <td className=" ">
                                          <span className="badge bg-warning">
                                            Offer process
                                          </span>
                                        </td>
                                        <td>
                                          <span className="">
                                            {/* <MDBView hover> */}
                                            <Button
                                              variant="transparent"
                                              onClick={() => {
                                                handleShow();
                                                // getProductData(product.id);
                                              }}
                                              className="me-1 px-2 border-0 rounded-5 bg-light"
                                            >
                                              <i className="fa fa-light fa-pencil "></i>
                                            </Button>
                                            {/* <MDBMask
                                              className="flex-center"
                                              overlay="red-light"
                                            >
                                              <p className="white-text">
                                                Light overlay
                                              </p>
                                            </MDBMask>
                                          </MDBView> */}
                                          </span>
                                          <span>
                                            <Button
                                              variant="transparent"
                                              // className="btn-danger"
                                              // onClick={() => {
                                              //   getProductData(product.id);
                                              //   handleShow();
                                              // }}
                                              className="me-1 px-2 text-danger rounded-5 bg-light"
                                            >
                                              <i className="fa-regular fa-trash-can"></i>
                                            </Button>
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </>
                                )}
                              </tbody>
                            )}
                          </table>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-12 col-md-5">
                          <div className="dataTables_info">
                            Showing 1 to 8 of 8 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div className="">
                            <ul className="pagination">
                              <li
                                className=" previous disabled"
                                id="myDataTable_previous"
                              >
                                <a href="#">Previous</a>
                              </li>
                              <li className=" active">
                                <a href="#" className="page-link">
                                  1
                                </a>
                              </li>
                              <li
                                className=" next disabled"
                                id="myDataTable_next"
                              >
                                <a href="#" className="page-link">
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

        <div className="modal fade right">
          <div className="modal-dialog  modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Custom Settings</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body custom_setting">
                <div className="setting-theme pb-3">
                  <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                    <i className="icofont-color-bucket fs-4 me-2 text-primary" />
                    Template Color Settings
                  </h6>
                  <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                    <li data-theme="indigo">
                      <div className="indigo" />
                    </li>
                    <li data-theme="tradewind">
                      <div className="tradewind" />
                    </li>
                    <li data-theme="monalisa">
                      <div className="monalisa" />
                    </li>
                    <li data-theme="blue" className="active">
                      <div className="blue" />
                    </li>
                    <li data-theme="cyan">
                      <div className="cyan" />
                    </li>
                    <li data-theme="green">
                      <div className="green" />
                    </li>
                    <li data-theme="orange">
                      <div className="orange" />
                    </li>
                    <li data-theme="blush">
                      <div className="blush" />
                    </li>
                    <li data-theme="red">
                      <div className="red" />
                    </li>
                  </ul>
                </div>
                <div className="sidebar-gradient py-3">
                  <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                    <i className="icofont-paint fs-4 me-2 text-primary" />
                    Sidebar Gradient
                  </h6>
                  <div className="form-check form-switch gradient-switch pt-2 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="CheckGradient"
                    />
                    <label className="form-check-label" htmlFor="CheckGradient">
                      Enable Gradient! ( Sidebar )
                    </label>
                  </div>
                </div>

                <div className="dynamic-block py-3">
                  <ul className="list-unstyled choose-skin mb-2 mt-1">
                    <li data-theme="dynamic">
                      <div className="dynamic">
                        <i className="icofont-paint me-2" /> Click to Dyanmic
                        Setting
                      </div>
                    </li>
                  </ul>
                  <div className="dt-setting">
                    <ul className="list-group list-unstyled mt-1">
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label>Primary Color</label>
                        <button
                          id="primaryColorPicker"
                          className="btn bg-primary avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label>Secondary Color</label>
                        <button
                          id="secondaryColorPicker"
                          className="btn bg-secondary avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label className="text-muted">Chart Color 1</label>
                        <button
                          id="chartColorPicker1"
                          className="btn chart-color1 avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label className="text-muted">Chart Color 2</label>
                        <button
                          id="chartColorPicker2"
                          className="btn chart-color2 avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label className="text-muted">Chart Color 3</label>
                        <button
                          id="chartColorPicker3"
                          className="btn chart-color3 avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label className="text-muted">Chart Color 4</label>
                        <button
                          id="chartColorPicker4"
                          className="btn chart-color4 avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                        <label className="text-muted">Chart Color 5</label>
                        <button
                          id="chartColorPicker5"
                          className="btn chart-color5 avatar xs border-0 rounded-0 colorpicker-element"
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="setting-font py-3">
                  <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                    <i className="icofont-font fs-4 me-2 text-primary" /> Font
                    Settings
                  </h6>
                  <ul className="list-group font_setting mt-1">
                    <li className="list-group-item py-1 px-2">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="font"
                          id="font-poppins"
                          defaultValue="font-poppins"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="font-poppins"
                        >
                          Poppins Google Font
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item py-1 px-2">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="font"
                          id="font-opensans"
                          defaultValue="font-opensans"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="font-opensans"
                        >
                          Open Sans Google Font
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item py-1 px-2">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="font"
                          id="font-montserrat"
                          defaultValue="font-montserrat"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="font-montserrat"
                        >
                          Montserrat Google Font
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item py-1 px-2">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="font"
                          id="font-mukta"
                          defaultValue="font-mukta"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="font-mukta"
                        >
                          Mukta Google Font
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="setting-mode py-3">
                  <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                    <i className="icofont-layout fs-4 me-2 text-primary" />
                    Contrast Layout
                  </h6>
                  <ul className="list-group list-unstyled mb-0 mt-1">
                    <li className="list-group-item d-flex align-items-center py-1 px-2">
                      <div className="form-check form-switch theme-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="theme-switch"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="theme-switch"
                        >
                          Enable Dark Mode!
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center py-1 px-2">
                      <div className="form-check form-switch theme-high-contrast mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="theme-high-contrast"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="theme-high-contrast"
                        >
                          Enable High Contrast
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center py-1 px-2">
                      <div className="form-check form-switch theme-rtl mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="theme-rtl"
                        />
                        <label className="form-check-label" htmlFor="theme-rtl">
                          Enable RTL Mode!
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer justify-content-start">
                <button
                  type="button"
                  className="btn btn-white border lift"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary lift">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StockInventoryList;

import React from "react";
import { Link } from "react-router-dom";

// import ProductHeader from "./productheader";
const ProductList = ({toggleView}) => {
  return (
    <>
      
      {/* <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">32 Items found </strong>
        <div className="ms-auto">
          <select className="form-select d-inline-block w-auto border pt-1">
            <option value={0}>Best match</option>
            <option value={1}>Recommended</option>
            <option value={2}>High rated</option>
            <option value={3}>Randomly</option>
          </select>
          <div className="btn-group shadow-0 border">
            <Link to="#" className="btn btn-light" title="List view">
              <i className="fa fa-bars fa-lg" />
            </Link>
            <Link to="#" className="btn btn-light active" title="Grid view">
              <i className="fa fa-th fa-lg" />
            </Link>
          </div>
        </div>
      </header> */}

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                      className="w-100"
                    />
                    <Link to="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>Rucksack Backpack Jeans</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>
                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text consectetur adipisicing
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$34,50</h4>
                    <span className="text-danger">
                      <s>$49.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                      className="w-100"
                    />
                    <Link to="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>Men's Denim Jeans Shorts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <span className="ms-1">3</span>
                    </div>
                    <span className="text-muted">73 orders</span>
                  </div>
                  <p className="text mb-4 mb-md-0">
                    Re-engineered Digital Crown with hapti Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua tempor
                    incididunt ut labore et dolore magna [...]
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$34,50</h4>
                    <span className="text-danger">
                      <s>$49.99</s>
                    </span>
                  </div>
                  <h6 className="text-warning">Paid shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                      className="w-100"
                    />
                    <Link to="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>T-shirt for Men Blue Cotton Base</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                      <span className="ms-1">3.5</span>
                    </div>
                    <span className="text-muted">910 orders</span>
                  </div>
                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text consectetur adipisicing
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$99,50</h4>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                      className="w-100"
                    />
                    <Link to="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>Winter Jacket for Men and Women</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>
                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$140</h4>
                    <span className="text-danger">
                      <s>$190</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                      className="w-100"
                    />
                    <Link to="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>T-shirt for Men Blue Cotton Base</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>
                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$99.50</h4>
                    <span className="text-danger">
                      <s>$190</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <hr />

      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center mt-3"
      >
        <ul className="pagination">
          <li className="page-item disabled">
            <Link className="page-link" to="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              5
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProductList;

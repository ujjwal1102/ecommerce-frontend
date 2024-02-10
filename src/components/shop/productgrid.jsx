import React from "react";
import { Link } from "react-router-dom";
import ProductHeader from "./productheader";
const ProductGrid = () => {
  return (
    <div>
      {/* <ProductHeader /> */}
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
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-row">
                <h5 className="mb-1 me-1">$34,50</h5>
                <span className="text-danger">
                  <s>$49.99</s>
                </span>
              </div>
              <p className="card-text">
                T-shirts with multiple colors, for men and lady
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$120.00</h5>
              <p className="card-text">
                Winter Jacket for Men and Women, All sizes
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$120.00</h5>
              <p className="card-text">
                T-shirts with multiple colors, for men and lady
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp"
              className="card-img-top"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$120.00</h5>
              <p className="card-text">
                Blazer Suit Dress Jacket for Men, Blue color
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/14.webp"
              className="card-img-top"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$510.00</h5>
              <p className="card-text">
                Slim sleeve wallet Italian leather - multiple colors
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$79.99</h5>
              <p className="card-text">
                T-shirts with multiple colors, for men and lady
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$120.00</h5>
              <p className="card-text">
                Winter Jacket for Men and Women, All sizes
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$120.00</h5>
              <p className="card-text">
                T-shirts with multiple colors, for men and lady
              </p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">$43.50</h5>
              <p className="card-text">Summer New Men's Denim Jeans Shorts</p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                <Link to="#!" className="btn btn-primary shadow-0 me-1">
                  Add to cart
                </Link>
                <Link
                  to="#!"
                  className="btn btn-light border icon-hover px-2 pt-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <hr />
      {/* Pagination */}
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
      {/* Pagination */}
    </div>
    //     </div>
    //   </div>
    // </section>
    // </div>
  );
};

export default ProductGrid;

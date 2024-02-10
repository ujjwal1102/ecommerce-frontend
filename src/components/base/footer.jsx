import React from "react";
import { Link } from "react-router-dom";
const Footer =()=> {
  
    return (
      <footer
        className="text-center text-lg-start text-muted"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            <div className="row mt-3">
              <div className="col-lg-3 col-sm-12 col-md-12 mb-2">
                <p className="mt-2 text-dark">© 2023 Copyright: MyStore</p>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <h6 className="text-uppercase text-dark fw-bold mb-2">Store</h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <Link className="text-muted" to="#">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Find store
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <h6 className="text-uppercase text-dark fw-bold mb-2">
                  Information
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <Link className="text-muted" to="#">
                      Help center
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Our Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Shipping info
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Refunds
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <h6 className="text-uppercase text-dark fw-bold mb-2">
                  Support
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <Link
                      className="text-muted"
                      to="#"
                      style={{ textDecoration: "none" }}
                    >
                      Returns And Replacement
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Payments
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Documents
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      Your Account
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="#">
                      My orders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <div className="container">
            <div className="d-flex justify-content-between py-4 border-top">
              <div>
                <i className="fab fa-lg fa-cc-visa text-dark pe-1" />
                <i className="fab fa-lg fa-cc-amex text-dark pe-1" />
                <i className="fab fa-lg fa-cc-mastercard text-dark pe-1" />
                <i className="fab fa-lg fa-cc-paypal text-dark pe-1" />
              </div>

              <div />
            </div>
          </div>
        </div>
      </footer>
    );
 
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const HeaderTab = () => {
  return (
    <>
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #seller-header .nav-link,\n    #seller-header .nav-link:hover,\n    #seller-header .nav-link::after,\n    #seller-header .nav-link::before,\n    #seller-header .nav-link:focus,\n    #seller-header .nav-link:target {\n        color: black;\n    }\n\n    #seller-header .nav-link:target {\n        background-color: aquamarine;\n    }\n",
        }}
      /> */}
      <section className="" id="seller-header">
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid">
            <ul className="nav nav-tabs container-fluid d-flex ">
              <li className="nav-item dropdown">
                {/* <Link className="nav-link active" aria-current="page" to="#"></Link> */}
                <Link
                  className="nav-link dropdown-toggle px-2 "
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  <i className="fa-solid fa-calendar-days me-2 small"></i>
                  <span className="d-none d-sm-inline ">Catalog</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/seller/catalog/add-product"
                    >
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seller/catalog/drafts">
                      Complete your Drafts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Upload Images or Videos
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      ------
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="dropdown-toggle px-2 nav-link"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-warehouse me-2 small"></i>
                  <span className="d-none d-sm-inline ">Inventory</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/seller/inventory/manage-inventory"
                    >
                      Manage Inventory
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Manage Product Documents
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Add a product
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      ------
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {/* <Link className="nav-link" to="#">Pricing</Link> */}
                <Link
                  className="dropdown-toggle px-2 nav-link "
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-bag-shopping me-2 small"></i>
                  <span className="d-none d-sm-inline ">Orders</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/seller/orders/manage">
                      Manage Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seller/orders/report">
                      Orders Report
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Manage Returns
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      ------
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {/* <Link className="nav-link" to="#">Order</Link> */}
                <Link
                  className="dropdown-toggle px-2 nav-link "
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-money-check-dollar me-2 small"></i>
                  <span className="d-none d-sm-inline ">Pricing</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Pricing Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Manage Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Discounts
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      ------
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link  disabled" aria-disabled="true">
                  {" "}
                  <i className="fa-solid fa-gear me-2 small"></i>
                  <span className="d-none d-sm-inline ">Setting</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default HeaderTab;

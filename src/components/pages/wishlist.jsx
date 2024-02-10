import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../services/userAuthApis";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    client
      .get("wishlist/wishlist", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        setWishlist(response.data);
        console.log("Data : ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <section>
        <div className="row">
          {wishlist ? wishlist.map((wislst,id) =>
            <div className="col-md-4 mb-5" key={id}>
              <div className="">
                <div className="view zoom overlay z-depth-2 rounded">
                  {wislst.product.thumbnail_image ? (
                    <img
                      className="img-fluid w-100 rounded-4"
                      src={`http://127.0.0.1:8000${wislst.product.thumbnail_image}`}
                      alt="Sample"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center pt-4">
                  <h5>{wislst.product.title}</h5>
                  <p className="mb-2 text-muted text-uppercase small">{wislst.product.name}</p>
                  <div className="rating d-flex flex-row justify-content-center">
                    <i className="fas fa-star fa-sm text-primary pe-1" />
                    <i className="fas fa-star fa-sm text-primary pe-1" />
                    <i className="fas fa-star fa-sm text-primary pe-1" />
                    <i className="fas fa-star fa-sm text-primary pe-1" />
                    <i className="far fa-star fa-sm text-primary pe-1" />
                  </div>
                  <hr />
                  <h6 className="mb-3">${wislst.product.cost}</h6>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm me-1 mb-2 waves-effect waves-light "
                  >
                    <i className="fas fa-shopping-cart pe-2" />
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-light btn-sm me-1 mb-2 waves-effect waves-light"
                  >
                    <i className="fas fa-info-circle pe-2" />
                    Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-elegant btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Remove from wishlist"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* <div className="col-md-4 mb-5">
            <div className="">
              <div className="view zoom overlay z-depth-2  rounded">
                <img
                  className="img-fluid w-100 rounded-4"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                  alt="Sample"
                />
              </div>
              <div className="text-center pt-4">
                <h5>Red hoodie</h5>
                <p className="mb-2 text-muted text-uppercase small">Hoodies</p>
                <div className="rating d-flex flex-row justify-content-center">
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="far fa-star fa-sm text-primary pe-1" />
                </div>
                <hr />
                <h6 className="mb-3">35.99 $</h6>
                <button
                  type="button"
                  className="btn btn-primary btn-sm me-1 mb-2 waves-effect waves-light "
                >
                  <i className="fas fa-shopping-cart pe-2" />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm me-1 mb-2 waves-effect waves-light"
                >
                  <i className="fas fa-info-circle pe-2" />
                  Details
                </button>
                <button
                  type="button"
                  className="btn btn-elegant btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Remove from wishlist"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="">
              <div className="view zoom overlay z-depth-2 rounded">
                <img
                  className="img-fluid w-100 rounded-4"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                  alt="Sample"
                />
              </div>
              <div className="text-center pt-4">
                <h5>Grey sweater</h5>
                <p className="mb-2 text-muted text-uppercase small">Sweaters</p>
                <div className="rating d-flex flex-row justify-content-center">
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="fas fa-star fa-sm text-primary pe-1" />
                  <i className="far fa-star fa-sm text-primary pe-1" />
                </div>
                <hr />
                <h6 className="mb-3">
                  <span className="text-danger me-1">$21.99</span>
                  <span className="text-grey">
                    <s>$36.99</s>
                  </span>
                </h6>
                <button
                  type="button"
                  className="btn btn-primary btn-sm me-1 mb-2 waves-effect waves-light "
                >
                  <i className="fas fa-shopping-cart pe-2" />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm me-1 mb-2 waves-effect waves-light"
                >
                  <i className="fas fa-info-circle pe-2" />
                  Details
                </button>
                <button
                  type="button"
                  className="btn btn-elegant btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Remove from wishlist"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};
export default Wishlist;

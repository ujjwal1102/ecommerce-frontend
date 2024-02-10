import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useWishlist } from "../../utils/utils";
// import { AlertToast } from "../../utils/utils";
// import {
//   useAddToWishlist,
//   useRemoveFromWishlist,
//   useAddToCart,
//   useCleanupTimeout,
// } from "../../utils/utils";
// import AlertBox from "../alerts/alert";

// const AlertToast = () => {
//   return (
//     <div>
//       {/* <button onClick={notify}>Notify!</button> */}
//       <ToastContainer />
//     </div>
//   );
// };

const ProductCardListView = ({ product, colClasses, wishListItems }) => {
  const {
    loading,
    inWishlist,
    showWishlistAlert,
    handleAddWishlistButton,
    handleRemoveWishlistButton,
    // handleCloseAlert,
  } = useWishlist(product);
  const [isMobile, setIsMobile] = useState(null);

  const [Desciptnn, setDesciptnn] = useState(
    window.innerWidth < 996 ? 70 : 170
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 996) {
        setDesciptnn(70);
        console.log(window.innerWidth);
      } else {
        setDesciptnn(170);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="row justify-content-center mb-3 ">
      
      <div className={colClasses}>
        <div className="card shadow-0 border-0 rounded-4 shadow-sm">
          <div className="card-body">
            <div className="row gx-3">
              <div className="col-3 col-sm-3  col-xl-3 col-md-4 d-flex justify-content-center">
                <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                  {product.thumbnail_image ? (
                    <img
                      src={`https://ujjwal1102.pythonanywhere.com${
                        product.thumbnail_image.startsWith("/") ? "" : "/media/"
                      }${product.thumbnail_image}`}
                      // className="img-responsive rounded-top-4 border-0"
                      className="w-100 rounded-3 img-responsive"
                      alt="Product Image"
                      style={{ backgroundSize: "cover" }}
                    />
                  ) : product.image_url ? (
                    <img
                      src={product.image_url}
                      className="w-100"
                      alt="Product Image"
                      style={{ objectFit: "contain", height: "130px" }}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src =
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
                      }}
                    />
                  ) : (
                    // <img
                    //   src={product.image_url}
                    //   // className="img-responsive rounded-top-4 border-0"
                    //   className="w-100"
                    //   alt="Product Image"
                    //   style={{ backgroundSize: "cover", height: "250px" }}
                    // />
                    ""
                  )}
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

              <div className="col-6 col-sm-6 col-xl-7 col-md-5 ">
                <label>
                  <h5>
                    {product.title
                      ? product.title.slice(0, 35) + "..."
                      : product.name
                      ? product.name.slice(0, 35) + "..."
                      : ""}
                  </h5>
                  <div className="d-flex flex-row small">
                    <div className="text-warning my-auto me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted small my-auto ">
                      154 orders
                    </span>
                  </div>
                  <Link
                    className="text-black"
                    // to={`http://localhost:5173/product/${product.id}`}
                    to={`https://ujjwal1102.pythonanywhere.com/product/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="text small mt-lg-2 mt-md-2 mt-sm-1 mt-1 mb-1 text-muted">
                      {product.description
                        ? product.description.slice(0, Desciptnn) +
                          (product.description.length > Desciptnn ? "..." : "")
                        : product.title
                        ? product.title.slice(0, Desciptnn) +
                          (product.title.length > Desciptnn ? "..." : "")
                        : ""}
                    </p>
                  </Link>
                </label>
              </div>
              <div className="col-3 col-sm-3   col-xl-2 col-md-3 ">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h5 className="mb-1 me-1">Rs {product.cost}</h5>
                  {/* <span className="text-danger">
                    <s>$49.99</s>
                  </span> */}
                </div>
                <h6 className="text-success ">Free shipping</h6>
                {/* <div className="mt-4 d-flex justify-content-between">
                  <button
                    className="btn btn-primary shadow-0 btn-sm "
                    type="button"
                  >
                    Buy this
                  </button>
                  <Link
                    to="#!"
                    className="btn btn-light border px-2 pt-2 icon-hover btn-sm"
                  >
                    <i className="fas fa-heart fa-lg px-1" />
                  </Link>
                </div> */}
                <div>
                  <div className="text-center float-end d-flex flex-row">
                    <button
                      type="button"
                      className="btn text-danger icon-hover border-0 px-2"
                      onClick={() => {
                        if (!loading) {
                          wishListItems.includes(product.id)
                            ? handleRemoveWishlistButton(product.id)
                            : handleAddWishlistButton(product.id);
                        }
                      }}
                      disabled={loading}
                    >
                      <i
                        className={
                          wishListItems
                            ? wishListItems.includes(product.id)
                              ? "bi bi-heart-fill"
                              : "bi bi-heart"
                            : "bi bi-heart"
                        }
                        data-productid={product.id}
                      />
                    </button>
                    <button
                      className="btn text-secondary-emphasis text-secondary icon-hover px-2 border-0"
                      onClick={() => {
                        handleAddToCartButton(product.id);
                        notify();
                      }}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
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

export default ProductCardListView;

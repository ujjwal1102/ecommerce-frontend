import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { client } from "../../services/userAuthApis";
import { useWishlist } from "../../utils/utils";
// import { AlertToast } from "../../utils/utils";
import {
  // useAddToWishlist,
  // useRemoveFromWishlist,
  useAddToCart,
  useCleanupTimeout,
} from "../../utils/utils";
import AlertBox from "../alerts/alert";

const AlertToast = () => {
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
};
function checkImage(url, successCallback, errorCallback) {
  var img = new Image();

  img.onload = function () {
    successCallback();
  };

  img.onerror = function () {
    errorCallback();
  };

  img.src = url;
}

var imageUrl = "https://example.com/image.jpg";
const ProductCardGridView = ({ product, colClasses, wishListItems }) => {
  // const [heart, setHeart] = useState(null);
  // const {
  //   loading,
  //   inWishlist,
  //   showAlert,
  //   handleAddWishlistButton,
  //   handleRemoveWishlistButton,
  //   handleAddToCartButton,
  //   handleCloseAlert,
  // } = useWishlistFunctions(product);

  // const {
  //   loading: loadingWishlist,
  //   inWishlist,
  //   handleAddWishlistButton,
  //   showAddWishlistAlert,
  // } = useAddToWishlist(product);

  // const {
  //   showRemoveFromWishlistAlert,
  //   loading: loadingRemove,
  //   handleRemoveWishlistButton,
  // } = useRemoveFromWishlist(product);

  const {
    loading,
    inWishlist,
    showWishlistAlert,
    handleAddWishlistButton,
    handleRemoveWishlistButton,
    // handleCloseAlert,
  } = useWishlist(product);
  // const notify = () => toast("Added to cart");
  const { showAddToCartAlert, handleAddToCartButton, handleCloseAlert } =
    useAddToCart();

  useCleanupTimeout();

  // console.log(inWishlist);
  const notify = () =>
    toast.success("Added to cart", {
      autoClose: 5000,
      position: "top-right",
      pauseOnHover: true,
      hideProgressBar: true,
    });
  return (
    <div className={colClasses}>
      {showAddToCartAlert && <AlertToast />}

      {showWishlistAlert && (
        <AlertBox
          onClose={handleCloseAlert}
          colorclassName="alert alert-info rounded-4"
        />
      )}
      <div className="card w-100 my-2 shadow-sm product-card border-0 rounded-4">
        {product.thumbnail_image ? (
          <img
            src={`https://ujjwal1102.pythonanywhere.com${
              product.thumbnail_image.startsWith("/") ? "" : "/media/"
            }${product.thumbnail_image}`}
            className="rounded-top-4 border-0 p-1"
            alt="Product Image"
            style={{ objectFit: "contain", width: "100%", height: "300px" }}
          />
        ) : product.image_url ? (
          <img
            src={product.image_url}
            className="img-responsive rounded-top-4 border-0"
            alt="Product Image"
            style={{ objectFit: "contain", height: "250px" }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
            }}
          />
        ) : (
          // checkImage(
          //   product.image_url,
          //   function () {
          //     console.log("Image exists!");
          //     return (
          //       <img
          //         src={product.image_url}
          //         className="img-responsive rounded-top-4 border-0"
          //         alt="Product Image"
          //         style={{ objectFit: "contain", height: "250px" }}
          //       />
          //     );
          //   },
          //   function () {
          //     console.log("Image does not exist or cannot be loaded.");
          //     return null;
          //   }
          // )
          ""
        )}

        <div className="card-body d-flex flex-column">
          <form action="#" method="post"></form>
          <div className="d-flex flex-row justify-content-between">
            <div className="align-middle">
              <h5 className="mt-1 small">Rs. {product.cost}</h5>
            </div>
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
          <div className="d-flex flex-row justify-content-between">
            <Link
              className="text-black"
              // to={`http://localhost:5173/product/${product.id}`}
              to={`https://ujjwal1102.pythonanywhere.com/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <p className="card-text font-weight-light ">
                <small>
                  {product.title
                    ? product.title.slice(0, 30) + "..."
                    : product.name
                    ? product.name.slice(0, 30) + "..."
                    : ""}
                </small>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGridView;

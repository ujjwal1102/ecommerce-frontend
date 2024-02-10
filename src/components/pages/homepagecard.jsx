import React, { useEffect, useState } from "react";
import ProductCardGridView from "../cards/productcard-gridview";
import { client } from "../../services/userAuthApis";

const HomePageCard = () => {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishListItems, setWishListItems] = useState(null);
  useEffect(() => {
    client
      .get("products/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        setArr(response.data);
        setWishListItems(response.data.wl_item);
        setLoading(false); // Set loading to false after data is fetched
        console.log("wishlist", response);
      }).catch((err) => {
        console.log("err : ", err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-item-center w-100">
          <div class="spinner-grow my-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {arr.length === 0 ? (
            <p>Empty</p>
          ) : (
            arr.map((item, index) => (
              <ProductCardGridView
                key={index}
                product={item}
                wishListItems={wishListItems}
                colClasses={"col-6 col-sm-6 col-lg-3 col-md-4 col-sm-6"}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default HomePageCard;

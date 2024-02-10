import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../services/userAuthApis";
import useCartFunctions from "../../utils/cartfunctions";
// const onQuantityChange = (id, quantity) => {
//   const cartItems = JSON.parse(localStorage.getItem("cart"))

//   const existingItem = cartItems.find((item) => item.id === id);
//   if (existingItem) {

//     console.log("Item with ID", id, "is already in the cart.");
//   } else {
//     lstgdata.push({ id });
//     localStorage.setItem("cart", JSON.stringify(lstgdata));
//     console.log("Updated Cart Data:", lstgdata);
//   }
// } else {
//   localStorage.setItem("cart", JSON.stringify([{ id }]));
//   console.log("New Cart Data:", [{ id }]);
// }
// };

// useEffect(() => {
//   client
//     .get("cart/cart")
//     .then(function (res) {
//       console.log(res);
//       if (res.data) {
//         setIsEmpty(false);
//       } else {
//         setIsEmpty(true);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

const Cart = () => {
  // const [isEmpty, setIsEmpty] = useState(true);
  // const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(null);
  // async function getCartPrice(cartItems) {
  //   const data = {
  //     user: localStorage.getItem("access_token"),
  //     cart_items: cartItems,
  //   };
  //   try {
  //     setLoading(true);
  //     const response = await client.post("cart/cart", data, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //       },
  //     });
  //     console.log("Cart price data:", response.data);
  //     setTotalPrice(response.data.total_cost);
  //     setCart(response.data.cart_products);
  //     console.log("Set total price");
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  //   if (cartItems.length !== 0) {
  //     setIsEmpty(false);
  //     setCart(cartItems);
  //     console.log("UseEffect:", cartItems);
  //     getCartPrice([...cart, ...cartItems]);
  //   } else {
  //     setIsEmpty(true);
  //     setCart([]);
  //   }
  // }, []);

  // const handleUpdateCartButton = (id, quantity) => {
  //   let lstgdata = JSON.parse(localStorage.getItem("cart")) || [];

  //   const existingItem = lstgdata.find((item) => item.id === id);

  //   if (existingItem) {
  //     existingItem.quantity = quantity;
  //     localStorage.setItem("cart", JSON.stringify(lstgdata));
  //     getCartPrice(lstgdata);
  //   } else {
  //     localStorage.setItem(
  //       "cart",
  //       JSON.stringify([...lstgdata, { id, quantity }])
  //     );
  //     console.log("New Cart Data:", [...lstgdata, { id, quantity }]);
  //   }
  // };

  // const handleRemoveFromCartButton = (id) => {
  //   let lstgdata = JSON.parse(localStorage.getItem("cart")) || [];
  //   const existingItemIndex = lstgdata.findIndex((item) => item.id === id);

  //   if (existingItemIndex !== -1) {
  //     // Remove the item from the array if it exists
  //     lstgdata.splice(existingItemIndex, 1);
  //     localStorage.setItem("cart", JSON.stringify(lstgdata));
  //     console.log("Updated Cart Data:", lstgdata);

  //     // Update state after modifying local storage
  //     setCart(lstgdata);
  //     getCartPrice(lstgdata);

  //     setIsEmpty(lstgdata.length === 0);
  //   } else {
  //     console.log("Item with ID", id, "is not in the cart.");
  //   }

  // };
  const { cart, totalPrice, loading, isEmpty, addToCart, removeFromCart } =
    useCartFunctions();
  const [count, setCount] = useState(1);
  const handleDecrement = () => {
    // Ensure count does not go below 0
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  
  return (
    <div classname="">
      <div className="container mt-2 mb-5">
        <div className="row ">
          <div className="col-lg-9">
            <div className="card border shadow-0">
              {isEmpty ? (
                "Cart is empty"
              ) : (
                <>
                  <div className="m-4">
                    <h4 className="card-title mb-4">Your shopping cart</h4>
                    {cart.map((item) => (
                      <div className="row gy-3 mb-4" key={item.id}>
                        <div className="col-lg-5">
                          <div className="me-lg-5">
                            <div className="d-flex">
                              <img
                                src={`http://127.0.0.1:8000${item.thumbnail_image}`}
                                className="border rounded me-3"
                                alt="Image"
                                style={{ width: 96, height: 96 }}
                              />
                              <div className="">
                                <Link to="#" className="nav-link">
                                  {item.title}
                                </Link>
                                <p className="text-muted small">
                                  Yellow, Jeans
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-lg-column flex-xl-row text-nowrap">
                          <div className="">
                            <select
                              style={{ width: 100 }}
                              className="form-select me-4"
                              value={JSON.parse(localStorage.getItem("cart")).find((i) => i.id === item.id).quantity }
                              onChange={
                                (e) => addToCart(item.id, e.target.value)
                                // (e) => handleUpdateCartButton(item.id, e.target.value)
                              }
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                            </select>
                            {/* <div
                              className="input-group mb-3"
                              style={{ width: 170 }}
                            >
                              <button
                                className="btn btn-white btn-sm border border-secondary px-3"
                                type="button"
                                id="button-addon1"
                                // data-mdb-ripple-color="dark"
                                onClick={handleDecrement}
                              >
                                <i className="fas fa-minus" />
                              </button>
                              <input
                                type="text"
                                className="form-control form-control-sm text-center border border-secondary"
                                placeholder={count}
                                
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                              />
                              <button
                                className="btn btn-white btn-sm border border-secondary px-3"
                                type="button"
                                id="button-addon2"
                                onClick={() => setCount(count + 1)}
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </div> */}

                            {/* <div className="input-group input-group-sm mb-3 flex-row ">
                              <button
                                id="minusBtn"
                                className="btn btn-outline-dark  btn-sm  py-1 px-2 minus"
                                type="button"
                                data-mdb-ripple-color="dark"
                                onClick={(e) =>
                                  {handleUpdateCartButton(item.id, e.target.value) && }}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <input
                                readonly
                                type="text"
                                name="quantity"
                                id="count"
                                className="form-control form-control-sm text-center border border-secondary count"
                                value="1"
                              />
                              <input
                                type="text"
                                name="product_id"
                                
                                value=""
                              />
                              <button
                                id="plusBtn"
                                className="btn btn-outline-dark btn-sm py-1 px-2 plus"
                                type="button"
                                data-mdb-ripple-color="dark"
                              >
                                <small>
                                  <i className="fas fa-plus"></i>
                                </small>
                              </button>
                            </div> */}
                          </div>
                          <div className="">
                            <text className="h6">${item.cost}</text> <br />
                            <small className="text-muted text-nowrap">
                              ${item.cost} / per item
                            </small>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                          <div className="float-md-end">
                            <Link
                              to="#!"
                              className="btn btn-light border px-2 icon-hover-primary me-2"
                            >
                              {" "}
                              <i className="fas fa-heart  px-1 text-secondary" />
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              // onClick={() => handleRemoveFromCartButton(item.id)}
                              className="btn btn-light border text-danger icon-hover-danger"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              // src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                              className="border rounded me-3"
                              alt="Image"
                              style={{ width: 96, height: 96 }}
                            />
                            <div className="">
                              <Link to="#" className="nav-link">
                                Mens T-shirt Cotton Base
                              </Link>
                              <p className="text-muted small">Blue, Medium</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="">
                          <select
                            style={{ width: 100 }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="">
                          <text className="h6">$44.80</text> <br />
                          <small className="text-muted text-nowrap">
                            $12.20 / per item
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <Link
                            to="#!"
                            className="btn btn-light border px-2 icon-hover-primary me-2"
                          >
                            <i className="fas fa-heart  px-1 text-secondary" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light border text-danger icon-hover-danger"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row gy-3">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              // src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp"
                              className="border rounded me-3"
                              alt="Image"
                              style={{ width: 96, height: 96 }}
                            />
                            <div className="">
                              <Link to="#" className="nav-link">
                                Blazer Suit Dress Jacket for Men
                              </Link>
                              <p className="text-muted small">
                                XL size, Jeans, Blue
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="">
                          <select
                            style={{ width: 100 }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="">
                          <text className="h6">$1156.00</text> <br />
                          <small className="text-muted text-nowrap">
                            $460.00 / per item
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <Link
                            to="#!"
                            className="btn btn-light border px-2 icon-hover-primary me-2"
                          >
                            <i className="fas fa-heart  px-1 text-secondary" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light border text-danger icon-hover-danger"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </>
              )}
              <div className="border-top pt-4 mx-4 mb-4">
                <p>
                  <i className="fas fa-truck text-muted " /> Free Delivery
                  within 1-2 weeks
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mb-3 border shadow-0">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="form-label">Have coupon?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border"
                        name=""
                        placeholder="Coupon code"
                      />
                      <button className="btn btn-light border">Apply</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">
                    {loading ? "Loading" : `$${totalPrice}`}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-success">$0.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">$0.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">
                    {loading ? "Loading" : `$${totalPrice}`}
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    to="/checkout"
                    className="btn btn-success w-100 shadow-0 mb-2"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link to="/shop" className="btn btn-light w-100 border mt-2">
                    Back to shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

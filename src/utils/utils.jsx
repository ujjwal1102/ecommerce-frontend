import { useState, useEffect } from "react";
import AlertBox from "../components/alerts/alert";
import { client } from "../services/userAuthApis";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const useWishlistFunctions = (product) => {
// const [loading, setLoading] = useState(false);
// const [inWishlist, setInWishlist] = useState(product.in_wishlist);

// const [showAlert, setShowAlert] = useState(false);

// const handleAddWishlistButton = async (id) => {
//   const data = {
//     user: localStorage.getItem("access_token"),
//     product: id,
//   };
//   try {
//     setLoading(true);
//     const response = await client.post("wishlist/wishlist/add", data, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       },
//     });
//     console.log("wishlist", response.data);
//     // Update the product's in_wishlist state
//     setInWishlist(true);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// };

// const handleRemoveWishlistButton = async (id) => {
//   try {
//     setLoading(true);
//     const response = await client.delete("wishlist/wishlist/delete", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       },
//       data: {
//         id: id,
//       },
//     });
//     console.log("wishlist", response.data);
//     setInWishlist(false);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// };

//   const handleAddToCartButton = async (id) => {
//     const locStog = localStorage.getItem("cart");
//     let lstgdata = [];
//     let quantity = 1;
//     if (locStog) {
//       lstgdata = JSON.parse(locStog);
//       if (!Array.isArray(lstgdata)) {
//         lstgdata = [lstgdata];
//       }
//       console.log("Current Cart Data:", lstgdata);
//       const existingItem = lstgdata.find((item) => item.id === id);
//       if (existingItem) {
//         console.log("Item with ID", id, "is already in the cart.");
//       } else {
//         lstgdata.push({ id, quantity });

//         localStorage.setItem("cart", JSON.stringify(lstgdata));
//         setShowAlert(true); // Show the alert after adding to cart
//         console.log("Updated Cart Data:", lstgdata);
//         // Automatically close the alert after 3 seconds
//         setTimeout(() => {
//           setShowAlert(false);
//         }, 5173);
//       }
//     } else {
//       localStorage.setItem("cart", JSON.stringify([{ id, quantity }]));
//       setShowAlert(true); // Show the alert after adding to cart
//       console.log("New Cart Data:", [{ id, quantity }]);
//       // Automatically close the alert after 3 seconds
//       setTimeout(() => {
//         setShowAlert(false);
//       }, 5173);
//     }
//   };

//   const handleCloseAlert = () => {
//     setShowAlert(false); // Close the alert
//   };

//   useEffect(() => {
//     return () => {
//       clearTimeout(); // Clear the timeout to avoid memory leaks
//     };
//   }, []);

//   return {
//     loading,
//     inWishlist,
//     showAlert,
//     handleAddWishlistButton,
//     handleRemoveWishlistButton,
//     handleAddToCartButton,
//     handleCloseAlert,
//   };
// };

// export const useAddToWishlist = (product) => {
//   const [loading, setLoading] = useState(false);
//   const [inWishlist, setInWishlist] = useState(product.in_wishlist);
//   const [showAddWishlistAlert, setAddWishlistShowAlert] = useState(false);

//   const handleAddWishlistButton = async (id) => {
//     const data = {
//       user: localStorage.getItem("access_token"),
//       product: id,
//     };
//     try {
//       setLoading(true);
//       const response = await client.post("wishlist/wishlist/add", data, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//         },
//       });
//       console.log("wishlist", response.data);
//       // Update the product's in_wishlist state
//       setInWishlist(true);
//       setAddWishlistShowAlert(true);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//       setAddWishlistShowAlert(false);
//     }
//   };

//   return { showAddWishlistAlert, loading, inWishlist, handleAddWishlistButton };
// };

// export const useRemoveFromWishlist = (product) => {
//   const [loading, setLoading] = useState(false);
//   const [inWishlist, setInWishlist] = useState(product.in_wishlist);
//   const [showRemoveFromWishlistAlert, setRemoveFromWishlistShowAlert] =
//     useState(false);

//   const handleRemoveWishlistButton = async (id) => {
//     try {
//       setLoading(true);
//       const response = await client.delete("wishlist/wishlist/delete", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//         },
//         data: {
//           id: id,
//         },
//       });
//       console.log("wishlist", response.data);
//       setInWishlist(false);
//       setRemoveFromWishlistShowAlert(true);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//       setRemoveFromWishlistShowAlert(false);
//     }
//   };

//   return {
//     showRemoveFromWishlistAlert,
//     loading,
//     inWishlist,
//     handleRemoveWishlistButton,
//   };
// };

export const useWishlist = (product) => {
  const [loading, setLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(product.in_wishlist);
  const [showWishlistAlert, setShowWishlistAlert] = useState(false);

  const handleAddWishlistButton = async (id) => {
    const data = {
      user: localStorage.getItem("access_token"),
      product: id,
    };
    try {
      setLoading(true);
      const response = await client.post("wishlist/wishlist/add", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("wishlist", response.data);
      setInWishlist(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);

      setShowWishlistAlert(true);
      setTimeout(() => {
        setShowWishlistAlert(false);
      }, 5173);
    }
  };

  const handleRemoveWishlistButton = async (id) => {
    try {
      setLoading(true);
      const response = await client.delete("wishlist/wishlist/delete", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          id: id,
        },
      });
      console.log("wishlist", response.data);
      setInWishlist(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setShowWishlistAlert(true);
      setTimeout(() => {
        setShowWishlistAlert(false);
      }, 5173);
    }
  };

  const handleCloseAlert = () => {
    setShowWishlistAlert(false);
  };

  return {
    loading,
    inWishlist,
    showWishlistAlert,
    handleAddWishlistButton,
    handleRemoveWishlistButton,
    handleCloseAlert,
  };
};

export const useAddToCart = () => {
  const [showAddToCartAlert, setAddToCartAlert] = useState(false);

  const handleAddToCartButton = async (id, q = null) => {
    const locStog = localStorage.getItem("cart");
    let lstgdata = [];
    let quantity = q > 1 ? q : 1;

    if (locStog) {
      lstgdata = JSON.parse(locStog);
      if (!Array.isArray(lstgdata)) {
        lstgdata = [lstgdata];
      }
      console.log("Current Cart Data:", lstgdata);
      const existingItem = lstgdata.find((item) => item.id === id);
      if (existingItem) {
        console.log("Item with ID", id, "is already in the cart.");
      } else {
        lstgdata.push({ id, quantity });

        localStorage.setItem("cart", JSON.stringify(lstgdata));
        setAddToCartAlert(true); // Show the alert after adding to cart
        console.log("Updated Cart Data:", lstgdata);
        // Automatically close the alert after 3 seconds
        setTimeout(() => {
          setAddToCartAlert(false);
        }, 5173);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([{ id, quantity }]));
      setAddToCartAlert(true); // Show the alert after adding to cart
      console.log("New Cart Data:", [{ id, quantity }]);
      // Automatically close the alert after 3 seconds
      setTimeout(() => {
        setAddToCartAlert(false);
      }, 5173);
    }
  };

  const handleCloseAlert = () => {
    setAddToCartAlert(false); // Close the alert
  };

  return { showAddToCartAlert, handleAddToCartButton, handleCloseAlert };
};

// Include a separate useEffect cleanup for clearing timeout
export const useCleanupTimeout = () => {
  useEffect(() => {
    return () => {
      clearTimeout(); // Clear the timeout to avoid memory leaks
    };
  }, []);
};

// utils.js

// import { useState } from "react";
// import { client } from "../services/userAuthApis";

// export const useWishlistFunctions = (product) => {
//   const [loading, setLoading] = useState(false);
//   const [inWishlist, setInWishlist] = useState(product.in_wishlist);

//   const handleAddWishlistButton = async (id) => {
//     try {
//       setLoading(true);
//       const response = await client.post("wishlist/wishlist/add", {
//         user: localStorage.getItem("access_token"),
//         product: id,
//       }, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//         },
//       });
//       console.log("wishlist", response.data);
//       setInWishlist(true);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemoveWishlistButton = async (id) => {
//     try {
//       setLoading(true);
//       const response = await client.delete("wishlist/wishlist/delete", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//         },
//         data: {
//           id: id,
//         },
//       });
//       console.log("wishlist", response.data);
//       setInWishlist(false);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddToCartButton = async (id) => {
//     const locStog = localStorage.getItem("cart");
//     let lstgdata = [];

//     if (locStog) {
//       lstgdata = JSON.parse(locStog);
//       if (!Array.isArray(lstgdata)) {
//         lstgdata = [lstgdata];
//       }
//       console.log("Current Cart Data:", lstgdata);
//       const existingItem = lstgdata.find((item) => item.id === id);
//       if (existingItem) {
//         console.log("Item with ID", id, "is already in the cart.");
//       } else {
//         lstgdata.push({ id });
//         localStorage.setItem("cart", JSON.stringify(lstgdata));
//         console.log("Updated Cart Data:", lstgdata);
//       }
//     } else {
//       localStorage.setItem("cart", JSON.stringify([{ id }]));
//       console.log("New Cart Data:", [{ id }]);
//     }
//   };

//   return {
//     loading,
//     inWishlist,
//     handleAddWishlistButton,
//     handleRemoveWishlistButton,
//     handleAddToCartButton,
//   };
// };

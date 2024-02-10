import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/base/header";
import Footer from "./components/base/footer";
// import Navbar from "./components/base/navbar";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import Cart from "./components/pages/cart";
import Wishlist from "./components/pages/wishlist";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfileUpdate from "./components/pages/profileupdate";
import axios from "axios";
import { getAccessToken } from "./services/LocalStorageService";
// import HomePageCard from "./components/pages/homepagecard";
import Home from "./components/pages/home";
import Homepage from "./containers/Homepage";
import HomeShopPage from "./containers/HomeShopPage";
import ProfileInfo from "./components/pages/user/profile/profileinfo";
import BillingInfo from "./components/pages/user/profile/billing";
import SecurityInfo from "./components/pages/user/profile/security";
import AccountSetting from "./components/pages/user/profile/accountsetting";
import Notification from "./components/pages/user/profile/notification";
import AddNewProduct from "./components/pages/seller/AddProduct/add_new_product";
// import UpdateProduct from "./components/pages/seller/AddProduct/update_product";
import StockInventoryList from "./components/pages/seller/stock_inventiry_list";
// import ProductList from "./components/shop/productlist";
import ProductDetailPage from "./components/pages/product_detail";
import Shoppage from "./containers/Shoppage";
import SellerHome from "./containers/SellerHome";
import AddCategory from "./components/pages/seller/add_category";
import Checkout from "./components/pages/checkout";
import OrderInfo from "./components/pages/orderinfo";
import OrdersList from "./components/pages/seller/orders_list";
import ProductsShopPage from "./containers/ProductsShopPage";
// import Cookies from "universal-cookie";
import Cookies from "js-cookie";
const client = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://ujjwal1102.pythonanywhere.com/",
});

function App() {
  const [accessToken, setAccessToken] = useState(getAccessToken());
  console.log("Cookies : ",Cookies.get('sessionid', { domain: '127.0.0.1' }))
  console.log("accessToken", accessToken);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
        <Header
          client={client}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
        />

        <Routes>
          <Route exact path="/" element={<Homepage />}>
            {/* <Route path="/" element={<HomePageCard />} /> */}
            <Route path="/" element={<Home />} />

            <Route
              exact
              path="/login"
              element={
                <Login
                  client={client}
                  accessToken={accessToken}
                  setAccessToken={setAccessToken}
                />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Signup
                  client={client}
                  accessToken={accessToken}
                  setAccessToken={setAccessToken}
                />
              }
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/profile" element={<UserProfileUpdate />}>
              <Route exact path="/profile/" element={<ProfileInfo />} />
              <Route
                exact
                path="/profile/account"
                element={<AccountSetting />}
              />
              <Route
                exact
                path="/profile/security"
                element={<SecurityInfo />}
              />
              <Route
                exact
                path="/profile/notification"
                element={<Notification />}
              />
              <Route exact path="/profile/billing" element={<BillingInfo />} />
            </Route>
            {/* <Route exact path="/shop" element={<Shoppage />} /> */}
            <Route exact path="/shop" element={<HomeShopPage />} />
            <Route exact path="/shop/:categoryID" element={<ProductsShopPage />} />
            <Route exact path="/seller/" element={<SellerHome />}>
              <Route
                exact
                path="/seller/catalog/add-product"
                element={<AddNewProduct />}
              />
              <Route
                exact
                path="/seller/catalog/drafts"
                element={<AddNewProduct />}
              />
              <Route
                exact
                path="/seller/inventory/manage-inventory"
                element={<StockInventoryList />}
              />
              <Route
                exact
                path="/seller/orders/manage"
                element={<OrdersList />}
              />
              <Route
                exact
                path="/seller/orders/report"
                element={<OrdersList />}
              />
              <Route
                exact
                path="/seller/category/add"
                element={<AddCategory />}
              />
            </Route>
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orderinfo" element={<OrderInfo />} />
            <Route exact path="/product/:id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
        <Footer />
        </Router>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

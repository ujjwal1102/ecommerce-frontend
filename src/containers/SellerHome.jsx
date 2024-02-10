import React from "react";
import HeaderTab from "../components/pages/seller/headertabs";
import { Outlet } from "react-router-dom";
// import offCanvasRight from "../components/offcanvas/offcanvasright";
const SellerHome = () => {
  // <offCanvasRight />;
  return (
    <>
      {/* <AddNewProduct /> */}
      <HeaderTab />
      <div className="container">
        {/* <AddNewProduct /> */}
        {/* <CategoryList />
        <StockInventoryList /> */}
        <Outlet />
      </div>
    </>
  );
};
export default SellerHome;

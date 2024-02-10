import React from "react";

const AlertBox = ({colorClass}) => {
  return (
    <>
      <div className={colorClass} role="alert">
        A simple success alert—check it out!
      </div>
    </>
  );
};

export default AlertBox;
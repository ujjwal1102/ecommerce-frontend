// import { React } from "react";
// import UpdateProduct from "../pages/seller/AddProduct/update_product";
// const OffCanvasRight = ({ getProductData, id, productDetails }) => {
//   // console.log(prod_id)
//   return (
//     <>
//       <button
//         className="btn btn-transparent border-0 mx-2 px-1"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasRight"
//         aria-controls="offcanvasRight"
//         onClick={(e) => getProductData(id)}
//         data-prod-id={id}
//       >
//         <i className="fa-regular fa-pen-to-square"></i>
//       </button>

//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasRight"
//         aria-labelledby="offcanvasRightLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasRightLabel">
//             Offcanvas right
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           {<UpdateProduct id={id} productDetails={productDetails} />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default OffCanvasRight;

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import UpdateProduct from "../pages/seller/AddProduct/update_product";
const OffCanvasRight = ({
  name,
  placement,
  productDetails,
  getProductData,
  id,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button
          variant="primary"
          onClick={handleShow}
          // onClickCapture={getProductData(id)}
          className="me-2"
        >
          {"OffCanvas"}
        </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
// export default OffCanvasRight;
function Example() {
  return (
    <>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasRight key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

// render(<Example />);
export default Example;

import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
// function Categories({ client }) {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [cat, setCat] = useState(null);
//   const [canvasTitle, setcanvasTitle] = useState("Categories");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await client.get("category/categories");
//         if (response.data) {
//           setCategories(response.data);
//           setCat(
//             response.data.filter((category) => category.parent_id === null)
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, [client]);

//   console.log(categories);

//   useEffect(() => {
//     console.log(categories);
//   }, [categories]);

//   const handleHomeClick = () => {
//     setCat(categories.filter((categ) => categ.parent_id === null));
//     setcanvasTitle("Categories");
//   };

//   function handleCategoryClick(Id, pid) {
//     console.log("handleCategoryClick", Id);
//     var newcategs = categories.filter((categ) => categ.parent_id === Id);
//     var haschild = categories.find((item) => item.id === Id);
//     if (haschild) {
//       setcanvasTitle(haschild.category_name);
//     }
//     setCat(newcategs);
//   }

//   return (
//     <div>
//       <a
//         className="btn text-white border-0 p-0 m-0 my-auto"
//         data-bs-toggle="offcanvas"
//         href="#offcanvasExample"
//         role="button"
//         aria-controls="offcanvasExample"
//       >
//         <i className="fa-solid fa-bars fw-bold"></i>
//       </a>
//       <style
//         dangerouslySetInnerHTML={{
//           __html: ".offcanvas.offcanvas-start{width:300px;}",
//         }}
//       />
//       <div
//         className="offcanvas offcanvas-start"
//         tabIndex={-1}
//         id="offcanvasExample"
//         aria-labelledby="offcanvasExampleLabel"
//       >
//         <div className="offcanvas-header ">
//           <div className="d-flex flex-row">
//             <button
//               type="button"
//               className="btn btn-sm bg-transparent border-0"
//               onClick={handleHomeClick}
//             >
//               <span className="align-middle m-1">
//                 <i className="fa-solid fa-house small"></i>
//               </span>
//             </button>

//             <h5 className="offcanvas-title" id="offcanvasExampleLabel">
//               {canvasTitle}
//             </h5>
//           </div>
//           <button
//             type="button"
//             className="btn-close small"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           />
//         </div>
//         <div className="offcanvas-body">
//           <div id="categories-list">
//             {cat
//               ? cat.map((category) => (
//                   <div key={category.id}>
//                     {category && (
//                       <div className="mx-2">
//                         <>
//                           <button
//                             className="btn btn-transparent text-start border-0 w-100"
//                             onClick={() => {
//                               categories.filter(
//                                 (catg) => catg.parent_id === category.id
//                               ).length !== 0
//                                 ? handleCategoryClick(
//                                     category.id,
//                                     category.parent_id
//                                   )
//                                 : navigate(`/shop/${category.id}`);
//                             }}
//                           >
//                             {category.category_name}
//                             {categories.filter(
//                               (catg) => catg.parent_id === category.id
//                             ).length !== 0 ? (
//                               <div className="float-end ">
//                                 <i className="fa-solid fa-angle-right "></i>
//                               </div>
//                             ) : (
//                               ""
//                             )}
//                           </button>
//                         </>

//                         <hr className="my-2" />
//                       </div>
//                     )}
//                   </div>
//                 ))
//               : "Loading"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Categories;

function Categories({ client }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState(null);
  const [canvasTitle, setcanvasTitle] = useState("Categories");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.get("category/categories");
        if (response.data) {
          setCategories(response.data);
          setCat(
            response.data.filter((category) => category.parent_id === null)
          );
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [client]);

  console.log(categories);
  
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const handleHomeClick = () => {
    setCat(categories.filter((categ) => categ.parent_id === null));
    setcanvasTitle("Categories");
  };

  function handleCategoryClick(Id, pid) {
    console.log("handleCategoryClick", Id);
    var newcategs = categories.filter((categ) => categ.parent_id === Id);
    var haschild = categories.find((item) => item.id === Id);
    if (haschild) {
      setcanvasTitle(haschild.category_name);
    }
    setCat(newcategs);
  }

  const navigateAndClose = (id) => {
    navigate(`/shop/${id}`);
    setShow(false);
  };

  
  return (
    <>
      <Button
        className="text-white border-0 px-1  my-auto"
        variant="transparent"
        onClick={handleShow}
      >
        <i className="fa-solid fa-bars fw-bold"></i>
      </Button>
      <style
        dangerouslySetInnerHTML={{
          __html: ".offcanvas.offcanvas-start{width:300px;}",
        }}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="d-flex flex-row">
              <button
                type="button"
                className="btn btn-sm bg-transparent border-0"
                onClick={handleHomeClick}
              >
                <span className="align-middle m-1">
                  <i className="fa-solid fa-house small"></i>
                </span>
              </button>

              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                {canvasTitle}
              </h5>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <div className="offcanvas-body"> */}
          <div id="categories-list">
            {cat
              ? cat.map((category) => (
                  <div key={category.id}>
                    {category && (
                      <div className="mx-2">
                        <>
                          <button
                            className="btn btn-transparent text-start border-0 w-100"
                            onClick={() => {
                              categories.filter(
                                (catg) => catg.parent_id === category.id
                              ).length !== 0
                                ? handleCategoryClick(
                                    category.id,
                                    category.parent_id
                                  )
                                : // : navigate(`/shop/${category.id}`);
                                  navigateAndClose(category.id);
                            }}
                          >
                            {category.category_name}
                            {categories.filter(
                              (catg) => catg.parent_id === category.id
                            ).length !== 0 ? (
                              <div className="float-end ">
                                <i className="fa-solid fa-angle-right "></i>
                              </div>
                            ) : (
                              ""
                            )}
                          </button>
                        </>

                        <hr className="my-2" />
                      </div>
                    )}
                  </div>
                ))
              : <div className="d-flex justify-content-center align-item-center w-100">
              <div class="spinner-grow my-5" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>}
          </div>
          {/* </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Categories;

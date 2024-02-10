import React, { useEffect, useState } from "react";
import Sidebar from "../components/shop/sidebar";
import dotenv from "dotenv";
// import { useNavigate } from "react-router-dom";
import ProductCardGridView from "../components/cards/productcard-gridview";
// import ProductGrid from "../components/shop/productgrid";
import ProductCardListView from "../components/cards/productcard-listview";
import ProductHeader from "../components/shop/productheader";
import { client } from "../services/userAuthApis";
import { useParams } from "react-router-dom";
import { Button, FormLabel } from "react-bootstrap";

const ProductsShopPage = () => {
  // const navigate = useNavigate();
  const { categoryID } = useParams();
  // const { catID } = useParams();
  const [catID, setCatID] = useState(categoryID || null);

  const [isListView, setIsListView] = useState(true);
  const [wishListItems, setWishListItems] = useState(null);
  const [price, setPrice] = useState(null);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(null);
  const [filtervalues, setFilterValues] = useState(null);
  const [page, setPage] = useState({
    prevLink: null,
    nextLink: null,
    previousPage: null,
    nextPage: null,
  });

  const [totalCount, setTotalCount] = useState(null);
  const [formData, setFormData] = useState({
    category_id: categoryID || null,
    categories: [],
    brands: [],
    price_range: { max: null, min: null },
    rating: null,
    page_no: null,
  });
  // setCatID(categoryID);
  useEffect(() => {
    setCatID(categoryID);
    // test()
  }, []);
  const [pageCategory, setPageCategory] = useState(null);
  // useEffect(() => {
  //   const handlePopstate = () => {
  //     // Check if the current location has changed
  //     if (window.location.pathname !== `/products/shop/${catID}`) {
  //       setCatID(categoryID); // Update catID based on the new URL
  //       fetchData(`products/shop/${catID}`); // Call fetchData with the new URL
  //     }
  //   };
  //   window.addEventListener("popstate", handlePopstate);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopstate);
  //   };
  // }, [catID, categoryID]);

  const [value, setValue] = useState(0);
  const loadNextPage = () => {
    if (page.nextLink) {
      window.scrollTo(0, 0);
      fetchData(page.nextLink);
    }
  };

  const loadPrevPage = () => {
    if (page.prevLink) {
      window.scrollTo(0, 0);
      fetchData(page.prevLink);
    }
  };
  const setURL = `products/shop/${categoryID}`;
  const fetchData = (url) => {
    console.log(categoryID, "categoryID");
    console.log("fetchData Method called");
    client
      .post(url || setURL, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        window.scrollTo(0, 0);
        console.log("response.data", response.data);
        setArr([...response.data.products]);
        //   setWishListItems(response.data.wl_item);
        setLoading(false);
        setTotalCount(response.data.total_count);
        setPageCategory(
          response.data.filters.filters.categories[0]
            .category__parent_id__category_name
            ? response.data.filters.filters.categories[0]
                .category__parent_id__category_name
            : null
        );
        setPrice(
          price === null ? response.data.filters.filters.price.cost__max : price
        );
        setValue(
          price === null ? response.data.filters.filters.price.cost__max : price
        );
        setPage({
          currentPage: response.data.page.current_page,
          nextLink: response.data.page.next_link,
          prevLink: response.data.page.previous_link,
          nextPage: response.data.page.next_page_number,
          previousPage: response.data.page.previous_page_number,
        });

        setFilterValues(response.data.filters.filters);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
    console.log(
      "(import.meta.env.VITE_SOME_KEY",
      import.meta.env.VITE_DJANGO_BACKEND_URL,
      document.referrer
    );
  };

  useEffect(() => {
    console.log("useEffect", catID);

    if (catID !== null || catID !== undefined) {
      setLoading(true);
      console.log("else Part");
      fetchData();
      // client
      //   .post(`products/shop/${catID}`, formData, {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log("response.data", response.data);
      //     setArr([...response.data.products]);
      //     //   setWishListItems(response.data.wl_item);
      //     setLoading(false);
      //     setTotalCount(response.data.total_count);
      //     //   setPrice(
      //     //     price === null
      //     //       ? response.data.filters.filters.price.cost__max
      //     //       : price
      //     //   );
      //     setPage({
      //       nextLink: response.data.page.next_link,
      //       prevLink: response.data.page.previous_link,
      //     });
      //     //   setFilterValues(response.data.filters.filters);
      //   });
    }
  }, [catID, formData, categoryID]);

  const getNewFilteredValues = async (url = null) => {
    console.log("getNewFilteredValues", formData);
    try {
      const response = await client.post(url || "products/shop", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("res : ", url, response.data);
    } catch (error) {
      console.log("err : ", error);
    }
  };
  const test = () => {
    console.log("history.go(-1)", history.go(-1));
  };
  // useEffect(() => {
  //   const handleBack = () => {
  //     fetchData();
  //     console.log("Back button clicked");
  //   };

  //   const handleForward = () => {
  //     fetchData();
  //     console.log("Forward button clicked");
  //   };

  //   // Add event listeners
  //   window.addEventListener("popstate", handleBack);
  //   window.addEventListener("popstate", handleForward);

  //   // Remove event listeners when the component unmounts
  //   return () => {
  //     window.removeEventListener("popstate", handleBack);
  //     window.removeEventListener("popstate", handleForward);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleInputChange = async (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        brands: checked
          ? [...prevFormData.brands, value]
          : prevFormData.brands.filter((brand) => brand !== value),
      }));

      console.log("Checkbox :", type, checked);
    } else if (type === "range" && name === "max_price") {
      setPrice(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        price_range: {
          ...prevFormData.price_range,
          max: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      console.log("name", name, "value :", value);
    }
  };

  console.log("document.cookie", document.cookie);
  return (
    <>
      <section className="mb-1 ">
        <div className="container-xl container-xxl container-lg container-fluid container-sm-fluid container-md-fluid">
          <div className="row  py-3">
            <div className="col-sm-0 col-md-3 col-lg-3 col-xl-3">
              
              <Sidebar
                setCatID={setCatID}
                fetchData={fetchData}
                loading={loading}
                filtervalues={filtervalues}
                getNewFilteredValues={getNewFilteredValues}
                handleInputChange={handleInputChange}
                formData={formData}
                setFormData={setFormData}
                setValue={setValue}
                value={value}
                pageCategory={pageCategory}
              />
            </div>

            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <ProductHeader
                loading={loading}
                totalCount={totalCount}
                isListView={isListView}
                setIsListView={setIsListView}
              />
              {isListView ? (
                <>
                  {/* {loading ? (
                    <div className="d-flex justify-content-center align-item-center w-100">
          <div class="spinner-grow my-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
                  ) : ( */}
                  <div className="">
                    {arr.length === 0 ? (
                      <p>Empty</p>
                    ) : (
                      arr.map((item, index) => (
                        <ProductCardListView
                          loading={loading}
                          key={index}
                          product={item}
                          colClasses={"col-md-12"}
                          wishListItems={wishListItems}
                        />
                      ))
                    )}
                  </div>
                  {/* )} */}
                </>
              ) : (
                <>
                  {/* {loading ? (
                    <div className="d-flex justify-content-center align-item-center w-100">
          <div class="spinner-grow my-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
                  ) : ( */}
                  <div className="row">
                    {arr.length === 0 ? (
                      <p>Empty</p>
                    ) : (
                      arr.map((item, index) => (
                        <ProductCardGridView
                          loading={loading}
                          key={index}
                          product={item}
                          colClasses={
                            "col-6 col-sm-6 col-lg-4 col-md-4 col-sm-6"
                          }
                          wishListItems={wishListItems}
                        />
                      ))
                    )}
                  </div>
                  {/* )} */}
                </>
              )}
            </div>
            <div className="d-flex justify-content-center mt-5">
              <nav aria-label="Page navigation example" style={{ zIndex: 0 }}>
                <ul className="pagination justify-content-center g-1">
                  <li className="page-item mx-1 ">
                    <button
                      className={`page-link rounded-pill bg-transparent border-0 ${
                        page.previousPage ? "" : "disabled"
                      }`}
                      onClick={loadPrevPage}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                  {page.previousPage ? (
                    <li className="page-item mx-1 ">
                      <Button
                        className="page-link rounded-pill bg-transparent border-0"
                        onClick={loadPrevPage}
                      >
                        {page.previousPage}
                      </Button>
                    </li>
                  ) : null}
                  {page.currentPage ? (
                    <li className="page-item active mx-1 ">
                      <FormLabel className="page-link rounded-pill  border-0">
                        {page.currentPage}
                      </FormLabel>
                    </li>
                  ) : null}
                  {page.nextPage ? (
                    <li className="page-item mx-1 ">
                      <Button
                        className="page-link rounded-pill bg-transparent border-0 rounded-0"
                        onClick={loadNextPage}
                      >
                        {page.nextPage}
                      </Button>
                    </li>
                  ) : null}
                  <li className="page-item mx-1 ">
                    <button
                      className={`page-link rounded-pill bg-transparent border-0 ${
                        page.nextPage ? "" : "disabled"
                      }`}
                      onClick={loadNextPage}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsShopPage;

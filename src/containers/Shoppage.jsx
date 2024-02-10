import React, { useEffect, useState } from "react";
import Sidebar from "../components/shop/sidebar";

import ProductCardGridView from "../components/cards/productcard-gridview";
// import ProductGrid from "../components/shop/productgrid";
import ProductCardListView from "../components/cards/productcard-listview";
import ProductHeader from "../components/shop/productheader";
import { client } from "../services/userAuthApis";
import { useParams } from "react-router-dom";
const Shoppage = () => {
  const { categoryID } = useParams();

  console.log(categoryID, "categoryID");
  const [isListView, setIsListView] = useState(true);
  const [wishListItems, setWishListItems] = useState(null);
  const [price, setPrice] = useState(null);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(null);
  const [filtervalues, setFilterValues] = useState(null);
  const [page, setPage] = useState({ prevLink: null, nextLink: null });
  const [totalCount, setTotalCount] = useState(null);
  const [formData, setFormData] = useState({
    categories: [],
    brands: [],
    price_range: { max: null, min: null },
    rating: null,
    page_no: null,
  });

  const loadNextPage = () => {
    if (page.nextLink) {
      // fetchData(page.nextLink);
    }
  };

  const loadPrevPage = () => {
    if (page.prevLink) {
      // fetchData(page.prevLink);
    }
  };

  useEffect(() => {
    setLoading(true);
    // if (categoryID !== null || categoryID !== undefined) {
    //   console.log("If Part");
    //   client
    //     .get(`products/shop/${categoryID}`, {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //     })
    //     .then((response) => {
    //       console.log("response.data", response.data);
    //       setArr([...response.data.products]);
    //       setWishListItems(response.data.wl_item);
    //       setLoading(false);
    //       setTotalCount(response.data.total_count);
    //       setPrice(
    //         price === null
    //           ? response.data.filters.filters.price.cost__max
    //           : price
    //       );
    //       setPage({
    //         nextLink: response.data.next,
    //         prevLink: response.data.previous,
    //       });
    //       setFilterValues(response.data.filters.filters);
    //     });
    // } else {
    console.log("else Part");
    client
      .post("products/shop", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        setArr([...response.data.fil_prod]);
        setWishListItems(response.data.wl_item);
        setLoading(false);
        setTotalCount(response.data.total_count);
        setPrice(
          price === null ? response.data.filters.filters.price.cost__max : price
        );
        setPage({
          nextLink: response.data.next,
          prevLink: response.data.previous,
        });
        setFilterValues(response.data.filters.filters);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
    // }
    console.log(categoryID);
  }, [formData]);

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

  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-sm-0 col-md-3 col-lg-3 col-xl-3">
              <Sidebar
                loading={loading}
                filtervalues={filtervalues}
                getNewFilteredValues={getNewFilteredValues}
                handleInputChange={handleInputChange}
                formData={formData}
                setFormData={setFormData}
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
                    <p>Loading...</p>
                  ) : ( */}
                  <div className="row">
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
                    <p>Loading...</p>
                  ) : ( */}
                  <div className="row d-flex">
                    {arr.length === 0 ? (
                      <p>Empty</p>
                    ) : (
                      arr.map((item, index) => (
                        <ProductCardGridView
                          loading={loading}
                          key={index}
                          product={item}
                          colClasses={"col-sm-6 col-lg-4 col-md-4 col-sm-6"}
                          wishListItems={wishListItems}
                        />
                      ))
                    )}
                  </div>
                  {/* )} */}
                </>
              )}
            </div>
            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={loadPrevPage}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                  {/* <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li> */}
                  <li className="page-item">
                    <button
                      className="page-link"
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

export default Shoppage;

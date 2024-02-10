import { useState, useEffect } from "react";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { client } from "../../services/userAuthApis";
// import { useHistory } from 'react-router-dom';
// import RangeInput from "../../utils/RangeInput";
// import { FormText } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.scss";
// import "~bootstrap/scss/bootstrap";

const Sidebar = ({
  setCatID,
  filtervalues,
  getNewFilteredValues,
  handleInputChange,
  formData,
  setFormData,
  setPrice,
  price,
  value,
  setValue,
  pageCategory
}) => {
  // const [value, setValue] = useState(price ? price : "");
  useEffect(() => {
    console.log(filtervalues);
    // setValue(price)
  }, []);
  const navigate = useNavigate();
  const handleLink = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-expand-md bg-body d-flex d-sm-flex d-md-block  justify-content-between ">
      <h4 className="my-auto mb-md-3 mb-lg-3 mb-xl-3">{pageCategory}</h4>
        <button
          className="navbar-toggler border-0 filter-btn rounded-pill"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          title="Filter"
        >
          <i class="fa-solid fa-sliders"></i>
        </button>

        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav w-100">
            <div
              className=" w-100 d-block mb-3 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0"
              id="navbarSupportedContent"
            >
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Accordion Item #4
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse collapse show"
                  >
                    <div class="accordion-body">
                      <div>
                        <ul className="list-unstyled">
                          {filtervalues
                            ? filtervalues.categories.map((item, id) => (
                                <li className="" key={id}>
                                  <label
                                    onClick={() => {
                                      setCatID(item.category__id);
                                      handleLink(item.category__id);
                                    }}
                                    className={"text-dark category-item"}
                                  >
                                    {item.category__category_name}
                                  </label>
                                </li>
                              ))
                            : <div className="d-flex justify-content-center align-item-center w-100">
                            <div class="spinner-grow my-5" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                  >
                    <div class="accordion-body">
                      <div>
                        {filtervalues
                          ? filtervalues.brands.map((item, id) => (
                              <div className="form-check" key={id}>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={item.brand__id}
                                  id="flexCheckChecked1"
                                  defaultChecked={formData.brands.includes(
                                    item.brand__id
                                  )}
                                  onChange={(e) => handleInputChange(e)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked1"
                                >
                                  {item.brand__brand_name}
                                </label>
                              </div>
                            ))
                          : <div className="d-flex justify-content-center align-item-center w-100">
                          <div class="spinner-grow my-5" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse show"
                  >
                    <div class="accordion-body">
                      <div className="row ">
                        <div className="col-6">
                          <div className="form-outline d-flex">
                            <label
                              className="form-label small"
                              htmlFor="typeNumber"
                            >
                              Rs.
                              {filtervalues ? filtervalues.price.cost__min : ""}
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-outline d-flex">
                            <label
                              className="form-label small"
                              htmlFor="typeNumber"
                            >
                              Rs.
                              {filtervalues ? filtervalues.price.cost__max : ""}
                            </label>
                          </div>
                        </div>

                        <div className="range">
                          <RangeSlider
                            className="form-range form-sm-range "
                            tooltipPlacement="top"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            name="max_price"
                            min={
                              filtervalues ? filtervalues.price.cost__min : ""
                            }
                            max={
                              filtervalues ? filtervalues.price.cost__max : ""
                            }
                            id="customRange1"
                            onClickCapture={(e) => {
                              handleInputChange(e);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse show"
                  >
                    <div class="accordion-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-secondary" />
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-secondary" />
                          <i className="fas fa-star text-secondary" />
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-secondary" />
                          <i className="fas fa-star text-secondary" />
                          <i className="fas fa-star text-secondary" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".category-item:hover{text-decoration:underline;transition:0.2s ease-in-out;}\n .filter-btn:hover{background:rgba(0,0,0,0.1);transition:0.25s ease-in-out;}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow: 0 0 0 0;}",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;

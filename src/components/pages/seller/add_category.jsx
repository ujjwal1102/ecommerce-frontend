import React, { useEffect, useState } from "react";
import { client } from "../../../services/userAuthApis";
const AddCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .get("category/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function inputField() {
    const div = document.getElementById("select-category");
    const flexContainer = document.createElement("div");
            flexContainer.className = "d-flex flex-row my-2";
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = 'form-control'
    inputField.placeholder = "Enter child category";
    inputField.name = "child-category"; // Optional: Set a name attribute for form submission

    // Create a new button
    const addButton = document.createElement("button");
    addButton.textContent = "Add Category";
    addButton.type = "button";
    addButton.className = 'btn btn-primary'
    addButton.addEventListener("click", function () {
      // Perform any action when the button is clicked (optional)
      console.log("Button clicked!");
    });

    // Append the input field and button to the div
    flexContainer.appendChild(inputField);
    flexContainer.appendChild(addButton);
    div.append(flexContainer)
  }

  const handleListChildCategory = () => {
    console.log("CategoryCahenged");
    inputField();
  };

  return (
    <div className="my-3">
      <div className="d-flex flex-column  justify-content-center flex-row-fluid ">
        <div className="card card-flush py-4">
          <div className="card-header bg-white border-0">
            <div className="card-title d-flex flex-row justify-content-between">
              <h2>Add Category</h2>
              <div className="">
                <button className="btn btn-primary d-flex ">
                  <i className="fa-solid fa-plus pt-1 me-2 small"></i> Add Parent
                  Category
                </button>
              </div>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="mb-10 fv-row fv-plugins-icon-container">
              <label className="required form-label">Select Category</label>
              {categories ? (
                <>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleListChildCategory}
                  >
                    <option selected>Open this select menu</option>
                    {categories.map((item, key) => (
                      <option key={key} value={item}>
                        {item.category_name}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="category_name"
                    className="form-control mb-2 "
                    placeholder="Select Category"
                    defaultValue=""
                  />
                </>
              )}

              <div className="text-muted small">
                A category name is required and recommended to be unique.
              </div>
              <div id="select-category">
                
              </div>

              <div id="category-input-div"></div>
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
            </div>

            <div>
              {/* <label className="form-label">Description</label> */}

              {/* <div className="ql-toolbar ql-snow">
                <span className="ql-formats">
                  <span className="ql-header ql-picker">
                    <span
                      className="ql-picker-label"
                      tabIndex={0}
                      role="button"
                      aria-expanded="false"
                      aria-controls="ql-picker-options-0"
                    >
                      
                    </span>
                    <span
                      className="ql-picker-options"
                      aria-hidden="true"
                      tabIndex={-1}
                      id="ql-picker-options-0"
                    >
                      <span
                        tabIndex={0}
                        role="button"
                        className="ql-picker-item"
                        data-value={1}
                      />
                      <span
                        tabIndex={0}
                        role="button"
                        className="ql-picker-item"
                        data-value={2}
                      />
                      <span
                        tabIndex={0}
                        role="button"
                        className="ql-picker-item ql-selected"
                      />
                    </span>
                  </span>
                  <select className="ql-header" style={{ display: "none" }}>
                    <option value={1} />
                    <option value={2} />
                    <option selected="selected" />
                  </select>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-bold">
                    <svg viewBox="0 0 18 18">
                      <path
                        className="ql-stroke"
                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                      />
                      <path
                        className="ql-stroke"
                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                      />
                    </svg>
                  </button>
                  <button type="button" className="ql-italic">
                    <svg viewBox="0 0 18 18">
                      <line
                        className="ql-stroke"
                        x1={7}
                        x2={13}
                        y1={4}
                        y2={4}
                      />
                      <line
                        className="ql-stroke"
                        x1={5}
                        x2={11}
                        y1={14}
                        y2={14}
                      />
                      <line
                        className="ql-stroke"
                        x1={8}
                        x2={10}
                        y1={14}
                        y2={4}
                      />
                    </svg>
                  </button>
                  <button type="button" className="ql-underline">
                    <svg viewBox="0 0 18 18">
                      <path
                        className="ql-stroke"
                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                      />
                      <rect
                        className="ql-fill"
                        height={1}
                        rx="0.5"
                        ry="0.5"
                        width={12}
                        x={3}
                        y={15}
                      />
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-image">
                    <svg viewBox="0 0 18 18">
                      <rect
                        className="ql-stroke"
                        height={10}
                        width={12}
                        x={3}
                        y={4}
                      />
                      <circle className="ql-fill" cx={6} cy={7} r={1} />
                      <polyline
                        className="ql-even ql-fill"
                        points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                      />
                    </svg>
                  </button>
                  <button type="button" className="ql-code-block">
                    <svg viewBox="0 0 18 18">
                      <polyline
                        className="ql-even ql-stroke"
                        points="5 7 3 9 5 11"
                      />
                      <polyline
                        className="ql-even ql-stroke"
                        points="13 7 15 9 13 11"
                      />
                      <line
                        className="ql-stroke"
                        x1={10}
                        x2={8}
                        y1={5}
                        y2={13}
                      />
                    </svg>
                  </button>
                </span>
              </div> */}
              {/* <div
                id="kt_ecommerce_add_category_description"
                name="kt_ecommerce_add_category_description"
                className="min-h-200px mb-2 ql-container ql-snow"
              >
                <div
                  className="ql-editor ql-blank"
                  data-gramm="false"
                  contentEditable="true"
                  data-placeholder="Type your text here..."
                >
                  <p>
                    <br />
                  </p>
                </div>
                <div
                  className="ql-clipboard"
                  contentEditable="true"
                  tabIndex={-1}
                />
                <div className="ql-tooltip ql-hidden">
                  <a
                    className="ql-preview"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="about:blank"
                  />
                  <input
                    type="text"
                    data-formula="e=mc^2"
                    data-link="https://quilljs.com"
                    data-video="Embed URL"
                  />
                  <a className="ql-action" />
                  <a className="ql-remove" />
                </div>
              </div> */}

              {/* <div className="text-muted fs-7">
                Set a description to the category for better visibility.
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>Meta Options</h2>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="mb-10">
              <label className="form-label">Meta Tag Title</label>

              <input
                type="text"
                className="form-control mb-2"
                name="meta_title"
                placeholder="Meta tag name"
              />

              <div className="text-muted fs-7">
                Set a meta tag title. Recommended to be simple and precise
                keywords.
              </div>
            </div>

            <div className="mb-10">
              <label className="form-label">Meta Tag Description</label>

              <div className="ql-toolbar ql-snow">
                <span className="ql-formats">
                  <span className="ql-header ql-picker">
                    <span
                      className="ql-picker-label"
                      tabIndex={0}
                      role="button"
                      aria-expanded="false"
                      aria-controls="ql-picker-options-1"
                    >
                      <svg viewBox="0 0 18 18">
                        <polygon
                          className="ql-stroke"
                          points="7 11 9 13 11 11 7 11"
                        />
                        <polygon
                          className="ql-stroke"
                          points="7 7 9 5 11 7 7 7"
                        />
                      </svg>
                    </span>
                    <span
                      className="ql-picker-options"
                      aria-hidden="true"
                      tabIndex={-1}
                      id="ql-picker-options-1"
                    >
                      <span
                        tabIndex={0}
                        role="button"
                        className="ql-picker-item"
                        data-value={1}
                      />
                      <span
                        tabIndex={0}
                        role="button"
                        className="ql-picker-item"
                        data-value={2}
                      />
                      <span
                        tabIndex={0}
                        role="button"
                        className="ql-picker-item ql-selected"
                      />
                    </span>
                  </span>
                  <select className="ql-header" style={{ display: "none" }}>
                    <option value={1} />
                    <option value={2} />
                    <option selected="selected" />
                  </select>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-bold">
                    <svg viewBox="0 0 18 18">
                      <path
                        className="ql-stroke"
                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                      />
                      <path
                        className="ql-stroke"
                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                      />
                    </svg>
                  </button>
                  <button type="button" className="ql-italic">
                    <svg viewBox="0 0 18 18">
                      <line
                        className="ql-stroke"
                        x1={7}
                        x2={13}
                        y1={4}
                        y2={4}
                      />
                      <line
                        className="ql-stroke"
                        x1={5}
                        x2={11}
                        y1={14}
                        y2={14}
                      />
                      <line
                        className="ql-stroke"
                        x1={8}
                        x2={10}
                        y1={14}
                        y2={4}
                      />
                    </svg>
                  </button>
                  <button type="button" className="ql-underline">
                    <svg viewBox="0 0 18 18">
                      <path
                        className="ql-stroke"
                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                      />
                      <rect
                        className="ql-fill"
                        height={1}
                        rx="0.5"
                        ry="0.5"
                        width={12}
                        x={3}
                        y={15}
                      />
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-image">
                    <svg viewBox="0 0 18 18">
                      <rect
                        className="ql-stroke"
                        height={10}
                        width={12}
                        x={3}
                        y={4}
                      />
                      <circle className="ql-fill" cx={6} cy={7} r={1} />
                      <polyline
                        className="ql-even ql-fill"
                        points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                      />
                    </svg>
                  </button>
                  <button type="button" className="ql-code-block">
                    <svg viewBox="0 0 18 18">
                      <polyline
                        className="ql-even ql-stroke"
                        points="5 7 3 9 5 11"
                      />
                      <polyline
                        className="ql-even ql-stroke"
                        points="13 7 15 9 13 11"
                      />
                      <line
                        className="ql-stroke"
                        x1={10}
                        x2={8}
                        y1={5}
                        y2={13}
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <div
                id="kt_ecommerce_add_category_meta_description"
                name="kt_ecommerce_add_category_meta_description"
                className="min-h-100px mb-2 ql-container ql-snow"
              >
                <div
                  className="ql-editor ql-blank"
                  data-gramm="false"
                  contentEditable="true"
                  data-placeholder="Type your text here..."
                >
                  <p>
                    <br />
                  </p>
                </div>
                <div
                  className="ql-clipboard"
                  contentEditable="true"
                  tabIndex={-1}
                />
                <div className="ql-tooltip ql-hidden">
                  <a
                    className="ql-preview"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="about:blank"
                  />
                  <input
                    type="text"
                    data-formula="e=mc^2"
                    data-link="https://quilljs.com"
                    data-video="Embed URL"
                  />
                  <a className="ql-action" />
                  <a className="ql-remove" />
                </div>
              </div>

              <div className="text-muted fs-7">
                Set a meta tag description to the category for increased SEO
                ranking.
              </div>
            </div>

            <div>
              <label className="form-label">Meta Tag Keywords</label>

              <tags
                className="tagify form-control mb-2 tagify--noTags tagify--empty"
                tabIndex={-1}
              >
                <span
                  contentEditable=""
                  tabIndex={0}
                  data-placeholder="​"
                  aria-placeholder=""
                  className="tagify__input"
                  role="textbox"
                  aria-autocomplete="both"
                  aria-multiline="false"
                />
                ​
              </tags>
              <input
                id="kt_ecommerce_add_category_meta_keywords"
                name="kt_ecommerce_add_category_meta_keywords"
                className="form-control mb-2"
                tabIndex={-1}
              />

              <div className="text-muted fs-7">
                Set a list of keywords that the category is related to. Separate
                the keywords by adding a comma <code>,</code> between each
                keyword.
              </div>
            </div>
          </div>
        </div>

        <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>Automation</h2>
            </div>
          </div>

          <div className="card-body pt-0">
            <div>
              <label className="form-label mb-5">
                Product assignment method
              </label>

              <div className="d-flex fv-row">
                <div className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input me-3"
                    name="method"
                    type="radio"
                    defaultValue={0}
                    id="kt_ecommerce_add_category_automation_0"
                    defaultChecked="checked"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="kt_ecommerce_add_category_automation_0"
                  >
                    <div className="fw-bold text-gray-800">Manual</div>
                    <div className="text-gray-600">
                      Add products to this category one by one by manually
                      selecting this category during product creation or update.
                    </div>
                  </label>
                </div>
              </div>

              <div className="separator separator-dashed my-5" />

              <div className="d-flex fv-row">
                <div className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input me-3"
                    name="method"
                    type="radio"
                    defaultValue={1}
                    id="kt_ecommerce_add_category_automation_1"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="kt_ecommerce_add_category_automation_1"
                  >
                    <div className="fw-bold text-gray-800">Automatic</div>
                    <div className="text-gray-600">
                      Products matched with the following conditions will be
                      automatically assigned to this category.
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div
              className="d-none mt-10"
              data-kt-ecommerce-catalog-add-category="auto-options"
            >
              <label className="form-label">Conditions</label>

              <div className="d-flex flex-wrap align-items-center text-gray-600 gap-5 mb-7">
                <span>Products must match:</span>

                <div className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conditions"
                    defaultValue=""
                    id="all_conditions"
                    defaultChecked="checked"
                  />
                  <label className="form-check-label" htmlFor="all_conditions">
                    All conditions
                  </label>
                </div>

                <div className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conditions"
                    defaultValue=""
                    id="any_conditions"
                  />
                  <label className="form-check-label" htmlFor="any_conditions">
                    Any conditions
                  </label>
                </div>
              </div>

              <div id="kt_ecommerce_add_category_conditions">
                <div className="form-group">
                  <div
                    data-repeater-list="kt_ecommerce_add_category_conditions"
                    className="d-flex flex-column gap-3"
                  >
                    <div
                      data-repeater-item=""
                      className="form-group d-flex flex-wrap align-items-center gap-5"
                    >
                      <div className="w-100 w-md-200px">
                        <select
                          className="form-select select2-hidden-accessible"
                          name="kt_ecommerce_add_category_conditions[0][condition_type]"
                          data-placeholder="Select an option"
                          data-kt-ecommerce-catalog-add-category="condition_type"
                          data-select2-id="select2-data-113-iqlq"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option />
                          <option value="title">Product Title</option>
                          <option
                            value="tag"
                            selected=""
                            data-select2-id="select2-data-115-divz"
                          >
                            Product Tag
                          </option>
                          <option value="price">Prodict Price</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-114-md8d"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-kt_ecommerce_add_category_conditions0condition_type-ah-container"
                              aria-controls="select2-kt_ecommerce_add_category_conditions0condition_type-ah-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-kt_ecommerce_add_category_conditions0condition_type-ah-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Product Tag"
                              >
                                Product Tag
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      <div className="w-100 w-md-200px">
                        <select
                          className="form-select select2-hidden-accessible"
                          name="kt_ecommerce_add_category_conditions[0][condition_equals]"
                          data-placeholder="Select an option"
                          data-kt-ecommerce-catalog-add-category="condition_equals"
                          data-select2-id="select2-data-116-stna"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option />
                          <option
                            value="equal"
                            selected=""
                            data-select2-id="select2-data-118-x4cz"
                          >
                            is equal to
                          </option>
                          <option value="notequal">is not equal to</option>
                          <option value="greater">is greater than</option>
                          <option value="less">is less than</option>
                          <option value="starts">starts with</option>
                          <option value="ends">ends with</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-117-4szz"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-kt_ecommerce_add_category_conditions0condition_equals-40-container"
                              aria-controls="select2-kt_ecommerce_add_category_conditions0condition_equals-40-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-kt_ecommerce_add_category_conditions0condition_equals-40-container"
                                role="textbox"
                                aria-readonly="true"
                                title="is equal to"
                              >
                                is equal to
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      <input
                        type="text"
                        className="form-control mw-100 w-200px"
                        name="kt_ecommerce_add_category_conditions[0][condition_label]"
                        placeholder=""
                      />

                      <button
                        type="button"
                        data-repeater-delete=""
                        className="btn btn-sm btn-icon btn-light-danger"
                      >
                        <i className="ki-duotone ki-cross fs-2">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-5">
                  <button
                    type="button"
                    data-repeater-create=""
                    className="btn btn-sm btn-light-primary"
                  >
                    <i className="ki-duotone ki-plus fs-2" /> Add another
                    condition
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <a
            href="/metronic8/demo3/../demo3/apps/ecommerce/catalog/products.html"
            id="kt_ecommerce_add_product_cancel"
            className="btn btn-light me-5"
          >
            Cancel
          </a>

          <button
            type="submit"
            id="kt_ecommerce_add_category_submit"
            className="btn btn-primary"
          >
            <span className="indicator-label">Save Changes</span>
            <span className="indicator-progress">
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default AddCategory;

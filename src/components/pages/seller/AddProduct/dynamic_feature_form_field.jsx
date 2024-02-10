import React from "react";

const DynamicFeatureFormField = ({ fetr, formData, handleInputChange }) => {
  const removeDiv = (id) => {
    if (id !== null || undefined) {
    }
    console.log(id, "removed");
  };

  return (
    <>
      <div className="mb-3 col-sm-4">
        <div className="form-floating form-floating-outline">
          <div className="position-relative form-floating form-floating-outline form-group">
            <select
              className="form-select"
              name="options"
                value={formData.options}
              onChange={handleInputChange}
            >
              <option value="">Option</option>
              <option value="size">Size</option>
              <option value="color">Color</option>
              <option value="weight">Weight</option>
              <option value="smell">Smell</option>
            </select>
            <label htmlFor="options">Option</label>
          </div>
        </div>
      </div>
      <div className="mb-3 col-sm-8">
        <div className="form-floating form-floating-outline form-icon">
          <input
            type="text"
            name="productValue"
            // value={formData}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter size"
          />
          {fetr !== undefined ? (
            <button
              id={fetr}
              className="btn btn-outline-danger p-1 px-2 rounded-2 border-0"
              onClick={() =>
                fetr !== undefined
                  ? document.getElementById(`featureID${fetr}`).remove()
                  : ""
              }
            >
              <i className="fa-solid fa-trash" />
            </button>
          ) : (
            ""
          )}
          <label htmlFor="productValue">Value</label>
        </div>
      </div>
    </>
  );
};

export default DynamicFeatureFormField;

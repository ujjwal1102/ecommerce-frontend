import React from "react";
// import { Link } from "react-router-dom";
const ProductHeader = ({ isListView, setIsListView, totalCount }) => {
  return (
    <>
      <header className="d-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">
          {totalCount ? totalCount + ` Items found` : ""}
        </strong>
        <div className="ms-auto ">
          <select className="form-select d-inline-block w-auto border pt-1 me-1">
            <option value={0}>Best match</option>
            <option value={1}>Recommended</option>
            <option value={2}>High rated</option>
            <option value={3}>Randomly</option>
          </select>
          <div className="btn-group btn-group-sm shadow-0 border ">
            <button
              onClick={() => setIsListView(true)}
              className={`btn btn-light ${isListView ? "active" : ""}`}
              title="List view"
            >
              <i className="fa fa-bars fa-lg" />
            </button>
            <button
              onClick={() => setIsListView(false)}
              className={`btn btn-light ${isListView ? "" : "active"}`}
              title="Grid view"
            >
              <i className="fa fa-th fa-lg" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default ProductHeader;

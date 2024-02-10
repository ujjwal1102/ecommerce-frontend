import React, { useEffect, useState } from "react";
import { client } from "../../../../services/userAuthApis";
const CategoryForm = ({setAddProductForm}) => {
  const [categories, setCategories] = useState([]);
  function setData() {
    console.log("console")
    setAddProductForm(true)
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.get("category/categories");
        if (response.data) {
          console.log("res.data:", response.data);
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [client]);
  return (
    <>
      <div className="row d-flex justify-content-center my-5">
        <div className="col col-sm-10 col-md-6 col-lg-6 col-xl-6">
          <div>
            <h5>Select Category</h5>
          </div>
          <select className="form-control form-control-lg form-select" onChange={setData}>
          <option selected>----</option>
            {categories
              ? categories.map((category) => (

                  <option key={category.id} id={category.id} value={category.id} >
                    {category.category_name}
                    {/* {category.parent_id ? (
                      <div className="float-end">
                        <i className="fa-solid fa-caret-down"></i>
                      </div>
                    )  */}
                  </option>
                ))
              : <div className="d-flex justify-content-center align-item-center w-100">
              <div class="spinner-grow my-5" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>}
          </select>
        </div>
      </div>
    </>
  );
};
export default CategoryForm;

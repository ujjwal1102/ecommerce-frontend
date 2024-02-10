import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { client } from "../../../../services/userAuthApis";
import AddDynamicInputFields from "./add_fiels";

const UpdateProduct = ({ id, setProductDetails, productDetails }) => {
  const navigate = useNavigate();

  const handleAddInput = () => {
    setInputs([...inputs, { optionKey: "", optionValue: "" }]);
    setFormData({
      ...formData,
      features: [...formData.features, { optionKey: "", optionValue: "" }],
    });
  };

  useEffect(() => {
    if (productDetails) {
      // Update formData with productDetails
      setFormData({
        name: productDetails.name || "",
        sku: productDetails.sku || "",
        barcode: productDetails.barcode || "",
        // ... other properties
        features: productDetails.features || [],
      });
    }
  }, [productDetails]);

  const [inputs, setInputs] = useState([{ optionKey: "", optionValue: "" }]);
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    barcode: "",
    title: "",
    description: "",
    cost: "",
    discount_price: "",
    productinStock: false,
    priceChargeTax: false,
    category: null,
    IsPublished: "",
    quantity: null,
    thumbnail_image: null,
    images: [],
    features: [],
  });

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await client.get("category/categories");
  //       if (response.data) {
  //         console.log("res.data:", response.data);
  //         setCategories(response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };
  //   fetchCategories();
  // }, [client]);

  const saveFormAsDraft = (fomdata) => {
    console.log("Form data saved as draft:", fomdata);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fileData = type === "file" ? files[0] : null;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : fileData || value,
    });

    console.log("Form Changed", formData);
    saveFormAsDraft(formData);
  };

  const [images, setImages] = useState([]);
  const handleImagesChange = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setImages((prevImages) => [...prevImages, ...newImages]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...files],
      }));
      console.log("Set imahes");
    }
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: newImages,
    }));
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    const formDataObject = new FormData();
    for (const key in formData) {
      if (key === "features") {
        formDataObject.append(key, JSON.stringify(formData[key]));
      } else if (key === "images") {
        formData[key].forEach((imageFile, index) => {
          formDataObject.append(`images[${index}][file]`, imageFile);
        });
      } else {
        formDataObject.append(key, formData[key]);
      }
    }
    for (const pair of formDataObject.entries()) {
      console.log(`${pair}`);
    }
    client
      .post("products/products", formDataObject, { withCredentials: true })
      .then(function (res) {
        if (res.data) {
          console.log("Response : ", res.data);
          navigate("/seller/inventory/manage-inventory");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
  };

  const handleDiscard = (e) => {
    e.preventDefault();
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    // Assuming you are working with images only
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {
        <>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".btn-upload {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n}\n.btn-upload input[type=file] {\n    position: absolute;\n    opacity: 0;\n    z-index: 0;\n    max-width: 100%;\n    height: 100%;\n    display: block;\n}\n.btn-upload .mybtn{\n    padding: 8px 20px;\n    background: #337ab7;\n    border: 1px solid #2e6da4;\n    color: #fff;\n    border: 0;\n}\n.btn-upload:hover .mybtn{\n    padding: 8px 20px;\n    background: #2e6da4;\n    color: #fff;\n    border: 0;\n  }\n .mybtn {\n     --bs-btn-color: #fff;\n      --bs-btn-bg: #0d6efd;\n      --bs-btn-border-color: #0d6efd;\n      --bs-btn-hover-color: #fff;\n      --bs-btn-hover-bg: #0b5ed7;\n      --bs-btn-hover-border-color: #0a58ca;\n      --bs-btn-focus-shadow-rgb: 49, 132, 253;\n      --bs-btn-active-color: #fff;\n      --bs-btn-active-bg: #0a58ca;\n      --bs-btn-active-border-color: #0a53be;\n      --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n      --bs-btn-disabled-color: #fff;\n      --bs-btn-disabled-bg: #0d6efd;\n      --bs-btn-disabled-border-color: #0d6efd\n    }\n",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".form-icon button {\n  position: absolute;\n  top: 50%;\n right: 4%;\n  transform: translateY(-50%);\n  }",
            }}
          />

          <div className="d-flex flex-column mb-3">
            {/* <div className="text-start">
              <h4 className="mb-1 mt-3">Update Product</h4>
              <p>Orders placed across your store</p>
            </div> */}
            <div className="d-flex align-items-center flex-wrap">
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={handleDiscard}
              >
                Discard
              </button>
              <button
                className="btn btn-outline-primary mx-1 "
                onClick={handleSaveDraft}
              >
                Save draft
              </button>
              <button
                type="submit"
                className="btn btn-primary mx-1"
                onClick={handleSubmit}
              >
                Publish product
              </button>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h5 className="card-tile mb-0">Product information</h5>
                </div>
                <div className="card-body">
                  <div className="form-floating form-floating-outline mb-4 ">
                    <input
                      type="text"
                      className="form-control form-control-sm "
                      id="ecommerce-product-title"
                      placeholder="Product title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      aria-label="Product title"
                    />
                    <label htmlFor="ecommerce-product-name">
                      Title (Product Title)
                    </label>
                  </div>
                  <div className="form-floating form-floating-outline mb-4 ">
                    <input
                      type="text"
                      className="form-control form-control-sm "
                      id="ecommerce-product-name"
                      placeholder="Product Name"
                      name="name"
                      aria-label="Product Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="ecommerce-product-name">Name</label>
                  </div>
                  {/* <div className="row mb-3"> */}
                  {/* <div className="row mb-3"> */}
                  <div className="form-floating form-floating-outline mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="ecommerce-product-sku"
                      name="sku"
                      value={formData.sku}
                      onChange={handleInputChange}
                      aria-label="Product SKU"
                    />
                    <label htmlFor="ecommerce-product-sku">SKU</label>
                  </div>
                  {/* </div> */}
                  {/* <div className="row mb-3"> */}
                  <div className="form-floating form-floating-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="ecommerce-product-barcode"
                      placeholder="0123-4567"
                      name="barcode"
                      value={formData.barcode}
                      onChange={handleInputChange}
                      aria-label="Product barcode"
                    />
                    <label htmlFor="ecommerce-product-name">Barcode</label>
                  </div>
                  {/* </div> */}
                  {/* </div> */}

                  <div className="text-start">
                    <label className="form-label ">
                      Description
                      <span className="text-muted small mx-1">(Optional)</span>
                    </label>

                    <textarea
                      type="texarea"
                      className="textarea form-control "
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white d-flex justify-content-between align-items-center border-0">
                  <h5 className="mb-0 card-title">Media</h5>
                  <a href="#" className="fw-medium">
                    Add media from URL
                  </a>
                </div>
                <div className="card-body">
                  <div className="row d-flex">
                    <div className="row">
                      <div className="dz-message needsclick my-1 btn-upload">
                        {selectedImage && (
                          <div className="uploaded-image my-2">
                            <img
                              src={selectedImage}
                              alt="Uploaded Thumbnail"
                              className="img-thumbnail"
                            />
                          </div>
                        )}
                        <input
                          type="file"
                          name="thumbnail_image"
                          onChange={(e) => {
                            handleInputChange(e);
                            handleImageInputChange(e);
                          }}
                          className="mybtn"
                        />
                        <button className="mybtn btn">
                          Browse Thumbnail image
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row flex-row overflow-x-auto">
                        {/* <div className="">
                          <div className="overflow-x-auto"> */}
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="image-preview p-1 "
                            // style={{ height: "200px", width: "200px" }}
                          >
                            <img
                              src={image.preview}
                              alt={`Preview ${index + 1}`}
                              className="img-thumbnail"
                              height={"200px"}
                              width={"200px"}
                            />

                            <span
                              className="badge rounded-pill badge-notification btn btn-danger border-0 "
                              style={{ position: "absolute" }}
                              onClick={() => handleImageRemove(index)}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="btn-upload my-1 float-end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImagesChange}
                          multiple
                          className=""
                        />
                        <button className="mybtn btn">Browse images</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h5 className="card-title text-start mb-0 ">Features</h5>
                </div>
                <div className="card-body">
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="" id="featuresID">
                      <div className="form-label text-start text-secondary small">
                        Fill your product features
                      </div>
                      <div className=" mb-3 mb-sm-0">
                        <AddDynamicInputFields
                          formData={formData}
                          setFormData={setFormData}
                          inputs={inputs}
                          setInputs={setInputs}
                          handleAddInput={handleAddInput}
                          handleInputChange={handleInputChange}
                          saveFormAsDraft={saveFormAsDraft}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h5 className="card-title text-start mb-0 ">Pricing</h5>
                </div>
                <div className="card-body">
                  <div className="form-floating form-floating-outline mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="ecommerce-product-price"
                      placeholder="Price"
                      name="cost"
                      value={formData.cost}
                      onChange={handleInputChange}
                      aria-label="Product price"
                    />
                    <label htmlFor="ecommerce-product-price">Best Price</label>
                  </div>

                  <div className="form-floating form-floating-outline mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="ecommerce-product-discount-price"
                      placeholder="Discounted Price"
                      name="discount_price"
                      value={formData.discount_price}
                      onChange={handleInputChange}
                      aria-label="Product discounted price"
                    />
                    <label htmlFor="ecommerce-product-discount-price">
                      Discounted Price
                    </label>
                  </div>

                  <div className="form-check mb-2 text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="priceChargeTax"
                      value={formData.priceChargeTax}
                      onChange={handleInputChange}
                      id="price-charge-tax"
                      defaultChecked=""
                    />
                    <label className="form-label " htmlFor="price-charge-tax">
                      Charge tax on this product
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center border-top py-3 pe-0">
                    <p className="mb-0">In stock</p>
                    <div className="w-25 d-flex justify-content-end">
                      <label className="me-4 pe-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="productinStock"
                          value={formData.productinStock}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="form-floating form-floating-outline mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                    <label>Quantity</label>
                  </div>
                </div>
              </div>

              {/* <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h5 className="card-title text-start mb-0 ">Organize</h5>
                </div>
                <div className="card-body">
                  <div className="mb-4  d-flex justify-content-between">
                    <div className="form-floating form-floating-outline w-100">
                      <select
                        id="category-org"
                        className="select2 form-select select2-hidden-accessible"
                        data-placeholder="Select Category"
                        value={formData.category}
                        name="category"
                        onChange={handleInputChange}
                      >
                        <option value="">---------</option>
                        {categories
                          ? categories.map((category) => (
                              <option
                                key={category.id}
                                id={category.id}
                                value={category.id}
                              >
                                {category.category_name}
                              </option>
                            ))
                          : "Loading"}
                      </select>
                      
                      <label className="form-label " htmlFor="">
                        Category
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </>
      }
    </div>
  );
};
export default UpdateProduct;

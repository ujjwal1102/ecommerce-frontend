<>
  <div className="container">
    <div className="card m-5 shadow">
      <div className="card-header bg-white text-center display-6">
        Add Product
      </div>
      <form id="form" method="post" encType="multipart/form-data">
        {"{"}% csrf_token %{"}"}
        <div className="card-title text-center">
          <label htmlFor="Category">
            <p className="fs-3 py-2">Add Grant Child Category</p>
          </label>
        </div>
        <div className="card-body">
          {/*  <div className="my-1">
                  <select name="category" id="parentCategory" className="form-select"
                      aria-label="Default select example">
                      <option selected disabled>Select Category</option>
                  </select>
              </div>
              <div className="my-1">
                  <select name="childcategory" id="childCategory" className="form-select"
                      aria-label="Default select example">
                      <option selected disabled>Select Child Category</option>
                  </select>
              </div>
              <div className="my-1">
                  <select name="grantchildcategory" id="grantChildCategory" className="form-select"
                      aria-label="Default select example">
                      <option selected disabled>Select Grant Child Category</option>
                  </select>
              </div>
          </div> */}
          <div className="p-5">
            <div className="row py-1">
              <div className="col-md-2">
                <label
                  className="float-md-end"
                  htmlFor="exampleInputEmail1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Category
                </label>
              </div>
              <div className="col-md-10">
                {/* <select name="category" className="custom-select form-control data" id="myselect">

                          <option selected disabled>Select Category</option>
                          {% for category in cat_list %}
                          <option value="{{category}}">{{category}}</option>
                          {% endfor %}
                      </select> */}
                <select
                  name="category"
                  id="parentCategory"
                  className="custom-select form-control data"
                  aria-label="Default select example"
                >
                  <option selected="">Select Category</option>
                </select>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-md-2">
                <label
                  className="float-md-end"
                  htmlFor="exampleInputEmail1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Child Category
                </label>
              </div>
              <div className="col-md-10">
                {/* <select name="childcategory" className="custom-select form-control data" id="myselect">

                          <option selected disabled>Select Child Category</option>
                          {% for category in child_cat %}
                          <option value="{{category}}">{{category}}</option>
                          {% endfor %}
                      </select> */}
                <select
                  name="childcategory"
                  id="childCategory"
                  className="custom-select form-control data"
                  aria-label="Default select example"
                >
                  <option selected="" disabled="">
                    Select Child Category
                  </option>
                </select>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-md-2">
                <label
                  className="float-md-end"
                  htmlFor="exampleInputEmail1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Grant Child Category
                </label>
              </div>
              <div className="col-md-10">
                {/* <select name="grantchildcategory" className="custom-select form-control data" id="myselect">

                          <option selected disabled>Select Category</option>
                          {% for category in grant_child_cat %}
                          <option value="{{category}}">{{category}}</option>
                          {% endfor %}
                      </select> */}
                <select
                  name="grantchildcategory"
                  id="grantChildCategory"
                  className="custom-select form-control data"
                  aria-label="Default select example"
                >
                  <option selected="">Select Grant Child Category</option>
                </select>
              </div>
            </div>
          </div>
          {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          {/* <div className="card-body">
                  <div className="my-1">
                      <select name="category" id="parentCategory" className="form-select"
                          aria-label="Default select example">
                          <option selected>Select Category</option>

                      </select>
                  </div>
                  <div className="my-1">
                      <select name="child_category" id="childCategory" className="form-select"
                          aria-label="Default select example">
                          <option selected>Select Child Category</option>
                      </select>
                  </div>
                  <div className="my-1">
                      <input name="grant_child_category" className="form-control" type="text" name="child_category"
                          id="" placeholder="Child Category">
                  </div>
              </div> */}
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id="id" className="col-md-12 px-md-5 px-sm-2 px-lg-5px-xl-5">
            {/* ================================================ */}
            <div className="row py-1">
              <div className="col col-md-2">
                <label
                  className="float-md-end"
                  htmlFor="product_name"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Name
                </label>
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control data"
                  name="product_name"
                  id="myalldata"
                  aria-describedby="product_name"
                />
              </div>
            </div>
            <div className="row py-1">
              <div className="col-md-2">
                <label className="float-md-end" htmlFor="product_title">
                  Title
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control data"
                  id="myalldata"
                  name="product_title"
                  aria-describedby="product_title"
                />
              </div>
              <div className="col-md-2">
                <label className="float-md-end" htmlFor="product_price">
                  Price
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control data"
                  id="myalldata"
                  name="product_price"
                  aria-describedby="product_price"
                />
              </div>
            </div>
            <div className="row py-1">
              <div className="col col-md-2">
                <label
                  className="float-md-end"
                  htmlFor="product_quantity"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Quantity
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control data"
                  name="product_quantity"
                  id="myalldata"
                  aria-describedby="product_quantity"
                />
              </div>
              <div className="col col-md-2">
                <label
                  className="float-md-end"
                  htmlFor="product_brand"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Brand
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control data"
                  name="product_brand"
                  id="myalldata"
                  aria-describedby="product_brand"
                />
              </div>
            </div>
            <div className="row py-1">
              <div className="col-md-2">
                <label className="float-md-end" htmlFor="a_images">
                  Images
                </label>
              </div>
              <div className="col-md-9">
                <input
                  multiple=""
                  type="file"
                  name="images"
                  className="form-control"
                  id="imag"
                />
              </div>
            </div>
            <div className="row py-1">
              <div className="col-md-2">
                <label
                  className="float-end"
                  htmlFor="exampleInputEmail1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Description
                </label>
              </div>
              <div className="col-md-10">
                <textarea
                  className="form-control data"
                  name="description"
                  id="myalldata"
                  cols={30}
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row pt-5 pb-3 ">
              <div className="d-inline">
                <div className="text-center ">
                  <h4>Add Features</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-3"></div>
            </div>
            {/* <div className="row pb-2 text-center">
                      <div className="col-md-4 text-muted">
                          Feature Name
                      </div>
                      <div className="col-md-6 text-muted">
                          Feature Value
                      </div>
                  </div> */}
            <div className="row py-1">
              <div className="py-2 col-md-4">
                <input
                  type="text"
                  className="form-control data"
                  id="myalldata"
                  name="feature_name1"
                  placeholder="Feature Name"
                  aria-describedby="feature_name"
                />
              </div>
              <div className="py-2 col-md-6">
                <input
                  type="text"
                  className="form-control data"
                  id="myalldata"
                  name="feature_value1"
                  placeholder="Feature"
                  aria-describedby="feature_value"
                />
              </div>
            </div>
            <div id="newinput" />
            {/* <div className="row py-1">
                      <div className="col-md-2">
                          <label className="float-md-end" for="exampleInputEmail1">Camera</label>
                      </div>
                      <div className="col-md-4">
                          <input type="text" className="form-control" id="exampleInputEmail1"
                              aria-describedby="emailHelp">
                      </div>
                      <div className="col-md-2">
                          <label className="float-md-end" for="exampleInputEmail1">Memory</label>
                      </div>
                      <div className="col-md-4">
                          <input type="text" className="form-control" id="exampleInputEmail1"
                              aria-describedby="emailHelp">
                      </div>
                  </div>

                  <div className="row py-1">
                      <div className="col-md-2">
                          <label className="float-md-end" for="exampleInputEmail1">Battery</label>
                      </div>
                      <div className="col-md-10">
                          <input type="text" className="form-control" id="exampleInputEmail1"
                              aria-describedby="emailHelp">
                      </div>
                  </div> */}
            {/* ======================================= */}
            <button
              style={{ whiteSpace: "nowrap" }}
              id="rowAdder"
              type="button"
              className="float-start btn btn-dark"
            >
              <i className="fa-solid fa-plus" /> ADD
            </button>
            <div className="row float-end pt-5 pb-2">
              <button type="submit" className="btn btn-primary ">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <hr />
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-10 col-md-8 col-sm-10 col-lg-6 col-xl-6">
        <section id="form_tabs">
          <div className="my-2 ">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item ">
                <a
                  className="nav-link active px-5  "
                  aria-current="page"
                  href="#"
                >
                  Info
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  Variation
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Images
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled" aria-disabled="true">
                  Description
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col-10 col-md-8 col-sm-10 col-lg-8 col-xl-8">
        <div className="my-2">
          <div id="add_product_form">
            <form className="">
              {/* Form Name */}
              <legend className="text-center">Info</legend>
              {/* Text input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="product_id">PRODUCT ID</label>
                      <div className="form-input">
                          <input id="product_id" name="product_id" placeholder="PRODUCT ID"
                              className="form-control     " required="" type="text">

                      </div>
                  </div> */}
              {/* Text input*/}
              <div className="form-group">
                <label className="form-label" htmlFor="product_name">
                  Product Name
                </label>
                <div className="form-input">
                  <input
                    id="product_name"
                    name="product_name"
                    placeholder="PRODUCT NAME"
                    className="form-control "
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="form-label" htmlFor="product_name_fr">
                  Product Description FR
                </label>
                <div className="form-input">
                  <input
                    id="product_name_fr"
                    name="product_name_fr"
                    placeholder="PRODUCT DESCRIPTION FR"
                    className="form-control"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Select Basic */}
              <div className="form-group">
                <label className="form-label" htmlFor="product_categorie">
                  Product Category
                </label>
                <div className="form-input ">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    option{\n                                                                               border-radius: 50%;\n                                    }\n                                ",
                    }}
                  />
                  <select
                    id="product_categorie "
                    name="product_categorie"
                    className="form-control form-select"
                  >
                    <option className="form-select-dropdown" value="">
                      Electronics
                    </option>
                  </select>
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="form-label" htmlFor="available_quantity">
                  Avilable Quantity
                </label>
                <div className="form-input">
                  <input
                    id="available_quantity"
                    name="available_quantity"
                    placeholder="AVAILABLE QUANTITY"
                    className="form-control     "
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="form-label" htmlFor="product_weight">
                  Product Weight
                </label>
                <div className="form-input">
                  <input
                    id="product_weight"
                    name="product_weight"
                    placeholder="PRODUCT WEIGHT"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="form-label" htmlFor="percentage_discount">
                  Percentage Discount
                </label>
                <div className="form-input">
                  <input
                    id="percentage_discount"
                    name="percentage_discount"
                    placeholder="PERCENTAGE DISCOUNT"
                    className="form-control"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="form-label" htmlFor="stock_alert">
                  Stock Alert
                </label>
                <div className="form-input">
                  <input
                    id="stock_alert"
                    name="stock_alert"
                    placeholder="STOCK ALERT"
                    className="form-control"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Search input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="stock_critical">STOCK CRITICAL</label>
                      <div className="form-input">
                          <input id="stock_critical" name="stock_critical" placeholder="STOCK CRITICAL"
                              className="form-control     " required="" type="search">

                      </div>
                  </div> */}
              {/* Search input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="tutorial">TUTORIAL</label>
                      <div className="form-input">
                          <input id="tutorial" name="tutorial" placeholder="TUTORIAL" className="form-control     "
                              required="" type="search">

                      </div>
                  </div> */}
              {/* Search input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="tutorial_fr">TUTORIAL FR</label>
                      <div className="form-input">
                          <input id="tutorial_fr" name="tutorial_fr" placeholder="TUTORIAL FR"
                              className="form-control     " required="" type="search">

                      </div>
                  </div> */}
              {/* Text input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="online_date">ONLINE DATE</label>
                      <div className="form-input">
                          <input id="online_date" name="online_date" placeholder="ONLINE DATE"
                              className="form-control     " required="" type="text">

                      </div>
                  </div> */}
              {/* Text input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="author">AUTHOR</label>
                      <div className="form-input">
                          <input id="author" name="author" placeholder="AUTHOR" className="form-control   "
                              required="" type="text">

                      </div>
                  </div> */}
              {/* Text input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="enable_display">ENABLE DISPLAY</label>
                      <div className="form-input">
                          <input id="enable_display" name="enable_display" placeholder="ENABLE DISPLAY"
                              className="form-control     " required="" type="text">

                      </div>
                  </div> */}
              {/* Text input*/}
              {/* <div className="form-group">
                      <label className="form-label" for="comment">COMMENT</label>
                      <div className="form-input">
                          <input id="comment" name="comment" placeholder="COMMENT" className="form-control    "
                              required="" type="text">

                      </div>
                  </div> */}
              {/* Text input */}
              <div className="form-group">
                {/* <label className="form-label" for="approuved_by">APPROUVED BY</label>
                      <div className="form-input">
                          <input id="approuved_by" name="approuved_by" placeholder="APPROUVED BY"
                              className="form-control     " required="" type="text">
                      </div> */}
                {/* File Button */}
                <div className="form-group">
                  <label className="form-label" htmlFor="filebutton">
                    main_image
                  </label>
                  <div className="form-input">
                    <input
                      id="filebutton"
                      name="filebutton"
                      className="input-file"
                      type="file"
                    />
                  </div>
                </div>
                {/* File Button */}
                <div className="form-group">
                  <label className="form-label" htmlFor="filebutton">
                    auxiliary_images
                  </label>
                  <div className="form-input">
                    <input
                      id="filebutton"
                      name="filebutton"
                      className="input-file"
                      type="file"
                      multiple=""
                    />
                  </div>
                </div>
                {/* Button */}
                {/* <div className="form-group">
                              <label className="form-label" for="singlebutton">Single Button</label>
                              <div className="form-input">
                                  <button id="singlebutton" name="singlebutton"
                                      className="btn btn-primary">Button</button>
                              </div>
                          </div> */}
              </div>
              {/* Textarea */}
              <div className="form-group">
                <label className="form-label" htmlFor="product_description">
                  PRODUCT DESCRIPTION
                </label>
                <div className="form-input">
                  <textarea
                    className="form-control"
                    id="product_description"
                    name="product_description"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Textarea */}
              <div className="form-group">
                <label className="form-label" htmlFor="product_name_fr">
                  PRODUCT DESCRIPTION FR
                </label>
                <div className="form-input">
                  <textarea
                    className="form-control"
                    id="product_name_fr"
                    name="product_name_fr"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Textarea */}
              <div className="form-group">
                <label className="form-label" htmlFor="product_feature">
                  PRODUCT Features
                </label>
                <div className="form-input">
                  <textarea
                    className="form-control"
                    id="product_feature"
                    name="product_feature"
                    defaultValue={""}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
<>
  <div className="card mb-4 border-0 shadow-sm">
    <div className="card-header bg-white border-0">
      <h5 className="card-title mb-0">Inventory</h5>
    </div>
    <div className="card-body ">
      <div className="row">
        <div className="col-12 col-md-4 mx-auto card-separator">
          <div className="d-flex justify-content-between flex-column mb-3 mb-md-0 pe-md-3">
            <ul
              className="nav nav-align-left nav-pills flex-column"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  "
                  data-bs-toggle="tab"
                  data-bs-target="#restock"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="mdi mdi-cube-outline me-2" />
                  <span className="align-middle">Restock</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  "
                  data-bs-toggle="tab"
                  data-bs-target="#shipping"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  <i className="mdi mdi-car-estate me-2" />
                  <span className="align-middle">Shipping</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  "
                  data-bs-toggle="tab"
                  data-bs-target="#global-delivery"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="mdi mdi-web me-2" />
                  <span className="align-middle">Global Delivery</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  "
                  data-bs-toggle="tab"
                  data-bs-target="#attributes"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <i className="mdi mdi-link-variant me-2" />
                  <span className="align-middle">Attributes</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link   active"
                  data-bs-toggle="tab"
                  data-bs-target="#advanced"
                  aria-selected="true"
                  role="tab"
                >
                  <i className="mdi mdi-lock me-2" />
                  <span className="align-middle">Advanced</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-8 pt-4 pt-md-0">
          <div className="tab-content p-0 pe-xl-0 ps-md-3">
            <div className="tab-pane fade" id="restock" role="tabpanel">
              <h6 className="text-body">Options</h6>
              <div className="row mb-3 g-3">
                <div className="col-12 col-sm-8 col-lg-12 col-xxl-8">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      className="form-control"
                      id="ecommerce-product-stock"
                      placeholder="Quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      aria-label="Quantity"
                    />
                    <label htmlFor="ecommerce-product-stock">
                      Add to Stock
                    </label>
                  </div>
                </div>
                <div className="col-6 col-sm-4 d-grid col-lg-6 col-xxl-4">
                  <button className="btn btn-primary btn-lg  ">
                    <i className="mdi mdi-check me-2" />
                    Confirm
                  </button>
                </div>
              </div>
              <div>
                <p className="text-heading mb-2">
                  Product in stock now:
                  <span className="ps-1">54</span>
                </p>
                <p className="text-heading mb-2">
                  Product in transit:
                  <span className="ps-1">390</span>
                </p>
                <p className="text-heading mb-2">
                  Last time restocked:
                  <span className="ps-1">24th June, 2023</span>
                </p>
                <p className="text-heading mb-2">
                  Total stock over lifetime:
                  <span className="ps-1">2430</span>
                </p>
              </div>
            </div>

            <div className="tab-pane fade" id="shipping" role="tabpanel">
              <h6 className="text-body">Shipping Type</h6>
              <div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shippingType"
                    id="seller"
                  />
                  <label className="form-check-label" htmlFor="seller">
                    <span className="h6">Fulfilled by Seller</span>
                    <small className="text-muted">
                      You'll be responsible for product delivery.
                      <br />
                      Any damage or delay during shipping may cost you a Damage
                      fee.
                    </small>
                  </label>
                </div>
                <div className="form-check mb-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shippingType"
                    id="companyName"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="companyName">
                    <span className="h6">
                      Fulfilled by Company name &nbsp;
                      <span className="badge rounded-pill badge-warning bg-label-warning fs-tiny py-1">
                        RECOMMENDED
                      </span>
                    </span>
                    <small className="text-muted">
                      Your product, Our responsibility.
                      <br />
                      For a measly fee, we will handle the delivery process for
                      you.
                    </small>
                  </label>
                </div>
                <p className="mb-0">
                  See our
                  <a href="#;">Delivery terms and conditions</a>
                  for details
                </p>
              </div>
            </div>

            <div className="tab-pane fade" id="global-delivery" role="tabpanel">
              <h6 className="text-body">Global Delivery</h6>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="globalDel"
                  id="worldwide"
                />
                <label className="form-check-label" htmlFor="worldwide">
                  <span className="h6">Worldwide delivery</span>
                  <small className="text-muted">
                    Only available with Shipping method:
                    <a href="#;">Fulfilled by Company name</a>
                  </small>
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="globalDel"
                  defaultChecked=""
                />
                <label
                  className="form-check-label w-75 pe-5 mb-2"
                  htmlFor="country-selected"
                >
                  <span className="h6">Selected Countries</span>
                </label>
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Country name"
                    id="country-selected"
                  />
                  <label htmlFor="ecommerce-product-name">Countries</label>
                </div>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="globalDel"
                  id="local"
                />
                <label className="form-check-label" htmlFor="local">
                  <span className="h6">Local delivery</span>
                  <small className="text-muted">
                    Deliver to your country of residence :
                    <a href="#;">Change profile address</a>
                  </small>
                </label>
              </div>
            </div>

            <div className="tab-pane fade" id="attributes" role="tabpanel">
              <h6 className="text-body">Attributes</h6>
              <div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fragile"
                  />
                  <label className="form-check-label" htmlFor="fragile">
                    <span className="h6">Fragile Product</span>
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    // defaultValue="biodegradable"
                    id="biodegradable"
                  />
                  <label className="form-check-label" htmlFor="biodegradable">
                    <span className="h6">Biodegradable</span>
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="frozen"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label w-75 pe-5 mb-2"
                    htmlFor="frozen"
                  >
                    <span className="h6">Frozen Product</span>
                  </label>
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="In Celsius"
                      id="temp"
                    />
                    <label htmlFor="temp">Max. allowed Temperature</label>
                  </div>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="expDate"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label w-75 pe-5 mb-2"
                    htmlFor="expDate"
                  >
                    <span className="h6">Expiry Date of Product</span>
                  </label>
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="product-date form-control flatpickr-input"
                      id="flatpickr-date"
                      readOnly="readonly"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade active show"
              id="advanced"
              role="tabpanel"
            >
              <h6 className="text-body">Advanced</h6>
              <div className="row">
                <div className="col">
                  <h6 className="mb-2">Product ID Type</h6>
                  <div className="form-floating form-floating-outline form-floating-select2">
                    <select
                      id="product-id"
                      className="select2 form-select select2-hidden-accessible"
                      data-placeholder="ISBN"
                      data-allow-clear="true"
                      data-select2-id="product-id"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id={4}>
                        ISBN
                      </option>
                      <option value="ISBN">ISBN</option>
                      <option value="UPC">UPC</option>
                      <option value="EAN">EAN</option>
                      <option value="JAN">JAN</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id={3}
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span className="select2-selection select2-selection--single">
                          <span
                            className="select2-selection__rendered"
                            id="select2-product-id-container"
                            role="textbox"
                            aria-readonly="true"
                          >
                            <span className="select2-selection__placeholder">
                              ISBN
                            </span>
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation" />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>

                    <label htmlFor="product-id">Id</label>
                  </div>
                </div>

                <div className="col">
                  <h6 className="mb-2">Product ID</h6>
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      id="product-id-1"
                      className="form-control"
                      placeholder="ISBN Number"
                    />
                    <label htmlFor="product-id-1">Id Number</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
<>
  <div className="mb-4 col ecommerce-select2-dropdown">
    <div className="form-floating form-floating-outline form-floating-select2">
      {/* <div className="position-relative"> */}
      <select
        id="collection"
        className="select2 form-select select2-hidden-accessible"
        data-placeholder="Collection"
        data-select2-id="collection"
        tabIndex={-1}
        aria-hidden="true"
      >
        <option value="" data-select2-id={10}>
          Collection
        </option>
        <option value="men-clothing">Men's Clothing</option>
        <option value="women-clothing">Women's-clothing</option>
        <option value="kid-clothing">Kid's-clothing</option>
      </select>
      <span
        className="select2 select2-container select2-container--default"
        dir="ltr"
        data-select2-id={9}
        style={{ width: 291 }}
      >
        <span className="selection">
          <span
            className="select2-selection select2-selection--single"
            // role="combobox"
            // aria-haspopup="true"
            // aria-expanded="false"
            // tabIndex={0}
            // aria-disabled="false"
            // aria-labelledby="select2-collection-container"
          >
            <span
              className="select2-selection__rendered"
              id="select2-collection-container"
              role="textbox"
              aria-readonly="true"
            >
              <span className="select2-selection__placeholder">Collection</span>
            </span>
            <span className="select2-selection__arrow" role="presentation">
              <b role="presentation" />
            </span>
          </span>
        </span>
        <span className="dropdown-wrapper" aria-hidden="true" />
      </span>
      {/* </div> */}
      <label htmlFor="collection">Collection</label>
    </div>
  </div>
  <div className="mb-4 col ecommerce-select2-dropdown">
    <div className="form-floating form-floating-outline">
      {/* <div className="form-select"> */}
      <select
        id="vendor"
        className="select2 form-select select2-hidden-accessible"
        // data-placeholder="Select Vendor"
        // data-select2-id="vendor"
        // tabIndex={-1}
        aria-hidden="true"
      >
        <option value="">Select Vendor</option>
        <option value="men-clothing">Men's Clothing</option>
        <option value="women-clothing">Women's-clothing</option>
        <option value="kid-clothing">Kid's-clothing</option>
      </select>
      <span className="select2 select2-container select2-container--default">
        <span className="selection">
          <span
            className="select2-selection select2-selection--single"
            // role="combobox"
            // aria-haspopup="true"
            // aria-expanded="false"
            // tabIndex={0}
            // aria-disabled="false"
            // aria-labelledby="select2-vendor-container"
          >
            <span
              className="select2-selection__rendered"
              // id="select2-vendor-container"
              // role="textbox"
              // aria-readonly="true"
            >
              <span className="select2-selection__placeholder">
                Select Vendor
              </span>
            </span>
            <span className="select2-selection__arrow" role="presentation">
              <b role="presentation" />
            </span>
          </span>
        </span>
        <span className="dropdown-wrapper" aria-hidden="true" />
      </span>
      {/* </div> */}
      <label htmlFor="vendor">Vendor</label>
    </div>
  </div>
  <div className="mb-4 col ecommerce-select2-dropdown">
    <div className="form-floating form-floating-outline form-floating-select2">
      {/* <div className="position-relative"> */}
      <select
        id="status-org"
        className="select2 form-select select2-hidden-accessible"
        data-placeholder="Select Status"
        data-select2-id="status-org"
        tabIndex={-1}
        aria-hidden="true"
        name="IsPublished"
        value={formData.IsPublished}
        onChange={handleInputChange}
      >
        <option value="" data-select2-id={12}>
          Select Status
        </option>
        <option value="Published">Published</option>
        <option value="Scheduled">Scheduled</option>
        <option value="Inactive">Inactive</option>
      </select>
      {/* <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={11}
                    style={{ width: 291 }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-status-org-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-status-org-container"
                          role="textbox"
                          aria-readonly="true"
                        >
                          <span className="select2-selection__placeholder">
                            Select Status
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                   </span> */}
      {/* </div> */}
      <label htmlFor="status-org">Status</label>
    </div>
  </div>
  <div className="mb-3">
    <div className="form-floating form-floating-outline">
      {/* <tags className="tagify  form-control h-auto">
                      <tag
                        title="Normal"
                        contentEditable="false"
                        spellCheck="false"
                        className="tagify__tag tagify--noAnim"
                        value="Normal"
                      >
                        <x
                          title=""
                          className="tagify__tag__removeBtn"
                          role="button"
                          aria-label="remove tag"
                        />
                        <div>
                          <span className="tagify__tag-text">Normal</span>
                        </div>
                      </tag>
                      <tag
                        title="Standard"
                        contentEditable="false"
                        spellCheck="false"
                        className="tagify__tag tagify--noAnim"
                        value="Standard"
                      >
                        <x
                          title=""
                          className="tagify__tag__removeBtn"
                          role="button"
                          aria-label="remove tag"
                        />
                        <div>
                          <span className="tagify__tag-text">Standard</span>
                        </div>
                      </tag>
                      <tag
                        title="Premium"
                        contentEditable="false"
                        spellCheck="false"
                        className="tagify__tag tagify--noAnim"
                        value="Premium"
                      >
                        <x
                          title=""
                          className="tagify__tag__removeBtn"
                          role="button"
                          aria-label="remove tag"
                        />
                        <div>
                          <span className="tagify__tag-text">Premium</span>
                        </div>
                      </tag>
                      
                      ​
                    </tags> */}
      <input
        id="ecommerce-product-tags"
        className="form-control h-auto"
        name="ecommerce-product-tags"
        // defaultValue="Normal,Standard,Premium"
      />
      <label htmlFor="ecommerce-product-tags">Tags</label>
    </div>
  </div>
</>;

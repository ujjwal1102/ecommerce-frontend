import React from "react";

const AddCoupon = () => {
  return (
    <div>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Coupons Add</h3>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-lg-4">
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                  <h6 className="m-0 fw-bold">Coupon Status</h6>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="couponsstatus"
                      defaultChecked=""
                    />
                    <label className="form-check-label">Active</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="couponsstatus"
                    />
                    <label className="form-check-label">In Active</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="couponsstatus"
                    />
                    <label className="form-check-label">Future Plan</label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                  <h6 className="m-0 fw-bold">Date Schedule</h6>
                </div>
                <div className="card-body">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-12">
                      <label className="form-label">Start Date</label>
                      <input
                        type="date"
                        className="form-control w-100"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">End Date</label>
                      <input
                        type="date"
                        className="form-control w-100"
                        required=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                  <h6 className="m-0 fw-bold">Coupon Information</h6>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-6">
                        <label className="form-label">Coupons Code</label>
                        <input
                          type="text"
                          className="form-control"
                          required=""
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Discount Products</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected="">Open this select category</option>
                          <option value={1}>Watch</option>
                          <option value={2}>Mobile</option>
                          <option value={3}>Laptop</option>
                          <option value={4}>Clothes</option>
                          <option value={5}>Shoes</option>
                          <option value={6}>Top</option>
                          <option value={7}>Watches</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Discount Country</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected="">Open this select Country</option>
                          <option value={1}>India</option>
                          <option value={2}>Denmark</option>
                          <option value={3}>Oman</option>
                          <option value={4}>South Africa</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Coupons Limits</label>
                        <input
                          type="text"
                          className="form-control"
                          required=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Coupons Types</label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="couponstype"
                          />
                          <label className="form-check-label">
                            Free Shipping
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="couponstype"
                            defaultChecked=""
                          />
                          <label className="form-check-label">Percentage</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="couponstype"
                          />
                          <label className="form-check-label">
                            Fixed Amount
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Discount value</label>
                        <input
                          type="text"
                          className="form-control"
                          required=""
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary mt-4 text-uppercase px-5"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;

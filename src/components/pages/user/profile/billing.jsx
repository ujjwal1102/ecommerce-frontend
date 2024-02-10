import React from "react";

const BillingInfo = () => {
  return (
    <>
      <div className="tab-pane" id="billing">
        <h6>BILLING SETTINGS</h6>
        <hr />
        <form>
          <div className="form-outline mb-3">
            <label className="d-block mb-0">Payment Method</label>
            <div className="small text-muted mb-3">
              You have not added a payment method
            </div>
            <button className="btn btn-info" type="button">
              Add Payment Method
            </button>
          </div>
          <div className="form-outline mb-3">
            <label className="d-block">Payment History</label>
            <div className="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">
              You have not made any payment.
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default BillingInfo;

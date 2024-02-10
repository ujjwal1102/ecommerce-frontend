import React from "react";

const HomeMainBody = () => {
  return (
    <>
      <div className="text-white py-5 mb-4 homediv ">
        <div className="container py-5 justify-content-lg-start text-lg-start text-md-start text-sm-center text-center">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-12">
              <div className="homepageText ">
                <h1>
                  Best products &amp; <br />
                  brands in our store
                </h1>
                <p>Trendy Products, Factory Prices, Excellent Service</p>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-outline-light mx-1 rounded-pill"
                >
                  Learn more
                </button>

                <button
                  type="button"
                  className="btn btn-light rounded-pill shadow-0 text-primary pt-2 border border-white mx-1 "
                >
                  <span className="pt-1">Purchase now</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-12">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainBody;

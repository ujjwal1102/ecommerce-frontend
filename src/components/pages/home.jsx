import React from "react";
import { Link } from "react-router-dom";
import HomeMainBody from "./home_mainbody";
import HomePageCard from "./homepagecard";
import PolinaKovaleva from "../../utils/imgs/PolinaKovaleva.jpg";
const Home = () => {
  return (
    <>
      <section>
        <HomeMainBody />
      </section>
      <div className="container">
        <h3>New products</h3>
        <HomePageCard />
        {/* <section>
          <div className="container my-5">
            <header className="mb-4">
              <h3>New products</h3>
            </header>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <div className="mask" style={{ height: 50 }}>
                      <div className="d-flex justify-content-start align-items-start h-100 d-2">
                        <h6>
                          <span className="badge bg-success pt-2">Offer</span>
                        </h6>
                      </div>
                    </div>
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-3">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$29.95</h5>
                    <p className="card-text mb-0">GoPro action camera 4K</p>
                    <p className="text-muted">Model: X-200</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$590.00</h5>
                    <p className="card-text mb-0">Canon EOS professional</p>
                    <p className="text-muted">Capacity: 128GB</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$29.95</h5>
                    <p className="card-text mb-0">Modern product name here</p>
                    <p className="text-muted">Sizes: S, M, XL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$1099.00</h5>
                    <p className="card-text mb-0">Apple iPhone 13 Pro max</p>
                    <p className="text-muted">Color: Black, Memory: 128GB</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$29.95</h5>
                    <p className="card-text mb-0">Modern product name here</p>
                    <p className="text-muted">Sizes: S, M, XL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$29.95</h5>
                    <p className="card-text mb-0">Modern product name here</p>
                    <p className="text-muted">Model: X-200</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$29.95</h5>
                    <p className="card-text mb-0">Modern product name here</p>
                    <p className="text-muted">Sizes: S, M, XL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card my-2 shadow-0">
                  <Link to="#" className="img-wrap">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  </Link>
                  <div className="card-body p-0 pt-2">
                    <Link
                      to="#!"
                      className="btn btn-light border px-2 pt-2 float-end icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1 text-secondary" />
                    </Link>
                    <h5 className="card-title">$29.95</h5>
                    <p className="card-text mb-0">Modern product name here</p>
                    <p className="text-muted">Material: Jeans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Products */}
        {/* Feature */}
        <section className="my-3">
          <div className="row g-4">
            <div className=" col-lg-6 col-sm-12 col-md-6">
              {/* <img src={PolinaKovaleva}  /> */}
              <div
                className="card-banner bg-gray h-100 "
                style={{
                  minHeight: 200,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  top: "50%",
                  backgroundImage: `url(${PolinaKovaleva})`,
                }}
              >
                <div className="p-3 p-md-3 p-lg-4" style={{ maxWidth: "70%" }}>
                  <div
                    className="p-3 p-lg-2 p-md-2"
                    style={{
                      backdropFilter: `blur(6px)`,
                      backgroundColor: `rgba(255, 255, 255,0.3)`,
                      borderRadius: "25px",
                    }}
                  >
                    <h3 className="text-dark">
                      Best products &amp; brands in our store at 80% off
                    </h3>
                    <p>That's true but not always</p>
                    <button
                      className="btn btn-warning shadow-0 rounded-pill"
                      to="#"
                    >
                      Claim offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="row mb-3 mb-sm-4 g-3 g-sm-4">
                <div className="col-6 d-flex">
                  <div
                    className="card w-100 bg-primary rounded-0 "
                    style={{ minHeight: 200 }}
                  >
                    <div className="card-body">
                      <h5 className="text-white">Gaming toolset</h5>
                      <p className="text-white-50">
                        Technology for cyber sport
                      </p>
                      <Link
                        className="btn btn-outline-light btn-sm rounded-pill "
                        to="#"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div
                    className="card w-100 bg-primary rounded-0"
                    style={{ minHeight: 200 }}
                  >
                    <div className="card-body">
                      <h5 className="text-white">Quality sound</h5>
                      <p className="text-white-50">All you need for music</p>
                      <Link
                        className="btn btn-outline-light btn-sm rounded-pill"
                        to="#"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* row.// */}
              <div
                className="card bg-success rounded-0"
                style={{ minHeight: 200 }}
              >
                <div className="card-body">
                  <h5 className="text-white">Buy 2 items, With special gift</h5>
                  <p className="text-white-50" style={{ maxWidth: 400 }}>
                    Buy one, get one free marketing strategy helps your business
                    improves the brand by sharing the profits
                  </p>
                  <Link
                    className="btn btn-outline-light btn-sm rounded-pill float-end me-3"
                    to="#"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            {/* col.// */}

            {/* row.// */}
          </div>
          {/* container end.// */}
        </section>

        {/* Recently viewed */}
        {/* <section className="mt-5 mb-4">
          <div className="container text-dark">
            <header className="">
              <h3 className="section-title">Most viewed Products</h3>
            </header>
            <div className="row gy-3">
              <div className="col-lg-2 col-md-4 col-4">
                <Link to="#" className="img-wrap">
                  <img
                    height={200}
                    width={200}
                    className="img-thumbnail"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp"
                  />
                </Link>
              </div>
              
              <div className="col-lg-2 col-md-4 col-4">
                <Link to="#" className="img-wrap">
                  <img
                    height={200}
                    width={200}
                    className="img-thumbnail"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp"
                  />
                </Link>
              </div>
              
              <div className="col-lg-2 col-md-4 col-4">
                <Link to="#" className="img-wrap">
                  <img
                    height={200}
                    width={200}
                    className="img-thumbnail"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp"
                  />
                </Link>
              </div>
              
              <div className="col-lg-2 col-md-4 col-4">
                <Link to="#" className="img-wrap">
                  <img
                    height={200}
                    width={200}
                    className="img-thumbnail"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp"
                  />
                </Link>
              </div>
              
              <div className="col-lg-2 col-md-4 col-4">
                <Link to="#" className="img-wrap">
                  <img
                    height={200}
                    width={200}
                    className="img-thumbnail"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                  />
                </Link>
              </div>
              
              <div className="col-lg-2 col-md-4 col-4">
                <Link to="#" className="img-wrap">
                  <img
                    height={200}
                    width={200}
                    className="img-thumbnail"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        {/* Recently viewed */}
        {/* <section>
          <div className="container mb-3">
            <div className="px-4 pt-3 border">
              <div className="row pt-1">
                <div className="col-lg-3 col-md-6 mb-3 d-flex">
                  <div className="d-flex align-items-center">
                    <div className="badge badge-warning p-2 rounded-4 me-3">
                      <i className="fas fa-thumbs-up fa-2x fa-fw" />
                    </div>
                    <span className="info">
                      <h6 className="title">Reasonable prices</h6>
                      <p className="mb-0">Have you ever finally just</p>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3 d-flex">
                  <div className="d-flex align-items-center">
                    <div className="badge badge-warning p-2 rounded-4 me-3">
                      <i className="fas fa-plane fa-2x fa-fw" />
                    </div>
                    <span className="info">
                      <h6 className="title">Worldwide shipping</h6>
                      <p className="mb-0">Have you ever finally just</p>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3 d-flex">
                  <div className="d-flex align-items-center">
                    <div className="badge badge-warning p-2 rounded-4 me-3">
                      <i className="fas fa-star fa-2x fa-fw" />
                    </div>
                    <span className="info">
                      <h6 className="title">Best ratings</h6>
                      <p className="mb-0">Have you ever finally just</p>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3 d-flex">
                  <div className="d-flex align-items-center">
                    <div className="badge badge-warning p-2 rounded-4 me-3">
                      <i className="fas fa-phone-alt fa-2x fa-fw" />
                    </div>
                    <span className="info">
                      <h6 className="title">Help center</h6>
                      <p className="mb-0">Have you ever finally just</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;

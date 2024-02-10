import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PolinaKovaleva from "../utils/imgs/PolinaKovaleva.jpg";
// import shoppingBag from "../utils/imgs/shoppingBag.png";
import Craft from "../utils/imgs/Craft.jpg";
import Jwellery from "../utils/imgs/Jwellery.jpg";
import Carousel from "react-bootstrap/Carousel";
import Shirt from "../utils/imgs/shirt.jpg";
import Painting from "../utils/imgs/Painting.jpg";
import PaintingWall from "../utils/imgs/PaintingWall.jpg";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import { Image } from "react-bootstrap";
import { client } from "../services/userAuthApis";

const HomeShopPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [topDeals, setTopDeals] = useState(null);
  const [bestSellers, setBestSellers] = useState(null);
  useEffect(() => {
    client
      .get("products/homeshop")
      .then((res) => {
        console.log(res);
        setTopDeals(res.data.categories_count);
        
        setBestSellers(res.data.prod);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);
  return (
    <>
      <section className="">
        <div className="">
          <main className="">
            <Carousel style={{ height: "100vh" }} fade>
              <Carousel.Item interval={1000}>
                <Image
                  srcSet={Jwellery}
                  text="First slide"
                  style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                />

                <Carousel.Caption className="px-5">
                  <div
                    className="py-2 rounded-4 w-sm-100 text-dark mb-2 "
                    style={{
                      backdropFilter: `blur(10px)`,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <h3 className="p-1">Jewelry Extravaganza</h3>
                    <p className="mx-5">
                      Adorn yourself with elegance! Explore our exquisite
                      collection of timeless jewelry pieces that radiate beauty
                      and sophistication
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Image
                  srcSet={Painting}
                  text="Second slide"
                  style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                />
                <Carousel.Caption className="px-5">
                  <div
                    className="py-2 rounded-4 w-sm-100 text-dark mb-2"
                    style={{
                      backdropFilter: `blur(10px)`,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <h3 className="p-1">Artistry on Canvas</h3>
                    <p className="mx-5">
                      Immerse yourself in a world of colors and creativity.
                      Discover unique paintings that bring life to your space,
                      each stroke telling a story.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Image
                  srcSet={Craft}
                  text="Third slide"
                  style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                />
                <Carousel.Caption className="px-5">
                  <div
                    className="py-2 rounded-4 w-sm-100 text-dark mb-2"
                    style={{
                      backdropFilter: `blur(10px)`,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <h3 className="p-1">Crafted Wonders</h3>
                    <p className="mx-5">
                      Elevate your surroundings with our handcrafted treasures.
                      From intricate sculptures to functional crafts, find the
                      perfect piece to enhance your home.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Image
                  srcSet={Shirt}
                  text="Third slide"
                  style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                />
                <Carousel.Caption className="px-5">
                  <div
                    className="py-2 rounded-4 w-sm-100 text-dark mb-2"
                    style={{
                      backdropFilter: `blur(10px)`,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <h3 className="p-1">Shirt Stories</h3>
                    <p className="mx-5">
                      Make a statement with style! Uncover a range of trendy
                      shirts that blend comfort with fashion, adding a touch of
                      flair to your wardrobe.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </main>
          {/* <aside className="col-lg-3">
              <div
                className="card-banner h-100 rounded-5"
                style={{ backgroundColor: "#f87217" }}
              >
                <div className="card-body text-center pb-5">
                  <h5 className="pt-5 text-white">Amazing Gifts</h5>
                  <p className="text-white">
                    No matter how far along you are in your sophistication
                  </p>
                  <a href="#" className="btn btn-outline-light">
                    
                    View more
                  </a>
                </div>
              </div>
            </aside> */}
        </div>
      </section>
      <section className="container">
        <section>
          <div className=" pt-5">
            <nav className="row gy-4">
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center nav-text  text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-couch fa-xl fa-fw" />
                      </button>
                      <div className="text-dark ">Interior items</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-basketball-ball fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Sport and travel</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-ring fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Jewellery</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-clock fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Accessories</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-car-side fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Automobiles</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-home fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Home items</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-guitar fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Musical items</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-book fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Book, reading</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-baby-carriage fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Kid's toys</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-paw fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Pet items</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-tshirt fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Men's clothing</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-shoe-prints fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Men's clothing</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-mobile fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Smartphones</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-tools fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Tools</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-pencil-ruler fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Education</div>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="text-center d-flex flex-column justify-content-center text-decoration-none"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-warehouse fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">Other items</div>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
        {/* category */}
        <section className="my-4">
          <div className="d-flex justify-content-start  ms-2 mt-1">
            <h2>Top Deals</h2>
          </div>
          <div
            className="d-flex  py-4 overflow-auto overflow-y-hidden"
            id="style-scroll"
          >
            {topDeals
              ? topDeals.map((val) => (
                  <div
                    key={val}
                    className="col px-2 "
                    style={{ minWidth: "18rem" }}
                  >
                    <div className="card bg-black bg-gradient text-white border-0 rounded-4 zoom-card">
                      <Link
                        to={`${val.category__parent_id__id}`}
                        style={{ textDecoration: `none` }}
                      >
                        <div className="card-body text-white">
                          <h5 className="card-title mb-3 ">
                            {val.category__category_name}
                          </h5>

                          <small>
                            <div className="d-flex justify-content-between gx-1 ">
                              <p className="small text-muted text-white-50 m-0 text-nowrap">
                                {val.category__parent_id__category_name}
                              </p>
                              <p className="card-text small text-white-50 text-end m-0 text-nowrap">
                                {val.product_count}
                                <span className="px-1">+ products</span>
                              </p>
                            </div>
                          </small>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              : <div className="d-flex justify-content-center align-item-center w-100">
              <div class="spinner-grow my-5" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>}
          </div>
          <div className="d-flex justify-content-start  ms-2 mt-1 ">
            <h2 className="mt-3">Best Sellers</h2>
          </div>
          <div
            className="d-flex pt-3 py-4 overflow-auto overflow-y-hidden"
            id="style-scroll"
          >
            {bestSellers
              ? bestSellers.map((val) => (
                  <div
                    key={val}
                    className="col px-2"
                    style={{ minWidth: "17rem",objectFit:"contain"}}
                  >
                    <div className="card rounded-0  text-white border-0 zoom-card" >
                      <img
                        className="card-img rounded-0 p-2  bg-white border-0 h-100"
                        src={`https://ujjwal1102.pythonanywhere.com//media/${val.thumbnail_image}`}
                        alt="Card image"
                        style={{ maxHeight: "15rem", objectFit: "contain",height:"15rem" }}
                      />
                      <div className="card-body ">
                        <p
                          className="card-text text-black p-2 rounded-0 small"
                          // style={{
                          //   backdropFilter: `blur(10px)`,
                          //   backgroundColor: "rgba(0,0,0,0.3)",
                          // }}
                        >
                          {/* {val.name} */}
                          {val.name
                            ? val.name.slice(0, 50) +
                              (val.name.length > 170 ? "..." : "")
                            : // : product.title
                              // ? product.title.slice(0, 170) +
                              //   (product.title.length > 170 ? "..." : "")
                              ""}
                        </p>
                        {/* <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">Last updated 3 mins ago</p> */}
                      </div>
                    </div>
                  </div>
                ))
              : <div className="d-flex justify-content-center align-item-center w-100">
              <div class="spinner-grow my-5" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>}
          </div>
        </section>
      </section>
    </>
  );
};

export default HomeShopPage;

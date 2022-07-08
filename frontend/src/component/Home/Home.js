import React, { Fragment, useEffect } from "react";

// Importing the mouse icon in scroll button
import { CgMouse } from "react-icons/all";

// Styling the home page , css file
import "./Home.css";

// ProductCard component that will be reused
import ProductCard from "./ProductCard.js";

// setting cutsom title 
import MetaData from "../layout/MetaData";

// getting product in home page
import { clearErrors, getProduct } from "../../actions/productAction";

// pre-req for getting products
import { useSelector, useDispatch } from "react-redux";

import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// testing
// const product = {
//   name: "Blue Shirt",
//   images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
//   price: "$300",
//   _id: "aditya",
// }

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                {/* CgMouse is for the mouse icon imported from react-icons */}
                Scroll <CgMouse /> 
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          {/* Here react is properly used i.e., REUSE OF COMPONENTS */}
          <div className="container" id="container">
            {/* Products will be fetched from REDUX when we implement it */}
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

              {/* <ProductCard product = {product} /> */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

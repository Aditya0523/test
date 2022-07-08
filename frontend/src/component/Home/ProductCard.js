import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

// const options = {
//   edit : false,
//   color: "rgba(20,20,20,0.1)",
//   activeColor: "tomato",
//   size: window.innerWidth < 600 ? 20 :25,
//   value: 2.5,
//   isHalf: true,
// }

// Receive the product coming as attribute in component
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        {/* Reviews inside span */}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
       {/* <span> (256 Reviews) </span> */}
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;

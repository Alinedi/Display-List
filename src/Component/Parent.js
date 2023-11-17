import React, { useEffect } from "react";
import { connect } from "react-redux";
import Child from "./Child";
import { fetchProducts } from "../Redux/actions";

const Parent = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="parent-container">
      <h1>Product List</h1>
      {products.map((product) => (
        <Child key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { fetchProducts })(Parent);

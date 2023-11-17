import React from "react";

const Child = ({ product }) => {
  return (
    <div className="child-container">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default Child;

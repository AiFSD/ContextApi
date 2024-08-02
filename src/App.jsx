import React from "react";
import Items from "./CardDesign/Items";
import products from "./Data";
import "./App.css";

const App = () => {
  return (
    <div className="show">
      {products.map((product) => (
        <Items key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;

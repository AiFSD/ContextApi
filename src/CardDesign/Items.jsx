import React, { useContext } from "react";
import QuantitySelector from "../card functions/QuantitySelector";
import { CartContext } from "../card functions/CartContext";

const Items = ({ product }) => {
  const { cart, addOrUpdateItem, removeItem, getTotal } =
    useContext(CartContext);

  console.log("Cart:", cart);
  console.log("Product:", product);


  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  console.log("Quantity:", quantity);

  const handleQuantityChange = (selectedOption) => {
    try {
      console.log("Selected option:", selectedOption);
      addOrUpdateItem(product, selectedOption.value);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = () => {
    try {
      removeItem(product.id);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="footer">
      <div className="item">
        <div className="img">
          <img src={product.image} alt="" className="imgs" />
        </div>
        <div className="class">
          <div className="title">
            <h3>{product.title}</h3>
          </div>
          <div className="dclass">
            <div className="des">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="cat">
            {" "}
            <p>{product.category}</p>
          </div>
        </div>

        <QuantitySelector onChange={handleQuantityChange} value={quantity} />

        <div className="amount"> </div>
      </div>
      <div className="button">
        <button className="btn" onClick={handleRemoveItem}>
          Remove
        </button>
      </div>
      <div className="foot">
        <div className="maincon">
          <div className="sub">SUBTOTAL :</div>
          <div className="ship">SHIPPING :</div>
          <div className="value">TOTAL :</div>
        </div>
      
      <div className="values">
        <div className="subtotal">${(quantity * product.price).toFixed(2)}</div>
        <div className="shipping">Free</div>
        <div className="total">
         ${getTotal ? getTotal().toFixed(2) : "Error getting total"}
        </div>
          </div>
          </div>
    </div>
  );
};

export default Items;

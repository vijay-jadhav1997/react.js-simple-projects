// import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../appStore/slices/cartSlice";

function Cart() {
  const { items } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  function handleRemove(item) {
    dispatch(removeItem(item));
  }

  const handleClearAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h3>Here is your all products. Lets go and shop them.</h3>
      <div className="clearAllBtnBox">
        <button className="clearAllBtn" onClick={handleClearAll}>
          Clear all
        </button>
      </div>
      <div className="pruductsContainer">
        {items.map((item, index) => {
          const { title, image, price, rating } = item;
          return (
            <div key={index} className="product">
              <img src={image} alt="" />
              <h3 className="title">{title}</h3>
              <div className="priceBox">
                <h4>$ {price}/-</h4> <h4>{rating?.rate}⭐</h4>
              </div>
              <button
                className="removeBtn"
                onClick={() => handleRemove(item?.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;

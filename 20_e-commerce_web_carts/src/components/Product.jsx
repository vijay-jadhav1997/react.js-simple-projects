import { useDispatch } from "react-redux";
import { addItem } from "../appStore/slices/cartSlice";

function Product(props) {
  const dispatch = useDispatch();

  const { title, description, image, price, rating } = props?.productInfo;

  function handleAddItem() {
    dispatch(addItem());
  }

  return (
    <div className="product">
      <img src={image} alt="" />
      <h3 className="title">{title}</h3>
      <div className="priceBox">
        <h4>$ {price}/-</h4> <h4>{rating?.rate}⭐</h4>
      </div>
      <button className="addBtn" onClick={handleAddItem}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;

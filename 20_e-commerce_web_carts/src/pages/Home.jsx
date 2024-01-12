import { useEffect } from "react";
import Product from "../components/Product";
import { fetchProducts } from "../appStore/slices/productSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (products.length === 0) {
    return (
      <div className="home">
        <h2>{status}</h2>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="pruductsContainer">
        {products.map((product) => {
          return <Product key={product.id} productInfo={product} />;
        })}
      </div>
    </div>
  );
}

export default Home;

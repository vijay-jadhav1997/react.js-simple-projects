import { useEffect, useState } from "react";
import Product from "../components/Product";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      // console.log(productsData);
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
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

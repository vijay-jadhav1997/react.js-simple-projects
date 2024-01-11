import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((store) => store.cart);
  return (
    <div className="navbar">
      <span>redux tutorial</span>
      <div className="navLinkBox">
        <Link className="navLink" to={"/"}>
          Home
        </Link>
        <Link className="navLink" to={"/"}>
          Cart
        </Link>
        <span>items({items.length})</span>
      </div>
    </div>
  );
};

export default Navbar;

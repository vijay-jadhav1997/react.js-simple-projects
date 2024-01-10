import { Link } from "react-router-dom";

const Navbar = () => {
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
        <span>items(0)</span>
      </div>
    </div>
  );
};

export default Navbar;

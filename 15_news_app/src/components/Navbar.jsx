import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <a href="#" className="navbar-brand">
          MauliNews
        </a>
        <button type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" aria-current="page" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

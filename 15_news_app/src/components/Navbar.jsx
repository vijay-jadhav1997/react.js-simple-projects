import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <a href="#" className="navbar-brand">
          MauliNews
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="category" onClick={() => setCategory("general")}>
                General
              </div>
            </li>
            <li className="nav-item">
              <div className="category" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="category" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="category"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="category" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="category" onClick={() => setCategory("sports")}>
                Soprts
              </div>
            </li>
            <li className="nav-item">
              <div
                className="category"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

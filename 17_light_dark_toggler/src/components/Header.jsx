import logo from "../assets/DnyanobaTukoba.jpg";
import profileImg from "../assets/vijay.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img src={logo} alt="logo" />
      </div>
      <div className="middle-section">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </div>
      <div className="right-section">
        <img src={profileImg} alt="Profile Image" />
      </div>
    </div>
  );
};

export default Header;

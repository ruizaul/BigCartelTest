import Fletch from "../assets/images/Fletch.svg";
import Logo from "../assets/images/Logo.svg";
import "../App.css";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <img src={Fletch} alt="" />
      </div>
    </div>
  );
};

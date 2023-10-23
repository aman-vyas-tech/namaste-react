import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-cotainer">
        <img className="logo" src={LOGO_URL} />
        <div>Radhika's Cafe</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
                if(btnName === 'Login') {
                    setBtnName("Logout");
                } else {
                    setBtnName("Login");
                }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

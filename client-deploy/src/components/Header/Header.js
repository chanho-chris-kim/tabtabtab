import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/image/logo.png";
import hamburgerIcon from "../../assets/image/hamburger.png";
import NavModal from "../NavModal/NavModal";
import { useState } from "react";

function Header() {
    const [hamburger, setHamburger] = useState(true);
  const hamburgerHandler = () => {
    if (!hamburger) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div>
        <NavLink
          exact
          to="/"
          className="header__link"
          activeClassName="header__link--active"
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="header__link"
          activeClassName="header__link--active"
        >
          {" "}
          About Us{" "}
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="header__link"
          activeClassName="header__link--active"
        >
          {" "}
          Contact Us{" "}
        </NavLink>
        <NavLink
          exact
          to="/support"
          className="header__link"
          activeClassName="header__link--active"
        >
          {" "}
          Support{" "}
        </NavLink>
      </div>
      <img
        className={hamburger === false ? "header__btn--open" : "header__btn"}
        src={hamburgerIcon}
        alt="navigation icon"
        onClick={hamburgerHandler}
      />
      {hamburger === false && <NavModal setHamburger={setHamburger}/> }
    </div>
  );
}

export default Header;

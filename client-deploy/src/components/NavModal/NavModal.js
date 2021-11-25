import exit from "../../assets/image/exit.png";
import { Link, NavLink } from "react-router-dom";
import "./NavModal.scss";

function NavModal({ setHamburger }) {
  const clickHandler = () => {
    setHamburger(true);
  };

  return (
    <div className="nav-modal">
      <img
        onClick={clickHandler}
        src={exit}
        alt="exit navigation bar icon"
        className="nav-modal__icon"
      />
      <NavLink
        exact
        to="/"
        className="nav-modal__menu"
        activeClassName="nav-modal__menu--active"
        onClick={clickHandler}
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink
        exact
        to="/about"
        className="nav-modal__menu"
        activeClassName="nav-modal__menu--active"
        onClick={clickHandler}
      >
        {" "}
        About Us{" "}
      </NavLink>
      <NavLink
        exact
        to="/contact"
        className="nav-modal__menu"
        activeClassName="nav-modal__menu--active"
        onClick={clickHandler}
      >
        {" "}
        Contact Us{" "}
      </NavLink>
      <NavLink
        exact
        to="/support"
        className="nav-modal__menu"
        activeClassName="nav-modal__menu--active"
        onClick={clickHandler}
      >
        {" "}
        Support{" "}
      </NavLink>
    </div>
  );
}

export default NavModal;

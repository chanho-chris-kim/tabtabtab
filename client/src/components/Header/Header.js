import { Link, NavLink } from "react-router-dom";
import "./Header.scss"
import logo from '../../assets/image/logo.png'

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src={logo} alt="logo"/>
            </Link>
            <div>
            <NavLink exact to="/" className="header__link" activeClassName="header__link--active"> Home </NavLink>
            <NavLink exact to="/about" className="header__link" activeClassName="header__link--active"> About Us </NavLink>
            <NavLink exact to="/contact" className="header__link" activeClassName="header__link--active"> Contact Us </NavLink>
            <NavLink exact to="/support" className="header__link" activeClassName="header__link--active"> Support </NavLink>
            </div>
        </div>
    )
}

export default Header

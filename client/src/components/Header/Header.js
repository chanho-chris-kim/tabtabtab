import React from 'react'
import { Link } from "react-router-dom";
import "./Header.scss"
import logo from '../../assets/image/logo.png'

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src={logo} alt="logo"/>
            </Link>
            <div>
            <Link to="/" className="header__link"> Home </Link>
            <Link to="/about" className="header__link"> About Us </Link>
            <Link to="/contact" className="header__link"> Contact Us </Link>
            <Link to="/support" className="header__link"> Support </Link>
            </div>
        </div>
    )
}

export default Header

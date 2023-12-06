// Navbar.js
import React from 'react';
import { HiHomeModern } from 'react-icons/hi2';
import { FaListAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar({ onOpenLoginForm }) {
  return (
    <div className="navbar-container">
      <a className="navbar-logo">
        <img className="logo" src={logo} alt="Logo" />
        <div className="link-text">MangaKu</div>
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          {/* Corrija o atributo exact para uma string */}
          <NavLink to="/" className="nav-link" exact="true">
            <HiHomeModern className="nav-icon" />
            <div className="link-text">HOME</div>
          </NavLink>
        </li>
        <li className="nav-item">
          {/* Corrija o atributo exact para uma string */}
          <NavLink to="/listagem" className="nav-link" exact="true">
            <FaListAlt className="nav-icon" />
            <div className="link-text">LISTAGEM</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <button className="loginbtn" id="toggleButton" onClick={onOpenLoginForm}>
              Login - Cadastro
            </button>
            <div className="link-text">CADASTRO - LOGIN</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

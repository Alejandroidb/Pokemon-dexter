import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inActive')
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className={({ isActive }) => `navbar-brand ${setActiveClass({ isActive })}`} to="/">
          <img src="src\assets\img\logo-pokemon-79x45.png" alt="pokemon" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-warning ${setActiveClass({ isActive })}`} to="/" aria-current="page" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-warning ${setActiveClass({ isActive })}`} to="/Pokemones" >
                Pokemon
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
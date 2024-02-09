import style from "./nav.module.scss"
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <nav className={style.navStyle}>
    <div className={style.heroImg}><img src="/src/assets/images/overlookHeroImg.jpg" /></div>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/hotels">Hoteller & Destinationer</NavLink>
        </li>
        <li>
        
          <NavLink to="/rooms">Værelser</NavLink>
        </li>
        <li>
        
          <NavLink to="/reservation">Reservation</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
    </>
    
  );
};

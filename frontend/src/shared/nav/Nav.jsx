import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="navbar--img">
        <img src="https://www.mscbs.gob.es/diseno/img/head_logo-gobierno.png" alt=""/>
        <img src="https://www.mscbs.gob.es/diseno/img/ms.png" alt=""/>
        <img src="https://www.mscbs.gob.es/diseno/img/head_logo-agenda2030.png" alt=""/>
      </div>
      <div className="navbar--links">
        <NavLink to="/" className="navbar--link">
          HOME
        </NavLink>
        <NavLink to="/cita" className="navbar--link">
          PIDE CITA
        </NavLink>
        <NavLink to="/validacion" className="navbar--link">
          VALIDACION
        </NavLink>
      </div>
    </div>
  );
}

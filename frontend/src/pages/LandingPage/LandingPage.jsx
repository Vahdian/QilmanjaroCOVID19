import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.scss";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <h1>VACUNACION COVID-19</h1>
      <img
        src="https://vacunacovid.catsalut.gencat.cat/inici/resources/24c1e7e8.svg"
        className="landingPage--img"
        alt="covid"
      ></img>
      <h3 className="landingPage--text">
        La vacunación contra el COVID-19 tiene como objetivo alcanzar la
        inmunidad de grupo que permitirá poner fin a la pandemia. ¡Muchas
        gracias por <strong>formar parte de la solución!</strong>
      </h3>
      <Link to="/cita">
        <button className="landingPage--button">
          <img
            src="https://vacunacovid.catsalut.gencat.cat/inici/resources/078adece1.svg"
            className="landingPage--button--image"
            alt="cita"
          ></img>
          PIDE TU CITA AQUI
        </button>
      </Link>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./data.scss";
export default function Data() {
  const [user, setUser] = useState([]);

  function getData() {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUser(data);
    console.log(user);
  }

  useEffect(getData, []);

  return (
    <div className="data">
      <h1>TUS DATOS:</h1>
      <p>¡Muchas gracias {user.username}!</p>
      <h4>Has reservado con exito una cita para el dia {user.date}</h4>
      <h3>
        Para acceder a tu cita deberas usar tu DNI {""}
        <span className="specialText">{user.dni}</span> como nombre de usuario.
      </h3>
      <h2 className="specialText">
        Tu codigo es: <span className="specialText2">{user.code}</span>
      </h2>
      <p></p>
    </div>
  );
}

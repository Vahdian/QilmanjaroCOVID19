import { useHistory } from "react-router-dom";
import "react-day-picker/lib/style.css";
import { API } from "../../shared/consts/api.const";
import { useForm } from "react-hook-form";
import "./register.scss";

export default function Register() {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  function onSubmit(newUser) {
    API.post("/users", newUser).then((res) => {
      console.log(res);
      localStorage.setItem("userData", JSON.stringify(res.data));
      console.log(localStorage);
      history.push("/datos");
    });
  }

  return (
    <div className="register">
      <h1>RESERVA TU CITA</h1>
      <form className="register--form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="register--form--input"
          placeholder="Nombre"
          name="username"
          {...register("username", { required: true })}
        ></input>
        <input
          className="register--form--input"
          placeholder="DNI"
          name="dni"
          {...register("dni", { required: true })}
        ></input>
        <input
          className="register--form--input"
          placeholder="Email@ejemplo.com"
          name="email"
          {...register("email", { required: true })}
        ></input>
        <input
          className="register--form--input"
          placeholder="fecha"
          name="date"
          type="date"
          {...register("date", { required: true })}
        ></input>
        <input
          className="register--form--input"
          placeholder="contraseña"
          name="password"
          type="password"
          {...register("password", { required: true })}
        ></input>
        <input
          className="register--form--input"
          value="Registrarme"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

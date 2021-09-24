import { useHistory } from "react-router-dom";
import "react-day-picker/lib/style.css";
import { API } from "../../shared/consts/api.const";
import { useForm } from "react-hook-form";

export default function Validation() {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  function onSubmit(validation) {
    API.post("/validate", validation).then((res) => {
      console.log(res);
    //   history.push("/datos");
    });
  }

  return (
    <div className="register">
      <h1>RESERVA TU CITA</h1>
      <form className="register--form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="register--form--input"
          placeholder="DNI"
          name="dni"
          {...register("dni", { required: true })}
        ></input>
        <input
          className="register--form--input"
          placeholder="Codigo"
          name="code"
          {...register("code", { required: true })}
        ></input>
        <input
          type="submit"
          value="ACCEDER"
          className="register--form--input"
        ></input>
      </form>
    </div>
  );
}

import "react-day-picker/lib/style.css";
import { API } from "../../shared/consts/api2.const";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Validation() {

  const [response, setResponse] = useState([]);

  const { register, handleSubmit } = useForm();

  function onSubmit(validation) {
    API.post("/validate", validation).then((res) => {
      console.log(res);
      setResponse(res.data.message);
      console.log(response);
      //   history.push("/datos");
    });
  }

  return (
    <div className="register">
      <h1>VERIFICACION DE USUARIO</h1>
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
      <h1>{response}</h1>
    </div>
  );
}

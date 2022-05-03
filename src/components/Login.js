//dependencias
import axios from "axios";
import swtAlert from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  let token = sessionStorage.getItem("token");
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //validacion de EMAIL y PASSWORD
    if (email === "" || password === "") {
      swtAlert(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }
    if (email === "" && !regexEmail.test(email)) {
      swtAlert(<h2>Debes escribir una direccion de email válida</h2>);
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swtAlert(<h2>credenciales inválidas</h2>);
      return;
    }
    console.log("ready for sending form");
    //es igual que el fetch pero mejor
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swtAlert(<h2>Correct form</h2>);
        const tokenRes = res.data.token;
        //para guardar info, se necesita el nombre de la "caja" y la informacion que querramos guardar
        sessionStorage.setItem("token", tokenRes);
        //para ver la info, se necesita el nombre de la "caja"
        //sessionStorage.getItem("token");
        history("/listado");
      });
  };
  return (
    <>
      {token && <Navigate to="/listado" />}
      <h2>Formulario de ingreso: </h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email: </span> <br />
          <input type="text" name="email"></input>
        </label>
        <br />
        <label>
          <span>Password: </span> <br />
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
export default Login;

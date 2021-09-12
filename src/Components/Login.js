import swal from "sweetalert";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import imgLogo from "../imgs/Sem Título.png";
import Checkbox from "@material-ui/core/Checkbox";

function Login() {
  const history = useHistory();
  const [pass, setPass] = useState(false);
  const [login, setLogin] = useState({ email: "", pass: "" });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleClick = () => {
    if (
      (login.email === "ufounders@gmail.com" && login.pass === "ufounders") ||
      (login.email === "lucas@gmail.com" && login.pass === "contraseña")
    ) {
      history.push("/home");
    } else {
      swal("Username or Password invalid", "Try again", "error");
    }
  };

  const handleChangePass = () => {
    if (pass === false) {
      setPass(true);
    } else {
      setPass(false);
    }
  };

  return (
    <div className="login">
      <div className="logoLogin">
        <img src={imgLogo} alt="Logo Ufounders" />
      </div>
      <div className="loginBorder">
        <div>
          <h2 className="titleLogin">Entra con tu cuenta</h2>

          <div className="inputGroup input-group mb-3">
            <input
              style={{
                width: "25em",
                minWidth: "20em",
                maxWidth: "85vw",
                borderRadius: "15px",
                margin: "0.5em",
                height: "3em",
              }}
              type="text"
              className="form-control"
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="inputGroup input-group mb-3">
            <input
              style={{
                width: "25em",
                minWidth: "20em",
                maxWidth: "85vw",
                borderRadius: "15px",
                margin: "0.5em",
                height: "3em",
              }}
              type={pass === true ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="pass"
            />
          </div>
          <div className="checkboxPass">
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              onChange={handleChangePass}
            />
            <span>Mostrar contraseña</span>
          </div>

          <div className="inputGroup">
            <button
              style={{
                backgroundColor: "#FF2C55",
                borderColor: "transparent",
                width: "25em",
                minWidth: "20em",
                maxWidth: "85vw",
                borderRadius: "15px",
                margin: "0.5em",
                height: "3em",
              }}
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

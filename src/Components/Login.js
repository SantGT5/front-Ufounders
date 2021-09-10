import swal from "sweetalert";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [login, setLogin] = useState({ email: "", pass: "" });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleClick = () => {
    if (login.email === "test" && login.pass === "test") {
      history.push("/");
    } else {
      swal("Username or Password invalid", "Try again", "error");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "5em" }}
    >
      <div className="loginBorder">
        <div>
          <h2>Ticket Admin</h2>

          <div className="input-group mb-3">
            <input
              style={{ display: "flex" }}
              type="text"
              className="form-control"
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="pass"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import BackHome from "../pages/BackHome";

const Login_page = (/* { setToken } */) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const [hide, setHide] = useState(false);
  const [clicked, setClicked] = useState(false);

  const history = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/login", {
        email: email,
        password: password,
      });
      history("/profile");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    // console.log(username, password, email);
  };

  if (hide) {
    history("/forms/register");
  }
  return (
    <div className="forms">
      <div className="login_page">
        <div className="form-cont">
          <form onSubmit={(e) => hundleSubmit(e)} className="form">
            {msg ? <Alert>{msg}</Alert> : <span></span>}
            <h3 className="text-center">Log In</h3>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label className="form-label">PassWrod</label>
              <input
                type="password"
                name="username"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PassWrod "
                className="form-control"
                required
              />
            </div>
            <div>
              <input
                className="btn btn-primary"
                name="submit"
                type={"submit"}
                value="Login"
              />
            </div>
          </form>
        </div>
        <div className="go-register">
          <div className="go-top">Topp</div>
          <div className="go-bottom">
            <h6>Dont Have an Accouny?!?</h6>
            <Button onClick={() => setHide(!hide)}>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login_page.propTypes = {
//   setToken: propTypes.func.isRequired,
// };
export default Login_page;

import { CheckBoxRounded, Person, RemoveRedEye } from "@material-ui/icons";
import React, { useState } from "react";
import { Container, Col, Alert } from "react-bootstrap";
import Head from "../components/Head";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (/* { setToken } */) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confiPassword, setConfiPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState(false);
  const [hide, setHide] = useState(false);
  const uploadImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const history = useNavigate();

  const hundleImageUpload = (e) => {
    const [file] = e.target.files;
    setFile(e.target.files[0]);

    if (file) {
      const reader = new FileReader();
      const { current } = uploadImage;
      current.file = file;
      console.log(uploadImage);
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const hundleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting");
    try {
      await axios
        .post(
          "http://localhost:8001/users",
          {
            name: userName,
            email: email,
            password: password,
            confiPassword: confiPassword,
            image: file,
            phone: phoneNumber,
          },
          {
            headers: {
              Accept: "multipart/form-data",
            },
            withCredentials: true,
          }
        )
        .then((response) => response.data);
      history("/forms/login");
    } catch (error) {
      console.log(error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  if (hide) {
    history("/forms/login");
  }
  return (
    <div className="forms">
      <div className="login_page">
        <div className="go-register">
          <div className="go-top">Topp</div>
          <div className="go-bottom">
            <h6>Already Have an Acount</h6>
            <button className="btn btn-info" onClick={(e) => setHide(!hide)}>
              Sign In
            </button>
          </div>
        </div>
        <div className="form-cont">
          <form className="form" action="" onSubmit={(e) => hundleSubmit(e)}>
            <h4>Register Form</h4>
            {msg ? <Alert>{msg}</Alert> : <span></span>}
            <div></div>
            <div>
              <label className="form-label">Full Name</label>
              <input
                type={"text"}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="form-control"
                placeholder="First Name + Last Name"
                required
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="UserEmail11@gmail.com"
                required
              />
            </div>
            <div>
              <label className="form-label">Password</label>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                minLength={8}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                <RemoveRedEye className={showPassword ? "clicked" : ""} />
              </span>
            </div>

            <div>
              <label className="form-label">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confiPassword}
                onChange={(e) => setConfiPassword(e.target.value)}
                className="form-control"
                placeholder="*******"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                <RemoveRedEye className={showPassword ? "clicked" : ""} />
              </span>
            </div>

            <div>
              <label className="form-label">Phone Number</label>
              <input
                type={"tel"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                placeholder="+249********"
                required
              />
            </div>
            <button
              type={"submit"}
              className="btn btn-primary text-upper w-100"
              style={{
                marginTop: "10px",
              }}
            >
              Complate <CheckBoxRounded />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Login_page.propTypes = {
//   setToken: propTypes.func.isRequired,
// };
export default Register;

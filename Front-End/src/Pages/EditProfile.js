import { CheckBoxRounded, Person, RemoveRedEye } from "@material-ui/icons";
import React, { useState } from "react";
import { Container, Col, Alert } from "react-bootstrap";
import Head from "../components/Head";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
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
    <>
      <Head />
      <div className="forms">
        <div className="edit-profile">
          <Container className="row">
            <Col md={6} xs={12} className="profile-image">
              <div className="go-register">
                <h6>Already Have an Acount</h6>
                <button
                  className="btn btn-info"
                  onClick={(e) => setHide(!hide)}
                >
                  Sign In
                </button>
              </div>
            </Col>
            <Col md={6} xs={12} className="profile-informtion">
              <form
                className="form row"
                action=""
                onSubmit={(e) => hundleSubmit(e)}
              >
                {msg ? <Alert>{msg}</Alert> : <span></span>}
                <label className="form-label">Full Name</label>
                <input
                  type={"text"}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  placeholder="First Name + Last Name"
                  required
                />
                <label className="form-label">Email</label>
                <input
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="UserEmail11@gmail.com"
                  required
                />
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

                <label className="form-label">Phone Number</label>
                <input
                  type={"tel"}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control"
                  placeholder="+249********"
                  required
                />
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
            </Col>
          </Container>
        </div>
      </div>
      ;
    </>
  );
};

export default EditProfile;

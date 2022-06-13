import React, { useState, useEffect } from "react";
import "./components/style.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import DontFound from "./Pages/DontFound";
import Cart from "./components/Cart";
import Login_page from "./components/Login_page";
import ProductPage from "./Pages/ProductPage";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";
import Head from "./components/Head";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setValues } from "./features/profile/profileSlice";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [sign, setSign] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    refreshToken();
    sendToRedux();
  }, [email]);

  const refreshToken = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:8001/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setPhone(decoded.phone);
      setExpire(decoded.exp);
      setSign(true);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
    const axiosJwt = axios.create();
    axiosJwt.interceptors.request.use(
      async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get("http://localhost:8001/token");
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setName(decoded.name);
          setEmail(decoded.email);
          setPhone(decoded.phone);
          setExpire(decoded.exp);
          setSign(true);
        }
        return config;
      },
      (error) => {
        setSign(false);
        console.log(error);
        return Promise.reject(error);
      }
    );
  };

  const sendToRedux = () => {
    dispatch(setValues({ name: name, email: email, phone: phone, sign: sign }));
  };

  return (
    <div className="App">
      <Router>
        <Head sign={sign} />
        <Routes path="/">
          <Route index element={<Home />} />

          <Route path="forms/login" element={<Login_page />} />
          <Route path="forms/register" element={<Register />} />
          <Route path="admin" element={<AdminPanel />} />
          {/* <Route path="register" element={<Forms />} /> */}

          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="productPage" element={<ProductPage />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="*" element={<DontFound />} />
        </Routes>

        {/* <EditProfile /> */}
      </Router>
    </div>
  );
}

export default App;

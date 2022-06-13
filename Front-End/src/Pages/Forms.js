import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../components/Register";
import EditProfile from "./EditProfile";

const Forms = () => {
  return (
    <div className="forms">
      {/* <Login_page setToken={"token"} /> */}
      {/* <BrowserRouter>
        <Routes path="/forms">
          <Route index path="/login" element={<Login_page />} />
          <Route path="/register" element={<EditProfile />} />
        </Routes>
      </BrowserRouter> */}
      <Register />
    </div>
  );
};

export default Forms;

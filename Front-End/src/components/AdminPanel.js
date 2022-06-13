import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const AdminPanel = () => {
  const [name, setname] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [price, setprice] = useState("");
  const [state, setstate] = useState("");
  const [catigory, setcatigory] = useState("");
  const [seller, setseller] = useState("");
  const [msg, setMsg] = useState("");

  const hundleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          "http://localhost:8001/products",
          {
            name: name,
            image1: image1,
            image2: image2,
            image3: image3,
            price: price,
            state: state,
            catigory: catigory,
            seller: seller,
          },
          {
            headers: {
              Accept: "multipart/form-data",
            },
            withCredentials: true,
          }
        )
        .then((response) => response.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="admin-panel">
      <form className="form" onSubmit={hundleSubmit}>
        <Alert>{msg}</Alert>
        <label>Product Name</label>
        <input
          className="form-control"
          type={"text"}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <label>Product image1</label>
        <input
          className="form-control"
          type={"text"}
          onChange={(e) => setimage1(e.target.value)}
          required
        />
        <label>Product image2</label>
        <input
          className="form-control"
          type={"text"}
          onChange={(e) => setimage2(e.target.value)}
          required
        />
        <label>Product image3</label>
        <input
          className="form-control"
          type={"text"}
          onChange={(e) => setimage3(e.target.value)}
          required
        />
        <label>Product price</label>
        <input
          className="form-control"
          type={"number"}
          onChange={(e) => setprice(e.target.value)}
          required
        />
        <label>Product catigory</label>
        <input
          className="form-control"
          type={"text"}
          onChange={(e) => setcatigory(e.target.value)}
          required
        />
        <label>Product state</label>
        <input
          className="form-control"
          type={"number"}
          onChange={(e) => setstate(e.target.value)}
          required
        />
        <label>Product seller</label>
        <input
          className="form-control"
          type={"text"}
          onChange={(e) => setseller(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;

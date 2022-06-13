import { Container, Row, Col } from "react-bootstrap";
import React from "react";

import Head from "../components/Head";
import Bought from "../components/Bought";
import WishlistSmall from "../components/WishlistSmall";
import CartSmall from "../components/CartSmall";
import Favs from "../components/Favs";
import {
  selectName,
  selectEmail,
  selectPhone,
  selectSign,
} from "../features/profile/profileSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const sign = useSelector(selectSign);

  const history = useNavigate();
  const logout = async () => {
    history("../forms/login");
  };

  const products = [
    {
      id: 3,
      name: "Sumsung s21 ultra",
      image1: "./images/items/3.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
    {
      id: 4,
      name: "Sumsung s21 ultra",
      image1: "./images/items/4.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
    {
      id: 5,
      name: "Sumsung s21 ultra",
      image1: "./images/items/5.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
    {
      id: 6,
      name: "Sumsung s21 ultra",
      image1: "./images/items/5.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
  ];

  console.log(sign);

  if (!sign) {
    return <h3>Unregister Account</h3>;
  } else {
    return (
      <>
        <div className="profile-page">
          <Container>
            <Row>
              <Col md="8" xs="12">
                <Bought />
              </Col>
              <Col md="4" xs="12" className="profile-informtion">
                <h3 className="text-center text-upper">Hello {name} 🧡</h3>
                <p>Your Informtion Like The Following</p>
                <div className="info">
                  <p>email: {email}</p>
                  <p>phone: {phone}</p>
                  <p>Address: Khartoum North</p>
                  <p>Golden Custmor: No</p>
                </div>
                <button type="button" className="btn btn-info w-50">
                  Update Informtion
                </button>
                <button
                  type="button"
                  className="btn btn-info w-50"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </Col>
              <Col md="6" xs="12">
                <WishlistSmall />
              </Col>
              <Col md="6" xs="12">
                <CartSmall />
              </Col>
              <Col xs="12">
                <h6 className="text-center">Catigory You Woulde Like</h6>
                <Favs
                  pitCount={4}
                  md={3}
                  size={"normal"}
                  xs={3}
                  fs={products}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
};

export default Profile;

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavOne from "./NavOne";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  Person,
} from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";
import { selectName } from "../features/profile/profileSlice";
const Head = ({ sign }) => {
  const [fixed, setFixed] = useState(false);
  const count = useSelector(selectProducts);

  const username = useSelector(selectName);
  // $("body").onscroll(() => {
  //   console.log(window.scrollY);
  // });
  // window.onscroll = () => {
  //   // console.log(window.scrollY);
  //   if (window.scrollY > 30) {
  //     setFixed(true);
  //   } else {
  //     setFixed(false);
  //   }
  // };
  // $("body").on("scroll", function () {
  // });
  return (
    <div className="head_container">
      <NavOne />
      <div className={`nav-two ${fixed ? "fixed" : ""}`}>
        <Container>
          <Row className="nav-two-cont">
            <Col md={4} className="nav-two-logo">
              <Link to={"/"}>Kurdii</Link>
            </Col>
            <Col xs={5} className="nav-two-form">
              <Form className="d-flex align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Search For Shit"
                  className="nav-two-search-feild"
                />
                <Form.Select
                  type="text"
                  placeholder="catigories"
                  className="nav-two-catigories"
                >
                  <option disabled>Catigories</option>
                  <option>Moblis</option>
                  <option>Moblis</option>
                  <option>Moblis</option>
                </Form.Select>
                <Button className="button">
                  <SearchOutlined />
                </Button>
              </Form>
            </Col>
            <Col md={3} xs={6} className="nav-two-icons">
              <div className={sign ? "welcoming-cont" : ""}>
                {sign ? (
                  <Link className="welcoming" to={"/profile"}>
                    Hi {username} 👋
                  </Link>
                ) : (
                  <Link to={"/forms/login"}>
                    <Person />
                  </Link>
                )}
              </div>
              <div className="cart-icon">
                <Link to="/cart">
                  <ShoppingCartOutlined />
                  <span className="cart-counter">{count.length}</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Head;

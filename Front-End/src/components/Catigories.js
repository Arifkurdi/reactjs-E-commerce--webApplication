import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import image from "../images/products/5.png";

const Catigories = () => {
  return (
    <div className="catigorys">
      <Container>
        <Row>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Smart Phones & Tablets</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Video Games & Consoles</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Gadgets</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Home Entertaiment</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Laptops & Computers</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Accessories</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Camaras & Photography</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="4" xs="6">
            <div className="cat-cont line">
              <div className="cat-img">
                <img src={image} />
              </div>
              <div className="cat-links">
                <h5>
                  <a href="">Computer Components</a>
                </h5>
                <div>
                  <a href="">Accessoris</a>
                  <a href="">Chargers</a>
                  <a href="">Powerbanks</a>
                  <a href="">Smartphones</a>
                  <a href="">External Storage</a>
                </div>
                <span>
                  <a href="">See More</a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catigories;

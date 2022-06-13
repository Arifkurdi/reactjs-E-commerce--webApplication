import React from "react";
import image from "../images/items/11.jpg";
import image2 from "../images/items/10.jpg";
import image3 from "../images/items/9.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowForward } from "@material-ui/icons";
const Help = () => {
  return (
    <div className="help">
      <Container>
        <Row>
          <Col xs="12" md="4">
            <a href="">
              <div className="hot-deal">
                <Row>
                  <Col>
                    <img className="deal-img" src={image} alt="someImage" />
                  </Col>
                  <Col>
                    <div className="deal-caption">
                      Catch the hotest <span>dail</span> on Camera
                    </div>
                    <span className="go-deal">
                      <ArrowForward />{" "}
                    </span>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col xs="12" md="4">
            <a href="">
              <div className="hot-deal">
                <Row>
                  <Col>
                    <img className="deal-img" src={image2} alt="someImage" />
                  </Col>
                  <Col>
                    <div className="deal-caption">
                      The Atrractive <span>Companies</span> of Sensors
                    </div>
                    <span className="go-deal">
                      <ArrowForward />{" "}
                    </span>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col xs="12" md="4">
            <a href="">
              <div className="hot-deal">
                <Row>
                  <Col>
                    <img className="deal-img" src={image3} alt="someImage" />
                  </Col>
                  <Col>
                    <div className="deal-caption">
                      Catch the hotest <span>dail</span> on Headphones
                    </div>
                    <span className="go-deal">
                      <ArrowForward />{" "}
                    </span>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      {/* <div className="container">
        <h4 className="h2">Wanna Find Somethin</h4>
        <p>&lt; Check Our Catigories &gt;&gt;&gt;</p>
        <div className="catgs row">
          <Col md="3" xs="6">
            <a href="" className="link-catg">
              <h5 className="head-catg">phones</h5>
              <img src={image} className="img-catg" alt="" />
            </a>
          </Col>
          <Col md="3" xs="6">
            <a href="" className="link-catg">
              <h5 className="head-catg">phones</h5>
              <img src={image} className="img-catg" alt="" />
            </a>
          </Col>
          <Col md="3" xs="6">
            <a href="" className="link-catg">
              <h5 className="head-catg">phones</h5>
              <img src={image} className="img-catg" alt="" />
            </a>
          </Col>
          <Col md="3" xs="6">
            <a href="" className="link-catg">
              <h5 className="head-catg">phones</h5>
              <img src={image} className="img-catg" alt="" />
            </a>
          </Col>
        </div>
      </div> */}
    </div>
  );
};

export default Help;

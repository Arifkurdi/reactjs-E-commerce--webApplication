import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../images/products/13.png";
import Favs from "./Favs";
import $ from "jquery";

const Entertaiment = ({ fs }) => {
  let el_slide = document.querySelectorAll(".e-slide-ball");

  for (let i = 0; i < el_slide.length; i++) {
    el_slide[i].onclick = function () {
      let c = 0;
      while (c < el_slide.length) {
        el_slide[c++].className = "e-slide-ball";
      }
      el_slide[i].className = "e-slide-ball active";
    };
  }
  $("#e-ball-one").on("click", function () {
    $(".e-slide-one").removeClass("hide").show(150).addClass("active");
    $(".e-slide-three").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-two").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-four").hide(150).removeClass("active").addClass("hide");
  });
  $("#e-ball-two").on("click", function () {
    $(".e-slide-one").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-three").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-four").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-two").removeClass("hide").show(150).addClass("active");
  });
  $("#e-ball-three").on("click", function () {
    $(".e-slide-one").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-two").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-four").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-three").removeClass("hide").show(150).addClass("active");
  });
  $("#e-ball-four").on("click", function () {
    $(".e-slide-one").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-two").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-three").hide(150).removeClass("active").addClass("hide");
    $(".e-slide-four").removeClass("hide").show(150).addClass("active");
  });

  return (
    <div className="entertaiment">
      <Container>
        <Row>
          <Col xs="6">
            <img src={image} className="entertaiment-img w-100" />
          </Col>
          <Col>
            <div className="entertaiment-products-section">
              <div className="entertaiment-head">
                <div className="e-head">
                  Television entertaiment
                  <span></span>
                </div>
                <div className="switch">
                  <span className="previos-btn">{"< "}</span>
                  <span className="next-btn">{">"}</span>
                </div>
              </div>
              <hr className="hr-edit" />
              <div className="entertaiment-products">
                <div className="slide e-slide-one active">
                  <Row>
                    <Favs
                      fs={fs.slice(0, 4)}
                      md={6}
                      xs={12}
                      pitCount={4}
                      size={"small"}
                    />
                  </Row>
                </div>
                <div className="slide e-slide-two hide">
                  <Row>
                    <Favs
                      fs={fs.slice(4, 8)}
                      md={6}
                      xs={12}
                      pitCount={4}
                      size={"small"}
                    />
                  </Row>
                </div>
                <div className="slide e-slide-three hide">
                  <Row>
                    <Favs
                      fs={fs.slice(8, 12)}
                      md={6}
                      xs={12}
                      pitCount={3}
                      size={"small"}
                    />
                  </Row>
                </div>
                <div className="slide e-slide-four hide">
                  <Row>
                    <Favs
                      fs={fs.slice(12, 16)}
                      md={6}
                      xs={12}
                      pitCount={4}
                      size={"small"}
                    />
                  </Row>
                </div>
                <div className="slide-balls">
                  <span
                    className="e-slide-ball active"
                    id="e-ball-one"
                    data-open="e-slide-one"
                  ></span>
                  <span
                    className="e-slide-ball"
                    id="e-ball-two"
                    data-open="e-slide-two"
                  ></span>
                  <span
                    className="e-slide-ball"
                    id="e-ball-three"
                    data-open="e-slide-three"
                  ></span>
                  <span
                    className="e-slide-ball"
                    id="e-ball-four"
                    data-open="e-slide-four"
                  ></span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Entertaiment;

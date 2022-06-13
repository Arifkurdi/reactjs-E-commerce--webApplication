import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import $ from "jquery";
import Favs from "./Favs";
const ExactCatg = ({ fs }) => {
  let elx_slide = document.querySelectorAll(".ex-slide-ball");

  for (let i = 0; i < elx_slide.length; i++) {
    elx_slide[i].onclick = function () {
      let c = 0;
      while (c < elx_slide.length) {
        elx_slide[c++].className = "ex-slide-ball";
      }
      elx_slide[i].className = "ex-slide-ball active";
    };
  }

  $("#ex-ball-one").on("click", function () {
    $(".ex-slide-one").removeClass("hide").addClass("active");
    $(".ex-slide-two").removeClass("active").addClass("hide");
  });
  $("#ex-ball-two").on("click", function () {
    $(".ex-slide-two").removeClass("hide").addClass("active");
    $(".ex-slide-one").removeClass("active").addClass("hide");
  });
  return (
    <div className="exact-catg">
      <Container>
        <div className="entertaiment-head">
          <div className="e-head">
            Exact Catigory
            <span></span>
          </div>
          <div className="switch">
            <span className="previos-btn">{"< "}</span>
            <span className="next-btn">{">"}</span>
          </div>
        </div>
        <hr className="hr-edit" />
        <div className="exact-products">
          <div className="slide ex-slide-one active">
            <Row>
              <Favs fs={fs} md={3} xs={12} pitCount={4} size={"small"} />
            </Row>
          </div>
          <div className="slide ex-slide-two hide">
            <Row>
              <Favs fs={fs} md={3} xs={12} pitCount={3} size={"small"} />
            </Row>
          </div>
        </div>
        <div className="slide-balls">
          <span
            className="ex-slide-ball active"
            id="ex-ball-one"
            data-open="e-slide-one"
          ></span>
          <span
            className="ex-slide-ball"
            id="ex-ball-two"
            data-open="ex-slide-two"
          ></span>
        </div>
      </Container>
    </div>
  );
};

export default ExactCatg;

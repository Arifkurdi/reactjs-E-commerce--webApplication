import React from "react";
import { Container, Row } from "react-bootstrap";
import $ from "jquery";
import Favs from "./Favs";
const Tranding = ({ fs }) => {
  let tr_slide = document.querySelectorAll(".t-slide-ball");

  for (let i = 0; i < tr_slide.length; i++) {
    tr_slide[i].onclick = function () {
      let c = 0;
      while (c < tr_slide.length) {
        tr_slide[c++].className = "t-slide-ball";
      }
      tr_slide[i].className = "t-slide-ball active";
    };
  }

  $("#t-ball-one").on("click", function () {
    $(".t-slide-one").removeClass("hide").addClass("active");
    $(".t-slide-two").removeClass("active").addClass("hide");
  });
  $("#t-ball-two").on("click", function () {
    $(".t-slide-two").removeClass("hide").addClass("active");
    $(".t-slide-one").removeClass("active").addClass("hide");
  });
  return (
    <div className="tranding">
      <Container>
        <div className="entertaiment-head">
          <div className="e-head">
            Tranding Products
            <span></span>
          </div>
          <div className="switch">
            <span className="previos-btn">{"< "}</span>
            <span className="next-btn">{">"}</span>
          </div>
        </div>
        <hr className="hr-edit" />
        <div className="tranding-products">
          <div className="slide t-slide-one active">
            <Row>
              <Favs fs={fs} md={3} xs={6} pitCount={4} size={"small"} />
            </Row>
          </div>
          <div className="slide t-slide-two hide">
            <Row>
              <Favs fs={fs} md={3} xs={6} pitCount={3} size={"small"} />
            </Row>
          </div>
        </div>
        <div className="slide-balls">
          <span
            className="t-slide-ball active"
            id="t-ball-one"
            data-open="e-slide-one"
          ></span>
          <span
            className="t-slide-ball"
            id="t-ball-two"
            data-open="t-slide-two"
          ></span>
        </div>
      </Container>
    </div>
  );
};

export default Tranding;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Favs from "./Favs";

const BestSeller = ({ fs }) => {
  return (
    <div className="best-seller">
      <Container>
        <div className="entertaiment-head">
          <div className="e-head">
            Best Seller
            <span></span>
          </div>
          <div className="switch">
            <span className="previos-btn">{"< "}</span>
            <span className="next-btn">{">"}</span>
          </div>
        </div>
        <hr className="hr-edit" />
        <div className="best-produts">
          <Row>
            <Col md="8">
              <Row>
                <Favs fs={fs} md={"4"} xs={"6"} pitCount={6} size={"normal"} />
              </Row>
            </Col>
            <Col md="4">
              <Favs fs={fs} pitCount={1} size={"big"} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;

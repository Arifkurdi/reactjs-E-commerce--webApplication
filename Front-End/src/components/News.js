import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { Send, Telegram } from "@material-ui/icons";
const News = () => {
  return (
    <div className="news">
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="d-flex headLine" xs="4">
            <h4>
              <Telegram />
            </h4>
            <h6>Sign Up To NewSeltter</h6>
          </Col>
          <Col className="get-cobon" xs="4">
            <p>
              ...Get <span>20$</span> Cobon when subscribe
            </p>
          </Col>
          <Col className="d-flex email-sub" xs="4">
            <Form className="d-flex align-items-center">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="email-subs"
              />
              <Button className="button">Subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;

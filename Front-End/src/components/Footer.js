import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  HeadsetMic,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      {/* <Container> */}
      <Container>
        <Row>
          <div className="footer-cont d-flex">
            <Col md={5} xs={12}>
              <div className="site-dateils">
                <div className="site-logo">
                  <h5>Kurdii</h5>
                </div>
                <div className="call-datial d-flex">
                  <div className="call-icon">
                    <HeadsetMic />
                  </div>
                  <div className="call-number">
                    <span>Call for Help \\ 24/7 Respond</span>
                    <div>
                      <span>+249</span>
                      <span> </span>
                      <span> 960 </span>
                      <span> </span>
                      <span> 748 </span>
                      <span> </span>
                      <span> 043</span>
                    </div>
                  </div>
                </div>
                <div className="site-location">
                  <p>Conect info</p>
                  <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div className="network-conect d-flex">
                  <div>
                    <Facebook className="facebook" />
                  </div>
                  <div>
                    <WhatsApp className="whatsapp" />
                  </div>
                  <div>
                    <Instagram className="instagram" />
                  </div>
                  <div>
                    <LinkedIn className="linkedin" />
                  </div>
                  <div>
                    <YouTube className="youtube" />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="find-fast">
                <h6>Find Fast</h6>
                <div className="d-flex">
                  <div>
                    <a href="">Laptop & Computer</a>
                    <a href="">Camaras & Photography</a>
                    <a href="">Smart Phones & Tablets</a>
                    <a href="">Video Games</a>
                    <a href="">TV & Audio</a>
                    <a href="">Gadgets</a>
                    <a href="">Whaterproof Headphones</a>
                  </div>
                  <div>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Wishlist</a>
                    <a href="">Compare</a>
                    <a href="">FAQ</a>
                    <a href="">Store Directory</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="find-fast">
                <h6>Costmer Care</h6>
                <div className="d-flex">
                  <div>
                    <a href="">My Account</a>
                    <a href="">Track your Order</a>
                    <a href="">Customer</a>
                    <a href="">Return/Exchange</a>
                    <a href="">FAQs</a>
                    <a href="">Product Support</a>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

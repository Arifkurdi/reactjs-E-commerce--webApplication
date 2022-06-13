import React from "react";
import { Container } from "react-bootstrap";
import Image from "../images/logos/logo4.png";
import Image2 from "../images/logos/logo3.png";
import Image3 from "../images/logos/logo2.png";
import Image4 from "../images/logos/logo1.png";

const Companies = () => {
  return (
    <div className="companies">
      <Container>
        <div className="companies-logos">
          <div className="company">
            <img src={Image} />
          </div>
          <div className="company">
            <img src={Image2} />
          </div>
          <div className="company">
            <img src={Image3} />
          </div>
          <div className="company">
            <img src={Image4} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Companies;

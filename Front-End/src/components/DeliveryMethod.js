import { CheckBox, CheckBoxOutlineBlankRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
// import image from "../images/fedex.png";

const DeliveryMethod = ({ image }) => {
  const [check, setCheck] = useState(false);

  return (
    <Col xs={6} className="d-flex align-items-center">
      <button
        className="check btn"
        type="button"
        onClick={() => setCheck(!check)}
      >
        {check ? <CheckBox /> : <CheckBoxOutlineBlankRounded />}
      </button>
      <div className={`delivary-method ${check ? "check" : ""}`}>
        <div className="delivery-company">
          <img src={image} alt="" />
        </div>
        <div className="ship-details">
          <strong>DHL Company</strong>
          <br />
          <span>Expected Delivery</span> <br />
          <span>Friday, 27 </span>
        </div>
        <div className="ship-price">$5.25</div>
      </div>
    </Col>
  );
};

export default DeliveryMethod;

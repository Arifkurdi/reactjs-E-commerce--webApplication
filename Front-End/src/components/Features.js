import {
  FeedbackOutlined,
  LocalActivityOutlined,
  LocalShippingOutlined,
  Payment,
  SettingsBackupRestoreOutlined,
} from "@material-ui/icons";
import React from "react";
import { Container } from "react-bootstrap";

const Features = () => {
  return (
    <div className="features">
      <Container>
        <ul className="feat-cont">
          <li className="d-inline-block">
            <div>
              <LocalShippingOutlined
                style={{
                  color: "#c06181",
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div className="feat-cap">
              <div>Free Delivery</div>
              <span>for 50%</span>
            </div>
          </li>
          <li className="d-inline-block">
            <div>
              <FeedbackOutlined
                style={{
                  color: "#c06181",
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div className="feat-cap">
              <div>99% Positive</div>
              <span>Feedbacks</span>
            </div>
          </li>
          <li className="d-inline-block">
            <div>
              <SettingsBackupRestoreOutlined
                style={{
                  color: "#c06181",
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div className="feat-cap">
              <div>365 Days</div>
              <span>For Free Return</span>
            </div>
          </li>
          <li className="d-inline-block">
            <div>
              <Payment
                style={{
                  color: "#c06181",
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div className="feat-cap">
              <div>Payment</div>
              <span>Secure System</span>
            </div>
          </li>
          <li className="d-inline-block">
            <div>
              <LocalActivityOutlined
                style={{
                  color: "#c06181",
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div className="feat-cap">
              <div>Only Best</div>
              <span>Brands</span>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Features;

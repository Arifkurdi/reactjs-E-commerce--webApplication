import { Col, Row, Container } from "react-bootstrap";
import {
  LocationOnOutlined,
  FavoriteBorderOutlined,
  MessageOutlined,
  HistoryOutlined,
  FeaturedPlayListOutlined,
} from "@material-ui/icons";
const NavOne = () => {
  return (
    <div className="nav-one">
      <Container>
        <Row>
          <Col className="nav-one-welcome" md="4">
            Welcome Ya Kosom
          </Col>
          <Col md="2"></Col>
          <Col className="nav-one-links" md="6">
            <ul className="list-unstyled d-flex">
              <li>
                <LocationOnOutlined /> Resources
              </li>
              <li>
                <FavoriteBorderOutlined />
                Wishlist
              </li>
              <li>
                <MessageOutlined />
                Comunity
              </li>
              <li>
                <FeaturedPlayListOutlined />
                Publur
              </li>
              <li>
                <HistoryOutlined />
                History
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavOne;

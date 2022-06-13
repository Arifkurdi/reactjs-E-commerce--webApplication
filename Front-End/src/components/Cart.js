import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DeliveryMethod from "./DeliveryMethod";
import FavLine from "./FavLine";
import fedExIcon from "../images/fedex.png";
import dhlIcon from "../images/dhl.png";
import upsIcon from "../images/ups.png";
import asIcon from "../images/as.jpg";
import Head from "./Head";
import Image from "../images/misc/btn-paypal.png";
import PaymentMethod from "./PaymentMethod";
import PaymentSummary from "./PaymentSummary";
import { selectProducts } from "../features/product/productSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector(selectProducts);
  // console.log(products);

  return (
    <div className="cart">
      <Container>
        {/* <h5>Your Cart</h5> */}

        {/* <Favs fs={fs} size={"small"} pitCount={2} /> */}
        <div className="cart-cont">
          <Row>
            <Col md={"8"} xs={"12"}>
              <div className="cart-sec-one">
                <div className="cart-orders">
                  {products.length !== 0 ? (
                    products.map((product, index) => {
                      return (
                        <FavLine
                          key={index}
                          id={product.id}
                          name={product.name}
                          image={product.image1}
                          catigory={product.catigory}
                          price={product.price}
                        />
                      );
                    })
                  ) : (
                    <p>Empty Basket 😕 </p>
                  )}
                </div>
                <div className="cart-ship-spac">
                  <div className="cart-ship-delivery">
                    <h6>Delivery</h6>
                    <Row>
                      <DeliveryMethod image={dhlIcon} />
                      <DeliveryMethod image={fedExIcon} />
                      <DeliveryMethod image={asIcon} />
                      <DeliveryMethod image={upsIcon} />
                    </Row>
                  </div>
                  <div className="cart-ship-payment">
                    <h6>Payment</h6>
                    <Row>
                      <PaymentMethod image={Image} />
                      {/* <PaymentMethod image={Image} />
                      <PaymentMethod image={Image} />
                      <PaymentMethod image={Image} /> */}
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={"4"} xs={"12"}>
              <div className="cart-sec-two">
                <PaymentSummary />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Cart;

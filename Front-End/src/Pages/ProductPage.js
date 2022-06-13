import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Head from "../components/Head";
// import img from "../images/products/1.png";
import person from "../images/person/person1.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  allPrices,
  removeProduct,
  selectSeeProduct,
} from "../features/product/productSlice";
import { Check, ShoppingCartOutlined } from "@material-ui/icons";
const ProductPage = () => {
  const [quan, setQuan] = useState(1);
  const bonus = (a) => {
    a++;
    setQuan(a);
  };
  const less = (a) => {
    if (a !== 1) {
      a--;
      setQuan(a);
    } else {
      setQuan(1);
    }
  };

  const seeProduct = useSelector(selectSeeProduct);
  console.log("See product", seeProduct);
  const dispatch = useDispatch();
  const fav = {
    id: seeProduct.id,
    name: seeProduct.name,
    img: seeProduct.image1,
    img2: seeProduct.image2,
    img3: seeProduct.image3,
    catigory: seeProduct.catigory,
    price: parseInt(seeProduct.price),
    orgPrice: parseInt(seeProduct.price),
    discription: seeProduct.discription,
    state: seeProduct.state,
    seller: seeProduct.seller,
    discount: seeProduct.discount,
    bought: seeProduct.bought,
  };
  const [gotten, setGotten] = useState(fav.bought);

  const addToCart = () => {
    dispatch(addProduct(fav));
    setGotten(!gotten);
    dispatch(allPrices());
  };

  const removeFromCart = () => {
    dispatch(removeProduct(fav.id));
    dispatch(allPrices());
    setGotten(!gotten);
  };

  return (
    <>
      <Container>
        <div className="product-page">
          <p className="path">
            Home {">"} Mobiles {">"} Sumsung
          </p>
          <div className="product-section">
            <Row>
              <Col md={6} xs={12}>
                <div className="images">
                  <div className="main-img">
                    <img src={fav.img} alt="main Image" />
                  </div>
                  <div className="small-imgs">
                    <div className="small-img">
                      <img src={fav.img} />
                    </div>
                    <div className="small-img active">
                      <img src={fav.img2} />
                    </div>
                    <div className="small-img">
                      <img src={fav.img3} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="product-ditails">
                  <h4>{fav.name}</h4>
                  <p>
                    By <span>{fav.seller}</span>
                  </p>
                  <div className="price d-flex align-items-center">
                    <div className="number">
                      {fav.price}
                      <span>$</span>
                    </div>
                    <div className="discount">
                      <span>Save {fav.discount || 5}%</span>
                      <span className="text-upper">Inclusive of all taxis</span>
                    </div>
                  </div>
                  <div className="product-discripe">{fav.discription}</div>
                  <div className="product-quan d-flex">
                    <div className="fav-quan">
                      <button onClick={() => bonus(quan)}>+</button>
                      <input
                        className="w-50"
                        type={"text"}
                        value={quan}
                        disabled
                      />
                      <button onClick={() => less(quan)}>-</button>
                    </div>
                    {gotten ? (
                      <button
                        className="car-icon btn btn-primary w-100"
                        onClick={() => {
                          removeFromCart();
                        }}
                      >
                        <Check />
                      </button>
                    ) : (
                      <button
                        className="car-icon btn btn-primary w-100"
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        <ShoppingCartOutlined />
                      </button>
                    )}
                  </div>
                  <div className="seller row">
                    <div className="seller-inform col-xs-12">
                      <div className="seller-img">
                        <img src={person} alt="Seller Image" />
                      </div>
                      <div className="seller-name">{fav.seller}</div>
                      <div className="seller-rate">
                        <span>8</span>
                        <span>/</span>
                        <span>10</span>
                      </div>
                    </div>
                    <div className="seller-disc col-xs-12">
                      <h6>Lorem ipsum dolor sit amet</h6>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero, consectetur sed pariatur fugit vero, ducimus
                      maiores
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;

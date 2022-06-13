import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  CompareArrows,
  FavoriteBorder,
  ShoppingCartOutlined,
  Check,
  Favorite,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import {
  addProduct,
  allPrices,
  removeProduct,
  sendProduct,
  sendToWish,
} from "../features/product/productSlice";
import { Link } from "react-router-dom";

const FavSmall = ({
  name,
  img,
  img2,
  img3,
  price,
  catigory,
  id,
  discription,
  state,
  seller,
  discount,
  bought,
}) => {
  const dispatch = useDispatch();
  const [gotten, setGotten] = useState(bought);
  const fav = {
    id: id,
    name: name,
    image1: img,
    image2: img2,
    image3: img3,
    catigory: catigory,
    price: parseInt(price),
    orgPrice: parseInt(price),
    discription: discription,
    state: state,
    seller: seller,
    discount: discount,
    bought: gotten,
  };

  const [wished, setWished] = useState(false);

  const addToWishList = () => {
    dispatch(sendToWish(fav));
    setWished(true);
  };

  const sendToProductPage = () => {
    dispatch(sendProduct(fav));
    // dispatch(sendProduct());
    // console.log("Successed");
  };

  const addToCart = () => {
    dispatch(addProduct(fav));
    dispatch(allPrices());
    setGotten(!gotten);
  };

  const removeFromCart = () => {
    dispatch(removeProduct(fav.id));
    dispatch(allPrices());
    setGotten(!gotten);
  };

  return (
    <div className="fav_cont fav-small">
      <Row className="d-flex align-items-center">
        <Col xs="6">
          <Link onClick={() => dispatch(sendProduct(fav))} to={"/productPage"}>
            <div className="fav-img">
              <img src={img} className="w-100" alt=" fav Image" />
            </div>
          </Link>
        </Col>
        <Col xs="6">
          <div className="fav-small-catg">
            <a href="">{catigory}</a>
          </div>
          <a onClick={sendToProductPage()} href="/productPage">
            <div className="name">{name}</div>
          </a>
          <div className="buy">
            <div className="price">
              <div>{price}$</div>
              <span></span>
            </div>
            {gotten ? (
              <button
                className="car-icon"
                onClick={() => {
                  removeFromCart();
                }}
              >
                <Check />
              </button>
            ) : (
              <button
                className="car-icon"
                onClick={() => {
                  addToCart();
                }}
              >
                <ShoppingCartOutlined />
              </button>
            )}
          </div>
          <div className="hide">
            <hr />
            <div className="wish-buttons">
              <a className="wish" onClick={() => addToWishList()}>
                {wished ? (
                  <>
                    <Favorite /> wished
                  </>
                ) : (
                  <>
                    <FavoriteBorder /> Wishlist
                  </>
                )}
              </a>
              <a href="" className="compare">
                <CompareArrows /> Compare
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FavSmall;

import React, { useState } from "react";
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
const FavBig = ({
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
  const [wished, setWished] = useState(false);

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

  const addToWishList = () => {
    dispatch(sendToWish(fav));
    setWished(true);
  };
  const sendToProductPage = () => {
    dispatch(sendProduct(fav));
  };

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
    <div className="fav_cont fav-big fav-small">
      <div className="fav-small-catg">
        <a href="">{catigory}</a>
      </div>
      <Link onClick={() => dispatch(sendProduct(fav))} to={"/productPage"}>
        <div className="name">{name}</div>
        <div className="fav-img">
          <img src={img} alt="fav Image" />
        </div>
      </Link>
      <div className="product-angles">
        <div className="product-angle-img">
          <img src={img} />
        </div>
        <div className="product-angle-img">
          {/* <img src="./images/items/1.jpg" /> */}
          <img src={img} />
        </div>
        <div className="product-angle-img">
          <img src={img} />
        </div>
      </div>
      <div className="buy">
        <div className="price">{price}$</div>
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
    </div>
  );
};

export default FavBig;

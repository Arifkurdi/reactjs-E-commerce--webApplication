import React, { useState } from "react";
import {
  CompareArrowsOutlined,
  ShoppingCartOutlined,
  FavoriteBorder,
  Check,
  Favorite,
} from "@material-ui/icons";
import "./style.css";
import {
  addProduct,
  allPrices,
  removeProduct,
  sendProduct,
  sendToWish,
} from "../features/product/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Fav = ({
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
  // const seeProduct = useSelector((state) => state.product.seeProduct);
  const dispatch = useDispatch();
  const [gotten, setGotten] = useState(bought);
  const [wished, setWished] = useState(false);
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

  const sendToProductPage = () => {
    dispatch(sendProduct(fav));

    // console.log("Successed");
  };

  const addToWishList = () => {
    dispatch(sendToWish(fav));
    setWished(true);
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
    <div className="fav_cont fav-small">
      <div className="fav-small-catg">
        <a>{catigory}</a>
      </div>
      <Link onClick={() => dispatch(sendProduct(fav))} to={"/productPage"}>
        <div className="name">{name}</div>
        <div className="fav-img">
          <img src={img} alt="fav Image" />
        </div>
      </Link>
      <div className="buy">
        <div className="price">{price}$</div>
        {gotten ? (
          <button
            className="car-icon "
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
          <a className="compare">
            <CompareArrowsOutlined /> Compare
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fav;

import React, { useState } from "react";
import { CompareArrows, FavoriteBorder, Close } from "@material-ui/icons";
import img from "../images/products/1.png";
import {
  allPrices,
  calcPrice,
  removeProduct,
  selectProducts,
  selectTotal,
} from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
const FavLine = ({ name, image, catigory, price, id }) => {
  const [quan, setQuan] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const bonus = (a) => {
    a++;
    setQuan(a);
    dispatch(calcPrice({ id: id, method: "plus", quan: a }));
    dispatch(allPrices());
    // setPrice(price * a);
  };
  const less = (a) => {
    if (a !== 1) {
      // setPrice(price - product.price);
      a--;
      setQuan(a);
      dispatch(calcPrice({ id: id, method: "min", quan: a }));
      dispatch(allPrices());
    } else {
      setQuan(1);
    }
  };

  const delProduct = () => {
    dispatch(removeProduct(id));
    dispatch(allPrices());
  };

  // setPrice(Productprice);
  return (
    <div className=" fav-line">
      <div className="fav-dis">
        <div className="fav-img">
          <img src={image} className="w-100" alt=" fav Image" />
        </div>
        <div className="fav-detailes">
          <div>{catigory}</div>
          <div className="name">{name}</div>
        </div>
      </div>
      <div className="price">
        <div>{price}$</div>
      </div>
      <div className="fav-quan">
        <button onClick={() => bonus(quan)}>+</button>
        <input type={"text"} value={quan} disabled />
        <button onClick={() => less(quan)}>-</button>
      </div>
      <div className="fav-buttons">
        <button className="wishlist" value={"wishList"}>
          <FavoriteBorder />
        </button>
        <button className="compare" value={"Compare"}>
          <CompareArrows />
        </button>
        <button
          className="delete"
          value={"delete"}
          onClick={() => delProduct()}
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

export default FavLine;

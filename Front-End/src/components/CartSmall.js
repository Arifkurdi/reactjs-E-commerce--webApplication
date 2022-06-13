import { RemoveShoppingCart } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";
import FavLine from "./FavLine";

const CartSmall = () => {
  const products = useSelector(selectProducts);

  if (products.length == 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          minHeight: "100px",
        }}
      >
        <div>
          <RemoveShoppingCart
            style={{
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div>YOU DID NOT Oreder</div>
      </div>
    );
  }
  return (
    <div className="cart-orders">
      <h4>My Cart</h4>
      {products.map((product, index) => {
        return (
          <FavLine
            key={index}
            id={product.id}
            name={product.name}
            image={product.img}
            catigory={product.catigory}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default CartSmall;

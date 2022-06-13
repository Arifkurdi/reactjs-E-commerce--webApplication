import { Assistant } from "@material-ui/icons";
import React, { useState } from "react";
import Favs from "./Favs";

import { selectWished } from "../features/product/productSlice";
import { useSelector } from "react-redux";
const WishlistSmall = () => {
  const wished = useSelector(selectWished);

  console.log("wished", wished);

  if (wished.length == 0) {
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
          <Assistant
            style={{
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div>YOU DID NOT WISH!</div>
      </div>
    );
  }
  return (
    <div className="wishlist-small">
      <h5>My Wish List</h5>
      <Favs pitCount={wished.length} fs={wished} size={"small"} md={4} xs={6} />
    </div>
  );
};

export default WishlistSmall;

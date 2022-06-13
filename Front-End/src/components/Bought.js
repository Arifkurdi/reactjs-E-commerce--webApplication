import React, { useState } from "react";
import Favs from "./Favs";

const Bought = () => {
  const [haveBought, setHaveBought] = useState(false);

  const products = [
    {
      id: 3,
      name: "Sumsung s21 ultra",
      image1: "./images/items/3.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
    {
      id: 4,
      name: "Sumsung s21 ultra",
      image1: "./images/items/4.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
    {
      id: 5,
      name: "Sumsung s21 ultra",
      image1: "./images/items/5.jpg",
      image2: "./images/items/1.jpg",
      image3: "./images/items/1.jpg",
      price: 400,
      state: 11,
      catigory: "Smart phone",
    },
  ];

  if (haveBought) {
    return <h1>You Didnt Have Bought Anything</h1>;
  }
  return (
    <div className="bought">
      <h5>You Have Choose The Following</h5>
      <Favs pitCount={2} fs={products} size={"small"} md={4} xs={6} />
    </div>
  );
};

export default Bought;

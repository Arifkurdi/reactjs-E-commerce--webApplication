import React, { useEffect, useState } from "react";
import Sample from "./Sample";
import Entertaiment from "./Entertaiment";
import ExactCatg from "./ExactCatg";
import Tranding from "./Tranding";
import BestSeller from "./BestSeller";

import axios from "axios";
const AfterRander = () => {
  const [favs, setFavs] = useState([]);
  const [pro, setPro] = useState([]);
  const [load, setLoad] = useState(false);

  const getProducts = async () => {
    const products = await axios.get("http://localhost:8001/products", {
      headers: {
        "content-type": "application/json",
      },
    });

    setPro(products.data);
    setLoad(true);
  };

  useEffect(() => {
    getProducts();
  }, [load]);

  if (pro.length == 0) {
    return <p>Hold On</p>;
  } else {
    return (
      // <p>Hello</p>
      <>
        {/* <Cart fs={favs} /> */}
        <Sample fs={pro.slice(0, 20)} />
        <Entertaiment fs={pro.slice(4, 20)} />
        <ExactCatg fs={pro.slice(1, 6)} />
        <Tranding fs={pro.slice(4, 10)} />
        <BestSeller fs={pro.slice(4, 12)} />
      </>
    );
  }
};

export default AfterRander;

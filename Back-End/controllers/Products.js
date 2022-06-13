import jwt from "jsonwebtoken";
import Products from "../models/ProductsModel.js";
import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kurdii_store",
  port: "3306",
});
con.connect((err) => {
  if (err) throw err;
  console.log("connected Products");
});

export const getProducts = async (req, res) => {
  try {
    // const products = Products.findAll({
    //   attributes: ["*"],
    // });
    // res.json(products);
    await con.query("SELECT * FROM `products`", (err, result) => {
      if (err) throw err;
      res.json(result);
    });

    // res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const postProduct = async (req, res) => {
  const {
    name,
    image1,
    image2,
    image3,
    price,
    state,
    catigory,
    campony,
    seller,
  } = req.body;

  try {
    await Products.create({
      name: name,
      image1: image1,
      image2: image2,
      image3: image3,
      price: price,
      state: state,
      catigory: catigory,
      campony: campony,
      seller: seller,
    });
    res.json({ msg: "Product Added Successfuly" });
  } catch (error) {
    console.log(error);
  }
};

export const getCatigory = async (req, res) => {
  try {
    const product = await Products.findAll({
      where: {
        catigory: req.body.catigory,
      },
    });
    const ProductId = product[0].id;
    const name = product[0].name;
    const image1 = product[0].image1;
    const image2 = product[0].image2;
    const image3 = product[0].image3;
    const price = product[0].price;
    const state = product[0].state;
    const catigory = product[0].catigory;
    const campony = product[0].campony;
    const seller = product[0].seller;

    const accessToken = jwt.sign(
      {
        ProductId,
        name,
        image1,
        image2,
        image3,
        price,
        state,
        catigory,
        campony,
        seller,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      }
    );

    res.json({ accessToken });
    console.log("fetch Getten");
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Not Found" });
  }
};

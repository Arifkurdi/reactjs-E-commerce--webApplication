import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
    },
    image1: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    image3: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.INTEGER,
    },
    catigory: {
      type: DataTypes.STRING,
    },
    company: {
      type: DataTypes.STRING,
    },
    seller: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
async () => {
  await db.sync();
};

export default Products;

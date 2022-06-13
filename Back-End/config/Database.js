import { Sequelize } from "sequelize";

const db = new Sequelize("kurdii_store", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kurdii_store",
  port: "3306",
});

export class DatabaseAcsses {
  constructor(data) {
    this.data = data;
  }

  informtion = [];

  findUser(userEmail) {
    con.connect((err) => {
      if (err) throw err;
      console.log("Connected");
      con.query(
        `SELECT * FROM users WHERE email LIKE '${userEmail}'`,
        (err, result) => {
          if (err) throw err;
          this.informtion.push(result);
          return result;
        }
      );
    });
    // con.destory();
  }

  getUsers() {
    con.connect((err) => {
      if (err) throw err;
      console.log("Connected");
      con.query("SELECT * FROM users", (err, result) => {
        if (err) throw err;
        // console.log(result);
        return result;
      });
    });
  }

  insertUser(user) {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected");
      con.query(
        "INSERT INTO users (id, name, email, password) VALUES ?",
        user,
        (err, result) => {
          if (err) throw err;
          console.log("Insert Done");
        }
      );
    });
  }
}

let data = new DatabaseAcsses();
// data.findUser("aa@bb");
// setTimeout(() => {
//   console.log(data.informtion);
// }, 1000);

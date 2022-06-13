// // Import Api From Front End Server
// import fetch from "node-fetch";
// // Import mysql dep
// import mysql from "mysql";
// //  File System
// import fs from "fs";
// // Path System
// import path from "path";

// // Fetch Data From Front End JSON File
// let apiPromises = [];
// for (let i = 3; i > 0; i--) {
//   apiPromises.push(
//     fetch(`http://localhost:8001/favs/${i}`).then((data) => data.json())
//   );
// }
// // Get Data Out of Promise
// let Data = [];
// Promise.all(apiPromises).then((data) => {
//   // console.log(data);
//   // console.log(data);
//   Data = data;
// });
// // Data cant be used From The Promise only after 1sec
// setTimeout(() => {
//   Data.reverse();
//   Data.pop();
//   // console.log(Data);
//   sendData(Data);
//   setTimeout(() => {
//     sendDataToFront();
//   }, 1000);
//   // GetDataFromDB();
// }, 1000);

// // DB Connection //
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "kurdii_store",
// });

// // SEND Data To The DB
// let favsFromDB = { favs: [] };
// let sendData = (data) => {
//   let favsToData = [];
//   data.map((fav) => {
//     favsToData.push([
//       `${fav.name}`,
//       `${fav.price}`,
//       `${fav.state}`,
//       `${fav.catigory}`,
//       `${fav.image1}`,
//       `${fav.image2}`,
//       `${fav.image3}`,
//     ]);
//   });
//   // console.log(favsToData);
//   con.connect((err) => {
//     if (err) throw err;
//     console.log("Connection Dont");
//     let sql =
//       "INSERT INTO favs (name, price, state, catigory, image1, image2, image3) VALUES ?";
//     con.query(sql, [favsToData], (err, result) => {
//       if (err) throw err;
//       console.log("INSERT Done");
//     });
//     let sql2 = "SELECT * FROM favs";
//     con.query(sql2, (err, result) => {
//       if (err) throw err;
//       console.log("SELECTIG Get!!");
//       for (let i = 0; i < result.length; i++) {
//         favsFromDB.favs.push({
//           id: result[i].id,
//           name: result[i].name,
//           image1: result[i].image1,
//           image2: result[i].image2,
//           image3: result[i].image3,
//           price: result[i].price,
//           state: result[i].state,
//           catigory: result[i].catigory,
//         });
//       }
//       // favsFromDB = result;
//       // console.log(favsFromDB);

//       return result;
//     });
//   });
// };

// const sendDataToFront = () => {
//   console.log(favsFromDB.favs);
//   // console.log();
//   fs.writeFileSync(
//     path.resolve("../Front-End/db.json"),
//     JSON.stringify(favsFromDB)
//   );
//   fs.writeFileSync(path.resolve("../Front-End/dbFront.json"), "{}");
// };

// // export default sendDataToFront();
// // Get Data From the DB
// // const GetDataFromDB = () => {
// //   con.connect((err) => {
// //     if (err) throw err;
// //     console.log("Connected");
// //     // let sql = "SELECT * FROM favs";
// //     // con.query(sql, (err, result) => {
// //     //   if (err) throw err;
// //     //   console.log("SELECTIG Get!!");
// //     //   for (let i = 0; i < result.length; i++) {
// //     //     favsFromDB.push({
// //     //       id: result[i].id,
// //     //       name: result[i].name,
// //     //       image1: result[i].image1,
// //     //       image2: result[i].image2,
// //     //       image3: result[i].image3,
// //     //       price: result[i].price,
// //     //       state: result[i].state,
// //     //       catigory: result[i].catigory,
// //     //     });
// //     //   }
// //     //   // result = favsFromDB;
// //     //   return result;
// //     // });
// //   });
// // };
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import router from "./routes/routes";

// dotenv.config();
// const app = express();

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cookieParser());
// app.use(express.json());
// app.use(router);

// app.listen(8080, () => console.log("Server Running at PORT 8080"));

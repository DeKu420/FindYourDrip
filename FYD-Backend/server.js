//import statements
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const CryptoJS = require("crypto-js");


//app config
dotenv.config();
const PORT =  5000;

//midleware
app.use(cors());

//DB confid

mongoose
  .connect(process.env.MONGO_URl)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//api routes

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

//listen
app.listen(PORT, () =>
  console.log(`Listening on localhost:${PORT}`)
);



import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDBS from "./config/mongodb.js";
const app = express();
const port = process.env.PORT || 5000;

connectDBS();

app.use(express.json());
app.use(cors());

// ============================================================================
import {
  cardiovascular,
  skin,
  respiratory,
  nervous,
  immune,
  digestion,
} from "./controllers/PlantsController.js";

import {
  SingleSkin,
  SingleCardiovascular,
  SingleDigestion,
  SingleImmune,
  SingleNervous,
  SingleRespiratory,
} from "./controllers/SingleController.js";

import {
  loginUser,
  registerUser,
  adminLogin,
} from "./controllers/userController.js";

import {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
} from "./controllers/orderController.js";
import adminAuth from "./Middleware/adminAuth.js";
import authUser from "./Middleware/auth.js";

import {
  addToCart,
  getUserCart,
  updateCart,
} from "./controllers/cartController.js";
// Define schema for the collection (Dynamic Schema)

// ================================================================================================================

app.get("/api/cardiovascular-herbs", cardiovascular);
app.get("/api/skin-herbs", skin);
app.get("/api/immune-herbs", immune);
app.get("/api/respiratory-herbs", respiratory);
app.get("/api/nervous-herbs", nervous);
app.get("/api/digestion-herbs", digestion);

app.get("/api/cardiovascular-herbs/:id", SingleCardiovascular);
app.get("/api/skin-herbs/:id", SingleSkin);
app.get("/api/immune-herbs/:id", SingleImmune);
app.get("/api/respiratory-herbs/:id", SingleRespiratory);
app.get("/api/nervous-herbs/:id", SingleNervous);
app.get("/api/digestion-herbs/:id", SingleDigestion);

// Login
app.post("/api/user/register", registerUser);
app.post("/api/user/login", loginUser);
app.post("/api/user/admin", adminLogin);

//Admin Features
app.post("/api/order/list", adminAuth, allOrders);
app.post("/api/order/status", adminAuth, updateStatus);

//Payment Features
app.post("/api/order/place", authUser, placeOrder);

//User Features
app.post("/api/order/userorders", authUser, userOrders);

app.post("/api/cart/get", authUser, getUserCart);
app.post("/api/cart/add", authUser, addToCart);
app.post("/api/cart/update", authUser, updateCart);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server Start on PORT :" + port));

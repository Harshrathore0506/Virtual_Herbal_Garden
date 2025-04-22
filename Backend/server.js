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
  SingleSkin,
  SingleCardiovascular,
  SingleDigestion,
  SingleImmune,
  SingleNervous,
  SingleRespiratory,
} from "./controllers/SingleController.js";

// Define schema for the collection (Dynamic Schema)
import plantRouter from "./routes/plantRoute.js";
import cartRoute from "./routes/cartRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import plantsRouter from "./routes/plantsRoute.js";
// ================================================================================================================
app.use("/api/plants", plantRouter);
app.use("/api/cart", cartRoute);

app.use("/api/plant", plantsRouter);

// Login
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
//Admin Features

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server Start on PORT :" + port));

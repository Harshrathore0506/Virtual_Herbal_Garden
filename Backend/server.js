import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import connectDBS from "./config/mongodb.js";
const app = express();
const port = process.env.PORT || 5000;
connectDBS();

app.use(express.json());
app.use(cors());

//  mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/virtual_herbal_garden"; // Replace with your database name

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

//api endpoints
// Define schema for the collection (Dynamic Schema)
const cardiovascularHerbSchema = new mongoose.Schema({}, { strict: false });
const digestion_herbsSchema = new mongoose.Schema({}, { strict: false });

const CardiovascularHerb =
  mongoose.models.CardiovascularHerb ||
  mongoose.model(
    "CardiovascularHerb",
    cardiovascularHerbSchema,
    "cardiovascular_herbs"
  );

// // API to fetch all herbs from "cardiovascular_herbs"
app.get("/api/cardiovascular-herbs", async (req, res) => {
  try {
    const herbs = await CardiovascularHerb.find();
    console.log("✅ Fetched Herbs:", herbs);

    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }

    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
});

const DigestionHerb =
  mongoose.models.DigestionHerb ||
  mongoose.model("DigestionHerb", digestion_herbsSchema, "digestion_herbs");

app.get("/api/digestion-herbs", async (req, res) => {
  try {
    const herbs = await DigestionHerb.find();
    console.log("✅ Fetched Herbs:", herbs);

    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }

    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
});

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server Start on PORT :" + port));

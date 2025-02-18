import mongoose from "mongoose";

const Skin_herbSchema = new mongoose.Schema({}, { strict: false });

const SkinHerb =
  mongoose.models.SkinHerb ||
  mongoose.model("SkinHerb", Skin_herbSchema, "skin_herbs");

export default SkinHerb;

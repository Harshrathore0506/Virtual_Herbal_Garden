import mongoose from "mongoose";

const digestion_herbsSchema = new mongoose.Schema({}, { strict: false });

const DigestionHerb =
  mongoose.models.DigestionHerb ||
  mongoose.model("DigestionHerb", digestion_herbsSchema, "digestion_herbs");

export default DigestionHerb;

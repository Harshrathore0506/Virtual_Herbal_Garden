import mongoose from "mongoose";

const Immune_herbSchema = new mongoose.Schema({}, { strict: false });

const ImmuneHerb =
  mongoose.models.ImmuneHerb ||
  mongoose.model("ImmuneHerb", Immune_herbSchema, "immune_herbs");

export default ImmuneHerb;

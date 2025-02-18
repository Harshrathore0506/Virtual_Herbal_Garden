import mongoose from "mongoose";

const Nervous_herbSchema = new mongoose.Schema({}, { strict: false });

const NervousHerb =
  mongoose.models.NervousHerb ||
  mongoose.model("NervousHerb", Nervous_herbSchema, "nervous_herbs");

export default NervousHerb;

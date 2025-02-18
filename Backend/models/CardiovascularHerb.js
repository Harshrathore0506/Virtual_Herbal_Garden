import mongoose from "mongoose";

const cardiovascularHerbSchema = new mongoose.Schema({}, { strict: false });

const CardiovascularHerb =
  mongoose.models.CardiovascularHerb ||
  mongoose.model(
    "CardiovascularHerb",
    cardiovascularHerbSchema,
    "cardiovascular_herbs"
  );

export default CardiovascularHerb;

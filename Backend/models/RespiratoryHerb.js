import mongoose from "mongoose";

const Respiratory_herbSchema = new mongoose.Schema({}, { strict: false });

const RespiratoryHerb =
  mongoose.models.RespiratoryHerb ||
  mongoose.model(
    "RespiratoryHerb",
    Respiratory_herbSchema,
    "respiratory_herbs"
  );

export default RespiratoryHerb;

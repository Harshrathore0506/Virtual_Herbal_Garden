import express from "express";
import {
  cardiovascular,
  skin,
  respiratory,
  nervous,
  immune,
  digestion,
} from "../controllers/PlantsController.js";

const plantRouter = express.Router();

plantRouter.get("/cardiovascular-herbs", cardiovascular);
plantRouter.get("/skin-herbs", skin);
plantRouter.get("/immune-herbs", immune);
plantRouter.get("/respiratory-herbs", respiratory);
plantRouter.get("/nervous-herbs", nervous);
plantRouter.get("/digestion-herbs", digestion);

export default plantRouter;

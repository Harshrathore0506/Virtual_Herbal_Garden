import express from "express";
import {
  SingleSkin,
  SingleCardiovascular,
  SingleDigestion,
  SingleImmune,
  SingleNervous,
  SingleRespiratory,
} from "../controllers/SingleController.js";

const plantsRouter = express.Router();

plantsRouter.get("/cardiovascular-herbs/:id", SingleCardiovascular);
plantsRouter.get("/skin-herbs/:id", SingleSkin);
plantsRouter.get("/immune-herbs/:id", SingleImmune);
plantsRouter.get("/respiratory-herbs/:id", SingleRespiratory);
plantsRouter.get("/nervous-herbs/:id", SingleNervous);
plantsRouter.get("/digestion-herbs/:id", SingleDigestion);

export default plantsRouter;

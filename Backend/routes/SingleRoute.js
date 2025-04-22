import express from "express";
import {
  SingleSkin,
  SingleCardiovascular,
  SingleDigestion,
  SingleImmune,
  SingleNervous,
  SingleRespiratory,
} from "../controllers/SingleController.js";

const SingleRouter = express.Router();

SingleRouter.get("/cardiovascular-herbs/:id", SingleCardiovascular);
SingleRouter.get("/skin-herbs/:id", SingleSkin);
SingleRouter.get("/immune-herbs/:id", SingleImmune);
SingleRouter.get("/respiratory-herbs/:id", SingleRespiratory);
SingleRouter.get("/nervous-herbs/:id", SingleNervous);
SingleRouter.get("/digestion-herbs/:id", SingleDigestion);

export default SingleRouter;

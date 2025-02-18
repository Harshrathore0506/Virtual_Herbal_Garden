import CardiovascularHerb from "../models/CardiovascularHerb.js";
import DigestionHerb from "../models/DigestionHerb.js";
import ImmuneHerb from "../models/ImmuneHerb.js";
import NervousHerb from "../models/NervousHerb.js";
import RespiratoryHerb from "../models/RespiratoryHerb.js";
import SkinHerb from "../models/SkinHerb.js";

const SingleCardiovascular = async (req, res) => {
  try {
    const herb = await CardiovascularHerb.findOne({ _id: req.params.id });

    if (!herb) return res.status(404).json({ message: "Herb not found" });

    res.json(herb);
  } catch (error) {
    console.error("❌ Error Fetching Herb:", error);
    res.status(500).json({ message: "Error fetching herb", error });
  }
};

// ================================================================================================================================

const SingleDigestion = async (req, res) => {
  try {
    const herb = await DigestionHerb.findOne({ _id: req.params.id });
    if (!herb) return res.status(404).json({ message: "Herb not found" });
    res.json(herb);
  } catch (error) {
    console.error("❌ Error Fetching Herb:", error);
    res.status(500).json({ message: "Error fetching herb", error });
  }
};

// ====================================================================================================================================

const SingleImmune = async (req, res) => {
  try {
    const herb = await ImmuneHerb.findOne({ _id: req.params.id });
    if (!herb) return res.status(404).json({ message: "Herb not found" });
    res.json(herb);
  } catch (error) {
    console.error("❌ Error Fetching Herb:", error);
    res.status(500).json({ message: "Error fetching herb", error });
  }
};

// ==============================================================================================================

const SingleNervous = async (req, res) => {
  try {
    const herb = await NervousHerb.findOne({ _id: req.params.id });
    if (!herb) return res.status(404).json({ message: "Herb not found" });
    res.json(herb);
  } catch (error) {
    console.error("❌ Error Fetching Herb:", error);
    res.status(500).json({ message: "Error fetching herb", error });
  }
};

// ========================================================================================================

const SingleRespiratory = async (req, res) => {
  try {
    const herb = await RespiratoryHerb.findOne({ _id: req.params.id });
    if (!herb) return res.status(404).json({ message: "Herb not found" });
    res.json(herb);
  } catch (error) {
    console.error("❌ Error Fetching Herb:", error);
    res.status(500).json({ message: "Error fetching herb", error });
  }
};

// =====================================================================================================

const SingleSkin = async (req, res) => {
  try {
    const herb = await SkinHerb.findOne({ _id: req.params.id });
    if (!herb) return res.status(404).json({ message: "Herb not found" });
    res.json(herb);
  } catch (error) {
    console.error("❌ Error Fetching Herb:", error);
    res.status(500).json({ message: "Error fetching herb", error });
  }
};

export {
  SingleSkin,
  SingleCardiovascular,
  SingleDigestion,
  SingleImmune,
  SingleNervous,
  SingleRespiratory,
};

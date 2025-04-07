import CardiovascularHerb from "../models/CardiovascularHerb.js";
import DigestionHerb from "../models/DigestionHerb.js";
import ImmuneHerb from "../models/ImmuneHerb.js";
import NervousHerb from "../models/NervousHerb.js";
import RespiratoryHerb from "../models/RespiratoryHerb.js";
import SkinHerb from "../models/SkinHerb.js";

const cardiovascular = async (req, res) => {
  try {
    const herbs = await CardiovascularHerb.find();

    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }

    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const digestion = async (req, res) => {
  try {
    const herbs = await DigestionHerb.find();
    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }
    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const immune = async (req, res) => {
  try {
    const herbs = await ImmuneHerb.find();
    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }
    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const nervous = async (req, res) => {
  try {
    const herbs = await NervousHerb.find();
    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }
    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const respiratory = async (req, res) => {
  try {
    const herbs = await RespiratoryHerb.find();
    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }
    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const skin = async (req, res) => {
  try {
    const herbs = await SkinHerb.find();
    if (herbs.length === 0) {
      console.warn("⚠️ No Data Found in cardiovascular_herbs collection");
    }
    res.json(herbs);
  } catch (error) {
    console.error("❌ Error Fetching Data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export { cardiovascular, skin, respiratory, nervous, immune, digestion };

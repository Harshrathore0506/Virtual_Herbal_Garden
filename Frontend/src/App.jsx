import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Garden from "./Components/Garden";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Home1 from "./Pages/Home1";
import Garden1 from "./Gardens/Garden1";
import Garden2 from "./Gardens/Garden2";
import Garden3 from "./Gardens/Garden3";
import Garden4 from "./Gardens/Garden4";
import Garden5 from "./Gardens/Garden5";
import Garden6 from "./Gardens/Garden6";
import Footer from "./Components/Footer";
import PlantDetails from "./Pages/PlantDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Garden1" element={<Garden1 />} />
        <Route path="/Garden2" element={<Garden2 />} />
        <Route path="/Garden3" element={<Garden3 />} />
        <Route path="/Garden4" element={<Garden4 />} />
        <Route path="/Garden5" element={<Garden5 />} />
        <Route path="/Garden6" element={<Garden6 />} />
        <Route path="/PlantDetails" element={<PlantDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

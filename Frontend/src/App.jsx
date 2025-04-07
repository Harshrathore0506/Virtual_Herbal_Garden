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
import PlantDetails1 from "./Pages/PlantDetails1";
import PlantDetails2 from "./Pages/PlantDetails2";
import PlantDetails3 from "./Pages/plantDetails3";
import PlantDetails4 from "./Pages/PlantDetails4";
import PlantDetails5 from "./Pages/PlantDetails5";
import Login from "./Components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart/Cart";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Order from "./Components/Orders/Order";

function App() {
  return (
    <>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Garden1" element={<Garden1 />} />
          <Route path="/Garden2" element={<Garden2 />} />
          <Route path="/Garden3" element={<Garden3 />} />
          <Route path="/Garden4" element={<Garden4 />} />
          <Route path="/Garden5" element={<Garden5 />} />
          <Route path="/Garden6" element={<Garden6 />} />
          <Route path="/plant/:id" element={<PlantDetails />} />
          <Route path="/plant1/:id" element={<PlantDetails1 />} />
          <Route path="/plant2/:id" element={<PlantDetails2 />} />
          <Route path="/plant3/:id" element={<PlantDetails3 />} />
          <Route path="/plant4/:id" element={<PlantDetails4 />} />
          <Route path="/plant5/:id" element={<PlantDetails5 />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

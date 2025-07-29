import {  Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import About from "./components/About/About";
import ProductList from "./components/Products/ProductsList";
import Footer from "./components/Footer/Footer";
import Home from "./Home/Home";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
      <Footer/>
    </HashRouter>
  );
};

export default App;

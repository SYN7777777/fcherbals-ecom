import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import About from "./components/About/About";
import ProductList from "./components/Products/ProductsList";
import ProductPage from "./components/Products/ProductPage";
import Footer from "./components/Footer/Footer";
import Home from "./Home/Home";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

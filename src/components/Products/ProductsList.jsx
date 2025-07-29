import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";
import OrderModal from './OrderModal'; // Import the OrderModal component
import Testimonials from "../Testimonials"; // Assuming Testimonials is intended to be used on this page

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State for product being ordered

  // Fetch products from data.json
  useEffect(() => {
    fetch("/data.json")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
        // Optionally, set an error state to display a message to the user
      });
  }, []);

  // Handle "Buy Now" click to open modal
  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Clear selected product on close
  };

  if (loading) {
    return (
      <section className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-lime-50 via-white to-emerald-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-600 border-t-transparent mx-auto mb-4"></div> {/* Changed spinner color */}
          <p className="text-emerald-800 font-inter font-medium text-lg">Loading our premium collection, please wait...</p> {/* Changed font, added text */}
        </div>
      </section>
    );
  }

  return (
    <> {/* Use a fragment to wrap multiple top-level elements */}
      <section className="min-h-screen py-16 sm:py-24 px-6 bg-gradient-to-br from-lime-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-10 left-0 w-48 h-48 bg-lime-200/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob-subtle"></div> {/* More subtle, animated */}
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-emerald-200/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob-subtle animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10"> {/* Ensure content is above background elements */}
          {/* Header */}
          <div className="text-center mb-16 md:mb-20"> {/* Adjusted margin-bottom */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 border border-lime-200 shadow-sm mb-4 rounded-full"> {/* Border color, shadow, rounded-full */}
              <Sparkles className="w-5 h-5 text-lime-600" /> {/* Icon color */}
              <span className="font-inter font-semibold text-lime-800 uppercase tracking-widest text-sm">Premium Collection</span> {/* Font, color */}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair-display font-black text-transparent bg-gradient-to-r from-green-800 via-lime-700 to-emerald-700 bg-clip-text mb-4 leading-tight tracking-wider drop-shadow-sm"> {/* Updated gradient, font, shadow */}
              Our Exquisite Products
            </h1>
            <p className="text-lg font-inter text-gray-700 max-w-2xl mx-auto leading-relaxed font-light"> {/* Font, color, removed tracking-wide (often default is fine) */}
              Discover our carefully curated selection of natural products, crafted with the purity of nature.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Adjusted gaps */}
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyNow={handleBuyNow} // Pass the handleBuyNow function to ProductCard
              />
            ))}
          </div>

          {/* Optional: Handle empty state */}
          {products.length === 0 && !loading && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-playfair-display font-bold text-gray-800 mb-2">No Products Found</h3> {/* Font */}
              <p className="text-gray-600 font-inter">We're working on adding amazing products for you!</p> {/* Font */}
            </div>
          )}
        </div>
      </section>

      {/* The OrderModal component */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}
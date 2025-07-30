import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FloatingSocialIcons from "../../FloatingSocialIcons";

// Local images
import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.jpg";

export default function HerbalBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plantImages = [
    { url: f1, alt: "Fresh Basil Plants" },
    { url: f2, alt: "Medicinal Herbs Garden" },
    { url: f3, alt: "Fresh Herbs Collection" },
    { url: f4, alt: "Lavender Plants" },
    {
      url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Herbal Display",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % plantImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [plantImages.length]);

  return (
    <>
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>

      <section className="relative w-full h-[100vh] overflow-hidden pt-16 sm:pt-0">
        {/* Image Slider (Background only) */}
        <div className="absolute inset-0 w-full h-full z-0">
          {plantImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
                style={{
                  animation:
                    index === currentSlide ? "zoomIn 4s ease-in-out forwards" : "none",
                }}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Static Text Overlay */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-4 bg-black/30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair-display font-extrabold text-white leading-tight drop-shadow-lg">
            Embrace Nature's Wisdom
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-2xl drop-shadow-md">
            Discover the purest herbal remedies for a balanced and vibrant life.
            Handcrafted with care, inspired by ancient traditions.
          </p>
          <Link
            to="/products"
            className="mt-8 px-8 py-3 bg-lime-500 text-green-950 font-semibold text-lg rounded-full shadow-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Explore Our Products
          </Link>
        </div>

        <FloatingSocialIcons />
      </section>
    </>
  );
}

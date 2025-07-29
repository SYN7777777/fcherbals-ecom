import { useState, useEffect, useRef } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Anjali Sharma",
    role: "Happy Customer",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The FC Herbals products have transformed my skin! Natural and effective. Highly recommended.",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Satisfied Buyer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Excellent quality and quick delivery. The hair oil really helped with hair fall, fantastic!",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Loyal Customer",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "The herbal bath powder is amazing — my skin feels so smooth and refreshed every time.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Long-time User",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "I love the Eco-friendly herbal napkin. Comfortable and chemical-free. Great product!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const slideContainerRef = useRef(null); // Ref for tracking mouse interaction on the container

  const startAutoSlide = () => {
    // Only start if there's no active interval and we have testimonials
    if (intervalRef.current || testimonialsData.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // 5 seconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    // Clear interval on component unmount
    return () => stopAutoSlide();
  }, []); // Empty dependency array means this runs once on mount and unmount

  const selectSlide = (index) => {
    setCurrent(index);
    stopAutoSlide(); // Stop current auto-slide
    // Optional: Restart auto-slide after a brief delay if desired,
    // or rely on mouseLeave to restart it.
    // For now, let's keep your original logic which ensures it restarts.
    startAutoSlide();
  };

  // Handle case where testimonialsData might be empty
  if (testimonialsData.length === 0) {
    return null; // Or return a message like "No testimonials available."
  }

  const currentTestimonial = testimonialsData[current];

  return (
    <section className="bg-lime-50 py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle background shapes/gradients for herbal feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2s"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-playfair-display font-extrabold mb-6 text-green-800 leading-tight">
          What Our <span className="text-lime-700">Customers</span> Say
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto font-inter text-lg">
          Discover why our valued customers love FC Herbal Products. Real stories, real results.
        </p>

        {/* Slider Container */}
        <div
          ref={slideContainerRef} // Assign ref here
          className="relative w-full overflow-hidden rounded-3xl"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Individual Testimonial Slide */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonialsData.map(({ id, name, role, photo, text }) => (
              <div
                key={id}
                className="flex-shrink-0 w-full px-6 sm:px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 bg-white rounded-3xl shadow-2xl border border-lime-100 transform scale-95" // Added scale for subtle 3D effect, border
              >
                <img
                  src={photo}
                  alt={`Photo of ${name}`}
                  className="w-28 h-28 rounded-full shadow-lg object-cover ring-4 ring-lime-300 ring-opacity-75 transition-transform duration-300 hover:scale-105" // Enhanced photo
                />
                <div className="md:w-2/3 text-left">
                  <p className="text-gray-800 italic text-xl md:text-2xl leading-relaxed mb-6 font-serif-italic relative">
                    <span className="absolute -top-4 -left-6 text-6xl text-lime-400 opacity-60 font-serif z-0">&ldquo;</span>
                    {text}
                    <span className="absolute -bottom-4 -right-6 text-6xl text-lime-400 opacity-60 font-serif z-0 transform rotate-180">&rdquo;</span>
                  </p>
                  <footer className="mt-4 text-green-700 font-bold font-playfair-display text-2xl">
                    {name}
                    <span className="block text-gray-500 text-base font-inter font-normal mt-1">
                      {role}
                    </span>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonialsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => selectSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out border-2 border-green-600 ${
                current === index
                  ? "bg-green-700 scale-125 shadow-md"
                  : "bg-green-300 hover:bg-green-500 hover:scale-110"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-pressed={current === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
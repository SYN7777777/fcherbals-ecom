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

  const startAutoSlide = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const selectSlide = (index) => {
    setCurrent(index);
    stopAutoSlide();
    startAutoSlide();
  };

  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-playfair font-extrabold mb-6 text-amber-700">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto font-poppins text-lg">
          Real feedback from our valued customers who have experienced the magic of FC Herbals.
        </p>

        {/* Slider */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonialsData.map(({ id, name, role, photo, text }) => (
              <div
                key={id}
                className="flex-shrink-0 w-full px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 bg-white rounded-3xl shadow-xl py-8 mx-auto"
              >
                <img
                  src={photo}
                  alt={`Photo of ${name}`}
                  className="w-24 h-24 rounded-full shadow-md object-cover"
                />
                <div>
                  <p className="text-gray-800 italic text-lg md:text-xl leading-relaxed">
                    &ldquo;{text}&rdquo;
                  </p>
                  <footer className="mt-4 text-amber-700 font-bold font-playfair text-xl">
                    {name}
                    <span className="block text-gray-500 text-sm font-poppins font-normal">
                      {role}
                    </span>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonialsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => selectSlide(index)}
              className={`w-4 h-4 rounded-full transition duration-300 ${
                current === index
                  ? "bg-amber-600"
                  : "bg-amber-300 hover:bg-amber-500"
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

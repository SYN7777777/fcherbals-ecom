import banner from "../../assets/banner3.png";
import FloatingSocialIcons from "../../FloatingSocialIcons";
import ProductList from "../Products/ProductsList";

export default function HerbalBanner() {
  return (
    <section className="relative w-full h-[60%] overflow-hidden pt-16 sm:pt-0">
      {/* Background Image with slow zoom-in effect */}
      <img
        src={banner}
        alt="Herbal Care Banner"
        className="w-full h-full object-cover transition-transform duration-[12000ms] ease-in-out"
        style={{
          animation: "zoomIn 12s ease-in-out infinite alternate",
        }}
      />

      <style>
        {`
          @keyframes zoomIn {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
      <FloatingSocialIcons/>
    </section>
  
  );
}

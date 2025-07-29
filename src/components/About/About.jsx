import { Leaf, Target, Eye, Calendar, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import founder from "../../assets/founder.jpeg";

export default function AboutPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-emerald-50 text-gray-800 relative overflow-hidden">
      {/* Background Decorative Elements - Subtle, less aggressive blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob-subtle"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob-subtle animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10"> {/* Adjusted top/bottom padding */}
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24"> {/* Reduced bottom margin */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-lime-200 shadow-sm mb-6"> {/* Refined button/tag style */}
            <Leaf className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-inter font-semibold text-lime-800 uppercase tracking-widest">
              About Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair-display font-black text-transparent bg-gradient-to-r from-green-800 via-emerald-700 to-lime-600 bg-clip-text leading-tight tracking-wide drop-shadow-sm"> {/* Updated gradient colors, added drop-shadow */}
            FC Herbal Products
          </h1>
          <p className="text-lg md:text-xl font-inter font-light text-gray-700 max-w-4xl mx-auto mt-6 leading-relaxed"> {/* Changed font, reduced top margin */}
            Empowering wellness through nature — one sustainable product at a time.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 md:mb-24"> {/* Reduced gap, adjusted bottom margin */}
          <div className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"> {/* More rounded, better shadow, subtle hover */}
            <Calendar className="w-7 h-7 text-lime-600 mx-auto mb-3" /> {/* Adjusted icon size, color */}
            <div className="text-3xl font-playfair-display font-black text-emerald-700"> {/* Changed font */}
              Aug 2023
            </div>
            <div className="text-sm font-inter uppercase tracking-wider text-gray-600 mt-1"> {/* Changed font, reduced top margin */}
              Founded
            </div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Users className="w-7 h-7 text-emerald-600 mx-auto mb-3" />
            <div className="text-3xl font-playfair-display font-black text-emerald-700">
              100+
            </div>
            <div className="text-sm font-inter uppercase tracking-wider text-gray-600 mt-1">
              Happy Customers
            </div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Award className="w-7 h-7 text-lime-600 mx-auto mb-3" />
            <div className="text-3xl font-playfair-display font-black text-emerald-700">
              6
            </div>
            <div className="text-sm font-inter uppercase tracking-wider text-gray-600 mt-1">
              Natural Products
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24"> {/* Reduced gap, adjusted bottom margin */}
          <div className="space-y-5 order-2 md:order-1"> {/* Reduced space-y */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/60 px-5 py-2 rounded-full text-emerald-700 shadow-sm"> {/* More rounded, added shadow */}
              <span className="text-xs font-inter font-semibold uppercase tracking-widest"> {/* Changed font */}
                Meet the Founder
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-playfair-display font-black text-gray-900 tracking-wide leading-tight"> {/* Changed font, leading-tight */}
              Franglin Claret
            </h2>

            <div className="space-y-4 text-gray-700 font-inter text-lg leading-relaxed"> {/* Unified font & text size, reduced space-y */}
              <p>
                B.E. Computer Science Engineering graduate and the Founder & CEO
                of FC Herbal Products. Since launching the company on{" "}
                <strong className="font-semibold text-lime-700">August 1, 2023</strong>
                , I've been committed to sustainable farming and offering
                high-quality, eco-conscious herbal solutions for everyday
                wellness.
              </p>
              <p>
                What started as a passion project has now reached local
                colleges, beauty parlors, and surrounding areas, gaining
                recognition for our quality and results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4"> {/* Reduced gap */}
              <span className="bg-lime-100 text-lime-800 px-4 py-2 text-sm font-inter font-semibold rounded-md"> {/* More rounded, changed font, color */}
                B.E. Computer Science
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-inter font-semibold rounded-md">
                Sustainable Farming
              </span>
              <span className="bg-lime-100 text-lime-800 px-4 py-2 text-sm font-inter font-semibold rounded-md">
                Natural Wellness
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 relative max-w-sm mx-auto">
            <div className="absolute inset-4 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 blur-xl rounded-full transform scale-105"></div> {/* More pronounced blur, rounded-full */}
            <img
              src={founder}
              alt="Herbal founder"
              className="relative w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white/50" // Added object-cover, more prominent border
              style={{ aspectRatio: '4/5' }} // Maintain aspect ratio for the image
            />
          </div>
        </div>

        {/* Products Showcase */}
        <div className="bg-white/50 backdrop-blur-md border border-white/70 p-10 md:p-14 rounded-2xl relative overflow-hidden mb-16 md:mb-24 shadow-lg"> {/* Reduced padding, more rounded, better shadow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-200/25 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-200/25 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative text-center mb-10"> {/* Reduced bottom margin */}
            <h3 className="text-3xl md:text-4xl font-playfair-display font-black text-transparent bg-gradient-to-r from-emerald-700 to-lime-700 bg-clip-text mb-3 tracking-wide drop-shadow-sm">
              Our Herbal Range
            </h3>
            <p className="text-lg font-inter text-gray-700 font-light">
              Premium natural products crafted with care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"> {/* Adjusted grid for small screens, reduced gap */}
            {[
              "Natural Hair Oil",
              "Face Brightening Oil",
              "Lip Balm",
              "Bath Powder",
              "Seeyakai Powder",
              "Herbal Napkin",
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-5 rounded-lg border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group" // Refined card style
              >
                <div className="flex items-center gap-3"> {/* Reduced gap */}
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 group-hover:scale-125 transition-transform duration-300"></div> {/* Added rounded-full to dot */}
                  <span className="text-md font-inter font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300"> {/* Adjusted font size */}
                    {product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24"> {/* Reduced gap, adjusted bottom margin */}
          {/* Mission */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/60 p-8 md:p-10 rounded-xl border border-emerald-200/50 shadow-md hover:shadow-xl transition-all duration-500 group"> {/* More rounded, reduced padding */}
            <div className="flex items-center gap-3 mb-5"> {/* Reduced gap, bottom margin */}
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md"> {/* Rounded icon background, added shadow */}
                <Target className="w-5 h-5 text-white" /> {/* Adjusted icon size */}
              </div>
              <h3 className="text-2xl font-playfair-display font-black text-emerald-800 tracking-wide leading-tight"> {/* Changed font, leading-tight */}
                Our Mission
              </h3>
            </div>
            <p className="text-base font-inter text-gray-700 leading-relaxed"> {/* Adjusted font size */}
              We aim to make natural wellness accessible and sustainable for
              everyone. By blending traditional wisdom with modern formulations,
              FC Herbal Products is reshaping how communities experience herbal
              care — ethically and effectively.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-lime-50 to-lime-100/60 p-8 md:p-10 rounded-xl border border-lime-200/50 shadow-md hover:shadow-xl transition-all duration-500 group"> {/* More rounded, reduced padding */}
            <div className="flex items-center gap-3 mb-5"> {/* Reduced gap, bottom margin */}
              <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md"> {/* Rounded icon background, added shadow */}
                <Eye className="w-5 h-5 text-white" /> {/* Adjusted icon size */}
              </div>
              <h3 className="text-2xl font-playfair-display font-black text-lime-800 tracking-wide leading-tight"> {/* Changed font, leading-tight */}
                Growing Forward
              </h3>
            </div>
            <p className="text-base font-inter text-gray-700 leading-relaxed"> {/* Adjusted font size */}
              With a strong foundation in our local community, we're expanding
              our reach through online platforms to make natural living a part
              of every home.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-lime-600 to-emerald-600 p-10 md:p-14 text-white rounded-2xl relative overflow-hidden shadow-xl"> {/* Reduced padding, more rounded, better shadow */}
          <div className="absolute inset-0 bg-black/15"></div> {/* Slightly more opaque overlay */}
          <div className="relative z-10"> {/* Ensure content is above overlay */}
            <h3 className="text-3xl md:text-4xl font-playfair-display font-black mb-4 tracking-wide leading-tight"> {/* Changed font, leading-tight */}
              Join Our Natural Journey
            </h3>
            <p className="text-lg font-inter font-light mb-8 max-w-2xl mx-auto"> {/* Changed font, reduced font size */}
              Experience the power of nature with our carefully crafted herbal products.
            </p>
            <button
              onClick={handleClick}
              className="bg-white text-gray-800 px-8 py-3.5 font-inter font-bold uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" // More rounded button, adjusted padding, font
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
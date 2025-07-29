import { Leaf, Target, Eye, Calendar, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import founder from "../../assets/founder.jpeg";

export default function AboutPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-gray-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 relative">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-8 py-3 border border-amber-200/50 mb-8">
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="text-sm font-poppins font-semibold text-amber-800 uppercase tracking-widest">
              About Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-black text-transparent bg-gradient-to-r from-amber-800 via-emerald-700 to-amber-600 bg-clip-text leading-tight tracking-wide">
            FC Herbal Products
          </h1>
          <p className="text-xl md:text-2xl font-poppins font-light text-gray-600 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Empowering wellness through nature — one sustainable product at a
            time.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/60 backdrop-blur-sm p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
            <Calendar className="w-8 h-8 text-amber-600 mx-auto mb-3" />
            <div className="text-3xl font-playfair font-black text-emerald-700">
              Aug 2023
            </div>
            <div className="text-sm font-poppins uppercase tracking-wider text-gray-600">
              Founded
            </div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <div className="text-3xl font-playfair font-black text-emerald-700">
              100+
            </div>
            <div className="text-sm font-poppins uppercase tracking-wider text-gray-600">
              Happy Customers
            </div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
            <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
            <div className="text-3xl font-playfair font-black text-emerald-700">
              6
            </div>
            <div className="text-sm font-poppins uppercase tracking-wider text-gray-600">
              Natural Products
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-100/50 px-6 py-2 text-emerald-700">
              <span className="text-sm font-poppins font-semibold uppercase tracking-widest">
                Meet the Founder
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-playfair font-black text-gray-900 tracking-wide">
              Franglin Claret
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-poppins leading-relaxed">
                B.E. Computer Science Engineering graduate and the Founder & CEO
                of FC Herbal Products. Since launching the company on{" "}
                <span className="font-bold text-amber-700">August 1, 2023</span>
                , I've been committed to sustainable farming and offering
                high-quality, eco-conscious herbal solutions for everyday
                wellness.
              </p>
              <p className="text-lg font-poppins leading-relaxed">
                What started as a passion project has now reached local
                colleges, beauty parlors, and surrounding areas, gaining
                recognition for our quality and results.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 text-sm font-poppins font-semibold">
                B.E. Computer Science
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-poppins font-semibold">
                Sustainable Farming
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 text-sm font-poppins font-semibold">
                Natural Wellness
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 relative max-w-xs md:max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 blur-xl rounded-"></div>
            <img
              src={founder}
              alt="Herbal founder"
              className="relative w-full h-auto object-contain shadow-2xl rounded-3xl"
            />
          </div>
        </div>

        {/* Products Showcase */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl"></div>

          <div className="relative text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-playfair font-black text-transparent bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text mb-4 tracking-wide">
              Our Herbal Range
            </h3>
            <p className="text-lg font-poppins text-gray-600 font-light">
              Premium natural products crafted with care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                className="bg-white/60 backdrop-blur-sm p-6 border border-white/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-emerald-500 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg font-poppins font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    {product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-10 border border-emerald-200/50 hover:shadow-xl transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-black text-emerald-800 tracking-wide">
                Our Mission
              </h3>
            </div>
            <p className="text-lg font-poppins text-gray-700 leading-relaxed">
              We aim to make natural wellness accessible and sustainable for
              everyone. By blending traditional wisdom with modern formulations,
              FC Herbal Products is reshaping how communities experience herbal
              care — ethically and effectively.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-10 border border-amber-200/50 hover:shadow-xl transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-black text-amber-800 tracking-wide">
                Growing Forward
              </h3>
            </div>
            <p className="text-lg font-poppins text-gray-700 leading-relaxed">
              With a strong foundation in our local community, we're expanding
              our reach through online platforms to make natural living a part
              of every home.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-emerald-600 p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-playfair font-black mb-4 tracking-wide">
              Join Our Natural Journey
            </h3>
            <p className="text-xl font-poppins font-light mb-8 max-w-2xl mx-auto">
              Experience the power of nature with our carefully crafted herbal
              products
            </p>
            <button
              onClick={handleClick}
              className="bg-white text-gray-800 px-8 py-4 font-poppins font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

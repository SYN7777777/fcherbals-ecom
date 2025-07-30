import { Link } from "react-router-dom"; // Correct import for React Router DOM
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-900 to-amber-800 text-green-100 pt-16 pb-8 md:pt-20 md:pb-12 mt-16 md:mt-24 border-t border-green-700 shadow-2xl relative overflow-hidden">
      {/* Background organic shape for modern herbal feel */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-700 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-lime-600 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-emerald-500 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Adjusted padding for smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 md:gap-y-12 md:gap-x-10"> {/* Adjusted gap for better spacing */}
          {/* Brand */}
          <div className="space-y-5 flex flex-col justify-between">
            <div>
              {/* Using Link component for internal navigation */}
              <Link to="/" className="text-3xl sm:text-4xl lg:text-5xl font-playfair-display font-extrabold tracking-wide text-green-50 cursor-pointer hover:text-green-200 transition-colors duration-300">
                FC Herbal
              </Link>
              <p className="text-sm sm:text-base font-inter mt-3 sm:mt-4 max-w-sm leading-relaxed text-green-200 opacity-90">
                Crafted with nature's purest essence. Elevating wellness through authentic herbal products.
              </p>
            </div>
            {/* Newsletter Subscription */}
            <div className="mt-6 sm:mt-8">
              <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 font-inter tracking-wide text-green-50">
                Stay Updated
              </h3>
              <form className="flex flex-col sm:flex-row gap-2"> {/* Changed to flex-col on mobile, row on sm+ */}
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-3 rounded-md sm:rounded-l-md sm:rounded-r-none bg-green-700 border border-green-600 placeholder-green-300 text-green-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-lime-500 text-green-950 font-semibold px-5 py-3 sm:py-0 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-lime-400 transition-colors duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 font-inter tracking-wide text-green-50">
              Explore
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-inter">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Shop Products" },
                { to: "/about", label: "Our Story" },
                { to: "/blog", label: "Herbal Insights" },
                { to: "/faq", label: "FAQ" },
              ].map(({ to, label }) => (
                <li key={to}>
                  {/* Using Link component for internal navigation */}
                  <Link to={to} className="relative inline-block hover:text-lime-300 transition-colors duration-300 group">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 font-inter tracking-wide text-green-50">
              Need Assistance?
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base font-inter max-w-xs text-green-200 opacity-90">
              <li>
                Email:{" "}
                <a
                  href="mailto:fcherbals@gmail.com"
                  className="underline hover:text-lime-300 transition-colors"
                >
                  fcherbals@gmail.com
                </a>
              </li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Coimbatore, Tamil Nadu, India</li>
              <li className="pt-2">
                {/* Using Link component for internal navigation */}
                <Link to="/contact" className="inline-block bg-lime-600 text-green-950 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-lime-500 transition-colors duration-300 transform hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 font-inter tracking-wide text-green-50">
              Join Our Community
            </h3>
            <div className="flex space-x-4 sm:space-x-6 text-green-300 items-center">
              {[
                {
                  icon: <FaInstagram />,
                  href: "https://instagram.com/fcherbals",
                  label: "Instagram",
                },
                {
                  icon: <FaFacebookF />,
                  href: "https://facebook.com/fcherbals",
                  label: "Facebook",
                },
                {
                  icon: <FaTwitter />,
                  href: "https://twitter.com/fcherbals",
                  label: "Twitter",
                },
              ].map(({ icon, href, label }) => (
                // External links still use regular <a> tags
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-2xl sm:text-3xl hover:text-lime-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 border-t border-green-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-green-200 font-inter space-y-3 sm:space-y-0">
          <p className="text-center sm:text-left">
            © {currentYear} FC Herbal Products. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-y-2">
            {/* Using Link component for internal navigation */}
            <Link to="/privacy" className="hover:text-lime-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-lime-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-returns" className="hover:text-lime-300 transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 pt-16 pb-10 mt-20 border-t border-amber-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-playfair font-extrabold tracking-wide">
            FC Herbal
          </h2>
          <p className="text-sm font-poppins max-w-xs leading-relaxed opacity-80">
            Pure. Natural. Handmade. Explore our herbal beauty and wellness range.
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <h3 className="font-semibold text-xl mb-4 font-poppins tracking-wide">
            Shop
          </h3>
          <ul className="space-y-3 text-sm font-poppins">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-4 font-poppins tracking-wide">
            Contact
          </h3>
          <ul className="space-y-2 text-sm font-poppins max-w-xs opacity-90">
            <li>
              Email:{" "}
              <a
                href="mailto:fcherbals@gmail.com"
                className="underline hover:text-amber-400 transition"
              >
                fcherbals@gmail.com
              </a>
            </li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Coimbatore, Tamil Nadu</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-xl mb-4 font-poppins tracking-wide">
            Follow Us
          </h3>
          <div className="flex space-x-6 text-amber-300">
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
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-2xl hover:text-amber-400 transition transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-amber-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-amber-300 font-poppins space-y-3 sm:space-y-0">
        <p>© {new Date().getFullYear()} FC Herbal Products. All rights reserved.</p>
        <div className="space-x-6 flex">
          <a href="/privacy" className="hover:text-amber-400 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-amber-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

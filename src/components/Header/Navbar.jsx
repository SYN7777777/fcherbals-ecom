import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { FcHerbalsLogo } from "./FcHerbalsLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(24px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .backdrop-blur-custom {
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

      <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 bg-white/70 backdrop-blur-custom px-8 py-2 rounded-full shadow-md mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[#4d2600] font-extralight tracking-wide hover:text-[#668950] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Topbar */}
          <div className="md:hidden w-full flex justify-between items-center">
            <FcHerbalsLogo />
            {/* Hamburger icon (shows only when closed) */}
            {!menuOpen && (
              <button
                onClick={() => setMenuOpen(true)}
                className="text-[#637949] focus:outline-none z-60 relative transition-transform duration-200 hover:scale-110 rounded-full p-1"
                aria-label="Open menu"
                style={{
                  background: "rgba(217, 232, 202, 0.7)",
                  boxShadow: "0 2px 8px 0 rgba(163, 191, 108, 0.14)",
                }}
              >
                <MenuIcon className="w-7 h-7" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Backdrop */}
        <div
          className={`md:hidden fixed inset-0 bg-[#7791661a] backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#e3efd8ec] via-[#f3f6e5fa] to-[#fff6e5] backdrop-blur-custom rounded-l-2xl shadow-2xl transform transition-all duration-300 ease-out
            ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          `}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-5 border-b border-[#7a9850]/20">
            <FcHerbalsLogo />
            {/* X icon, only when menuOpen */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#688235] hover:text-[#975e1e] transition-colors duration-200 rounded-full p-1 bg-[#f2f6e6]"
              aria-label="Close menu"
            >
              <XIcon className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col py-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#567242] font-semibold text-lg tracking-wide hover:text-[#a57133] hover:bg-[#e9f8e2] transition-all duration-200 px-8 py-4 border-b border-[#bcd3a5]/40 last:border-b-0 rounded-xl"
                style={{
                  animationDelay: `${index * 0.07 + 0.10}s`,
                  animation: menuOpen ? "slideInRight 0.28s ease-out both" : "none"
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  <svg
                    className="w-5 h-5 opacity-50 transform transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#cabf84]/20">
            <p className="text-[#7a7a5f] text-xs text-center font-light">
              Natural Herbal Care
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

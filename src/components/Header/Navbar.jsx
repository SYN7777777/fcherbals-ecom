import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FcHerbalsLogo } from "./FcHerbalsLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const handleLogoClick = () => {
    // e.g. navigate to homepage
    window.location.href = "/";
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 bg-white/70 backdrop-blur-md px-8 py-2 rounded-full shadow-md mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#4d2600] font-extralight tracking-wide hover:text-[#7a4800] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Topbar */}
        <div className="md:hidden w-full flex justify-between items-center">
          {/* Hamburger/X icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#4d2600] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          {/* Right side Logo */}
         <>
         <FcHerbalsLogo/>
         </>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/90 backdrop-blur-md shadow-lg rounded-b-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#4d2600] font-semibold tracking-wide hover:text-[#7a4800] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

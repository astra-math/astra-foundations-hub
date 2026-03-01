import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Philosophy", to: "/philosophy" },
  { label: "Workshops", to: "/workshops" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

const Header = () => {
  return (
    <header className="bg-navy border-b border-gold/20">
      <div className="container-astra flex items-center justify-between" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Astra Math Circle"
            className="w-auto"
            style={{ height: '50px' }}
          />
          <span className="font-heading font-semibold text-cream text-lg md:text-xl tracking-wide hidden sm:inline">
            Astra Math Circle
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-cream/80 hover:text-gold font-body text-sm tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-cream p-2"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-navy border-b border-gold/20 z-50">
          <nav className="container-astra py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-cream/80 hover:text-gold font-body text-base py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

import { useState } from "react";

export default Header;

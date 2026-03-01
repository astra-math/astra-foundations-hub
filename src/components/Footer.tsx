import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-gold/10 py-16">
      <div className="container-astra">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-heading text-cream text-lg font-semibold mb-3">
              Astra Math Circle
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              A modern Math Circle for ambitious young thinkers.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-cream/70 text-sm font-semibold mb-4 tracking-wide">
              Explore
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Programs", to: "/programs" },
                { label: "Philosophy", to: "/philosophy" },
                { label: "Workshops", to: "/workshops" },
                { label: "About", to: "/about" },
                { label: "FAQ", to: "/faq" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-cream/40 hover:text-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-cream/70 text-sm font-semibold mb-4 tracking-wide">
              Contact
            </h4>
            <p className="text-cream/40 text-sm mb-1">hello@astramathcircle.com</p>
            <p className="text-cream/40 text-sm">India</p>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />
        <p className="text-cream/30 text-xs text-center">
          © Astra Math Circle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

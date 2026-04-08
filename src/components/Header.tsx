import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaFacebook, FaPhone } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-black text-[#FFCC00] sticky top-0 z-50 border-b border-white/5">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logotyp */}
        <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Chiang Mai Thai Kitchen
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-[13px] font-medium uppercase tracking-wider">
          <Link to="/" className="text-white hover:text-[#FFCC00] transition-colors">Hem</Link>
          <Link to="/meny" className="text-white hover:text-[#FFCC00] transition-colors">Meny</Link>
          <a href="tel:042214522" className="flex items-center gap-2 text-white hover:text-[#FFCC00]">
            <FaPhone className="text-xs" /> 042-21 45 22
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091732471946"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FFCC00] text-xl"
            aria-label="Följ oss på Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.foodora.se/restaurant/s5cs/chiang-mai-thai-kitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D70F64] text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#b00d52] transition-all uppercase tracking-wide"
          >
            Beställ från foodora
          </a>
        </nav>

        {/* Burger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {menuOpen ? <FaTimes className="text-[#FFCC00] text-2xl" /> : <FaBars className="text-[#FFCC00] text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden px-4 pb-8 space-y-6 text-center bg-black/95 backdrop-blur-lg border-b border-white/10"
        >
          <nav className="flex flex-col space-y-4 pt-4 text-white uppercase tracking-widest font-medium">
            <Link to="/" className="hover:text-[#FFCC00]">Hem</Link>
            <Link to="/meny" className="hover:text-[#FFCC00]">Meny</Link>
          </nav>
          <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6">
            <a href="tel:042214522" className="flex items-center gap-2 text-white">
              <FaPhone /> 042-21 45 22
            </a>
            <div className="flex gap-6 text-2xl">
              <a href="https://facebook.com..." className="text-white"><FaFacebook /></a>
            </div>
            <a
              href="https://www.foodora.se/restaurant/s5cs/chiang-mai-thai-kitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D70F64] text-white font-bold py-3 px-8 rounded-full hover:bg-[#b00d52] transition-all w-full max-w-xs"
            >
              Beställ från foodora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

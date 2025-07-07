import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaFacebook, FaPhone } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Stäng meny vid sidbyte (t.ex. klick på "Meny")
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Klick utanför stänger menyn
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
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
    <header className="bg-black text-yellow-400 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-5 max-w-15xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Chiang Mai Thai Kitchen
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:text-white">Hem</Link>
          <Link to="/meny" className="hover:text-white">Meny</Link>
          <a href="tel:042214522" className="flex items-center gap-1 hover:text-white">
            <FaPhone /> 042-21 45 22
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091732471946"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-lg"
            aria-label="Följ oss på Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.foodora.se/restaurant/s5cs/chiang-mai-thai-kitchen"
            className="bg-red-600 text-white px-3 py-2 rounded font-semibold text-sm hover:bg-red-700"
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
          {menuOpen ? <FaTimes className="text-yellow-400 text-xl" /> : <FaBars className="text-yellow-400 text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden px-4 pb-6 space-y-4 text-center bg-black bg-opacity-95"
        >
          <nav className="space-y-2 text-lg">
            <Link to="/" className="block">Hem</Link>
            <Link to="/meny" className="block">Meny</Link>
          </nav>
          <div className="flex justify-center items-center gap-2">
            <FaPhone />
            <a href="tel:042214522">042-21 45 22</a>
          </div>
          <div className="flex justify-center gap-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100091732471946"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Följ oss på Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <a
            href="https://www.foodora.se/restaurant/s5cs/chiang-mai-thai-kitchen"
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 inline-block"
          >
            Beställ från foodora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaFacebook, FaPhone } from 'react-icons/fa6';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-yellow-400 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo + Namn */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Chiang Mai Thai Kitchen</span>
        </div>

        {/* Desktop-navigering */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="/" className="hover:text-white">Hem</a>
          <a href="#meny" className="hover:text-white">Meny</a>
          <a href="tel:042214522" className="flex items-center gap-1 hover:text-white">
            <FaPhone /> 042-21 45 22
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091732471946"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-lg"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="bg-red-600 text-white px-3 py-2 rounded font-semibold text-sm hover:bg-red-700"
          >
            Beställ från foodora
          </a>
        </nav>

        {/* Mobil-knapp */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <FaBars className="text-yellow-400 text-xl" />
        </button>
      </div>

      {/* Mobil-meny */}
      {menuOpen && (
        <div className="text-center pb-6 space-y-4 md:hidden">
          <nav className="space-y-2 text-lg">
            <a href="/" className="block">Hem</a>
            <a href="#meny" className="block">Meny</a>
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
            >
              <FaFacebook />
            </a>
          </div>
          <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Beställ från foodora
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

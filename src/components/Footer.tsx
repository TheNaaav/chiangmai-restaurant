import { FaFacebook} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      className="text-white relative py-10 px-4"
      style={{
        backgroundImage: "url('/images/BGMain.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Svart overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Innehållet */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Öppettider */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Öppettider</h3>
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              <p>Måndag: 11–22</p>
              <p>Tisdag: 11–15</p>
              <p>Onsdag: 11–22</p>
              <p>Torsdag: 11–22</p>
              <p>Fredag: 11–22</p>
            </div>
            <div>
              <p>Lördag: 12–22</p>
              <p>Söndag: 12–22</p>
              <p>Helgdagar: 12–22</p>
            </div>
          </div>
        </div>

        {/* Adress */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Adress</h3>
          <p>Bruksgatan 29</p>
          <p>252 24 Helsingborg</p>

          <h3 className="font-semibold text-lg mt-6 mb-2 text-white">Kontakt</h3>
          <p>Telefon: <a href="tel:042214522" className="hover:underline">042-21 45 22</a></p>
        </div>

        {/* Social + Copyright */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Följ oss:</h3>
          <div className="flex gap-4 text-2xl mb-6">
            <a
              href="https://www.facebook.com/profile.php?id=100091732471946"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Följ oss på Facebook"
              title="Följ oss på Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <p className="text-sm text-white/80">
            © 2025{' '}
            <a
              href="https://www.linkedin.com/in/naruebet-singsathon-7b8337158/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made by Navi™
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { FaFacebook} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-12 px-4 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Öppettider */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-yellow-400">Öppettider</h3>
          <div className="grid grid-cols-2 gap-x-6 text-neutral-300 leading-relaxed">
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
          <h3 className="font-semibold text-xl mb-4 text-yellow-400">Hitta Hit</h3>
          <div className="text-neutral-300 leading-relaxed">
            <p>Bruksgatan 29</p>
            <p>252 24 Helsingborg</p>
            <p className="mt-4">
              Telefon:{' '}
              <a href="tel:042214522" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                042-21 45 22
              </a>
            </p>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col md:items-end">
          <h3 className="font-semibold text-xl mb-4 text-yellow-400">Följ oss</h3>
          <div className="flex gap-4 text-2xl mb-6">
            <a
              href="https://www.facebook.com/profile.php?id=100091732471946"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-blue-500 transition-colors duration-300"
              aria-label="Följ oss på Facebook"
              title="Följ oss på Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <p className="text-sm text-neutral-500 mt-auto">
            © {new Date().getFullYear()} Chiang Mai Thai Kitchen.
            <br />
            <a
              href="https://www.linkedin.com/in/naruebet-singsathon-7b8337158/"
              className="hover:text-neutral-300 transition-colors"
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

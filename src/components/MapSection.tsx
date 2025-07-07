import mapImage from '../assets/maps.png'; // Se till att detta är korrekt namn

const MapSection = () => {
  return (
    <section className="bg-black text-white px-4 py-10">
      <h2 className="text-center text-lg sm:text-xl font-semibold text-white mb-6">
        Vi finns på Bruksgatan 29, Helsingborg.
      </h2>

      <div className="max-w-5xl mx-auto">

        <a
          href="https://maps.app.goo.gl/AxDA8vcAaLxRyaBw8"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-4 text-yellow-400 underline hover:text-yellow-300"
        >
                  <img
          src={mapImage}
          alt="Karta till Chiang Mai Thai Kitchen"
          className="w-full rounded-lg shadow-2xl"
          
        />
        </a>

      </div>
    </section>
  );
};

export default MapSection;

const MapSection = () => {
  return (
    <section className="text-neutral-200 px-4 py-16 border-t border-white/5 bg-black/30 backdrop-blur-md">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#FFCC00] mb-4 font-serif drop-shadow-md">
            Hitta till oss
          </h2>
          <p className="text-lg text-neutral-400">
            Vi finns på Bruksgatan 29, Helsingborg. Varmt välkommen!
          </p>
        </div>

        {/* Interaktiv Google Maps iframe */}
        <div className="w-full h-96 sm:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17828.421549850555!2d12.6595062!3d56.0437334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652331b270d2eb9%3A0x8cb2a63b471523e6!2sChiang%20Mai%20Thai%20Kitchen!5e0!3m2!1sen!2sse!4v1775563250349!5m2!1sen!2sse"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta till Chiang Mai Thai Kitchen"
            className="absolute inset-0"
          ></iframe>
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/AxDA8vcAaLxRyaBw8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFCC00] text-black font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:bg-[#e6b800] transform transition hover:scale-105"
          >
            Öppna i Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

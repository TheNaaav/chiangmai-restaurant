const MapSection = () => {
  return (
    <section className="bg-black text-white px-4 py-10">
      <h2 className="text-center text-lg sm:text-xl font-semibold text-white mb-4">
        Vi finns på Bruksgatan 29, Helsingborg.
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="w-full h-[300px] sm:h-[500px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Chiang Mai Thai Kitchen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.5535907721764!2d12.69494847719574!3d56.04371786954601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652331b270d2eb9%3A0x8cb2a63b471523e6!2sChiang%20Mai%20Thai%20Kitchen!5e0!3m2!1sen!2sse!4v1750205183346!5m2!1sen!2sse"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

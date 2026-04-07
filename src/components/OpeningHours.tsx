const OpeningHours = () => {
  const days = [
    { day: "Måndag", time: "11 – 22" },
    { day: "Tisdag", time: "11 – 15" },
    { day: "Onsdag", time: "11 – 22" },
    { day: "Torsdag", time: "11 – 22" },
    { day: "Fredag", time: "11 – 22" },
    { day: "Lördag", time: "12 – 22" },
    { day: "Söndag", time: "12 – 22" },
  ];

  return (
    <section className="py-20 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Glas-boxen */}
      <div className="bg-black/40 backdrop-blur-lg text-neutral-200 p-10 sm:p-16 rounded-[40px] max-w-2xl w-full shadow-2xl border border-white/5 text-center">
        
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4 block font-medium">
          Besök oss på Söder
        </span>
        
        <h2 className="text-4xl sm:text-5xl text-[#FFCC00] font-serif font-bold mb-10 drop-shadow-md">
          Öppettider
        </h2>

        <div className="space-y-3 max-w-sm mx-auto">
          {days.map((item) => (
            <div key={item.day} className="flex justify-between items-center border-b border-white/5 pb-2 transition-colors hover:border-[#FFCC00]/30">
              <span className="font-medium text-neutral-200">{item.day}</span>
              <span className="text-[#FFCC00] font-semibold">{item.time}</span>
            </div>
          ))}
          
          <div className="mt-8 pt-4">
            <p className="text-neutral-200 font-medium italic">Helgdagar: 12 – 22</p>
            <p className="text-neutral-500 mt-2 text-[10px] sm:text-xs uppercase tracking-widest">
              Öppettiderna kan variera vid röda dagar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
  
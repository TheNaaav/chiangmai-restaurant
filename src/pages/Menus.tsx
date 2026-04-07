import meny1 from '../assets/meny1.jpg';
import meny2 from '../assets/meny2.jpg';
import meny3 from '../assets/meny3.jpg';

const Menus = () => {
  const menyBilder = [meny1, meny2, meny3];

  return (
    <div className="text-neutral-200 min-h-screen pt-10">
      {/* Titel */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#FFCC00] drop-shadow-md font-serif">
          Vår Meny
        </h1>
        <p className="mb-4 text-base sm:text-lg text-white">
          Här kommer hela menyn med bilder och priser senare 🥢
        </p>
      </div>

      {/* Menybilder */}
      <div className="flex flex-col items-center gap-6 px-4 pb-12">
        {menyBilder.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Meny ${i + 1}`}
            loading="lazy"
            className="w-full max-w-4xl rounded-2xl shadow-xl border border-white/5"
          />
        ))}
      </div>
    </div>
  );
};

export default Menus;

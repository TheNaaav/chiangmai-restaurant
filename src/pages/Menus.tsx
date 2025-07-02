import meny1 from '../assets/meny1.jpg';
import meny2 from '../assets/meny2.jpg';
import meny3 from '../assets/meny3.jpg';
import bgImage from '../assets/BGMain.png';

const Menus = () => {
  const menyBilder = [meny1, meny2, meny3];

  return (
    <div
      className="text-white min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Titel */}
      <div className="text-center py-10 px-4 bg-black/70">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300 drop-shadow">
          Vår Meny
        </h1>
        <p className="mb-4 text-sm sm:text-base">
          Här kommer hela menyn med bilder och priser senare 🥢
        </p>
      </div>

      {/* Menybilder */}
      <div className="flex flex-col items-center gap-2 px-1 pb-4">
        {menyBilder.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Meny ${i + 1}`}
            className="w-full max-w-4xl rounded-xl shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Menus;

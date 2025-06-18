import meny1 from '../assets/meny1.jpg';
import meny2 from '../assets/meny2.jpg';
import meny3 from '../assets/meny3.jpg';
import bgImage from '../assets/BGMain.png';

const Menus = () => {
  return (
    <div
      className="min-h-screen text-white px-4 py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
        <div className="min-h-screen px-4 py-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300 drop-shadow">Vår Meny</h1>
        <p className="mb-8">Här kommer hela menyn med bilder och priser senare 🥢</p>

        <div className="flex flex-col items-center gap-8">
            <img src={meny1} alt="Meny 1" className="w-full sm:w-[90%] md:w-[70%] max-w-2xl rounded-lg shadow-xl" />
            <img src={meny2} alt="Meny 2" className="w-full sm:w-[90%] md:w-[70%] max-w-2xl rounded-lg shadow-xl" />
            <img src={meny3} alt="Meny 3" className="w-full sm:w-[90%] md:w-[70%] max-w-2xl rounded-lg shadow-xl" />
        </div>
        </div>
    </div>
  );
};

export default Menus;

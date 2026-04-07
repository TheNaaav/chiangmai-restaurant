import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main 
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 overflow-hidden" 
    > 
      {/* Subtil radiell gradient för djup istället för en tung bakgrundsbild (Bättre för prestanda) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#FFCC00]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Den centrala boxen med glaseffekt */}
      <div className="relative z-10 bg-black/40 backdrop-blur-lg p-8 sm:p-16 rounded-[40px] max-w-3xl w-full text-center border border-white/5 shadow-2xl">
        
        <span className="text-xs sm:text-sm mb-4 block text-neutral-300 tracking-[0.3em] uppercase font-medium">
          Välkommen till
        </span>
        
        <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-[#FFCC00] font-serif leading-[1.1] drop-shadow-lg">
          Chiang Mai <br /> Thai Kitchen
        </h1>
        
        <p className="text-base sm:text-lg max-w-lg mb-12 mx-auto text-neutral-200 leading-relaxed font-light">
          Upplev glädjen i thailändska smaker med utsökta rätter och en varm, inbjudande atmosfär mitt i hjärtat av Helsingborg.
        </p>

        {/* Knappar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link 
            to="/meny" 
            className="bg-[#FFCC00] hover:bg-[#e6b800] text-black font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,204,0,0.3)] text-center min-w-[200px]"
          >
            Visa Meny
          </Link>
          <a
            href="https://www.foodora.se/restaurant/s5cs/chiang-mai-thai-kitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D70F64] hover:bg-[#b00d52] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(215,15,100,0.3)] text-center min-w-[200px]"
          >
            Beställ från foodora
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;

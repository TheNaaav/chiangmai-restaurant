const Home = () => {
    return (
      <div>
        <div
          className="bg-cover bg-center  flex flex-col justify-center items-center text-center px-4"
          
        >
            <div className=" mt-10 sm:mt-20 bg-black/60 p-6 rounded-xl max-w-xl w-full text-center text-white shadow-lg">
            <h2 className="text-xl mb-2 drop-shadow-md">Välkommen till</h2>
            <h1 className="text-3xl font-bold font-serif mb-4 text-yellow-300 drop-shadow-lg">
                Chiang Mai Thai Kitchen
            </h1>
            <p className="text-sm sm:text-base max-w-md mb-6 mx-auto drop-shadow-md">
                Upplev glädjen i thailändska smaker med utsökta rätter och en varm, inbjudande atmosfär.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow-md">
                VISA MENY
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md">
                Beställ från foodora
                </button>
            </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  
const OpeningHours = () => {
    return (
      <section className="mt-10 sm:mt-20 flex items-center justify-center px-4 bg-cover bg-center">
        <div className="bg-black/70 text-white p-6 rounded-xl max-w-2xl w-full shadow-lg text-center">
          <h2 className="text-2xl text-yellow-400 font-semibold mb-6 border-b border-yellow-500 inline-block pb-1">
            Öppettider
          </h2>

          <div className="border border-yellow-500 p-4 rounded-md text-left sm:flex sm:justify-between sm:space-x-8 font-poppins">
            <div className="mb-4 sm:mb-0">
              <p>Måndag: 11–22</p>
              <p>Tisdag: 11–22</p>
              <p>Onsdag: 11–22</p>
              <p>Torsdag: 11–22</p>
              <p>Fredag: 11–22</p>
            </div>
            <div>
              <p>Lördag: 12–22</p>
              <p>Söndag: 12–22</p>
              <p>Helgdagar: 12–22</p>
              <p className="text-yellow-400 mt-4 text-sm">
                (Sveriges nationaldag) Öppettiderna kan variera
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OpeningHours;
  
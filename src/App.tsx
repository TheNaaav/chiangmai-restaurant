import bgImage from './assets/BGMain.png';
import Home from './pages/Home';
import Headers from './components/Header';
import OpeningHours from './components/OpeningHours';
import RestaurantGallery from './components/RestaurantGallery';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Headers />
      <Home />
      <OpeningHours />
      <RestaurantGallery />
      {/* Lägg till fler komponenter här */}
    </div>
  );
};

export default App;
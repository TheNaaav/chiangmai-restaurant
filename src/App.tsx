import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bgImage from './assets/BGMain.png';
import Home from './pages/Home';
import Headers from './components/Header';
import OpeningHours from './components/OpeningHours';
import RestaurantGallery from './components/RestaurantGallery';
import Footer from './components/Footer';
import MapSection from './components/MapSection';
import Menus  from './pages/Menus';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <OpeningHours />
              <RestaurantGallery />
              <MapSection />
            </>
          } />
          <Route
            path="/meny"
            element={
              <>
                <Menus />
                <MapSection /> {/* 👈 Lägg till här */}
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Headers from './components/Header';
import OpeningHours from './components/OpeningHours';
import RestaurantGallery from './components/RestaurantGallery';
import Footer from './components/Footer';
import MapSection from './components/MapSection';
import Menus  from './pages/Menus';
import bgImage from './assets/bg.png';

const App = () => {
  return (
      <div 
        className=" bg-blend-overlay bg-cover bg-center md:bg-fixed bg-no-repeat text-neutral-200 font-sans selection:bg-[#FFCC00] selection:text-black"
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
                <MapSection /> 
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
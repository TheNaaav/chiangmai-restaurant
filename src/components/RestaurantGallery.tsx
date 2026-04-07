import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// VIKTIGT: Importera Swiper-stilar
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const RestaurantGallery = () => {
  const images = [
    { src: "/images/1.jpg", alt: "Restaurang miljö 1" },
    { src: "/images/22.jpg", alt: "Restaurang miljö 2" },
    { src: "/images/5.jpg", alt: "Vår goda mat" },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-3 block font-semibold">
          Upplev atmosfären
        </span>
        <h2 className="text-4xl sm:text-6xl text-[#FFCC00] font-serif font-bold drop-shadow-md">
          Restaurangen
        </h2>
      </div>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect={'fade'} // Ger en lyxig cross-fade effekt istället för att bara glida
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="rounded-[40px] shadow-2xl border border-white/10 overflow-hidden h-[400px] sm:h-[600px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* En mjuk toning i botten för att texten/prikarna ska synas bättre */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom CSS för att styla Swiper-knapparna så de matchar din guldgula färg */}
        <style dangerouslySetInnerHTML={{ __html: `
          .swiper-button-next, .swiper-button-prev {
            color: #FFCC00 !important;
            transform: scale(0.7);
            transition: all 0.3s;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            transform: scale(0.9);
          }
          .swiper-pagination-bullet-active {
            background: #FFCC00 !important;
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5);
          }
        `}} />
      </div>
    </section>
  );
};

export default RestaurantGallery;

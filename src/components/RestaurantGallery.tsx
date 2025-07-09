import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const RestaurantGallery = () => {
    return (
      <section className="mt-10 sm:mt-20 bg-black/70 text-white py-10 px-4 text-center">
        <h2 className="text-2xl text-yellow-400 font-semibold mb-6">Restaurangen</h2>
  
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-lg"
          >
            <SwiperSlide>
              <img
                src="/images/1.jpg"
                alt="Bild 1"
                className="w-full h-[500px] object-contain sm:object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/22.jpg"
                alt="Bild 2"
                className="w-full h-[500px] object-contain sm:object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/5.jpg"
                alt="Bild 5"
                className="w-full h-[500px] object-contain sm:object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  };

export default RestaurantGallery;

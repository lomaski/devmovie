import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import Card from '../Card';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MovieSlider({ info, title }) {
  if (!info || info.length === 0) return null;

  return (
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '10px', boxSizing: 'border-box', height: '550px' }}>
      <h2 style={{ color: '#fff', fontSize: '32px', margin: '30px 0 20px' }}>{title}</h2>
      
      <Swiper
        modules={[Navigation]}
        grabCursor={true}          
        spaceBetween={10}         
        slidesPerView={'auto'}    
        className="swipe"
        navigation
      >
        {info.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: 'auto' }}> 
            <Card info={movie} /> 
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import Card from '../Card';
import { Container } from '../Slider/styled.js';

import 'swiper/css';
import 'swiper/css/navigation';

export default function MovieSlider({ info, title }) {

  return (
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '10px', boxSizing: 'border-box', height: '550px' }}>
      {/* Adicionada cor branca e margem para alinhar com o padrão de streaming */}
      <h2 style={{ color: '#fff', fontSize: '32px', margin: '30px 0 20px' }}>{title}</h2>
      
      <Swiper
        modules={[Navigation]}
        grabCursor={true}          
        spaceBetween={10}         
        slidesPerView={'auto'}    
        className="swipe"
      >
        {info?.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: '240px' }}> 
            <Card info={movie} /> 
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

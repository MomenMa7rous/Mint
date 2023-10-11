import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import Container from '../utils/Container';

// Partners Images
import partner01 from '../../assets/partner01.svg'
import partner02 from '../../assets/partner02.svg'
import partner03 from '../../assets/partner03.svg'
import partner04 from '../../assets/partner04.svg'
import partner05 from '../../assets/partner05.svg'
import partner06 from '../../assets/partner06.svg'

const Clients = () => {
  return (
    <section>
      <Container>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={
            +window.innerWidth >= 0 && +window.innerWidth < 640
            ? 2
            : +window.innerWidth >= 640 && +window.innerWidth < 768
            ? 3
            : +window.innerWidth >= 768
            ? 4
            : 4
          }
          autoplay
          pagination={{ clickable: true }}
          className="cursor-grab"
        >
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner01} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner02} alt="Partner" className='mx-auto' />
          </SwiperSlide >
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner03} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner04} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner05} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner06} alt="Partner" className='mx-auto' />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}

export default Clients
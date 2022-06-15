import { useState, useEffect } from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/Testimonials.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState();

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`/bookings/reviews/`);
      setTestimonials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className='testimonial section'>
      <span className='section__subtitle'>Nuestros clientes</span>
      <h2 className='section__title'>Testimonios</h2>

      <div className='testimonial__container container'>
        <Swiper
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          {testimonials?.map(
            (testimonial, i) =>
              testimonial?.review && (
                <SwiperSlide key={i}>
                  <div className='testimonial__card'>
                    {!testimonial?.customer?.firstName ||
                    !testimonial?.customer?.lastName ? null : (
                      <img
                        src={testimonial?.customer?.img}
                        alt='img'
                        className='testimonial__img'
                      />
                    )}

                    <h3 className='testimonial__name'>
                      {' '}
                      {testimonial?.customer?.firstName
                        ? `${testimonial?.customer?.firstName} ${testimonial?.customer?.lastName}`
                        : 'Anonimo'}
                    </h3>
                    <p className='testimonial__description'>
                      {testimonial?.review}
                    </p>
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial1 from '../../assets/testimonial1.png';
// import Testimonial2 from "../../assets/testimonial2.png";
// import Testimonial3 from "../../assets/testimonial3.png";
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/Testimonials.css';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Testimonials() {
  const { testimonials } = useSelector((state) => state.testimonials);


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
          {testimonials?.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className='testimonial__card'>
                <img
                  src={testimonial?.customer?.img}
                  alt='img'
                  className='testimonial__img'
                />

                <h3 className='testimonial__name'>
                  {testimonial?.customer?.first_name +
                    ' ' +
                    testimonial?.customer?.last_name}
                </h3>
                <p className='testimonial__description'>
                  {testimonial?.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <div className="testimonial__card">
              <img src={Testimonial1} alt="img" className="testimonial__img" />

              <h3 className="testimonial__name">Santiago Rossi</h3>
              <p className="testimonial__description">
                Trabajamos con Carry hace un año, nos sentimos satisfechos con
                su servicio además cuentan con vehiculos de alta gama.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial__card">
              <img src={Testimonial2} alt="img" className="testimonial__img" />

              <h3 className="testimonial__name">Paula Green</h3>
              <p className="testimonial__description">
                Alquilamos un Spark GT para visitar Córdoba y todo fue
                espectacular. Hasta pudimos dejar el auto en el aeropuerto.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial__card">
              <img src={Testimonial3} alt="img" className="testimonial__img" />

              <h3 className="testimonial__name">Sara Morelli</h3>
              <p className="testimonial__description">
                Empresa recomenda al 100% la transaccion fue rapida y sin
                contratiempos, el vehiculo en excelentes condiciones.
              </p>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

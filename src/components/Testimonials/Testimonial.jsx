import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'Exceptional service and unparalleled expertise! The team went above and beyond to meet our needs and deliver outstanding results. Highly recommend their work.',
    },
    {
      img: profilePic2,
      review:
        'A fantastic experience from start to finish! Their attention to detail and dedication to quality made all the difference in achieving our goals.',
    },
    {
      img: profilePic3,
      review:
        'Truly a pleasure to work with. Their innovative approach and commitment to excellence set them apart from the competition.',
    },
    {
      img: profilePic4,
      review:
        'Professional, reliable, and results-driven. They consistently exceed expectations and deliver value with every project. We couldn’t be happier with the outcome.',
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

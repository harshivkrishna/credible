import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Kavish & Purvi',
    message: `It was the best decision of our lives to choose you for our best day.
              The journey with you guys was pretty seamless. We didn’t have to explain 
              much how we wanted our story to be told. You had put it up in a way that 
              even we couldn’t have imagined. Every now and then we revisit the photographs 
              and videos. And it feels refreshing and evergreen at any given point of time. 
              For all the coming best days, we only have you guys in mind and wouldn’t have it any other way.`,
    image: '/assets/slider/bg1.avif',
  },
  {
    name: 'Kavish & Purvi',
    message: `It was the best decision of our lives to choose you for our best day.
              The journey with you guys was pretty seamless. We didn’t have to explain 
              much how we wanted our story to be told. You had put it up in a way that 
              even we couldn’t have imagined. Every now and then we revisit the photographs 
              and videos. And it feels refreshing and evergreen at any given point of time. 
              For all the coming best days, we only have you guys in mind and wouldn’t have it any other way.`,
    image: '/assets/slider/bg1.avif',
  },
  {
    name: 'Kavish & Purvi',
    message: `It was the best decision of our lives to choose you for our best day.
              The journey with you guys was pretty seamless. We didn’t have to explain 
              much how we wanted our story to be told. You had put it up in a way that 
              even we couldn’t have imagined. Every now and then we revisit the photographs 
              and videos. And it feels refreshing and evergreen at any given point of time. 
              For all the coming best days, we only have you guys in mind and wouldn’t have it any other way.`,
    image: '/assets/slider/bg1.avif',
  },
  // Add more testimonials here if needed
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      navigation
      pagination={{ clickable: true }}
      className="swiper"
      autoplay={true}
      delay={4000}
      loop={true}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="slide">
          <div
            className="image"
            style={{ backgroundImage: `url(${testimonial.image})` }}
          />
          <div className="overlay">
            <h1 className="title">{testimonial.name}</h1>
            <p className="message">{testimonial.message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;

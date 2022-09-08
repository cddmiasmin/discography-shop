import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './styles/promotionalBanner.css'

import './../data/dataPromotionalBanner'

import { Autoplay, Pagination } from "swiper";

const PromotionalBanner = () => {
  return (
    <div className='promotional-banner 
                    container-fluid' >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="MySwiper"
      >

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/97fccf01-17c2-4c53-9fe8-44f432d80c15.__CR0,0,970,600_PT0_SX970_V1___.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="https://images5.alphacoders.com/340/340432.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="https://images5.alphacoders.com/576/576939.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PromotionalBanner